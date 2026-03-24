import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { projects } from "@/data/projects";
import GithubGraph from "@/components/ui/GithubGraph";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 space-y-20">

        {/* HERO */}
        <section className="text-center py-20 md:py-32 px-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-3xl mt-10">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm Bibek Kumar Pradhan 👋
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            MSc Computer Engineering Graduate passionate about building
            modern web applications using React, Next.js, Python, and SQL.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 flex-wrap">
            <a
              href="/projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

        </section>

        {/* SKILLS */}
        <section className="py-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">

            {[
              "Python",
              "SQL",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Node.js",
              "Database Design",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section className="py-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                github={project.github}
                image={project.image}
                tech={project.tech}
              />
            ))}
          </div>

        </section>
        {/* GITHUB ACTIVITY */}
        <section className="py-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            GitHub Activity
          </h2>

          <GithubGraph />
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">GitHub Stats</h2>

            <img
              src="https://github-readme-stats.vercel.app/api?username=bibekkumarpradhan&show_icons=true&theme=default"
              alt="GitHub Stats"
              className="mx-auto"
            />
          </section>

        </section>

        {/* EDUCATION */}
        <section className="py-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Education
          </h2>

          <p className="text-lg">
            MSc Computer Engineering — Solent University
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            BCA — Tribhuvan University, Nepal
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}