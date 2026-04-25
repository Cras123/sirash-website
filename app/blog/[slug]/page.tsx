import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InteractiveBackground from "@/app/components/InteractiveBackground";
import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { extractHeadings, headingId } from "@/lib/blog";
import PostEnhancements from "./PostEnhancements";

type PostDoc = {
  _id: { toString(): string };
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
};

async function getPost(slug: string) {
  await connectDB();
  const post = await Post.findOne({ slug }).lean<PostDoc | null>();
  return post;
}

async function getRelatedPosts(slug: string) {
  await connectDB();
  const posts = await Post.find({ slug: { $ne: slug } })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean<PostDoc[]>();
  return posts;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const canonical = `https://sirashmaharjan.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonical,
      siteName: "sirashmaharjan.com",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug);
  const headings = extractHeadings(post.content).map((heading) => ({
    id: headingId(heading),
    text: heading,
  }));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Sirash Maharjan",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sirashmaharjan.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <Navbar />
      <PostEnhancements headings={headings} />
      <section className="relative py-20">
        <div className="mx-auto w-[min(900px,92%)]">
          <Link href="/blog" className="text-sm text-cyan-300 hover:text-cyan-200 transition">
            ← Back to Blog
          </Link>

          <article className="mt-6 rounded-2xl border border-purple-500/30 bg-neutral-950/50 backdrop-blur p-8 md:p-10">
            <div className="text-sm text-neutral-400 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="text-lg text-neutral-300 mb-8">{post.excerpt}</p>

            <div className="space-y-5 text-neutral-200 leading-relaxed">
              {post.content.split("\n").map((line, idx) => {
                const trimmed = line.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("##")) {
                  const text = trimmed.replace(/^#+\s*/, "");
                  const id = headingId(text);
                  return (
                    <h2
                      id={id}
                      key={`${id}-${idx}`}
                      className="scroll-mt-24 text-2xl font-semibold mt-8 mb-3 text-cyan-200"
                    >
                      {text}
                    </h2>
                  );
                }

                return <p key={`${idx}-${trimmed.slice(0, 12)}`}>{trimmed}</p>;
              })}
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-5 text-neutral-100">Related posts</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related._id.toString()}
                    href={`/blog/${related.slug}`}
                    className="rounded-xl border border-purple-500/30 bg-neutral-950/40 p-4 hover:border-cyan-400/50 transition"
                  >
                    <p className="text-xs text-neutral-500 mb-1">{related.date}</p>
                    <h3 className="font-semibold text-neutral-100">{related.title}</h3>
                    <p className="text-sm text-neutral-400 mt-2 line-clamp-3">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Footer />
    </main>
  );
}
