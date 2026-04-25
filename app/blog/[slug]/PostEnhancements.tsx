"use client";

import { useEffect, useState } from "react";

type PostEnhancementsProps = {
  headings: { id: string; text: string }[];
};

export default function PostEnhancements({ headings }: PostEnhancementsProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const next = maxScroll <= 0 ? 0 : Math.min((doc.scrollTop / maxScroll) * 100, 100);
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-900/40">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {headings.length > 0 && (
        <aside className="hidden xl:block fixed right-6 top-28 w-64 rounded-xl border border-purple-500/30 bg-neutral-950/70 backdrop-blur p-4">
          <p className="text-sm font-semibold text-neutral-200 mb-3">On this page</p>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a className="text-neutral-400 hover:text-cyan-300 transition" href={`#${heading.id}`}>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
