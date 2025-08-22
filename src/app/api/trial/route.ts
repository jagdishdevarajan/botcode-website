import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Minimal fields used for subject/reply
    const company = String(body.company_name || "-");
    const contactName = String(body.contact_name || "-");
    const workEmail = String(body.work_email || "no-reply@botcode.com");
    const projectTitle = String(body.project_title || "-");

    const subject = `90-Day Trial Request: ${company} — ${projectTitle}`;

    const checklist = (v: unknown) => Array.isArray(v) ? (v as string[]).join(", ") : (typeof v === "string" && v ? v : "-");
    const txt = (v: unknown) => (typeof v === "string" && v.length ? v : "-");

    const text = `90-Day Trial Request\n\n`
      + `Company: ${txt(body.company_name)}\n`
      + `Website: ${txt(body.company_website)}\n`
      + `Industry: ${txt(body.industry)}\n`
      + `Region / Timezone: ${txt(body.region)} / ${txt(body.timezone)}\n`
      + `Contact: ${txt(contactName)} (${txt(body.contact_title)})\n`
      + `Work Email: ${txt(workEmail)}\n`
      + `\nProject\n`
      + `Title: ${txt(projectTitle)}\n`
      + `Summary: ${txt(body.project_summary)}\n`
      + `Objectives / Success Criteria: ${txt(body.objectives)}\n`
      + `Timeline: ${txt(body.timeline)} | Budget: ${txt(body.budget)}\n`
      + `\nAI Scope\n`
      + `Capabilities: ${checklist(body.ai_scope)}\n`
      + `HITL Needs: ${txt(body.hitl_needs)}\n`
      + `Evals / Guardrails: ${txt(body.evals)}\n`
      + `\nSystems & Data\n`
      + `Data Sources & Access: ${txt(body.data_sources)}\n`
      + `Integrations: ${txt(body.integrations)}\n`
      + `Security/Compliance: ${checklist(body.compliance)} ${txt(body.compliance_other)}\n`
      + `Deployment Pref: ${txt(body.deployment)}\n`
      + `IP / Licensing Requirements: ${txt(body.ip_requirements)}\n`
      + `Links / Artifacts: ${txt(body.links)}\n`
      + `\nNDA Required: ${body.nda ? "Yes" : "No"}\n`
      + `MoU Trial Terms Accepted: ${body.mou ? "Yes" : "No"}`;

    if (!resend) {
      // If no API key, return a helpful payload but 200 status so the client can fall back without logging 500s
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY not configured" }, { status: 200 });
    }

    const from = process.env.MAIL_FROM || "BotCode <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: ["jagdish@botcode.com"],
      replyTo: workEmail,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: String(error) }, { status: 200 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/trial POST error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
