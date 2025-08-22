import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BotCode</h3>
            <p className="mb-4">AI‑native software for global enterprises</p>
            <div className="space-y-2">
              <p>Contact: admin@botcode.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-200 transition-colors">AI‑Native Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-200 transition-colors">Human‑in‑the‑Loop Delivery</Link></li>
              <li><Link href="/services" className="hover:text-blue-200 transition-colors">SaaS‑to‑Custom Migration</Link></li>
              <li><Link href="/products" className="hover:text-blue-200 transition-colors">Healthcare Products (Supported)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:admin@botcode.com" className="hover:text-blue-200 transition-colors">
                  Email: admin@botcode.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} BotCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
