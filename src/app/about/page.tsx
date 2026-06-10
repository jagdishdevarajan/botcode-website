import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { MapPin, Mail } from "lucide-react";

export default function AboutPage() {
  const history = [
    "BotCode was founded when conversational AI was barely an idea. As one of the first bot-building companies in India, we've built platforms across education, wellness, and enterprise automation — giving us deep cross-industry experience as we now focus fully on AI-native systems.",
    "Started in 2007, BotCode specializes in delivering customized IT solutions for international clients, counting among its customers some of the world's most respected innovators in travel, retail, and social media.",
    "BotCode began as a Data Bot company in 2005, delivering large-scale web data operations for Fortune 500 brands during the Web 2.0 era — building numerous front ends for major US brands through 2016.",
    "In 2016, BotCode and partners created a Social CRM platform for WeChat, enabling marquee customers to reach the Chinese audience.",
    "BotCode is now a Bot and Data company with AI at the heart of all its initiatives.",
  ];

  const focus = [
    {
      name: "AXONS",
      desc: "Medical algorithms to decipher disease, democratizing AI at the point of healthcare delivery.",
    },
    {
      name: "FirstClinic",
      desc: "The first point of medical care — patient safety and convenience with their own medical data, integrated with AXONS.",
    },
  ];

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="About"
          title="AI-native software for global enterprises"
          subtitle="Two decades of building bots and data systems — now fully focused on agent-orchestrated software."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-4xl px-6">
            <span className="bc-eyebrow">Our history</span>
            <div className="mt-6 space-y-5">
              {history.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-bc-muted">
                  {para}
                </p>
              ))}
            </div>

            {/* Mission */}
            <div className="mt-14 rounded-3xl border bc-hairline bg-bc-card p-8">
              <span className="bc-eyebrow">Our mission</span>
              <p className="mt-5 text-lg leading-relaxed text-bc-ink/90">
                To leverage artificial intelligence and machine learning to revolutionize
                healthcare delivery — making it more accessible, efficient, and effective for
                both providers and patients.
              </p>
              <p className="mt-5 leading-relaxed text-bc-muted">
                We utilize the sharpest talent from where it makes the best economic sense,
                serving you with the least acceptable risk. The majority of our revenue comes
                from existing customers — a testament to long-term client relationships.
              </p>
            </div>

            {/* Strategic focus */}
            <h2 className="font-display mt-16 text-3xl font-semibold tracking-tight text-bc-ink">
              Strategic focus
            </h2>
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {focus.map((f) => (
                <div
                  key={f.name}
                  className="rounded-3xl border bc-hairline bg-bc-card p-7"
                >
                  <div className="font-display text-xl font-semibold text-bc-accent">
                    {f.name}
                  </div>
                  <p className="mt-3 leading-relaxed text-bc-muted">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-14 rounded-3xl border bc-hairline bg-bc-panel p-8">
              <span className="bc-eyebrow">Find us</span>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bc-accent" strokeWidth={1.6} />
                  <p className="leading-relaxed text-bc-ink/90">
                    DevaDropa, No 7, Krishna Street, Nungambakkam, Chennai 600 034, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-bc-accent" strokeWidth={1.6} />
                  <a
                    href="mailto:admin@botcode.com"
                    className="text-bc-ink/90 transition-colors hover:text-bc-accent"
                  >
                    admin@botcode.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
