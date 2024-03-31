import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <main>
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  );
}
