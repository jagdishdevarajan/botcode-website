'use client';

import { motion } from 'framer-motion';
import { Workflow, UserCheck, Rocket, ShieldCheck } from 'lucide-react';

const ITEMS = [
  {
    Icon: Workflow,
    title: 'Agent orchestration',
    body: 'Specialized agents plan, build, and review in parallel — coordinated by a shared core that keeps every workstream in sync.',
  },
  {
    Icon: UserCheck,
    title: 'Human in the loop',
    body: 'Engineers steer, verify, and sign off at every checkpoint. Speed of agents, judgment of people — never one without the other.',
  },
  {
    Icon: Rocket,
    title: '90-day build trials',
    body: 'We scope an outcome, ship a production-grade slice in 90 days, and prove value before you commit to scale.',
  },
  {
    Icon: ShieldCheck,
    title: 'Built for regulated work',
    body: 'HIPAA-aware architecture, auditable workflows, and on-prem or cloud deployment for healthcare and enterprise.',
  },
];

export function Capabilities() {
  return (
    <section className="relative bg-bc-panel py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bc-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="bc-eyebrow">How we build</span>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-bc-ink sm:text-5xl">
              A studio that runs on{' '}
              <span className="bc-gradient-text">agents</span>, not headcount.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-bc-muted">
              The same orchestration core behind our products powers every client
              engagement — so you get frontier velocity with enterprise rigor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border bc-hairline bg-white/[0.04] sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-bc-panel p-7 transition-colors hover:bg-bc-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border bc-hairline bg-bc-card transition-colors group-hover:border-bc-accent/50">
                  <item.Icon className="h-5 w-5 text-bc-accent" strokeWidth={1.6} />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-bc-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-bc-muted">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
