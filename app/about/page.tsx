import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveBackground from "../components/InteractiveBackground";
import WaveBackground from "../components/WaveBackground";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Sirash Maharjan - Full-Stack Developer, Web3 Enthusiast, and Data Analyst",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <Navbar />

      <section className="relative py-20">
        <WaveBackground />
        <div className="mx-auto w-[min(1100px,92%)]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>

          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  I&apos;m a gonna be the king of developer who enjoys building
                  practical products with modern tools, clean code, and a bias
                  for action.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  My background spans web apps, dashboards, and integrations. I
                  believe in writing maintainable code, shipping fast, and
                  iterating based on feedback. Outside of work, you&apos;ll find
                  me learning new technologies, lifting weights, and exploring
                  innovative ideas in Web3 and data analytics.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "PostgreSQL",
                    "MongoDB",
                    "Auth",
                    "REST APIs",
                    "Testing",
                    "Git",
                    "Docker",
                    "CI/CD",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-sm text-purple-200 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer text-center"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  What I Do
                </h2>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>
                      Build full-stack web applications with modern frameworks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      Design and implement RESTful APIs and microservices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>
                      Integrate payment systems, authentication, and third-party
                      services
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Optimize performance and ensure scalability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>
                      Collaborate with teams using agile methodologies
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-purple-500/30 p-6 bg-neutral-950/60 backdrop-blur hover:border-purple-500/50 transition-all duration-300">
                <h3 className="font-bold text-lg bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                  Soft Skills
                </h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Adaptability
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-cyan-500/30 p-6 bg-neutral-950/60 backdrop-blur hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h3>

                {/* Primary Contact Button */}
                <Link
                  href="/#contact"
                  className="mb-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Link>

                <p className="text-xs text-neutral-500 mb-4 text-center">
                  or connect via
                </p>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/Cras123"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
                    >
                      <span>→</span> GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sirash-maharjan-6b753a251/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
                    >
                      <span>→</span> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:maharjansirash1@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
                    >
                      <span>→</span> maharjansirash1@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pdf/Sirash-Maharjan-Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
                    >
                      <span>→</span> Resume (PDF)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
