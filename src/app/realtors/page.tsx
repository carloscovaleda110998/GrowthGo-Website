'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  PhoneCall,
  Share2,
  PenTool,
  Users,
  Database,
  Calendar,
  ArrowRight,
  Clock,
  MegaphoneOff,
  UserX,
  Handshake,
  Briefcase,
  DollarSign,
  Home,
  ChevronRight,
  Zap,
  TrendingUp,
  HeartHandshake,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

/* ───────────────────────────────────────────────
   Animation Variants
   ─────────────────────────────────────────────── */

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const staggerCard = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/* ───────────────────────────────────────────────
   Data
   ─────────────────────────────────────────────── */

const painPoints = [
  {
    icon: Clock,
    title: 'No Time for Content',
    description:
      "You're too busy showing homes and closing deals to consistently post on social media",
  },
  {
    icon: UserX,
    title: 'Leads Go Cold',
    description:
      'Without systematic follow-up, potential buyers slip away to competitors',
  },
  {
    icon: MegaphoneOff,
    title: 'Inconsistent Marketing',
    description:
      "Your online presence is sporadic and doesn't build the authority you need",
  },
  {
    icon: Handshake,
    title: 'No Referral Network',
    description:
      "You're missing out on the most powerful source of business: strategic partnerships",
  },
  {
    icon: Briefcase,
    title: 'Admin Overload',
    description:
      'CRM updates, scheduling, and pipeline management eat into your selling time',
  },
  {
    icon: DollarSign,
    title: 'Expensive Local Help',
    description:
      'Hiring a full-time assistant locally is costly and hard to scale',
  },
]

const solutions = [
  {
    icon: PhoneCall,
    title: 'Lead Generation & Follow-Up Systems',
    description:
      'Never let another lead go cold with systematic nurturing and quick response protocols',
    color: '#2563EB',
    bgLight: 'bg-blue-50',
    iconBg: 'bg-[#2563EB]',
  },
  {
    icon: Share2,
    title: 'Personal Brand Building & Social Media',
    description:
      'Build a consistent, authoritative online presence that positions you as the go-to agent in your market',
    color: '#06B6D4',
    bgLight: 'bg-cyan-50',
    iconBg: 'bg-[#06B6D4]',
  },
  {
    icon: PenTool,
    title: 'Content Creation That Attracts',
    description:
      'Professional content including video editing, graphics, and strategic planning — no need to be on camera',
    color: '#10B981',
    bgLight: 'bg-emerald-50',
    iconBg: 'bg-[#10B981]',
  },
  {
    icon: Users,
    title: 'Referral Network Development',
    description:
      'We connect you with Loan Officers and industry partners who send you qualified referrals',
    color: '#F59E0B',
    bgLight: 'bg-amber-50',
    iconBg: 'bg-amber-500',
  },
  {
    icon: Database,
    title: 'CRM Organization & Pipeline Management',
    description:
      'Keep your contacts organized and your pipeline actionable',
    color: '#8B5CF6',
    bgLight: 'bg-violet-50',
    iconBg: 'bg-violet-500',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling & Coordination',
    description:
      'Fill your calendar with qualified prospects while you focus on closing',
    color: '#F43F5E',
    bgLight: 'bg-rose-50',
    iconBg: 'bg-rose-500',
  },
]

const partnershipStats = [
  { value: '3x', label: 'More Referrals', icon: TrendingUp },
  { value: '94%', label: 'Retention Rate', icon: HeartHandshake },
  { value: '50+', label: 'Active Partnerships', icon: Zap },
]

const dashboardMetrics = [
  { label: 'New Leads', value: '12', icon: Users, color: 'text-[#10B981]' },
  { label: 'Appointments', value: '8', icon: Calendar, color: 'text-[#2563EB]' },
  { label: 'Closings', value: '3', icon: Home, color: 'text-[#06B6D4]' },
]

const recentActivity = [
  { text: 'New lead from Zillow', time: '2m ago' },
  { text: 'Appointment confirmed', time: '15m ago' },
  { text: 'Offer received — 123 Oak St', time: '1h ago' },
]

/* ───────────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B]">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#2563EB]/[0.08] blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-[#2563EB]/[0.06] blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/[0.04] blur-[80px]" />

        {/* Grid overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="realtor-grid"
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
          <rect width="100%" height="100%" fill="url(#realtor-grid)" />
        </svg>

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] right-[10%] hidden h-20 w-20 rotate-12 rounded-lg border border-white/[0.06] lg:block"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-[20%] left-[8%] hidden h-16 w-16 rounded-full border border-white/[0.04] lg:block"
        />
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-[60%] right-[25%] hidden h-3 w-3 rounded-full bg-[#2563EB]/30 lg:block"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm hover:bg-white/[0.08]"
            >
              <span className="text-base">🏠</span>
              FOR REALTORS
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Close More Deals.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Build Your Brand.
            </span>{' '}
            Grow Your Network.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            GrowthGo helps real estate agents generate more visibility, nurture
            more leads, and build a referral engine that never stops.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 bg-[#2563EB] px-8 font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/40 hover:scale-[1.02]"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-transparent px-8 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

/* ───────────────────────────────────────────────
   Section 2 — Pain Points
   ─────────────────────────────────────────────── */

function PainPointsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
            The Problem
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            The Challenges Realtors Face Every Day
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            Real estate is a relationship business — but the daily grind keeps
            you from focusing on what matters most.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                variants={staggerCard}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-red-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors duration-200 group-hover:bg-red-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────
   Section 3 — Solutions
   ─────────────────────────────────────────────── */

function SolutionsSection() {
  return (
    <section className="bg-[#F0F7FF] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            Our Solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            How GrowthGo Transforms Your Real Estate Business
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            We handle the operations so you can focus on closing deals and
            building relationships.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.title}
                variants={staggerCard}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8"
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${solution.iconBg} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {solution.description}
                </p>

                {/* Learn more link */}
                <div className="mt-auto pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                    style={{ color: solution.color }}
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────
   Section 4 — B2B Advantage
   ─────────────────────────────────────────────── */

function B2BSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-[#2563EB]/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-[#06B6D4]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
            Networking Power
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            The Power of Strategic Partnerships
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Visual connection flow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5 blur-2xl" />

              {/* Connection diagram */}
              <div className="relative flex flex-col items-center gap-6 rounded-2xl border border-slate-100 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-10">
                {/* Realtor */}
                <div className="flex w-full items-center gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] shadow-md">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">Realtor</p>
                    <p className="text-xs text-[#64748B]">
                      Listings, Buyers, Showings
                    </p>
                  </div>
                </div>

                {/* GrowthGo connector */}
                <div className="flex flex-col items-center gap-1">
                  <div className="h-8 w-px bg-gradient-to-b from-[#2563EB] to-[#06B6D4]" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-lg shadow-[#2563EB]/20">
                    <span className="text-sm font-extrabold text-white">GG</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#2563EB]">
                    GrowthGo
                  </p>
                  <div className="h-8 w-px bg-gradient-to-b from-[#06B6D4] to-[#10B981]" />
                </div>

                {/* Loan Officer */}
                <div className="flex w-full items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10B981] shadow-md">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      Loan Officer
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Pre-approvals, Closings, Referrals
                    </p>
                  </div>
                </div>

                {/* Bidirectional arrows */}
                <div className="mt-2 flex items-center gap-2 text-xs text-[#64748B]">
                  <ArrowRight className="h-3 w-3 text-[#2563EB]" />
                  <span>Qualified Referrals</span>
                  <ArrowRight className="h-3 w-3 text-[#10B981] rotate-180" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
              Build Referral Pipelines That Never Stop
            </h3>

            <div className="mt-6 space-y-5">
              <p className="text-base leading-relaxed text-[#64748B]">
                GrowthGo bridges the gap between Realtors and Loan Officers,
                creating referral pipelines that generate consistent business.
              </p>
              <p className="text-base leading-relaxed text-[#64748B]">
                A Realtor connected with the right Loan Officer can send
                qualified clients back and forth, creating a sustainable source
                of revenue for both.
              </p>
              <p className="text-base leading-relaxed text-[#64748B]">
                This is the GrowthGo advantage: we don&apos;t just manage your
                social media — we build the relationships that fuel your
                business.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {partnershipStats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm"
                  >
                    <Icon className="mx-auto mb-2 h-5 w-5 text-[#2563EB]" />
                    <p className="text-2xl font-extrabold text-[#0F172A]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-[#64748B]">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────
   Section 5 — Dashboard Mockup
   ─────────────────────────────────────────────── */

function DashboardSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 sm:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-[#06B6D4]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
            Your Dashboard
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            See Everything at a Glance
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Track leads, appointments, and closings in one place — all updated
            in real time.
          </p>
        </motion.div>

        {/* Dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mt-14 max-w-2xl"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 rounded-3xl bg-[#2563EB]/[0.08] blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-[#1E293B]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Title bar */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Agent Dashboard</h3>
                <p className="text-sm text-slate-400">
                  Real-time performance overview
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
                <span className="text-xs text-slate-500">Live</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {dashboardMetrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 sm:p-4"
                  >
                    <Icon className={`mb-2 h-5 w-5 ${metric.color}`} />
                    <p className="text-2xl font-bold text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-400">{metric.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Progress section */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  Monthly Goal Progress
                </span>
                <span className="text-sm font-semibold text-[#10B981]">78%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                23 of 30 target closings this quarter
              </p>
            </div>

            {/* Recent activity */}
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
              <p className="mb-3 text-sm font-medium text-white">
                Recent Activity
              </p>
              <div className="space-y-2.5">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.text}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-400">
                      {activity.text}
                    </span>
                    <span className="text-xs text-slate-500">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────────────────────────────────
   Section 6 — CTA
   ─────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-24 sm:py-32">
      {/* Animated particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/10 blur-[80px]" />
        <span className="particle absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="particle absolute left-[25%] top-[60%] h-1 w-1 rounded-full bg-white/15" />
        <span className="particle absolute left-[45%] top-[15%] h-2 w-2 rounded-full bg-white/10" />
        <span className="particle absolute left-[65%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="particle absolute left-[80%] top-[30%] h-1 w-1 rounded-full bg-white/20" />
        <span className="particle absolute left-[90%] top-[80%] h-2 w-2 rounded-full bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Transform Your Real Estate Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          More visibility. More referrals. More closings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#2563EB] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10"
            >
              Explore All Services
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 text-sm text-slate-400"
        >
          No commitment required. 30-minute strategic consultation.
        </motion.p>
      </div>

      {/* CSS animation for particles */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-120px) scale(0.5);
            opacity: 0;
          }
        }
        .particle {
          animation: float-up 6s ease-in-out infinite;
        }
        .particle:nth-child(3) {
          animation-delay: 0.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(4) {
          animation-delay: 1s;
          animation-duration: 5.5s;
        }
        .particle:nth-child(5) {
          animation-delay: 1.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(6) {
          animation-delay: 2s;
          animation-duration: 6.5s;
        }
        .particle:nth-child(7) {
          animation-delay: 2.5s;
          animation-duration: 7.5s;
        }
      `}</style>
    </section>
  )
}

/* ───────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────── */

export default function RealtorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <PainPointsSection />
        <SolutionsSection />
        <B2BSection />
        <DashboardSection />
        <CTASection />
      </main>
      <Footer onOpenAdmin={() => {}} />
    </div>
  )
}
