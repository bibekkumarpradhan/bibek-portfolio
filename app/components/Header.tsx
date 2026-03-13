import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-6">
        <Link href="/" className="text-xl font-bold">
          Bibek Kumar Pradhan
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}