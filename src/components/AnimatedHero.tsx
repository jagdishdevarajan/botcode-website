'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Agent {
  id: string;
  label: string;
  icon: string;
  color: string;
  x: number;
  y: number;
}

const agents: Agent[] = [
  { id: 'ai', label: 'Core AI', icon: '🤖', color: 'from-blue-500 to-blue-600', x: 0, y: 0 },
  { id: 'health', label: 'Healthcare', icon: '🏥', color: 'from-green-500 to-green-600', x: -150, y: -100 },
  { id: 'analytics', label: 'Analytics', icon: '📊', color: 'from-purple-500 to-purple-600', x: 150, y: -100 },
  { id: 'learning', label: 'Learning', icon: '📚', color: 'from-orange-500 to-orange-600', x: -120, y: 120 },
  { id: 'integration', label: 'Integration', icon: '🔗', color: 'from-cyan-500 to-cyan-600', x: 120, y: 120 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const agentVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.6,
    transition: {
      duration: 2,
      delay: 0.5,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

export function AnimatedHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-blue-500 h-[750px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              AI‑Native Systems,{' '}
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Built by Agents
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
            >
              Multi-agent systems delivering custom software with human-in-the-loop assurance. 90-day build trials, full IP ownership, and production-grade results across healthcare, education, and enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold"
              >
                <Link href="/trial">Start 90‑Day Trial</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-sm text-blue-100">Products in Pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">90 Days</div>
                <div className="text-sm text-blue-100">Production Build</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Agent Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center h-[500px]"
          >
            <div className="relative w-80 h-80">
              {/* SVG Connections */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                {/* Lines connecting agents */}
                {agents.map((agent, idx) => (
                  <motion.line
                    key={`line-${idx}`}
                    x1="200"
                    y1="200"
                    x2={200 + agent.x}
                    y2={200 + agent.y}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Agent */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={floatVariants}
                initial="initial"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-xl"
                  animate={pulseVariants}
                  initial="initial"
                >
                  <span className="text-4xl">🧠</span>
                </motion.div>
              </motion.div>

              {/* Satellite Agents */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0"
              >
                {agents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      x: agent.x,
                      y: agent.y,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                    }}
                    variants={agentVariants}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg border-2 border-white/30`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <span className="text-3xl">{agent.icon}</span>
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white text-center">
                      {agent.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Orbiting particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-cyan-300"
                  animate={{
                    x: Math.cos((i * 120 + Date.now() / 1000) * 0.001) * 200,
                    y: Math.sin((i * 120 + Date.now() / 1000) * 0.001) * 200,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  initial={{
                    x: Math.cos(i * 120) * 200,
                    y: Math.sin(i * 120) * 200,
                  }}
                  style={{ left: '50%', top: '50%', marginLeft: -4, marginTop: -4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
