import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "Student Management System",
      description: "A web app to manage student records, courses, and grades.",
      link: "#",
    },
    {
      title: "Electronics Shopping Database",
      description: "Interactive database application for electronics shopping.",
      link: "#",
    },
    {
      title: "Next.js Portfolio",
      description: "This portfolio website built using Next.js and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <div key={project.title} className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <Link href={project.link} className="text-blue-600 hover:underline" target="_blank">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}