import { HTMLAttributes, PropsWithChildren } from "react";
import { Logo } from "./Logo";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { SvgIcon } from "@/lib/types";

type BadgeVariant = "success" | "error" | "warning" | "info";

type BadgeVariantsProps = {
  variant?: BadgeVariant;
  svgIcon?: SvgIcon;
};

type BadgeProps = BadgeVariantsProps &
  PropsWithChildren &
  HTMLAttributes<HTMLSpanElement>;

export const Badge = ({
  children,
  variant = "success",
  className,
  svgIcon,
  ...props
}: BadgeProps) => {
  return (
    <span className={cn(badgeVariants(variant)(), className)} {...props}>
      {svgIcon ? (
        <Logo svgIcon={svgIcon} className="cursor-default select-none" />
      ) : null}
      <p className="whitespace-nowrap text-sm">{children}</p>
    </span>
  );
};

const badgeVariants = (defaultVariant: BadgeVariant) =>
  cva(
    "inline-flex items-center justify-center px-2.5 py-2 text-sm rounded-full",
    {
      variants: {
        variant: {
          success:
            "bg-emerald-100 text-emerald-700 text-obsidian fill-obsidian stroke-obsidian",
          error: "bg-red-100 text-red-700",
          warning: "bg-ember-100 text-ember-700",
          info: "bg-indigo-100 text-indigo-700",
        },
      },
      defaultVariants: {
        variant: defaultVariant,
      },
    },
  );
