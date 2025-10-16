"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/5"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto w-[min(1200px,92%)] py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
        >
          SM
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#projects"
            className="text-neutral-300 hover:text-white font-medium relative group transition-colors"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/about"
            className="text-neutral-300 hover:text-white font-medium relative group transition-colors"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/blog"
            className="text-neutral-300 hover:text-white font-medium relative group transition-colors"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
        md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 border-t border-purple-500/20" : "max-h-0"}
      `}
      >
        <div className="mx-auto w-[min(1200px,92%)] py-6 flex flex-col gap-4 bg-black/40 backdrop-blur-lg">
          <Link
            href="/#projects"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-white font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-white font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-neutral-300 hover:text-white font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
