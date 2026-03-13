import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-8">

        {/* HERO */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Bibek
          </h1>

          <p className="text-lg text-gray-600">
            MSc Computer Engineering Graduate | Full Stack Developer
          </p>
        </section>

        {/* PROJECTS */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Electronics Shopping Database"
              description="Python database application for an electronics shopping system."
              link="https://github.com/bibekkumarpradhan"
            />

            <ProjectCard
              title="Student Management System"
              description="Database system for managing students and academic records."
              link="https://github.com/bibekkumarpradhan"
            />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}