"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

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
        `Evals / Guardrails: ${txt("evals") }\n` +
        `\nSystems & Data\n` +
        `Data Sources & Access: ${txt("data_sources")}\n` +
        `Integrations: ${txt("integrations")}\n` +
        `Security/Compliance: ${checklist("compliance")} ${txt("compliance_other")}\n` +
        `Deployment Pref: ${txt("deployment")}\n` +
        `IP / Licensing Requirements: ${txt("ip_requirements")}\n` +
        `Links / Artifacts: ${txt("links")}\n` +
        `\nNDA Required: ${txt("nda") === "on" ? "Yes" : "No"}\n` +
        `MoU Trial Terms Accepted: ${txt("mou") === "on" ? "Yes" : "No"}`;

      // Prepare JSON payload for server-side email
      const payload: Record<string, any> = {};
      data.forEach((value, key) => {
        if (payload[key]) {
          // consolidate repeated keys (checkbox groups)
          payload[key] = Array.isArray(payload[key]) ? [...payload[key], value] : [payload[key], value];
        } else {
          payload[key] = value;
        }
      });

      // Attempt server-side send via Resend API route
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
          // Non-JSON or unexpected response; fallback to be safe
          shouldFallback = true;
        }
      }

      if (shouldFallback) {
        try {
          const info = await res.json();
          console.warn("/api/trial server send failed:", info?.error || res.statusText);
        } catch (_) {
          console.warn("/api/trial server send failed with status:", res.status, res.statusText);
        }
        // Fallback to EmailJS client send if server route fails
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
      alert("Thanks! We’ve received your request. Our team will reach out shortly.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again or email jagdish@botcode.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Start 90‑Day Build Trial</h1>
            <p className="text-xl">Tell us about your AI‑native project. We’ll sign an MoU and deliver a production‑grade slice in 90 days.</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Company */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Company</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name *</label>
                    <Input name="company_name" required placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <Input name="company_website" type="url" placeholder="https://example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Industry</label>
                    <Input name="industry" placeholder="Finance, Retail, Healthcare, etc." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Region/Country</label>
                      <Input name="region" placeholder="US, EU, India, etc." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Timezone</label>
                      <Input name="timezone" placeholder="UTC−5, UTC+1, IST, etc." />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Primary Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <Input name="contact_name" required placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Work Email *</label>
                    <Input name="work_email" type="email" required placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role / Title</label>
                    <Input name="contact_title" placeholder="VP Engineering" />
                  </div>
                </div>
              </div>

              {/* Project */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Title *</label>
                    <Input name="project_title" required placeholder="AI‑native customer support automation" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Timeline</label>
                      <select name="timeline" className="w-full border rounded-md h-10 px-3">
                        <option value="90 days">90 days</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="> 6 months">&gt; 6 months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Budget Range (USD)</label>
                      <select name="budget" className="w-full border rounded-md h-10 px-3">
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
                    <label className="block text-sm font-medium mb-1">Project Summary *</label>
                    <Textarea name="project_summary" required placeholder="What are we building and why? Who are the users?" className="min-h-[120px]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Objectives / Success Criteria</label>
                    <Textarea name="objectives" placeholder="KPIs, quality targets, time/cost goals" className="min-h-[100px]" />
                  </div>
                </div>
              </div>

              {/* AI Scope */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">AI Scope</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Capabilities</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { v: "RAG", l: "Retrieval Augmented Generation (RAG)" },
                        { v: "function-calling", l: "Function Calling / Tool Use" },
                        { v: "agents", l: "Single/Multi‑Agent Orchestration" },
                        { v: "workflows", l: "Workflow Automation" },
                        { v: "hitl", l: "Human‑in‑the‑Loop" },
                        { v: "evals", l: "Evals / Guardrails" },
                        { v: "mlops", l: "MLOps / Monitoring" },
                        { v: "data-pipelines", l: "Data Pipelines" },
                      ].map((o) => (
                        <label key={o.v} className="flex items-center gap-2 text-sm">
                          <input type="checkbox" name="ai_scope" value={o.v} /> {o.l}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">HITL Needs</label>
                      <Textarea name="hitl_needs" placeholder="Review queues, SLAs, approval flows" className="min-h-[80px]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Evals / Guardrails</label>
                      <Textarea name="evals" placeholder="Quality metrics, thresholds, safety constraints" className="min-h-[80px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Systems & Data */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Systems & Data</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Data Sources & Access</label>
                    <Textarea name="data_sources" placeholder="Where is the data? How do we access it?" className="min-h-[100px]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Integrations</label>
                    <Textarea name="integrations" placeholder="CRMs, ERPs, data warehouses, internal systems" className="min-h-[100px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Security / Compliance</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { v: "SOC2", l: "SOC 2" },
                        { v: "HIPAA", l: "HIPAA" },
                        { v: "ISO27001", l: "ISO 27001" },
                        { v: "GDPR", l: "GDPR" },
                      ].map((o) => (
                        <label key={o.v} className="flex items-center gap-2 text-sm">
                          <input type="checkbox" name="compliance" value={o.v} /> {o.l}
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Input name="compliance_other" placeholder="Other (optional)" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Deployment Preference</label>
                    <select name="deployment" className="w-full border rounded-md h-10 px-3">
                      <option value="cloud-azure">Cloud — Azure</option>
                      <option value="cloud-aws">Cloud — AWS</option>
                      <option value="cloud-gcp">Cloud — GCP</option>
                      <option value="on-prem">On‑prem</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">IP / Licensing Requirements</label>
                    <Textarea name="ip_requirements" placeholder="IP ownership, licensing, data residency" className="min-h-[80px]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Links / Artifacts</label>
                    <Textarea name="links" placeholder="Docs, designs, repos, demos" className="min-h-[80px]" />
                  </div>
                </div>
              </div>

              {/* Legal / Submit */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="nda" /> NDA required
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="mou" required /> I agree to proceed with a 90‑day trial under an MoU
                </label>
                <div className="pt-2">
                  <Button type="submit" disabled={sending}>
                    {sending ? "Submitting..." : "Submit 90‑Day Trial Request"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
