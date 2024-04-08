import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
  component: Index,
});

function Index() {
  return (
    <div className="page-container py-10 w-full flex flex-col gap-12">
      <h1 className="text-5xl font-bold leading-relaxed">Rotem Bar-Sela</h1>
      <p className="text-lg font-normal text-gray-500 whitespace-pre-line">
        Crafting digital solutions from front-end finesse to back-end
        brilliance. Two years of full-stack expertise distilled into pixels and
        code.
      </p>
    </div>
  );
}
