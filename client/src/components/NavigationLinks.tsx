import { TanstackLink } from "@/lib/types";
import { RouteAnchor } from "./RouteAnchor";

type NavigationLinksProps = {
  links: TanstackLink[];
};

export const NavigationLinks = ({ links }: NavigationLinksProps) => {
  return (
    <ul className="flex items-center gap-7">
      {links.map((link) => (
        <li key={link.title}>
          <NavigationLink link={link} />
        </li>
      ))}
    </ul>
  );
};

type NavigationLinkProps = {
  link: TanstackLink;
};

const NavigationLink = ({ link: linkUrl }: NavigationLinkProps) => {
  const { link, title } = linkUrl;

  return (
    <RouteAnchor
      to={link}
      classNames="block w-full h-full px-3 py-2 text-left rounded-xl"
      activeLinkClassNames="font-bold bg-neutral-300/70"
    >
      {title}
    </RouteAnchor>
  );
};
