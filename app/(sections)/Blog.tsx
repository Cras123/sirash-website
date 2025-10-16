const posts = [
  {
    title: "Shipping v1 of my portfolio",
    date: "2025-09-23",
    excerpt: "A fast, minimal stack with great DX.",
  },
  {
    title: "Thoughts on Web3 tooling",
    date: "2025-08-10",
    excerpt: "Balancing pragmatism and decentralization.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5 -z-10" />
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Updates
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-purple-500/30 bg-neutral-950/40 backdrop-blur p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="text-xs text-neutral-500">{p.date}</div>
              <h3 className="font-semibold mt-1">{p.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
