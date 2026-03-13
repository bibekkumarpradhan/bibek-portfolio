import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 mb-4">{description}</p>

      <Link
        href={link}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        View Project →
      </Link>
    </div>
  );
}