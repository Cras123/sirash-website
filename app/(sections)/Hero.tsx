import Image from "next/image";
import ScrambleText from "../components/ScrambleText";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[100vh] flex items-center">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent -z-10" />

      {/* Background Photo - Right Side with fade */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[50%] -z-10">
        <div className="relative h-full w-full">
          <Image
            src="/images/profile.jpg"
            alt="Sirash Maharjan"
            fill
            priority
            className="object-cover object-center"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Gradient overlay on photo for blend */}
          <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mx-auto w-[min(1100px,92%)] relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Animated scramble text for name */}
          <div className="mb-6 space-y-2">
            <ScrambleText text="SIRASH" />
            <ScrambleText text="MAHARJAN" />
          </div>

          <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text font-semibold">
            Full-Stack Developer | Web3 Enthusiast | Data Analyst
          </p>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            I design and ship reliable web apps with modern JavaScript, clean
            architecture, and a focus on performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 font-semibold text-neutral-200"
            >
              Email Me
            </Link>
          </div>

          {/* Quick stats or badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
              <span>Based in Sydney</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
