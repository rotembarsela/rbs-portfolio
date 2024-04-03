import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import SunLogo from "@/assets/sun-logo.svg?react";
import MoonLogo from "@/assets/moon-logo.svg?react";

export const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "true";
    setDarkMode(isDarkMode);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", String(darkMode));
  }, [darkMode, loading]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  if (loading) {
    return null;
  }

  return (
    <Button
      type="button"
      title="DarkMode Toggle"
      onClick={toggleDarkMode}
      role="switch"
    >
      {darkMode ? <Logo svgIcon={SunLogo} /> : <Logo svgIcon={MoonLogo} />}
    </Button>
  );
};
