export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b mb-10">
      <h1 className="text-xl font-bold">Bibek Kumar Pradhan</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/projects" className="hover:text-blue-600">Projects</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}