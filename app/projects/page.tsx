import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-10 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="Electronics Shopping Database"
            description="Python application interacting with SQL database for product management."
            link="https://github.com/bibekkumarpradhan"
          />

          <ProjectCard
            title="Student Management System"
            description="Database project for managing students and courses."
            link="https://github.com/bibekkumarpradhan"
          />

        </div>

      </main>

      <Footer />
    </>
  );
}