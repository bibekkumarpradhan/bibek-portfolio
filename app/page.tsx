import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white font-sans">
      {/* Header / Navbar */}
      <header className="flex justify-between items-center p-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Bibek Kumar Pradhan</h1>
        <nav className="space-x-4">
          <Link href="https://github.com/bibekkumarpradhan" target="_blank" className="hover:underline">GitHub</Link>
          <Link href="https://www.linkedin.com/in/bibekkumarpradhan" target="_blank" className="hover:underline">LinkedIn</Link>
          <Link href="/resume.pdf" target="_blank" className="hover:underline">Resume</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I’m Bibek Kumar Pradhan</h2>
        <p className="text-lg sm:text-xl mb-8">
          MSc Computer Engineering Graduate | Building software applications with Python, SQL, Next.js & React
        </p>
        <Link
          href="mailto:bibek.pradhan.dev@gmail.com"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition"
        >
          Contact Me
        </Link>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Student Management System</h3>
            <p className="mb-2">A full-stack system to manage students, courses, and grades using Python & SQL.</p>
            <Link href="https://github.com/bibekkumarpradhan/student-management" target="_blank" className="text-blue-600 hover:underline">
              View on GitHub
            </Link>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Electronics Shopping Database</h3>
            <p className="mb-2">An interactive database application for electronics shopping using Python & SQL.</p>
            <Link href="https://github.com/bibekkumarpradhan/electronics-shopping" target="_blank" className="text-blue-600 hover:underline">
              View on GitHub
            </Link>
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {["Python", "SQL", "Next.js", "React", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p>© 2026 Bibek Kumar Pradhan. All rights reserved.</p>
        <p>
          <Link href="mailto:bibek.pradhan.dev@gmail.com" className="text-blue-600 hover:underline">
            bibek.pradhan.dev@gmail.com
          </Link>
        </p>
      </footer>
    </main>
  );
}