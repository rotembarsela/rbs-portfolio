import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <main className="flex h-full min-h-screen font-mono bg-custom-white text-neutral-900 dark:bg-custom-dark dark:text-slate-200">
      <div className="w-1/3 min-h-full bg-transparent border-r-2 border-r-neutral-300/70">
        <Sidebar />
      </div>
      <div className="w-full min-h-full m-3 rounded-xl">
        <Outlet />
      </div>
    </main>
  );
}
