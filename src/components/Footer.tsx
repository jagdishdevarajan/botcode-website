import Link from 'next/link';
import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bc-canvas">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bc-accent/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Hexagon className="h-5 w-5 text-bc-accent" strokeWidth={1.8} />
              <span className="font-display text-lg font-semibold tracking-tight text-bc-ink">
                Bot<span className="text-bc-accent">Code</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bc-muted">
              AI-native software, built by orchestrated agent teams with humans in the
              loop. For global enterprises in healthcare, education, and beyond.
            </p>
            <a
              href="mailto:admin@botcode.com"
              className="font-mono mt-5 inline-block text-sm text-bc-ink transition-colors hover:text-bc-accent"
            >
              admin@botcode.com
            </a>
          </div>

          <div>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bc-muted">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/services" className="text-bc-ink/80 transition-colors hover:text-bc-accent">AI-Native Development</Link></li>
              <li><Link href="/services" className="text-bc-ink/80 transition-colors hover:text-bc-accent">Human-in-the-Loop Delivery</Link></li>
              <li><Link href="/services" className="text-bc-ink/80 transition-colors hover:text-bc-accent">SaaS-to-Custom Migration</Link></li>
              <li><Link href="/products" className="text-bc-ink/80 transition-colors hover:text-bc-accent">Product Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bc-muted">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/about" className="text-bc-ink/80 transition-colors hover:text-bc-accent">About Us</Link></li>
              <li><Link href="/contact" className="text-bc-ink/80 transition-colors hover:text-bc-accent">Contact</Link></li>
              <li><Link href="/trial" className="text-bc-ink/80 transition-colors hover:text-bc-accent">Start a 90-day build</Link></li>
              <li><Link href="/blog" className="text-bc-ink/80 transition-colors hover:text-bc-accent">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-bc-muted">
            &copy; {new Date().getFullYear()} BotCode — All rights reserved
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-bc-muted">
            Built by agents · shipped by humans
          </p>
        </div>
      </div>
    </footer>
  );
}
