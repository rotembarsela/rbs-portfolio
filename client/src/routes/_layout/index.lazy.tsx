import { Badge } from "@/components/ui/Badge";
import { createLazyFileRoute } from "@tanstack/react-router";
import LocationIcon from "@/assets/location-logo.svg?react";

export const Route = createLazyFileRoute("/_layout/")({
  component: Index,
});

function Index() {
  return (
    <div className="container mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900">
          Hi, I'm Rotem
        </h1>
        <p className="text-lg font-normal text-gray-500 whitespace-pre-line">
          Crafting digital solutions from front-end finesse to back-end
          brilliance.
          <br />
          Two years of full-stack expertise distilled into pixels and code.
        </p>
      </div>
      <div>
        <Badge
          value="Rishon LeTzion, Israel"
          svgIcon={LocationIcon}
          className="stroke-neutral-950 dark:stroke-white"
        />
      </div>
    </div>
  );
}
