"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
  tech?: string[];
}

export default function ProjectCard({ title, description, link, github, image,tech }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-xl overflow-hidden border bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl"
    >

      <div className="relative w-full h-56 bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4 flex-wrap">
          <a
            href={link}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Live Demo
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              className="border px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}