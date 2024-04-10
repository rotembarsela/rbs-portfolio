import { AnchorHTMLAttributes, PropsWithChildren } from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren;

export const Anchor = ({ ...props }: AnchorProps) => {
  return <a target="_blank" rel="noreferrer" {...props} />;
};
