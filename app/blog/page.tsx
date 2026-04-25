"use client";

import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveBackground from "../components/InteractiveBackground";

interface Post {
  _id: string;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
}

const empty = { title: "", excerpt: "", content: "", readTime: "", date: "" };

export default function BlogPage() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState(empty);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  async function handleSubmit() {
    if (!form.title || !form.excerpt || !form.content) return;
    const today = new Date().toISOString().split("T")[0];
    const payload = { ...form, date: form.date || today };

    if (editing) {
      await fetch(`/api/posts/${editing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    setForm(empty);
    setEditing(null);
    setShowForm(false);
    fetchPosts();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  }

  function startEdit(post: Post) {
    setEditing(post);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      readTime: post.readTime,
      date: post.date,
    });
    setShowForm(true);
  }

  async function handleLogin() {
    await signIn("credentials", {
      email: loginForm.email,
      password: loginForm.password,
      redirect: false,
    });
    setShowLogin(false);
  }

  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <Navbar />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5 -z-10" />

        <div className="mx-auto w-[min(1100px,92%)]">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog & Updates
            </h1>
            <p className="text-neutral-400 text-lg">
              Thoughts on IT support, technology, and everything in between
            </p>

            {/* Admin controls top-right */}
            <div className="absolute right-0 top-0 flex items-center gap-3">
              {session ? (
                <>
                  <button
                    onClick={() => {
                      setEditing(null);
                      setForm(empty);
                      setShowForm(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:scale-105 transition-all"
                  >
                    + New Post
                  </button>
                  <button
                    onClick={() => signOut()}
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-xs text-neutral-600 hover:text-neutral-400 transition"
                >
                  Admin
                </button>
              )}
            </div>
          </div>

          {/* Login modal */}
          {showLogin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="rounded-2xl border border-purple-500/30 bg-neutral-950 p-8 w-full max-w-sm space-y-4">
                <h2 className="text-xl font-bold text-white">Admin Login</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleLogin}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowLogin(false)}
                    className="flex-1 py-3 rounded-xl border border-neutral-700 text-neutral-400 hover:text-white transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Create / Edit form */}
          {showForm && (
            <div className="mb-10 rounded-2xl border border-cyan-500/30 bg-neutral-950/60 backdrop-blur p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">
                {editing ? "Edit Post" : "New Post"}
              </h2>
              <input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
              <input
                placeholder="Excerpt (short summary)"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
              <textarea
                placeholder="Full content"
                rows={5}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <input
                  placeholder="Read time (e.g. 5 min read)"
                  value={form.readTime}
                  onChange={(e) =>
                    setForm({ ...form, readTime: e.target.value })
                  }
                  className="flex-1 rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="flex-1 rounded-xl border border-purple-500/30 bg-neutral-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all"
                >
                  {editing ? "Update Post" : "Publish Post"}
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditing(null);
                    setForm(empty);
                  }}
                  className="px-6 py-3 rounded-xl border border-neutral-700 text-neutral-400 hover:text-white transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Posts grid */}
          {loading ? (
            <p className="text-center text-neutral-500">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-neutral-500">No posts yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group rounded-2xl border border-purple-500/30 bg-neutral-950/40 backdrop-blur p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
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

                  {expanded === post._id && (
                    <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                      {post.content}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    {post.slug ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition group-hover:gap-3"
                      >
                        Read article
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          setExpanded(expanded === post._id ? null : post._id)
                        }
                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition group-hover:gap-3"
                      >
                        {expanded === post._id ? "Show less" : "Read more"}
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    )}

                    {session && (
                      <div className="flex gap-3">
                        <button
                          onClick={() => startEdit(post)}
                          className="text-xs text-cyan-500 hover:text-cyan-300 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="text-xs text-red-500 hover:text-red-300 transition"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur p-8 text-center">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-neutral-400 mb-6">
                Get notified when I publish new posts about IT support, tech,
                and more.
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
