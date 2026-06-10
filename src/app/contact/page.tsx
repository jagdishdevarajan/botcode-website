"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const fieldClass =
  "bg-white/[0.03] border-white/10 text-bc-ink placeholder:text-bc-muted/70 focus-visible:ring-bc-accent/40 focus-visible:ring-offset-0";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const templateParams = {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        message: formData.get("message"),
        to_email: "admin@botcode.com",
      };

      await emailjs.send(
        "service_qcvklp7",
        "template_i55ifw1",
        templateParams,
        "UcqeuTFce-6RhMkoi"
      );
      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Tell us about your project, or just say hello. We usually reply within a day."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr]">
              {/* Form */}
              <div className="rounded-3xl border bc-hairline bg-bc-card p-8">
                <h2 className="font-display text-2xl font-semibold text-bc-ink">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-bc-ink/90">
                      Your name
                    </label>
                    <Input id="name" name="user_name" placeholder="Enter your name" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-bc-ink/90">
                      Email address
                    </label>
                    <Input id="email" name="user_email" type="email" placeholder="you@company.com" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-bc-ink/90">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      className={`min-h-[150px] ${fieldClass}`}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="rounded-full bg-bc-accent px-7 py-3 font-semibold text-black hover:bg-bc-accent hover:shadow-[0_0_30px_-6px_rgba(197,249,85,0.6)]"
                  >
                    {sending ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="rounded-3xl border bc-hairline bg-bc-panel p-7">
                  <span className="bc-eyebrow">Office</span>
                  <div className="mt-5 flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bc-accent" strokeWidth={1.6} />
                    <p className="leading-relaxed text-bc-ink/90">
                      DevaDropa<br />
                      No 7, Krishna Street,<br />
                      Nungambakkam<br />
                      Chennai 600 034, India
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border bc-hairline bg-bc-panel p-7">
                  <span className="bc-eyebrow">Email</span>
                  <div className="mt-5 flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-bc-accent" strokeWidth={1.6} />
                    <a
                      href="mailto:admin@botcode.com"
                      className="text-bc-ink/90 transition-colors hover:text-bc-accent"
                    >
                      admin@botcode.com
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border bc-hairline bg-bc-panel p-7">
                  <span className="bc-eyebrow">Connect</span>
                  <div className="mt-5 flex gap-3">
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full border bc-hairline text-bc-muted transition-colors hover:border-bc-accent/40 hover:text-bc-accent"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full border bc-hairline text-bc-muted transition-colors hover:border-bc-accent/40 hover:text-bc-accent"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
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
