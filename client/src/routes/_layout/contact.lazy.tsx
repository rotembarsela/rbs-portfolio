import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/contact")({
  component: Contact,
});

function Contact() {
  return <div className="page-container py-10">Hello from Contact!</div>;
}
