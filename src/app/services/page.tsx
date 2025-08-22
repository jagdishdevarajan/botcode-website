import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  const healthProducts = products.filter((p) => !["schoolskies", "questionair"].includes(p.slug));
  const services = [
    {
      title: "AI‑Native Application Development",
      desc: "Design, build, and ship custom software where AI is core—not an add‑on. Retrieval, orchestration, agents, and evaluation baked in.",
      bullets: [
        "Architecture & platform selection",
        "RAG, function calling, tool‑use, multi‑agent patterns",
        "Guardrails, evals, and safety",
      ],
    },
    {
      title: "Human‑in‑the‑Loop (HITL) Delivery",
      desc: "Operationalize AI with expert review loops and measurable quality gates for accuracy‑critical workflows.",
      bullets: [
        "Domain expert review queues",
        "Quality metrics and dashboards",
        "Escalation policies and SLAs",
      ],
    },
    {
      title: "Modernization & SaaS‑to‑Custom Migration",
      desc: "Reduce TCO and unlock differentiation by migrating from rigid SaaS to owned, flexible systems with full IP.",
      bullets: [
        "TCO analysis & roadmap",
        "Data extraction & integration",
        "Progressive replacement strategies",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Services</h1>
            <p className="text-xl">AI‑native software, built for speed, quality, and ownership.</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <Card key={s.title}>
                  <CardHeader>
                    <CardTitle>{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{s.desc}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gray-50 border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-3">Risk‑free 90‑day build trial</h2>
              <p className="text-gray-700 mb-6">We sign an MoU, deliver a production‑grade slice in 90 days. If it hits the mark, we scale as your AI‑native vendor of record.</p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/trial">Start 90‑Day Trial</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog/the-new-era-of-tech-arbitrage">Read our POV</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold mb-2">Healthcare suite</h2>
            <p className="text-gray-700 mb-8">Our healthcare suite includes proven solutions used by providers and organizations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthProducts.map((p) => {
                const isIdeation = p.slug === "chennai-health" || p.slug === "iamai-health";
                return (
                  <Card
                    key={p.slug}
                    className={isIdeation ? "border-amber-300 bg-amber-50" : undefined}
                  >
                    <CardHeader className="flex-row items-start justify-between">
                      <CardTitle>{p.title}</CardTitle>
                      {isIdeation && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          <span aria-hidden>💡</span> Ideation
                        </span>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{p.description}</p>
                      <Button asChild variant="outline">
                        <Link href={`/products#${p.slug}`}>Learn more</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
