"use client";

import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Bibek Kumar Pradhan
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>

          {/* Dark Mode */}
          <DarkModeToggle />

        </nav>

      </div>

    </header>
  );
}