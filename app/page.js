import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <Header />

      <section>
        <h2>About Me</h2>
        <p>MSc Computer Engineering Graduate. I build software and web applications using Python, SQL, React, and Next.js.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectCard
          title="Student Management System"
          description="A web app to manage student records, courses, and grades."
          link="#"
        />
        <ProjectCard
          title="Electronics Shopping Database"
          description="An interactive database application for electronics shopping."
          link="#"
        />
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: bibek.pradhan.dev@gmail.com</p>
        <p>GitHub: <a href="https://github.com/bibekkumarpradhan">github.com/bibekkumarpradhan</a></p>
      </section>

      <Footer />
    </main>
  );
}