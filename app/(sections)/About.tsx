import WaveBackground from "../components/WaveBackground";

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <WaveBackground />
      <div className="mx-auto w-[min(1100px,92%)] grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
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
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-purple-500/30 p-5 bg-neutral-950/60 backdrop-blur hover:border-purple-500/50 transition-all duration-300">
          <h3 className="font-bold text-lg bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Soft Skills
          </h3>
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
