export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="mx-auto w-full max-w-5xl px-4 text-sm text-black/60">
        © {new Date().getFullYear()} — Built with Next.js + Tailwind
      </div>
    </footer>
  );
}
