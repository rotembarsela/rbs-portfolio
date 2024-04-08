import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = {
  variant: "success" | "error" | "warning" | "info";
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, ...props }: ButtonProps) => {
  console.log(variant);
  const defaultClassNames =
    "inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500";

  return <button className={defaultClassNames} {...props} />;
};
