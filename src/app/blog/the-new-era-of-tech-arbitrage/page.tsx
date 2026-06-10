import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Post() {
  const points = [
    "Shift from cost-only outsourcing to AI-native capability arbitrage for speed, quality, and IP control.",
    "AI works best as augmentation: human-in-the-loop, evals, and guardrails drive reliable outcomes.",
    "SaaS TCO vs custom: parity ~year 3; custom often saves 30–40% in five years and enables differentiation.",
    "India's advantage: deep AI talent, cost efficiency, and growing infrastructure (mission-led, GCC-backed).",
    "Engagement model: 90-day MoU trial to ship a production slice, then scale as vendor of record.",
    "Partner criteria: AI-native expertise, domain depth, measurable value, and human-AI integration.",
  ];

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Article"
          title="The New Era of Tech Arbitrage"
          subtitle="From cost-driven outsourcing to AI-native acceleration — an enterprise perspective on AI-native development, HITL delivery, and SaaS-to-custom migration."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-3xl border bc-hairline bg-bc-card p-8">
              <span className="bc-eyebrow">Summary</span>
              <ul className="mt-6 space-y-3.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 leading-relaxed text-bc-ink/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-bc-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-bc-accent px-6 py-3 text-[0.9rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
                >
                  Start a 90-day build
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://www.linkedin.com/pulse/new-era-tech-arbitrage-from-cost-driven-outsourcing-jagdish-devarajan-pbw0c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border bc-hairline px-6 py-3 text-[0.9rem] font-medium text-bc-ink transition-colors hover:bg-white/[0.04]"
                >
                  Read on LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="font-mono text-sm uppercase tracking-[0.12em] text-bc-muted transition-colors hover:text-bc-accent"
              >
                ← Back to blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
