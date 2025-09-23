type Item = {
  title: string;
  org: string;
  period: string;
  details: string;
};

const experience: Item[] = [
  {
    title: "Full-Stack Developer",
    org: "Company A",
    period: "2023 — Present",
    details: "Built and maintained web apps with Next.js and Node.js.",
  },
  {
    title: "Software Engineer",
    org: "Company B",
    period: "2021 — 2023",
    details:
      "Delivered features, improved performance, collaborated across teams.",
  },
];

const education: Item[] = [
  {
    title: "B.S. in Computer Science",
    org: "University X",
    period: "2017 — 2021",
    details: "Focused on software engineering and data analysis.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)] grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Experience</h2>
          <ul className="mt-4 space-y-6">
            {experience.map((e) => (
              <li key={e.title} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-400" />
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
          <h2 className="text-2xl font-bold">Education</h2>
          <ul className="mt-4 space-y-6">
            {education.map((e) => (
              <li key={e.title} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-400" />
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
