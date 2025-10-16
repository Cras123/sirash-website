import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveBackground from "../components/InteractiveBackground";

export const metadata = {
  title: "Blog & Updates",
  description: "Read the latest blog posts and updates from Sirash Maharjan",
};

const posts = [
  {
    title: "Shipping v1 of my portfolio",
    date: "2025-09-23",
    excerpt: "A fast, minimal stack with great DX.",
    content:
      "Building a portfolio from scratch with Next.js 15, Three.js for 3D effects, and Tailwind CSS for styling. Here's what I learned...",
    readTime: "5 min read",
  },
  {
    title: "Thoughts on Web3 tooling",
    date: "2025-08-10",
    excerpt: "Balancing pragmatism and decentralization.",
    content:
      "The Web3 ecosystem has evolved rapidly. Here are my thoughts on the current state of developer tools and what's next...",
    readTime: "8 min read",
  },
  {
    title: "Building scalable React applications",
    date: "2025-07-15",
    excerpt: "Patterns and practices for large codebases.",
    content:
      "After working on several production React apps, I've learned valuable lessons about architecture and scalability...",
    readTime: "10 min read",
  },
  {
    title: "MongoDB best practices for Next.js",
    date: "2025-06-20",
    excerpt: "Connection pooling and optimization tips.",
    content:
      "Integrating MongoDB with Next.js requires careful attention to connection management. Here's how to do it right...",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <Navbar />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5 -z-10" />

        <div className="mx-auto w-[min(1100px,92%)]">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog & Updates
            </h1>
            <p className="text-neutral-400 text-lg">
              Thoughts on development, technology, and everything in between
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-purple-500/30 bg-neutral-950/40 backdrop-blur p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text group-hover:from-purple-200 group-hover:to-cyan-200 transition-all">
                  {post.title}
                </h2>

                <p className="text-neutral-400 mb-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                  {post.content}
                </p>

                <button className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition group-hover:gap-3">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur p-8 text-center">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-neutral-400 mb-6">
                Get notified when I publish new posts about web development,
                tech, and more.
              </p>
              <form className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
