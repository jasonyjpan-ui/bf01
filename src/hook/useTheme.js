import { useEffect, useState } from "react";

const getPreferredTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function useTheme(initialTheme = null) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (!prev) return "light";
      return prev === "dark" ? "light" : "dark";
    });
  };

  return { theme, toggleTheme };
}
