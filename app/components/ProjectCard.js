export default function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}