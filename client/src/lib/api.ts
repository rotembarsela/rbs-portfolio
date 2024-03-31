import { Product } from "./types";

const SERVER_URL = "http://localhost:5000/api";

export type Fetch = typeof fetch;

export class MockApiAdapter {
  constructor(
    private fetch: Fetch,
    private token: string | undefined,
    private delay: (ms: number) => Promise<void> = delay,
  ) {}

  async getProjects(): Promise<string[]> {
    const headers: HeadersInit = {
      "User-Agent": "RBS Portfolio",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return Promise.race([
      this.delay(4000).then(() => ({ response: "timeout" })),
      this.fetch(`${SERVER_URL}/projects`, {
        headers,
      }).then((res) => res.json()),
    ]);
  }
}

export class GithubApiAdapter {
  private baseUrl: string;

  constructor(
    private owner: string,
    private repo: string,
  ) {
    this.baseUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents`;
  }

  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${this.baseUrl}/products.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = (await response.json()) as Product[];

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
  }

  async getProductById(productId: number): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/products/${productId}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    const product = await response.json();

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    };
  }
}
