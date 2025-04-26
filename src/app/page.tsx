import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Home() {
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
        <Hero />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.slug}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  logoImage={product.logoImage}
                  slug={product.slug}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Dr. Jagdish Devarajan</h2>
              <p className="text-lg mb-8">
                An orthopedic surgeon turned tech entrepreneur, building AI-powered systems
                that simplify complexity and scale impact — especially in healthcare.
              </p>
              <Button asChild variant="outline" className="mx-auto">
                <Link href="/about">Read More</Link>
              </Button>
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
