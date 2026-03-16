"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, link, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl overflow-hidden border bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl"
    >

      <Image
        src={image}
        alt={title}
        width={600}
        height={350}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        <Link
          href={link}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          View Project →
        </Link>
      </div>
    </motion.div>);
}