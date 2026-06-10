import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedHero } from "@/components/AnimatedHero";
import { ProductGrid } from "@/components/ProductGrid";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Home() {
  const homeProductSlugs = ["healthpilot", "medneuron", "neetclass", "first-clinic", "chennai-health", "pscribe"];
  const homeProducts = homeProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  const clientLogos = [
    { id: "abbott", src: "/logos/clients/abbott.webp", alt: "Abbott Laboratories" },
    { id: "abbvie", src: "/logos/clients/abbvie.webp", alt: "AbbVie" },
    { id: "ebay", src: "/logos/clients/ebay.webp", alt: "eBay" },
    { id: "meredith", src: "/logos/clients/meredith.webp", alt: "Meredith" },
    { id: "belly", src: "/logos/clients/belly.webp", alt: "Belly" },
    { id: "ucla", src: "/logos/clients/ucla.webp", alt: "UCLA" },
    { id: "illico", src: "/logos/clients/illico.webp", alt: "Illico Hodes" },
    { id: "iowa", src: "/logos/clients/iowa.webp", alt: "University of Iowa" },
    { id: "findly", src: "/logos/clients/findly.webp", alt: "Findly" },
    { id: "monster", src: "/logos/clients/monster.webp", alt: "Monster" },
    { id: "hodes", src: "/logos/clients/hodes.webp", alt: "Bernard Hodes Group" }
  ];

  const featuredLogos = [
    { id: "edudays", src: "/logos/featured/edudays.webp", alt: "Microsoft EduDays" },
    { id: "tech2018", src: "/logos/featured/tech2018.webp", alt: "Tech 2018" },
    { id: "mgiep", src: "/logos/featured/mgiep.webp", alt: "MGIEP" },
    { id: "didac", src: "/logos/featured/didac.webp", alt: "DIDAC India" },
    { id: "eldrok", src: "/logos/featured/eldrok.webp", alt: "ELDROK" },
    { id: "etr", src: "/logos/featured/etr.webp", alt: "ETR" },
    { id: "businessline", src: "/logos/featured/businessline.webp", alt: "Business Line" },
    { id: "brainfeed", src: "/logos/featured/brainfeed.webp", alt: "Brainfeed" }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <AnimatedHero />

        <ProductGrid
          products={homeProducts}
          title="AI-Native Products in Pipeline"
          description="Healthcare, education, and enterprise solutions powered by intelligent multi-agent systems"
        />

        {/* Enterprise CTA band */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center bg-blue-900 text-white rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Try us with a risk‑free 90‑day build</h2>
              <p className="text-blue-100 mb-6">We’ll sign an MoU, deliver a production‑grade slice, and if you’re happy, we scale as your AI‑native partner.</p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/trial">Start 90‑Day Trial</Link>
                </Button>
                <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/services">See What We Build</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

  <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="w-full h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Featured At</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {featuredLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="w-full h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
