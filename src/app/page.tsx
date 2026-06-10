import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnimatedHero } from '@/components/AnimatedHero';
import { Capabilities } from '@/components/Capabilities';
import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/data/products';

export default function Home() {
  const homeProductSlugs = [
    'healthpilot',
    'medneuron',
    'neetclass',
    'first-clinic',
    'chennai-health',
    'pscribe',
  ];
  const homeProducts = homeProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  const clientLogos = [
    { id: 'abbott', src: '/logos/clients/abbott.webp', alt: 'Abbott Laboratories' },
    { id: 'abbvie', src: '/logos/clients/abbvie.webp', alt: 'AbbVie' },
    { id: 'ebay', src: '/logos/clients/ebay.webp', alt: 'eBay' },
    { id: 'meredith', src: '/logos/clients/meredith.webp', alt: 'Meredith' },
    { id: 'belly', src: '/logos/clients/belly.webp', alt: 'Belly' },
    { id: 'ucla', src: '/logos/clients/ucla.webp', alt: 'UCLA' },
    { id: 'illico', src: '/logos/clients/illico.webp', alt: 'Illico Hodes' },
    { id: 'iowa', src: '/logos/clients/iowa.webp', alt: 'University of Iowa' },
    { id: 'findly', src: '/logos/clients/findly.webp', alt: 'Findly' },
    { id: 'monster', src: '/logos/clients/monster.webp', alt: 'Monster' },
    { id: 'hodes', src: '/logos/clients/hodes.webp', alt: 'Bernard Hodes Group' },
  ];

  const featuredLogos = [
    { id: 'edudays', src: '/logos/featured/edudays.webp', alt: 'Microsoft EduDays' },
    { id: 'tech2018', src: '/logos/featured/tech2018.webp', alt: 'Tech 2018' },
    { id: 'mgiep', src: '/logos/featured/mgiep.webp', alt: 'MGIEP' },
    { id: 'didac', src: '/logos/featured/didac.webp', alt: 'DIDAC India' },
    { id: 'eldrok', src: '/logos/featured/eldrok.webp', alt: 'ELDROK' },
    { id: 'etr', src: '/logos/featured/etr.webp', alt: 'ETR' },
    { id: 'businessline', src: '/logos/featured/businessline.webp', alt: 'Business Line' },
    { id: 'brainfeed', src: '/logos/featured/brainfeed.webp', alt: 'Brainfeed' },
  ];

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <AnimatedHero />

        {/* Trust strip — clients */}
        <LogoMarquee
          label="Trusted by teams at"
          logos={clientLogos}
          background="bg-bc-canvas"
        />

        <Capabilities />

        <ProductGrid products={homeProducts} />

        {/* CTA band */}
        <section className="relative bg-bc-canvas px-6 py-20 lg:py-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border bc-hairline bg-gradient-to-b from-bc-card to-bc-panel px-8 py-16 text-center">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bc-glow" />
            <div className="relative">
              <span className="bc-eyebrow">Risk-free engagement</span>
              <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-bc-ink sm:text-5xl">
                Try us with a{' '}
                <span className="bc-gradient-text">90-day build</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bc-muted">
                We sign an MoU, deliver a production-grade slice, and if you&rsquo;re
                happy, we scale as your AI-native engineering partner.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-bc-accent px-7 py-3.5 text-[0.95rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
                >
                  Start a 90-day build
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border bc-hairline px-7 py-3.5 text-[0.95rem] font-medium text-bc-ink transition-colors hover:bg-white/[0.04]"
                >
                  See what we build
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured strip */}
        <LogoMarquee
          label="Featured at"
          logos={featuredLogos}
          background="bg-bc-panel"
        />
      </main>
      <Footer />
    </div>
  );
}

function LogoMarquee({
  label,
  logos,
  background,
}: {
  label: string;
  logos: { id: string; src: string; alt: string }[];
  background: string;
}) {
  const doubled = [...logos, ...logos];
  return (
    <section className={`${background} border-y border-white/10 py-14`}>
      <p className="bc-eyebrow mb-9 text-center">{label}</p>
      <div className="bc-marquee-track group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="bc-marquee flex w-max items-center gap-16">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="relative h-9 w-28 shrink-0 opacity-50 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="112px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
