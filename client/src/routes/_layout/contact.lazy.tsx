import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/contact")({
  component: () => <div>Hello /_layout/contact!</div>,
});
