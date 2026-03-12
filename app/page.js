import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="font-sans max-w-5xl mx-auto px-6 py-10">
      <Header />

      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bibek Kumar Pradhan</h1>
        <p className="text-lg md:text-xl text-gray-700">
          MSc Computer Engineering Graduate & Full-Stack Developer
        </p>
      </section>

      {/* About Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I build software and web applications using <strong>Python, SQL, React, Next.js,</strong> and other modern technologies.
          I love creating efficient, responsive, and user-friendly applications that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Student Management System"
            description="A web app to manage student records, courses, and grades."
            link="#"
          />
          <ProjectCard
            title="Electronics Shopping Database"
            description="Interactive database application for electronics shopping."
            link="#"
          />
          <ProjectCard
            title="Next.js Portfolio"
            description="This modern portfolio website built using Next.js and Tailwind CSS."
            link="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:bibek.pradhan.dev@gmail.com" className="text-blue-600">bibek.pradhan.dev@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/bibekkumarpradhan" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/bibekkumarpradhan</a></p>
      </section>

      <Footer />
    </main>
  );
}