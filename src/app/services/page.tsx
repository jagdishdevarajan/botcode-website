import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";

export default function ServicesPage() {
  const healthProducts = products.filter((p) => !["schoolskies", "questionair"].includes(p.slug));
  const services = [
    {
      title: "AI-Native Application Development",
      desc: "Design, build, and ship custom software where AI is core—not an add-on. Retrieval, orchestration, agents, and evaluation baked in.",
      bullets: [
        "Architecture & platform selection",
        "RAG, function calling, tool-use, multi-agent patterns",
        "Guardrails, evals, and safety",
      ],
    },
    {
      title: "Human-in-the-Loop Delivery",
      desc: "Operationalize AI with expert review loops and measurable quality gates for accuracy-critical workflows.",
      bullets: [
        "Domain expert review queues",
        "Quality metrics and dashboards",
        "Escalation policies and SLAs",
      ],
    },
    {
      title: "SaaS-to-Custom Migration",
      desc: "Reduce TCO and unlock differentiation by migrating from rigid SaaS to owned, flexible systems with full IP.",
      bullets: [
        "TCO analysis & roadmap",
        "Data extraction & integration",
        "Progressive replacement strategies",
      ],
    },
  ];

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Services"
          title="AI-native software, built for speed, quality, and ownership."
          subtitle="We bring frontier velocity with enterprise rigor — from architecture to production, with humans in the loop."
        />

        {/* Service cards */}
        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="flex h-full flex-col rounded-3xl border bc-hairline bg-bc-card p-7"
                >
                  <span className="font-mono text-sm text-bc-accent">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-bc-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-bc-muted">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5 border-t bc-hairline pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-bc-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-bc-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial CTA */}
        <section className="bg-bc-canvas px-6 pb-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border bc-hairline bg-gradient-to-b from-bc-card to-bc-panel p-10">
            <div className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[360px] bc-glow" />
            <div className="relative">
              <span className="bc-eyebrow">Risk-free engagement</span>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-bc-ink">
                Risk-free 90-day build trial
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-bc-muted">
                We sign an MoU and deliver a production-grade slice in 90 days. If it hits the
                mark, we scale as your AI-native vendor of record.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-bc-accent px-7 py-3.5 text-[0.95rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
                >
                  Start a 90-day build
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/blog/the-new-era-of-tech-arbitrage"
                  className="inline-flex items-center justify-center rounded-full border bc-hairline px-7 py-3.5 text-[0.95rem] font-medium text-bc-ink transition-colors hover:bg-white/[0.04]"
                >
                  Read our POV
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare suite */}
        <section className="border-t border-white/10 bg-bc-panel py-20">
          <div className="mx-auto max-w-7xl px-6">
            <span className="bc-eyebrow">Healthcare suite</span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-bc-ink">
              Proven solutions in production
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-bc-muted">
              Our healthcare suite includes solutions used by providers and organizations.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {healthProducts.map((p) => {
                const isIdeation = p.slug === "chennai-health";
                return (
                  <div
                    key={p.slug}
                    className="flex h-full flex-col rounded-3xl border bc-hairline bg-bc-card p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-bc-ink">
                        {p.title}
                      </h3>
                      {isIdeation && (
                        <span className="font-mono shrink-0 rounded-full border border-bc-accent/30 bg-bc-accent/10 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-bc-accent">
                          Ideation
                        </span>
                      )}
                    </div>
                    <p className="mt-3 flex-grow text-[0.94rem] leading-relaxed text-bc-muted">
                      {p.description}
                    </p>
                    <Link
                      href={`/products#${p.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border bc-hairline px-4 py-2 text-sm font-medium text-bc-ink transition-colors hover:border-bc-accent/40 hover:text-bc-accent"
                    >
                      Learn more
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
