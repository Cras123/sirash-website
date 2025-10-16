"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent -z-10" />
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-neutral-400 mt-1">
          Got a project or role in mind? Let&apos;s talk.
        </p>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 max-w-xl">
          <input
            name="name"
            placeholder="Your name"
            required
            className="rounded-xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded-xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
            className="rounded-xl border border-purple-500/30 bg-neutral-950/60 backdrop-blur px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
          />
          <button
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-500 text-sm">
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
