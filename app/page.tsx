// app/page.tsx
// Drop this into a fresh Next.js (App Router) project at app/page.tsx
// Minimal, no Tailwind required. Uses styled-jsx for clean, responsive styling.
"use client";
export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container">
          <a href="#" className="brand">
            Sirash Maharjan
          </a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Developer • Builder • Problem Solver</h1>
            <p>
              I design and ship reliable web apps with modern JavaScript, clean
              architecture, and a focus on performance. I love turning ideas
              into simple, fast user experiences.
            </p>
            <div className="cta">
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="mailto:hello@sirashmaharjan.com" className="btn ghost">
                Email Me
              </a>
            </div>
            <ul className="meta">
              <li>Based in Sydney</li>
              <li>Open to freelance & full-time roles</li>
            </ul>
          </div>
          <div className="card">
            <h3>Tech Snapshot</h3>
            <ul>
              <li>Next.js / React</li>
              <li>Node.js / Express</li>
              <li>MongoDB / PostgreSQL</li>
              <li>TypeScript / REST / Auth</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid">
            <article className="project">
              <div className="project-body">
                <h3>Goodwood Community Centre</h3>
                <p>
                  Full‑stack platform for events, hall bookings, and
                  memberships. Built with Next.js + TypeScript, MongoDB, Stripe
                  payments, and secure auth.
                </p>
                <div className="tags">
                  <span>Next.js</span>
                  <span>TS</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
              </div>
              <div className="project-actions">
                <a href="#" className="btn small">
                  Live
                </a>
                <a href="#" className="btn small ghost">
                  Code
                </a>
              </div>
            </article>

            <article className="project">
              <div className="project-body">
                <h3>NRN Hub</h3>
                <p>
                  A clean content and utilities portal with calendar, news, and
                  tools. Built with Next.js, server actions, and edge caching
                  for speed.
                </p>
                <div className="tags">
                  <span>Next.js</span>
                  <span>Edge</span>
                  <span>Server Actions</span>
                </div>
              </div>
              <div className="project-actions">
                <a href="#" className="btn small">
                  Live
                </a>
                <a href="#" className="btn small ghost">
                  Code
                </a>
              </div>
            </article>

            <article className="project">
              <div className="project-body">
                <h3>Portfolio Starter</h3>
                <p>
                  This website: a minimal, fast, and maintainable portfolio you
                  can extend with blogs, case studies, and analytics.
                </p>
                <div className="tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>SEO</span>
                </div>
              </div>
              <div className="project-actions">
                <a href="#" className="btn small">
                  Live
                </a>
                <a href="#" className="btn small ghost">
                  Code
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container about-grid">
          <div>
            <h2>About</h2>
            <p>
              I’m a full‑stack developer who enjoys building practical products
              with modern tools, clean code, and a bias for action. My
              background spans web apps, dashboards, and integrations. Outside
              of work, you’ll find me learning, lifting, and exploring ideas.
            </p>
            <div className="rows">
              <div>
                <h4>Core Skills</h4>
                <ul className="bullets">
                  <li>Frontend: React, Next.js, UI/UX</li>
                  <li>Backend: Node.js, APIs, Auth</li>
                  <li>Data: MongoDB, Postgres, SQL</li>
                  <li>DevOps: Vercel, CI/CD, Docker (basics)</li>
                </ul>
              </div>
              <div>
                <h4>Highlights</h4>
                <ul className="bullets">
                  <li>Shipped production apps used by real users</li>
                  <li>Integrated payments, auth, and admin dashboards</li>
                  <li>Collaborated in agile teams and solo builds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Quick Links</h3>
            <ul className="links">
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@sirashmaharjan.com">Email</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p>Got a project or role in mind? Let’s talk.</p>
          <form
            className="contact"
            action="mailto:hello@sirashmaharjan.com"
            method="post"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
            />
            <button type="submit" className="btn">
              Send
            </button>
          </form>
          <p className="footnote">
            Prefer email?{" "}
            <a href="mailto:hello@sirashmaharjan.com">
              hello@sirashmaharjan.com
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} sirashmaharjan.com</span>
          <div className="social">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --bg: #0b0d10;
          --panel: #111418;
          --fg: #e8eef3;
          --muted: #a8b3bd;
          --accent: #4da3ff;
        }
        * {
          box-sizing: border-box;
        }
        body,
        main {
          margin: 0;
          background: var(--bg);
          color: var(--fg);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Arial, Noto Sans, "Apple Color Emoji", "Segoe UI Emoji";
        }
        a {
          color: var(--fg);
          text-decoration: none;
        }
        .container {
          width: min(1100px, 92%);
          margin: 0 auto;
        }
        .btn {
          background: var(--accent);
          color: #031625;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-weight: 600;
          display: inline-block;
        }
        .btn.ghost {
          background: transparent;
          color: var(--fg);
          border: 1px solid #233041;
        }
        .btn.small {
          padding: 0.55rem 0.8rem;
          font-size: 0.9rem;
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(6px);
          background: rgba(11, 13, 16, 0.6);
          border-bottom: 1px solid #151a21;
        }
        .nav .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
        }
        .brand {
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        nav a {
          margin-left: 1rem;
          opacity: 0.9;
        }
        nav a.btn {
          margin-left: 1rem;
          opacity: 1;
        }

        .hero {
          padding: 5rem 0 3rem;
          background: radial-gradient(
              1200px 600px at 10% -10%,
              #15314a,
              transparent 60%
            ),
            radial-gradient(1000px 500px at 90% -20%, #1b2a3a, transparent 50%);
        }
        .hero-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1.4fr 1fr;
          align-items: center;
        }
        .hero h1 {
          font-size: clamp(2rem, 2.6vw + 1rem, 3.2rem);
          line-height: 1.1;
          margin: 0 0 0.75rem;
        }
        .hero p {
          color: var(--muted);
          margin: 0 0 1.25rem;
          max-width: 56ch;
        }
        .cta {
          display: flex;
          gap: 0.8rem;
          margin: 1rem 0 0.5rem;
        }
        .meta {
          display: flex;
          gap: 1.2rem;
          padding: 0;
          margin: 1rem 0 0;
          list-style: none;
          color: var(--muted);
        }

        .card {
          background: var(--panel);
          border: 1px solid #1a222b;
          padding: 1.25rem;
          border-radius: 16px;
        }
        .card h3 {
          margin: 0 0 0.8rem;
        }

        .section {
          padding: 3rem 0;
        }
        .section.alt {
          background: linear-gradient(180deg, #0b0d10, #0d1014);
          border-top: 1px solid #141a22;
          border-bottom: 1px solid #141a22;
        }
        h2 {
          font-size: clamp(1.6rem, 1.3vw + 1rem, 2rem);
          margin: 0 0 1.5rem;
        }

        .grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(3, 1fr);
        }
        .project {
          background: var(--panel);
          border: 1px solid #1a222b;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
        }
        .project-body {
          padding: 1.1rem 1.1rem 0.4rem;
        }
        .project h3 {
          margin: 0 0 0.4rem;
        }
        .project p {
          color: var(--muted);
          margin: 0 0 0.8rem;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tags span {
          background: #0e151c;
          border: 1px solid #1c2936;
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          font-size: 0.85rem;
          color: #b7c5d3;
        }
        .project-actions {
          display: flex;
          gap: 0.6rem;
          padding: 0.8rem 1.1rem 1.1rem;
        }

        .about-grid {
          display: grid;
          gap: 1.2rem;
          grid-template-columns: 1.35fr 1fr;
        }
        .rows {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr 1fr;
        }
        .bullets {
          margin: 0.5rem 0 0;
          padding-left: 1.2rem;
        }
        .links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .links li {
          margin: 0.5rem 0;
        }
        .links a {
          color: var(--accent);
        }

        .contact {
          display: grid;
          gap: 0.8rem;
          max-width: 640px;
        }
        .contact input,
        .contact textarea {
          background: #0d1117;
          border: 1px solid #1a222b;
          border-radius: 12px;
          padding: 0.8rem 0.9rem;
          color: var(--fg);
        }
        .footnote {
          color: var(--muted);
          margin-top: 0.6rem;
        }

        .footer {
          border-top: 1px solid #141a22;
          padding: 1.2rem 0;
        }
        .footer .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .social a {
          margin-left: 1rem;
          color: var(--muted);
        }

        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .rows {
            grid-template-columns: 1fr;
          }
          nav a {
            margin-left: 0.8rem;
          }
        }
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .nav .container {
            padding: 0.8rem 0;
          }
          .hero {
            padding-top: 4rem;
          }
        }
      `}</style>
    </main>
  );
}
