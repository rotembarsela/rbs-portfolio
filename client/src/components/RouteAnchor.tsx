import { RT } from "@/lib/types";
import { Link, LinkOptions } from "@tanstack/react-router";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type RouteAnchorProps = {
  classNames: string;
  activeLinkClassNames: string;
} & PropsWithChildren;

export const RouteAnchor = <TTo extends string = "">({
  classNames,
  activeLinkClassNames,
  ...props
}: LinkOptions<RT, "/", TTo> & RouteAnchorProps) => {
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
