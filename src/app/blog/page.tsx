import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

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
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl">Perspectives on AI‑native software and modern delivery.</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            {posts.map((p) => (
              <article key={p.slug} className="border rounded-lg p-6 hover:shadow-sm transition">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="text-gray-700">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
