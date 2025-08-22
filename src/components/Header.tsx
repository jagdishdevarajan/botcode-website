import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/botcodelogo.jpg"
            alt="BotCode Logo"
            width={200}
            height={60}
            className="h-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="font-medium text-blue-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-medium text-blue-800 hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium text-blue-800 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="font-medium text-blue-800 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-blue-800 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
