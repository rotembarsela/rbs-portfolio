import { TanstackLink } from "@/lib/types";
import { HyperLink } from "./HyperLink";

type SideBarLinksProps = {
  links: TanstackLink[];
};

export const SideBarLinks = ({ links }: SideBarLinksProps) => {
  return (
    <ul className="w-full flex flex-col gap-7">
      {links.map((link) => (
        <li key={link.title}>
          <SideBarLinkItem link={link} />
        </li>
      ))}
    </ul>
  );
};

type SideBarLinkItemProps = {
  link: TanstackLink;
};

const SideBarLinkItem = ({ link: linkUrl }: SideBarLinkItemProps) => {
  const { link, title } = linkUrl;

  return (
    <HyperLink
      to={link}
      classNames="block w-full h-full px-3 py-2 text-left rounded-xl"
      activeLinkClassNames="font-bold bg-neutral-300/70"
    >
      {title}
    </HyperLink>
  );
};
