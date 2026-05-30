'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Users, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { WHATSAPP_URL } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const dashboardMetrics = [
  { label: 'Leads This Month', value: '47', change: '+12%', icon: Users },
  { label: 'Follow-up Rate', value: '94%', change: '+8%', icon: Phone },
  { label: 'Appointments Set', value: '23', change: '+15%', icon: Calendar },
]

function BackgroundMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.07] blur-[120px]" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/[0.05] blur-[100px]" />
      <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-[#10B981]/[0.04] blur-[80px]" />

      {/* Geometric grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[10%] w-20 h-20 border border-white/[0.06] rounded-lg rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] left-[8%] w-16 h-16 border border-white/[0.04] rounded-full hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[60%] right-[25%] w-3 h-3 bg-[#2563EB]/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[25%] left-[20%] w-2 h-2 bg-[#06B6D4]/20 rounded-full hidden lg:block"
      />
    </div>
  )
}

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-dark rounded-2xl p-6 shadow-2xl max-w-[320px]"
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-medium text-slate-400">Live Dashboard</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Updated just now</span>
        </div>

        {/* Metrics */}
        <div className="space-y-4">
          {dashboardMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]/10">
                  <metric.icon className="h-4 w-4 text-[#2563EB]" />
                </div>
                <span className="text-sm text-slate-400">{metric.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">{metric.value}</span>
                <span className="flex items-center text-[11px] font-medium text-[#10B981]">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  {metric.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini chart placeholder */}
        <div className="mt-5 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-500">Lead Trend</span>
            <span className="text-xs text-[#10B981] font-medium">+24% this week</span>
          </div>
          <svg viewBox="0 0 260 50" className="w-full h-auto">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 L20,38 L40,35 L60,30 L80,32 L100,25 L120,22 L140,18 L160,20 L180,15 L200,12 L220,8 L240,10 L260,5"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,40 L20,38 L40,35 L60,30 L80,32 L100,25 L120,22 L140,18 L160,20 L180,15 L200,12 L220,8 L240,10 L260,5 L260,50 L0,50 Z"
              fill="url(#chartGradient)"
            />
          </svg>
        </div>
      </motion.div>

      {/* Glow behind the card */}
      <div className="absolute -inset-4 bg-[#2563EB]/[0.08] blur-3xl rounded-3xl -z-10" />
    </motion.div>
  )
}

const avatarColors = [
  'bg-[#2563EB]',
  'bg-[#06B6D4]',
  'bg-[#10B981]',
  'bg-[#8B5CF6]',
]

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B]">
      <BackgroundMesh />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 pt-28 sm:pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1.5 border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
              >
                <span className="text-base">🚀</span>
                Growth Partner for Real Estate &amp; Mortgage
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Scale Your Real Estate Business{' '}
              <span className="gradient-text">Smarter</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-400 sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Marketing, business development and operational support designed
              specifically for Realtors and Loan Officers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group relative h-12 px-8 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold shadow-lg shadow-[#2563EB]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/40 hover:scale-[1.02]"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                onClick={() => handleNavClick('#services')}
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Trust text with avatars */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={`h-7 w-7 rounded-full ${color} border-2 border-[#0F172A] flex items-center justify-center`}
                  >
                    <span className="text-[9px] font-bold text-white">
                      {['JD', 'AK', 'MR', 'SL'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Trusted by <span className="text-slate-300 font-medium">50+</span> real estate professionals
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Bottom fade to light section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  )
}
