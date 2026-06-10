'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const PRODUCT_URLS: Record<string, string> = {
  healthpilot: 'https://www.healthpilot.ai',
  medneuron: 'https://medneuron.com',
  neetclass: 'https://neetclass.com',
  'first-clinic': 'https://www.firstclinic.in',
  pscribe: 'https://pscribe.in',
};

const SECTORS: Record<string, string> = {
  healthpilot: 'Healthcare',
  medneuron: 'Healthcare',
  neetclass: 'Education',
  'first-clinic': 'Healthcare',
  'chennai-health': 'Healthcare',
  pscribe: 'Healthcare',
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProductGrid({
  products,
  eyebrow = 'Product portfolio',
  title = 'AI-native products, in production',
  description = 'A growing line of systems built on the same orchestration core — spanning healthcare and education.',
}: ProductGridProps) {
  return (
    <section id="products" className="relative bg-bc-canvas py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="bc-eyebrow">{eyebrow}</span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-bc-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bc-muted">{description}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const href = PRODUCT_URLS[product.slug] ?? '/contact';
            const external = href.startsWith('http');
            const sector = SECTORS[product.slug] ?? 'Enterprise';

            const inner = (
              <>
                <div className="flex items-start justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-white/10">
                    {product.logoImage ? (
                      <Image
                        src={product.logoImage}
                        alt={`${product.title} logo`}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="text-3xl">{product.icon}</span>
                    )}
                  </div>
                  <span className="font-mono rounded-full border bc-hairline px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-bc-muted">
                    {sector}
                  </span>
                </div>

                <h3 className="font-display mt-7 text-xl font-semibold text-bc-ink">
                  {product.title}
                </h3>
                <p className="mt-2.5 flex-grow text-[0.94rem] leading-relaxed text-bc-muted">
                  {product.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bc-ink transition-colors group-hover:text-bc-accent">
                  {external ? 'Visit site' : 'Get in touch'}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </>
            );

            const className =
              'group relative flex h-full flex-col overflow-hidden rounded-3xl border bc-hairline bg-bc-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bc-accent/40 hover:shadow-[0_0_50px_-12px_rgba(197,249,85,0.25)]';

            return (
              <motion.div
                key={product.slug}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link href={href} className={className}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
