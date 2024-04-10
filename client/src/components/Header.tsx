import { data } from "@/lib/data";
import { HyperLink } from "./HyperLink";
import { NavigationLinks } from "./NavigationLinks";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header>
      <div className="page-container py-3">
        <nav
          id="main-nav"
          className="flex items-center justify-between"
          aria-label="Main"
        >
          <HyperLink
            to="/"
            activeLinkClassNames=""
            classNames="bg-brand-logo bg-no-repeat bg-contain bg-center w-16 h-12 ir"
          >
            rbs.
          </HyperLink>
          <NavigationLinks links={data.navigationLinks} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
