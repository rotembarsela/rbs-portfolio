import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/projects")({
  component: Projects,
});

function Projects() {
  return <div className="page-container py-10">Hello from Projects!</div>;
}
