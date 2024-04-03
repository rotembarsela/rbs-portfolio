import { cn } from "@/lib/utils";
import { FunctionComponent, SVGProps } from "react";

export type LogoProps = {
  svgIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
} & SVGProps<SVGSVGElement>;

export const Logo = ({ svgIcon: SvgIcon, ...props }: LogoProps) => {
  const { className } = props;

  const defaultClassNames = "w-7 h-7 cursor-pointer";

  return <SvgIcon {...props} className={cn(defaultClassNames, className)} />;
};
