"use client";

import Link from "next/link";
import DarkModeToggle from "../ui/DarkModeToggle";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <Link href="/" className="text-xl font-bold">
          Bibek Portfolio
        </Link>

        <nav className="flex gap-6 text-sm md:text-base font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <DarkModeToggle />

      </div>
    </header>
  );
}