import { PropsWithChildren } from "react";

type SectionLayoutProps = PropsWithChildren;

export const SectionLayout = ({ children }: SectionLayoutProps) => {
  return <div className="w-full mx-auto grid">{children}</div>;
};
