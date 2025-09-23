import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-16 pb-10 bg-gradient-to-b from-[#0b0d10] to-transparent dark:from-[#0b0d10]">
      <div className="mx-auto w-[min(1100px,92%)] grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Sirash Maharjan
          </h1>
          <p className="mt-2 text-lg md:text-xl text-neutral-500">
            Full-Stack Developer | Web3 Enthusiast | Data Analyst
          </p>
          <p className="mt-4 max-w-prose text-neutral-400">
            I design and ship reliable web apps with modern JavaScript, clean
            architecture, and a focus on performance.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl bg-blue-400 text-black font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="mailto:hello@sirashmaharjan.com"
              className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 transition"
            >
              Email Me
            </a>
          </div>
        </div>
        <div className="justify-self-end pr-6 md:pr-12">
          <div className="h-56 w-56 sm:h-72 sm:w-72 md:h-[420px] md:w-[420px] rounded-2xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-center text-neutral-500">
            <Image
              src="/images/profile.jpg"
              alt="Sirash Maharjan"
              width={420}
              height={420}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
