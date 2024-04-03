import { RegisteredRouter, RoutePaths } from "@tanstack/react-router";

export type RT = RegisteredRouter["routeTree"];

export interface TanstackLink {
  link: RoutePaths<RT>;
  title: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}
