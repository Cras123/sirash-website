"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-[min(1100px,92%)] py-3 flex items-center justify-between">
        <Link
          href="#"
          className="font-extrabold tracking-tight hover:opacity-80 transition"
        >
          Sirash Maharjan
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#projects"
            className="opacity-90 hover:opacity-100 transition"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="opacity-90 hover:opacity-100 transition"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="opacity-90 hover:opacity-100 transition"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="opacity-90 hover:opacity-100 transition"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-sm"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-[min(1100px,92%)] py-3 flex flex-col gap-2">
            <Link href="#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#experience" onClick={() => setOpen(false)}>
              Experience
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
