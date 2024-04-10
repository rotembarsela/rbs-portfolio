import { getYear } from "date-fns";
import { Anchor } from "./ui/Anchor";

export const Footer = () => {
  const currentYear = getYear(new Date());

  return (
    <footer className="sr-only">
      <Anchor href="https://www.linkedin.com/in/rotembarsela/">
        RBS. &copy; {currentYear}
      </Anchor>
    </footer>
  );
};
