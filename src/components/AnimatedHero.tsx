'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Stethoscope,
  GraduationCap,
  Building2,
  Database,
  AudioLines,
  Hexagon,
  ArrowRight,
} from 'lucide-react';

type Node = {
  id: string;
  label: string;
  x: number; // 0..100 viewBox space
  y: number;
  Icon: typeof Stethoscope;
  pulse?: boolean;
  pulseDelay?: number;
};

const NODES: Node[] = [
  { id: 'health', label: 'Healthcare', x: 19, y: 19, Icon: Stethoscope, pulse: true, pulseDelay: 0 },
  { id: 'edu', label: 'Education', x: 82, y: 15, Icon: GraduationCap, pulse: true, pulseDelay: 0.9 },
  { id: 'ent', label: 'Enterprise', x: 87, y: 57, Icon: Building2 },
  { id: 'data', label: 'RAG / Data', x: 58, y: 86, Icon: Database, pulse: true, pulseDelay: 1.8 },
  { id: 'voice', label: 'Voice agents', x: 14, y: 63, Icon: AudioLines },
];

const CENTER = { x: 50, y: 50 };

export function AnimatedHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bc-canvas bc-grain">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bc-grid opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[640px] w-[640px] bc-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-32 lg:pt-28">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border bc-hairline bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bc-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bc-accent" />
            </span>
            <span className="bc-eyebrow">AI-native software studio</span>
          </motion.div>

          <h1 className="font-display mt-7 text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-bc-ink sm:text-6xl lg:text-[4.1rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              AI-native software,
            </motion.span>
            <motion.span
              className="block bc-gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              built by agent teams.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-bc-muted"
          >
            We design and ship custom systems where orchestrated agents do the heavy
            lifting and humans stay in the loop. Production-grade results across
            healthcare, education, and enterprise — in a fraction of the time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/trial"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-bc-accent px-7 py-3.5 text-[0.95rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
            >
              Start a 90-day build
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border bc-hairline px-7 py-3.5 text-[0.95rem] font-medium text-bc-ink transition-colors hover:bg-white/[0.04]"
            >
              Explore products
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t bc-hairline pt-7"
          >
            {[
              { v: '6+', l: 'Products shipped' },
              { v: '90-day', l: 'Build trials' },
              { v: 'Human', l: 'In the loop' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-semibold text-bc-ink">{s.v}</div>
                <div className="font-mono mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-bc-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — orchestration network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[480px]"
        >
          <OrchestrationNetwork reduce={!!reduce} />
        </motion.div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bc-canvas" />
    </section>
  );
}

function OrchestrationNetwork({ reduce }: { reduce: boolean }) {
  return (
    <div className="absolute inset-0">
      {/* SVG layer: connections, rings, traveling pulses */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c5f955" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c5f955" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* concentric guide rings */}
        {[20, 31, 42].map((r, i) => (
          <circle
            key={r}
            cx={CENTER.x}
            cy={CENTER.y}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={0.25}
            vectorEffect="non-scaling-stroke"
            strokeDasharray={i === 2 ? '1.4 2.2' : undefined}
          />
        ))}

        {/* rotating telemetry ring */}
        {!reduce && (
          <motion.circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={31}
            fill="none"
            stroke="rgba(197,249,85,0.28)"
            strokeWidth={0.4}
            strokeDasharray="0.5 5"
            vectorEffect="non-scaling-stroke"
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* edges */}
        {NODES.map((n, i) => (
          <motion.line
            key={`edge-${n.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={0.4}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
          />
        ))}

        {/* traveling pulses — agents reporting to the core */}
        {!reduce &&
          NODES.filter((n) => n.pulse).map((n) => (
            <motion.circle
              key={`pulse-${n.id}`}
              r={0.9}
              fill="#c5f955"
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{
                cx: [n.x, CENTER.x],
                cy: [n.y, CENTER.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.4,
                delay: 1.4 + (n.pulseDelay ?? 0),
                repeat: Infinity,
                repeatDelay: 1.1,
                ease: 'easeInOut',
              }}
            />
          ))}

        <circle cx={CENTER.x} cy={CENTER.y} r={16} fill="url(#coreGlow)" />
      </svg>

      {/* HTML node chips */}
      {NODES.map((n, i) => (
        <NodeChip key={n.id} node={n} index={i} />
      ))}

      {/* Core node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {!reduce && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-2xl bg-bc-accent/30 blur-md"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <div className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-2xl border border-bc-accent/40 bg-gradient-to-b from-[#1a1f12] to-[#0e1108] shadow-[0_0_30px_-4px_rgba(197,249,85,0.5)]">
          <Hexagon className="h-6 w-6 text-bc-accent" strokeWidth={1.5} />
          <span className="font-mono mt-1 text-[0.52rem] uppercase tracking-[0.14em] text-bc-accent">
            core
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function NodeChip({ node, index }: { node: Node; index: number }) {
  const { Icon } = node;
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="group flex flex-col items-center gap-1.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border bc-hairline bg-bc-card/90 backdrop-blur-sm transition-colors hover:border-bc-accent/50">
          <Icon className="h-5 w-5 text-bc-ink" strokeWidth={1.5} />
        </div>
        <span className="font-mono whitespace-nowrap text-[0.6rem] uppercase tracking-[0.12em] text-bc-muted">
          {node.label}
        </span>
      </div>
    </motion.div>
  );
}
