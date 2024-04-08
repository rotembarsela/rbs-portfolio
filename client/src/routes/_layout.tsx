import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex-auto flex flex-col font-mono text-obsidian bg-white dark:text-white dark:bg-obsidian">
      <Header />
      <main role="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
