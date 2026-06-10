import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bc-canvas bc-grain pb-14 pt-16 lg:pb-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bc-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 right-[-8%] h-[440px] w-[440px] bc-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="bc-eyebrow">{eyebrow}</span>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-bc-ink sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bc-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
