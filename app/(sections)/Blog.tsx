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
    <section id="blog" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-2xl font-bold mb-4">Updates</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4"
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
