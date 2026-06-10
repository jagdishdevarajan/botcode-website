import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BlogIndex() {
  const posts = [
    {
      slug: "the-new-era-of-tech-arbitrage",
      title: "The New Era of Tech Arbitrage: From Cost-Driven Outsourcing to AI-Native Acceleration",
      excerpt:
        "Why AI-native custom software beats SaaS on speed, cost, and differentiation—and how enterprises can adopt a 90-day build trial to de-risk adoption.",
    },
  ];

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Writing"
          title="Perspectives on AI-native software"
          subtitle="Notes on agent orchestration, modern delivery, and the economics of building with AI."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-4xl space-y-5 px-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-3xl border bc-hairline bg-bc-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bc-accent/40 hover:shadow-[0_0_50px_-12px_rgba(197,249,85,0.25)]"
              >
                <span className="bc-eyebrow">Article</span>
                <h2 className="font-display mt-3 text-2xl font-semibold text-bc-ink">
                  {p.title}
                </h2>
                <p className="mt-3 leading-relaxed text-bc-muted">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-bc-ink transition-colors group-hover:text-bc-accent">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
