import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black text-black dark:text-white font-sans min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-32 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I’m Bibek Kumar Pradhan</h1>
        <p className="text-lg sm:text-xl mb-8">
          MSc Computer Engineering Graduate | Full-Stack Developer building software applications with Python, SQL, Next.js & React
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
          <ProjectCard
            title="Student Management System"
            description="A full-stack system to manage students, courses, and grades using Python & SQL."
            link="https://github.com/bibekkumarpradhan/student-management"
          />
          <ProjectCard
            title="Electronics Shopping Database"
            description="An interactive database application for electronics shopping using Python & SQL."
            link="https://github.com/bibekkumarpradhan/electronics-shopping"
          />
          <ProjectCard
            title="Next.js Portfolio"
            description="Modern portfolio website built with Next.js & Tailwind CSS."
            link="https://github.com/bibekkumarpradhan/bibek-portfolio"
          />
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

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-2">Email: <Link href="mailto:bibek.pradhan.dev@gmail.com" className="text-blue-600 hover:underline">bibek.pradhan.dev@gmail.com</Link></p>
        <p className="mb-2">GitHub: <Link href="https://github.com/bibekkumarpradhan" target="_blank" className="text-blue-600 hover:underline">github.com/bibekkumarpradhan</Link></p>
        <p>LinkedIn: <Link href="https://www.linkedin.com/in/bibekkumarpradhan" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/bibekkumarpradhan</Link></p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}