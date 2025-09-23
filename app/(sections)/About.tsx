export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)] grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div>
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-3 text-neutral-400 max-w-prose">
            I&apos;m a full‑stack developer who enjoys building practical
            products with modern tools, clean code, and a bias for action.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Auth",
              "REST",
              "Testing",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-sm text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-950/40">
          <h3 className="font-semibold">Soft Skills</h3>
          <ul className="mt-3 grid gap-2 text-neutral-300 text-sm list-disc pl-5">
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Ownership</li>
            <li>Team Collaboration</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
