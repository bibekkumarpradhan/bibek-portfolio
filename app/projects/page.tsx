
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>


      <main className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-10 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}

        </div>

      </main>


    </>
  );
}