"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      <span className="inline-block h-3 w-3 rounded-full bg-neutral-900 dark:bg-neutral-100" />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
