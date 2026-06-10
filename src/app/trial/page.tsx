"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const fieldClass =
  "bg-white/[0.03] border-white/10 text-bc-ink placeholder:text-bc-muted/70 focus-visible:ring-bc-accent/40 focus-visible:ring-offset-0";
const selectClass =
  "w-full h-10 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm text-bc-ink focus:outline-none focus:ring-2 focus:ring-bc-accent/40";
const labelClass = "block text-sm font-medium mb-1.5 text-bc-ink/90";
const checkClass = "flex items-center gap-2 text-sm text-bc-ink/80";

export default function TrialPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    try {
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);

      const checklist = (name: string) => (data.getAll(name) as string[]).join(", ") || "-";
      const txt = (name: string) => (data.get(name) as string) || "-";

      const composedMessage = `90-Day Trial Request\n\n` +
        `Company: ${txt("company_name")}\n` +
        `Website: ${txt("company_website")}\n` +
        `Industry: ${txt("industry")}\n` +
        `Region / Timezone: ${txt("region")} / ${txt("timezone")}\n` +
        `Contact: ${txt("contact_name")} (${txt("contact_title")})\n` +
        `Work Email: ${txt("work_email")}\n` +
        `\nProject\n` +
        `Title: ${txt("project_title")}\n` +
        `Summary: ${txt("project_summary")}\n` +
        `Objectives / Success Criteria: ${txt("objectives")}\n` +
        `Timeline: ${txt("timeline")} | Budget: ${txt("budget")}\n` +
        `\nAI Scope\n` +
        `Capabilities: ${checklist("ai_scope")}\n` +
        `HITL Needs: ${txt("hitl_needs")}\n` +
        `Evals / Guardrails: ${txt("evals")}\n` +
        `\nSystems & Data\n` +
        `Data Sources & Access: ${txt("data_sources")}\n` +
        `Integrations: ${txt("integrations")}\n` +
        `Security/Compliance: ${checklist("compliance")} ${txt("compliance_other")}\n` +
        `Deployment Pref: ${txt("deployment")}\n` +
        `IP / Licensing Requirements: ${txt("ip_requirements")}\n` +
        `Links / Artifacts: ${txt("links")}\n` +
        `\nNDA Required: ${txt("nda") === "on" ? "Yes" : "No"}\n` +
        `MoU Trial Terms Accepted: ${txt("mou") === "on" ? "Yes" : "No"}`;

      const payload: Record<string, any> = {};
      data.forEach((value, key) => {
        if (payload[key]) {
          payload[key] = Array.isArray(payload[key]) ? [...payload[key], value] : [payload[key], value];
        } else {
          payload[key] = value;
        }
      });

      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let shouldFallback = !res.ok;
      if (!shouldFallback) {
        try {
          const info = await res.json();
          if (!info?.ok) {
            shouldFallback = true;
            console.warn("/api/trial server send responded ok=false:", info?.error);
          }
        } catch (e) {
          shouldFallback = true;
        }
      }

      if (shouldFallback) {
        const templateParams = {
          user_name: `${txt("company_name")} — ${txt("contact_name")}`,
          user_email: txt("work_email"),
          message: composedMessage,
          to_email: "jagdish@botcode.com",
        };

        await emailjs.send(
          "service_qcvklp7",
          "template_i55ifw1",
          templateParams,
          "UcqeuTFce-6RhMkoi"
        );
      }
      form.reset();
      alert("Thanks! We've received your request. Our team will reach out shortly.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again or email jagdish@botcode.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bc-dark">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="90-day build trial"
          title="Start a production-grade build"
          subtitle="Tell us about your AI-native project. We'll sign an MoU and deliver a production-grade slice in 90 days."
        />

        <section className="bg-bc-canvas py-20">
          <div className="mx-auto max-w-4xl px-6">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Company */}
              <FormSection title="Company">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Company Name *</label>
                    <Input name="company_name" required placeholder="Acme Inc." className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Website</label>
                    <Input name="company_website" type="url" placeholder="https://example.com" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Industry</label>
                    <Input name="industry" placeholder="Finance, Retail, Healthcare, etc." className={fieldClass} />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Region/Country</label>
                      <Input name="region" placeholder="US, EU, India, etc." className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Timezone</label>
                      <Input name="timezone" placeholder="UTC−5, IST, etc." className={fieldClass} />
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* Contact */}
              <FormSection title="Primary Contact">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <Input name="contact_name" required placeholder="Jane Doe" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Work Email *</label>
                    <Input name="work_email" type="email" required placeholder="jane@company.com" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Role / Title</label>
                    <Input name="contact_title" placeholder="VP Engineering" className={fieldClass} />
                  </div>
                </div>
              </FormSection>

              {/* Project */}
              <FormSection title="Project">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Project Title *</label>
                    <Input name="project_title" required placeholder="AI-native support automation" className={fieldClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select name="timeline" className={selectClass}>
                        <option value="90 days">90 days</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="> 6 months">&gt; 6 months</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Budget (USD)</label>
                      <select name="budget" className={selectClass}>
                        <option value="< 25k">&lt; 25k</option>
                        <option value="25k–75k">25k–75k</option>
                        <option value="75k–150k">75k–150k</option>
                        <option value="> 150k">&gt; 150k</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6">
                  <div>
                    <label className={labelClass}>Project Summary *</label>
                    <Textarea name="project_summary" required placeholder="What are we building and why? Who are the users?" className={`min-h-[120px] ${fieldClass}`} />
                  </div>
                  <div>
                    <label className={labelClass}>Objectives / Success Criteria</label>
                    <Textarea name="objectives" placeholder="KPIs, quality targets, time/cost goals" className={`min-h-[100px] ${fieldClass}`} />
                  </div>
                </div>
              </FormSection>

              {/* AI Scope */}
              <FormSection title="AI Scope">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-bc-ink/90">Capabilities</label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {[
                        { v: "RAG", l: "Retrieval (RAG)" },
                        { v: "function-calling", l: "Function Calling / Tool Use" },
                        { v: "agents", l: "Multi-Agent Orchestration" },
                        { v: "workflows", l: "Workflow Automation" },
                        { v: "hitl", l: "Human-in-the-Loop" },
                        { v: "evals", l: "Evals / Guardrails" },
                        { v: "mlops", l: "MLOps / Monitoring" },
                        { v: "data-pipelines", l: "Data Pipelines" },
                      ].map((o) => (
                        <label key={o.v} className={checkClass}>
                          <input type="checkbox" name="ai_scope" value={o.v} className="accent-[#c5f955]" /> {o.l}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className={labelClass}>HITL Needs</label>
                      <Textarea name="hitl_needs" placeholder="Review queues, SLAs, approval flows" className={`min-h-[80px] ${fieldClass}`} />
                    </div>
                    <div>
                      <label className={labelClass}>Evals / Guardrails</label>
                      <Textarea name="evals" placeholder="Quality metrics, thresholds, safety constraints" className={`min-h-[80px] ${fieldClass}`} />
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* Systems & Data */}
              <FormSection title="Systems & Data">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Data Sources & Access</label>
                    <Textarea name="data_sources" placeholder="Where is the data? How do we access it?" className={`min-h-[100px] ${fieldClass}`} />
                  </div>
                  <div>
                    <label className={labelClass}>Integrations</label>
                    <Textarea name="integrations" placeholder="CRMs, ERPs, data warehouses, internal systems" className={`min-h-[100px] ${fieldClass}`} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-bc-ink/90">Security / Compliance</label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {[
                        { v: "SOC2", l: "SOC 2" },
                        { v: "HIPAA", l: "HIPAA" },
                        { v: "ISO27001", l: "ISO 27001" },
                        { v: "GDPR", l: "GDPR" },
                      ].map((o) => (
                        <label key={o.v} className={checkClass}>
                          <input type="checkbox" name="compliance" value={o.v} className="accent-[#c5f955]" /> {o.l}
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Input name="compliance_other" placeholder="Other (optional)" className={fieldClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Deployment Preference</label>
                    <select name="deployment" className={selectClass}>
                      <option value="cloud-azure">Cloud — Azure</option>
                      <option value="cloud-aws">Cloud — AWS</option>
                      <option value="cloud-gcp">Cloud — GCP</option>
                      <option value="on-prem">On-prem</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6">
                  <div>
                    <label className={labelClass}>IP / Licensing Requirements</label>
                    <Textarea name="ip_requirements" placeholder="IP ownership, licensing, data residency" className={`min-h-[80px] ${fieldClass}`} />
                  </div>
                  <div>
                    <label className={labelClass}>Links / Artifacts</label>
                    <Textarea name="links" placeholder="Docs, designs, repos, demos" className={`min-h-[80px] ${fieldClass}`} />
                  </div>
                </div>
              </FormSection>

              {/* Legal / Submit */}
              <div className="space-y-4 rounded-3xl border bc-hairline bg-bc-card p-7">
                <label className={checkClass}>
                  <input type="checkbox" name="nda" className="accent-[#c5f955]" /> NDA required
                </label>
                <label className={checkClass}>
                  <input type="checkbox" name="mou" required className="accent-[#c5f955]" /> I agree to proceed with a 90-day trial under an MoU
                </label>
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={sending}
                    className="rounded-full bg-bc-accent px-7 py-3 font-semibold text-black hover:bg-bc-accent hover:shadow-[0_0_30px_-6px_rgba(197,249,85,0.6)]"
                  >
                    {sending ? "Submitting..." : "Submit 90-Day Trial Request"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border bc-hairline bg-bc-card p-7">
      <h2 className="font-display mb-5 text-xl font-semibold text-bc-ink">{title}</h2>
      {children}
    </div>
  );
}
