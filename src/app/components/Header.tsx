import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-lg z-10 py-4 px-6 sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto" aria-label="Main">
      <Link href="/"  aria-label="Go to Home Page">
      <Image
        aria-label="Go to Home Page"
        src="/f4f-site-logo.png"
        alt="F4F logo"
        width={120}
        height={40}
        priority
      />
      </Link>

        <ul className="flex gap-6 text-sm font-medium ">
          <li><Link href="#services" className="hover:underline text-[#003582]">Services hi</Link></li>
          <li><Link href="#contact" className="hover:underline text-[#003582]">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
