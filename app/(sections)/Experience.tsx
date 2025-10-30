type Item = {
  title: string;
  org: string;
  period: string;
  details: string;
};

const experience: Item[] = [
  {
    title: "Full-Stack Developer",
    org: "Goodwood Community Centre",
    period: "Sep 2024 — June 2025",
    details: "Built and maintained web apps with Next.js and Node.js.",
  },
  {
    title: "Python Developer (internship)",
    org: "The Perfect Resume",
    period: "March 2024 — July 2024",
    details:
      "Developed a Python-based resume builder and parser using Flask and OCR technology.",
  },
];

const education: Item[] = [
  {
    title: "Bachelor in Information Technology",
    org: "Kings Own University",
    period: "2022 — 2025",
    details: "Focused on software engineering and data analysis.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5 -z-10" />
      <div className="mx-auto w-[min(1100px,92%)] grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <ul className="mt-6 space-y-8">
            {experience.map((e) => (
              <li key={e.title} className="relative pl-8 group">
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-sm text-neutral-400">{e.period}</div>
                <div className="font-semibold">
                  {e.title} · {e.org}
                </div>
                <p className="text-neutral-400 text-sm mt-1">{e.details}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <ul className="mt-6 space-y-8">
            {education.map((e) => (
              <li key={e.title} className="relative pl-8 group">
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-sm text-neutral-400">{e.period}</div>
                <div className="font-semibold">
                  {e.title} · {e.org}
                </div>
                <p className="text-neutral-400 text-sm mt-1">{e.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
