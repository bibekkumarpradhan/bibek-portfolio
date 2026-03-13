import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <section className="text-center py-28">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Bibek Kumar Pradhan 👋
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MSc Computer Engineering Graduate passionate about building
            modern web applications using React, Next.js, Python and SQL.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="/projects"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="border px-6 py-3 rounded-lg hover:bg-gray-100"
            >
             Download Resume
            </a>
          </div>

           
        </section>

        {/* SKILLS */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
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
              "Database Design"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ProjectCard
              title="Electronics Shopping Database"
              description="A Python & SQL based database system for managing an electronics store."
              link="https://github.com/bibekkumarpradhan"
            />

            <ProjectCard
              title="Student Management System"
              description="A database application for managing students, courses and grades."
              link="https://github.com/bibekkumarpradhan"
            />

          </div>
        </section>

        {/* EDUCATION */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Education
          </h2>

          <p className="text-lg">
            MSc Computer Engineering — Solent University
          </p>

          <p className="text-gray-600">
            BCA — Tribhuvan University, Nepal
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}