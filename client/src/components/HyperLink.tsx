import { RT } from "@/lib/types";
import { Link, LinkOptions } from "@tanstack/react-router";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type HyperLinkProps = {
  classNames: string;
  activeLinkClassNames: string;
} & PropsWithChildren;

export const HyperLink = <TTo extends string = "">({
  classNames,
  activeLinkClassNames,
  ...props
}: LinkOptions<RT, "/", TTo> & HyperLinkProps) => {
  const defaultClassNames = "";
  return (
    <Link
      {...props}
      className={clsx(defaultClassNames, classNames)}
      activeProps={{
        className: activeLinkClassNames,
      }}
    />
  );
};
