import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b">
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
              <Link href="/about" className="font-medium text-blue-800 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-medium text-blue-800 hover:text-blue-600">
                Products
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
