import { SvgIcon } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export type LogoProps = {
  svgIcon: SvgIcon;
} & SVGProps<SVGSVGElement>;

export const Logo = ({ svgIcon: SvgIcon, className, ...props }: LogoProps) => {
  const defaultClassNames = "w-7 h-7 cursor-pointer";

  return <SvgIcon className={cn(defaultClassNames, className)} {...props} />;
};
