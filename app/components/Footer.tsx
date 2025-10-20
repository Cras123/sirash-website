export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6">
      <div className="mx-auto w-[min(1100px,92%)] flex items-center justify-between text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} sirashmaharjan.com</span>
        <div className="flex gap-3">
          <a
            href="https://github.com/Cras123"
            className="hover:text-neutral-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sirash-maharjan-6b753a251/"
            className="hover:text-neutral-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
