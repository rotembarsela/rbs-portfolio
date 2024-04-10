import { data } from "@/lib/data";
import { NavigationLinks } from "./NavigationLinks";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { RouteAnchor } from "./RouteAnchor";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hiddenNav, setHiddenNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHiddenNav(true);
    } else {
      setHiddenNav(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hiddenNav ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 bg-white dark:bg-obsidian"
    >
      <div className="page-container py-3">
        <nav
          id="main-nav"
          className="flex items-center justify-between"
          aria-label="Main"
        >
          <RouteAnchor
            to="/"
            activeLinkClassNames=""
            classNames="font-anton text-5xl"
          >
            rbs.
          </RouteAnchor>
          <NavigationLinks links={data.navigationLinks} />
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
};
