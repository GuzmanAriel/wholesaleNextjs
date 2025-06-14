import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">F4F Sells</Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li><Link href="#services" className="hover:underline">Services</Link></li>
          <li><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
