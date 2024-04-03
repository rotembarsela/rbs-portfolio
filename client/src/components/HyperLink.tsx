import { RT } from "@/lib/types";
import { Link, LinkOptions } from "@tanstack/react-router";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type HyperLinkProps = {
  className: string;
} & PropsWithChildren;

export const HyperLink = <TTo extends string = "">({
  className,
  ...props
}: LinkOptions<RT, "/", TTo> & HyperLinkProps) => {
  const defaultClassNames = "";
  return (
    <Link
      {...props}
      className={clsx(defaultClassNames, className)}
      activeProps={{
        className: "font-bold",
      }}
    />
  );
};
