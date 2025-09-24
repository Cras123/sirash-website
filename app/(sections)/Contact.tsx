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
    <section id="contact" className="py-12">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-neutral-400 mt-1">
          Got a project or role in mind? Let&apos;s talk.
        </p>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 max-w-xl">
          <input
            name="name"
            placeholder="Your name"
            required
            className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
            className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2"
          />
          <button
            disabled={status === "loading"}
            className="px-4 py-2 rounded-xl bg-blue-400 text-black font-semibold disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send"}
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
