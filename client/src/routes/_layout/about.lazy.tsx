import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/about")({
  component: About,
});

function About() {
  return <div className="page-container py-10">Hello from About!</div>;
}
