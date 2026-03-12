import Link from "next/link";

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-2">
        Email: <Link href="mailto:bibek.pradhan.dev@gmail.com" className="text-blue-600 hover:underline">bibek.pradhan.dev@gmail.com</Link>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        GitHub: <Link href="https://github.com/bibekkumarpradhan" className="text-blue-600 hover:underline" target="_blank">github.com/bibekkumarpradhan</Link>
      </p>
      <p className="text-lg text-gray-700">
        LinkedIn: <Link href="https://www.linkedin.com/in/bibekkumarpradhan" className="text-blue-600 hover:underline" target="_blank">linkedin.com/in/bibekkumarpradhan</Link>
      </p>
    </main>
  );
}