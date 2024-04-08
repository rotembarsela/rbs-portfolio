import { useEffect, useState } from "react";
import { Input } from "./ui/Input";

export const ThemeToggle = () => {
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

  if (loading) return null;

  return (
    <label
      htmlFor="darkMode"
      className="relative block h-8 w-14 cursor-pointer rounded-full bg-obsidian transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-white focus-within:outline focus-within:outline-2 focus-within:outline-offset-2"
    >
      <Input
        type="checkbox"
        id="darkMode"
        className="peer sr-only"
        role="switch"
        onChange={toggleDarkMode}
        title="DarkMode Toggle"
        checked={darkMode}
      />
      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6 dark:bg-obsidian"></span>
    </label>
  );
};
