import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <main className="flex h-full min-h-screen font-mono bg-slate-200 text-neutral-900">
      <div className="w-1/3 min-h-full bg-slate-200">
        <Sidebar />
      </div>
      <div className="w-full min-h-full bg-white m-3 rounded-xl">
        <Outlet />
      </div>
    </main>
  );
}
