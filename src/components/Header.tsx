'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Hexagon } from 'lucide-react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-bc-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <Hexagon className="h-5 w-5 text-bc-accent" strokeWidth={1.8} />
          <span className="font-display text-lg font-semibold tracking-tight text-bc-ink">
            Bot<span className="text-bc-accent">Code</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-bc-muted transition-colors hover:text-bc-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/trial"
          className="hidden rounded-full bg-bc-accent px-5 py-2 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_30px_-6px_rgba(197,249,85,0.6)] sm:inline-block"
        >
          Start a build
        </Link>
      </div>
    </header>
  );
}
