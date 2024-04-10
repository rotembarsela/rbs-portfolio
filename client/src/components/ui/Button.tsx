import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

type ButtonVariantsProps = {
  variant?: ButtonVariant;
};

type ButtonProps = ButtonVariantsProps &
  PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants(variant)(), className)} {...props} />
  );
};

const buttonVariants = (defaultVariant: ButtonVariant) =>
  cva(
    "inline-block rounded px-12 py-3 text-sm font-medium border focus:outline-none focus:ring focus:ring-obsidian",
    {
      variants: {
        variant: {
          primary:
            "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white active:bg-indigo-500",
          secondary:
            "border-red-500 text-red-600 hover:bg-red-600 hover:text-white active:bg-red-500",
          success:
            "border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white active:bg-emerald-500",
          error: "",
          warning: "",
          info: "",
        },
      },
      defaultVariants: {
        variant: defaultVariant,
      },
    },
  );
