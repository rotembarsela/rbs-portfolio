import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/projects")({
  component: () => <div>Hello /_layout/projects!</div>,
});
