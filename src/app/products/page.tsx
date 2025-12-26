import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
    <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Healthcare Products (Supported)</h1>
      <p className="text-xl">Legacy and in-market solutions we continue to support.</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {products.map((product) => (
                <div id={product.slug} key={product.slug} className="mb-20 pb-12 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                    {product.logoImage ? (
                      <div className="flex-shrink-0 w-48 h-32 relative flex items-center justify-center">
                        <Image
                          src={product.logoImage}
                          alt={`${product.title} logo`}
                          width={180}
                          height={120}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    ) : (
                      <div className="text-5xl mr-4">{product.icon}</div>
                    )}
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                  </div>
                  <p className="text-xl mb-8">{product.description}</p>

                  <div className="mb-8">
                    {product.longDescription?.map((paragraph, index) => (
                      <p key={`paragraph-${product.slug}-${index}`} className="text-lg mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {product.features && (
                    <div className="bg-gray-50 p-8 rounded-lg mb-12">
                      <h3 className="text-xl font-bold mb-6">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={`feature-${product.slug}-${index}`} className="text-lg">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="text-center mt-8">
                    {product.slug === "healthpilot" ? (
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <a href="https://www.healthpilot.ai" target="_blank" rel="noopener noreferrer">
                          Learn More About {product.title}
                        </a>
                      </Button>
                    ) : product.slug === "first-clinic" ? (
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <a href="https://www.firstclinic.in" target="_blank" rel="noopener noreferrer">
                          Learn More About {product.title}
                        </a>
                      </Button>
                    ) : product.slug === "iamai-health" ? (
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <a href="https://iamai.health" target="_blank" rel="noopener noreferrer">
                          Learn More About {product.title}
                        </a>
                      </Button>
                    ) : product.slug === "pscribe" ? (
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <a href="https://pscribe.in" target="_blank" rel="noopener noreferrer">
                          Learn More About {product.title}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <Link href="/contact">
                          Learn More About {product.title}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Support & Engagement</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Long‑term support for existing customers</li>
                  <li>Selective new deployments where there’s strategic fit</li>
                  <li>Migration paths to AI‑native custom systems</li>
                  <li>Compliance, security, and integration best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
