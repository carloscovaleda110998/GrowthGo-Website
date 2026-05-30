'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { WHATSAPP_URL } from '@/lib/constants'
import {
  Eye,
  Target,
  Star,
  Handshake,
  Zap,
  Search,
  Rocket,
  TrendingUp,
  ArrowRight,
  DollarSign,
  Users,
  BarChart3,
  Globe,
  CheckCircle2,
  Building2,
  MapPin,
} from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
/* ──────────────────────────── animation helpers ──────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

/* ────────────────────── animated counter component ───────────────────────── */

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/* ═══════════════════════════ SECTION 1 — HERO ═══════════════════════════ */

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E3A8A]">
      {/* Decorative blur orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#2563EB]/[0.08] blur-[120px]" />
        <div className="absolute top-1/2 -right-20 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#10B981]/[0.05] blur-[80px]" />

        {/* Grid overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] right-[8%] h-20 w-20 rounded-lg border border-white/[0.06] rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[25%] left-[6%] h-14 w-14 rounded-full border border-white/[0.04] hidden lg:block"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 pt-36 sm:px-6 sm:pt-40 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
            >
              ABOUT US
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Your Strategic Growth Partner in{' '}
            <span className="gradient-text">Real Estate &amp; Mortgage</span>
          </motion.h1>

          {/* Subtitle 1 */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed"
          >
            GrowthGo is a company specialized in providing comprehensive solutions for
            Realtors, Loan Officers, and professionals in the Real Estate &amp;
            Mortgage ecosystem.
          </motion.p>

          {/* Subtitle 2 */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            We are not just a service provider. We are a strategic extension of our
            clients' commercial team.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

/* ═══════════════════════ SECTION 2 — PURPOSE / MISSION ═══════════════════════ */

const benefits = [
  {
    icon: Eye,
    title: 'Increase market visibility',
    target: 95,
    suffix: '%',
    color: '#2563EB',
  },
  {
    icon: Target,
    title: 'Attract more opportunities',
    target: 3,
    suffix: 'x',
    color: '#10B981',
  },
  {
    icon: Star,
    title: 'Strengthen personal brand',
    target: 94,
    suffix: '%',
    color: '#F59E0B',
  },
  {
    icon: Handshake,
    title: 'Build strategic value relationships',
    target: 50,
    suffix: '+',
    color: '#06B6D4',
  },
  {
    icon: Zap,
    title: 'Improve operational efficiency',
    target: 60,
    suffix: '%',
    color: '#8B5CF6',
  },
]

function PurposeSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
          >
            OUR PURPOSE
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Our <span className="text-[#2563EB]">Purpose</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            We help our clients build a sustainable growth system that allows them to:
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={itemVariants}
                className="group relative rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-transparent text-center"
              >
                {/* Accent top border on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: b.color }}
                />

                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${b.color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: b.color }} />
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] mb-3">{b.title}</h3>

                <p
                  className="text-3xl font-extrabold"
                  style={{ color: b.color }}
                >
                  <AnimatedCounter target={b.target} suffix={b.suffix} />
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════ SECTION 3 — REMOTE MODEL ═══════════════════ */

function RemoteModelSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#06B6D4]/20 bg-[#06B6D4]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#06B6D4]"
          >
            REMOTE MODEL
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            High-Value{' '}
            <span className="text-[#06B6D4]">Remote Model</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 sm:p-10 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#06B6D4]/20">
                    <MapPin className="h-5 w-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">GrowthGo</h3>
                    <p className="text-sm text-slate-400">Colombia → United States</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8">
                  Highly trained bilingual talent from Colombia
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-[#10B981]" />
                      <span className="text-xs text-slate-400 uppercase tracking-wider">
                        Savings
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-white">
                      <AnimatedCounter target={50} suffix="%" />
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      in operational costs vs local hiring in the US
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-[#2563EB]" />
                      <span className="text-xs text-slate-400 uppercase tracking-wider">
                        Team
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Specialized in marketing, sales, and commercial support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-dark rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#06B6D4]/20">
                  <Globe className="h-4 w-4 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Remote</p>
                  <p className="text-sm font-bold text-white">High Value</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
              We work from Colombia to boost your business in{' '}
              <span className="text-[#06B6D4]">the United States</span>
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
              We work with a remote model from Colombia, which allows us to offer
              highly trained talent in marketing, sales, and commercial support at a
              much more efficient cost than hiring local staff in the United States,
              without sacrificing quality, professionalism, or results.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Bilingual team with mastery of the US market',
                'No office, benefits, or payroll tax costs in the US',
                'Standardized professional tools and processes',
                'Seamless communication in your time zone',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ SECTION 4 — PROCESS (4 STEPS) ═══════════════════ */

const processSteps = [
  {
    number: 1,
    title: 'Initial Diagnosis',
    description:
      'We analyze the current state of the brand, commercial operations, and specific business needs.',
    icon: Search,
  },
  {
    number: 2,
    title: 'Strategy Definition',
    description:
      'We design a clear work roadmap based on the client\'s objectives: positioning, lead generation, follow-up, or scaling.',
    icon: Target,
  },
  {
    number: 3,
    title: 'Execution & Support',
    description:
      'We implement the service with a specialized remote team that works in a coordinated and results-focused manner.',
    icon: Rocket,
  },
  {
    number: 4,
    title: 'Follow-Up & Optimization',
    description:
      'We measure progress, adjust processes, and continuously improve to ensure real and sustained growth.',
    icon: TrendingUp,
  },
]

function ProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
          >
            OUR PROCESS
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How We <span className="text-[#2563EB]">Work</span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 hidden lg:block"
        >
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-[2.75rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-0.5">
              <div className="h-full w-full border-t-2 border-dashed border-[#2563EB]/30" />
            </div>

            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative z-10 flex w-1/4 flex-col items-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] shadow-lg shadow-[#2563EB]/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Step card */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#2563EB]/20">
                    <h3 className="mb-2 text-center text-lg font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                    <p className="text-center text-sm leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-[2.75rem] -right-[12.5%] z-20">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-[#2563EB]/40"
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 lg:hidden"
        >
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-[2.25rem] w-0.5 border-l-2 border-dashed border-[#2563EB]/30" />

            <div className="space-y-8">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative flex gap-5"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] shadow-lg shadow-[#2563EB]/25">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20">
                        {step.number}
                      </span>
                    </div>

                    {/* Step card */}
                    <div className="flex-1 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
                      <h3 className="mb-2 text-lg font-bold text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════ SECTION 5 — CORE VALUES ═══════════════════ */

const coreValues = [
  {
    icon: Building2,
    title: 'Real Specialization',
    description:
      'We understand the language, challenges, and commercial dynamics of Realtors and Loan Officers',
    accentColor: '#2563EB',
  },
  {
    icon: Globe,
    title: 'Efficient Remote Team',
    description:
      'Talent trained in marketing, sales, and commercial support from Colombia',
    accentColor: '#06B6D4',
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description:
      'Up to 50% in operational costs vs traditional structures in the US',
    accentColor: '#10B981',
  },
  {
    icon: BarChart3,
    title: 'Results Focus',
    description:
      "We don't just create posts, we build real growth systems",
    accentColor: '#F59E0B',
  },
  {
    icon: Rocket,
    title: 'Scalability',
    description:
      'We support you through different growth stages, from targeted support to complete structures',
    accentColor: '#8B5CF6',
  },
]

function ValuesSection() {
  return (
    <section className="relative bg-[#0F172A] py-20 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#60A5FA]"
          >
            OUR VALUES
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Different
            </span>
          </h2>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
              >
                {/* Subtle hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.accentColor}08, transparent 40%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${item.accentColor}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: item.accentColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════ SECTION 6 — VISION CTA ═══════════════════ */

function VisionCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] py-24 sm:py-32">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#10B981]"
          >
            OUR VISION
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Our Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          Helping our clients scale without losing control, professionalism, or
          profitability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#2563EB] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30 hover:scale-[1.02]"
            >
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════ MAIN PAGE EXPORT ═══════════════════════ */

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <PurposeSection />
        <RemoteModelSection />
        <ProcessSection />
        <ValuesSection />
        <VisionCTASection />
      </main>
      <Footer onOpenAdmin={() => {}} />
    </div>
  )
}
