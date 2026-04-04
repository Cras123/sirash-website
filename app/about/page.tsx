import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveBackground from "../components/InteractiveBackground";
import WaveBackground from "../components/WaveBackground";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Sirash Maharjan - IT Support Specialist, MSP Technician, and Aspiring Full-Stack Developer",
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
                  I&apos;m an IT support specialist who genuinely loves
                  technology — from diagnosing network faults and wrangling
                  Active Directory environments to building full-stack web apps
                  in my spare time.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Currently working at a Managed Service Provider, I support
                  businesses with their day-to-day IT needs — Microsoft 365,
                  Azure AD, Hyper-V, and everything in between. I believe in
                  solving problems properly, documenting everything, and never
                  stopping learning. Outside of work, you&apos;ll find me
                  building web projects, lifting weights, and exploring new
                  technologies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
                <p className="text-sm text-neutral-500 mb-3">
                  IT Support &amp; Infrastructure
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                  {[
                    "Windows Server",
                    "Active Directory",
                    "Microsoft 365",
                    "Azure AD",
                    "Hyper-V",
                    "Networking",
                    "Group Policy",
                    "RMM Tools",
                    "Ticketing Systems",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-sm text-purple-200 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer text-center"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-neutral-500 mb-3">Web Development</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "MongoDB",
                    "PostgreSQL",
                    "REST APIs",
                    "Docker",
                    "Git",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200 hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer text-center"
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
                      Troubleshoot hardware, software, and network issues
                      end-to-end for business clients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      Manage Microsoft 365, Azure AD, and on-premises Active
                      Directory environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>
                      Configure VPNs, Group Policy, DHCP, and Hyper-V
                      virtualization infrastructure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>
                      Build full-stack web applications with modern frameworks
                      as a side passion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>
                      Support end users with clarity, patience, and thorough
                      documentation
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
                    Clear Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Systematic Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Full Ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Adaptability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                    Genuine Curiosity
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-cyan-500/30 p-6 bg-neutral-950/60 backdrop-blur hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h3>

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
                      href="https://www.linkedin.com/in/sirash-maharjan/"
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
