import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-xl w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Me
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out — I’m open to opportunities and collaborations.
        </p>

        <div className="space-y-4">

          <a
            href="mailto:bibek.pradhan.dev@gmail.com"
            className="block w-full text-center border p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            📧 bibek.pradhan.dev@gmail.com
          </a>

          <a
            href="https://github.com/bibekkumarpradhan"
            target="_blank"
            className="block w-full text-center border p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bibekkumarpradhan"
            target="_blank"
            className="block w-full text-center border p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>
    </main>
  );
}