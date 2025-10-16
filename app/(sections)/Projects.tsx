import Project3DCard from "../components/Project3DCard";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  color: string;
};

const projects: Project[] = [
  {
    title: "Goodwood Community Centre",
    description:
      "Full‑stack platform for events, bookings, and memberships with Stripe and auth.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    live: "#",
    repo: "#",
    color: "#8b5cf6",
  },
  {
    title: "NRN Hub",
    description:
      "Clean portal with calendar, news, tools. Edge caching and server actions.",
    tech: ["Next.js", "Edge", "Server Actions"],
    live: "#",
    repo: "#",
    color: "#06b6d4",
  },
  {
    title: "Portfolio Starter",
    description: "This website with minimal, fast, maintainable foundations.",
    tech: ["React", "Next.js", "SEO"],
    live: "#",
    repo: "#",
    color: "#a855f7",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16">
      {/* Section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent -z-10" />

      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-neutral-800/50 bg-neutral-950/40 backdrop-blur overflow-hidden flex flex-col hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* 3D Card Preview */}
              <div className="relative">
                <Project3DCard color={p.color} height={200} />
              </div>

              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-neutral-300 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 hover:border-purple-500/50 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 flex gap-3">
                {p.live && (
                  <a
                    className="flex-1 text-center px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                    href={p.live}
                  >
                    Live Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    className="flex-1 text-center px-4 py-2 text-sm rounded-lg border border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
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
