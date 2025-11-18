import { useEffect, useState } from "react";

export default function useTheme() {
  const getSystemTheme = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    return getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const systemChange = () => {
      const systemTheme = mq.matches ? "dark" : "light";
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(systemTheme);
    };

    mq.addEventListener("change", systemChange);
    return () => mq.removeEventListener("change", systemChange);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
