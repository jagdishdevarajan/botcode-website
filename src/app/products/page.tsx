import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { products } from "@/data/products";
import { ProductTitle } from "@/components/ProductTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

const PRODUCT_URLS: Record<string, string> = {
  healthpilot: "https://www.healthpilot.ai",
  medneuron: "https://medneuron.com",
  neetclass: "https://neetclass.com",
  "first-clinic": "https://www.firstclinic.in",
  pscribe: "https://pscribe.in",
};

export default function ProductsPage() {
  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Product portfolio"
          title="Products we build and support"
          subtitle="In-market and legacy solutions across healthcare and education — plus migration paths to AI-native custom systems."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-4xl px-6">
            {products.map((product) => {
              const href = PRODUCT_URLS[product.slug] ?? "/contact";
              const external = href.startsWith("http");
              return (
                <div
                  id={product.slug}
                  key={product.slug}
                  className="mb-12 scroll-mt-24 rounded-3xl border bc-hairline bg-bc-card p-8 lg:p-10"
                >
                  <div className="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                    {product.logoImage ? (
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-white/10">
                        <Image
                          src={product.logoImage}
                          alt={`${product.title} logo`}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="text-5xl">{product.icon}</div>
                    )}
                    <h2 className="font-display text-3xl font-semibold text-bc-ink">
                      <ProductTitle title={product.title} accentSuffix={product.accentSuffix} />
                    </h2>
                  </div>

                  <p className="text-lg leading-relaxed text-bc-ink/90">{product.description}</p>

                  {product.longDescription && (
                    <div className="mt-6 space-y-4">
                      {product.longDescription.map((paragraph, index) => (
                        <p
                          key={`paragraph-${product.slug}-${index}`}
                          className="leading-relaxed text-bc-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {product.features && (
                    <div className="mt-8 rounded-2xl border bc-hairline bg-bc-panel p-7">
                      <span className="bc-eyebrow">Key features</span>
                      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {product.features.map((feature, index) => (
                          <li
                            key={`feature-${product.slug}-${index}`}
                            className="flex items-start gap-2.5 text-[0.94rem] text-bc-ink/80"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-bc-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8">
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-bc-accent px-6 py-3 text-[0.95rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
                      >
                        Learn more about {product.title}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 rounded-full border bc-hairline px-6 py-3 text-[0.95rem] font-medium text-bc-ink transition-colors hover:border-bc-accent/40 hover:text-bc-accent"
                      >
                        Get in touch about {product.title}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="rounded-3xl border bc-hairline bg-bc-panel p-8">
              <span className="bc-eyebrow">Support & engagement</span>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Long-term support for existing customers",
                  "Selective new deployments where there's strategic fit",
                  "Migration paths to AI-native custom systems",
                  "Compliance, security, and integration best practices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-bc-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bc-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
