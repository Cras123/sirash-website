type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Goodwood Community Centre",
    description:
      "Full‑stack platform for events, bookings, and memberships with Stripe and auth.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    live: "#",
    repo: "#",
  },
  {
    title: "NRN Hub",
    description:
      "Clean portal with calendar, news, tools. Edge caching and server actions.",
    tech: ["Next.js", "Edge", "Server Actions"],
    live: "#",
    repo: "#",
  },
  {
    title: "Portfolio Starter",
    description: "This website with minimal, fast, maintainable foundations.",
    tech: ["React", "Next.js", "SEO"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/40 overflow-hidden flex flex-col"
            >
              <div className="p-4 flex-1">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-neutral-300 rounded-full border border-neutral-800 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 flex gap-2">
                {p.live && (
                  <a
                    className="px-3 py-1.5 text-sm rounded-lg bg-blue-400 text-black font-medium hover:opacity-90 transition"
                    href={p.live}
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    className="px-3 py-1.5 text-sm rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
                    href={p.repo}
                  >
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
