'use client'

import { motion } from 'framer-motion'
import {
  LayoutGrid,
  Users,
  Calendar,
  Database,
  FileText,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FolderKanban,
  PhoneMissed,
  Handshake,
  ClipboardList,
  Target,
  Wallet,
  FileCheck,
  Clock,
  Quote,
} from 'lucide-react'
import Link from 'next/link'

import { WHATSAPP_URL } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ────────────────────────────────────────────
   Animation variants
   ──────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */
const painPoints = [
  {
    icon: FolderKanban,
    title: 'Pipeline Chaos',
    description:
      'Disorganized loan files and scattered client information make it impossible to track progress',
  },
  {
    icon: PhoneMissed,
    title: 'Cold Leads, Lost Deals',
    description:
      "Without proper follow-up systems, prospects disappear to competitors",
  },
  {
    icon: Handshake,
    title: 'No Realtor Network',
    description:
      "Building relationships with real estate agents takes time you don't have",
  },
  {
    icon: ClipboardList,
    title: 'Admin Overload',
    description:
      'CRM updates, document prep, and coordination eat into your selling time',
  },
  {
    icon: Target,
    title: 'Inconsistent Prospecting',
    description:
      "Making calls and following up falls through the cracks when you're busy",
  },
  {
    icon: Wallet,
    title: 'Scaling Is Expensive',
    description:
      'Hiring a local loan officer assistant is costly and hard to justify',
  },
]

const solutions = [
  {
    icon: LayoutGrid,
    title: 'Pipeline Organization & Management',
    description:
      'Keep your loans organized from application to closing with systematic tracking',
    accent: 'cyan',
  },
  {
    icon: Users,
    title: 'Realtor Partnership Development',
    description:
      'We build and nurture relationships with Realtors who send you qualified borrower referrals',
    accent: 'blue',
  },
  {
    icon: Calendar,
    title: 'Appointment Coordination & Scheduling',
    description:
      'Your calendar stays full with confirmed, qualified appointments',
    accent: 'cyan',
  },
  {
    icon: Database,
    title: 'CRM Management & Follow-Up Support',
    description:
      'Never lose track of a lead again with organized, systematic follow-up',
    accent: 'green',
  },
  {
    icon: FileText,
    title: 'Loan File Preparation Assistance',
    description:
      'Support with document collection, organization, and preparation',
    accent: 'violet',
  },
  {
    icon: TrendingUp,
    title: 'Sales Process Optimization',
    description:
      'From prospecting to close, we optimize every step of your sales workflow',
    accent: 'amber',
  },
]

const loaFeatures = [
  'Lead calls',
  'Lead follow-up',
  'Cold and warm prospecting',
  'Appointment scheduling',
  'Prospect qualification',
  'CRM updates',
  'Lead classification by interest level',
  'Reminders and commercial continuity',
]

const pipelineBreakdown = [
  { stage: 'Pre-approval', count: 5, color: 'bg-[#06B6D4]' },
  { stage: 'In Processing', count: 8, color: 'bg-[#2563EB]' },
  { stage: 'Underwriting', count: 3, color: 'bg-[#1E3A8A]' },
  { stage: 'Clear to Close', count: 2, color: 'bg-[#10B981]' },
]

const dashboardMetrics = [
  {
    label: 'Active Loans',
    value: '18',
    icon: FileCheck,
    color: 'text-[#06B6D4]',
  },
  {
    label: 'Realtor Partners',
    value: '7',
    icon: Handshake,
    color: 'text-[#2563EB]',
  },
  {
    label: 'In Pipeline',
    value: '$4.2M',
    icon: TrendingUp,
    color: 'text-[#10B981]',
  },
]

function accentColor(accent: string) {
  switch (accent) {
    case 'cyan':
      return {
        iconBg: 'bg-[#06B6D4]/10',
        iconText: 'text-[#06B6D4]',
        border: 'group-hover:border-[#06B6D4]/30',
      }
    case 'blue':
      return {
        iconBg: 'bg-[#2563EB]/10',
        iconText: 'text-[#2563EB]',
        border: 'group-hover:border-[#2563EB]/30',
      }
    case 'green':
      return {
        iconBg: 'bg-[#10B981]/10',
        iconText: 'text-[#10B981]',
        border: 'group-hover:border-[#10B981]/30',
      }
    case 'violet':
      return {
        iconBg: 'bg-[#8B5CF6]/10',
        iconText: 'text-[#8B5CF6]',
        border: 'group-hover:border-[#8B5CF6]/30',
      }
    case 'amber':
      return {
        iconBg: 'bg-[#F59E0B]/10',
        iconText: 'text-[#F59E0B]',
        border: 'group-hover:border-[#F59E0B]/30',
      }
    default:
      return {
        iconBg: 'bg-[#06B6D4]/10',
        iconText: 'text-[#06B6D4]',
        border: 'group-hover:border-[#06B6D4]/30',
      }
  }
}

/* ────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */
export default function LoanOfficersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ══════════════════════════════════════
            SECTION 1 — Hero
            ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B] py-24 sm:py-32 lg:py-40">
          {/* Cyan accent orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#06B6D4]/[0.07] blur-[120px]" />
            <div className="absolute top-1/2 -right-20 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/[0.05] blur-[100px]" />
            <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/[0.04] blur-[80px]" />

            {/* Geometric grid */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="lo-grid"
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
              <rect width="100%" height="100%" fill="url(#lo-grid)" />
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
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1.5 border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1.5 text-sm font-semibold text-[#06B6D4] backdrop-blur-sm"
              >
                FOR LOAN OFFICERS
              </Badge>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Streamline Your Pipeline.{' '}
              <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">
                Strengthen Your Partnerships.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              GrowthGo provides the operational support and business development
              expertise that mortgage professionals need to thrive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group h-12 bg-[#06B6D4] px-8 font-semibold text-white shadow-lg shadow-[#06B6D4]/25 transition-all duration-300 hover:bg-[#0891B2] hover:shadow-xl hover:shadow-[#06B6D4]/40 hover:scale-[1.02]"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-transparent px-8 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
              >
                <Link href="/services">Explore All Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ══════════════════════════════════════
            SECTION 2 — Pain Points
            ══════════════════════════════════════ */}
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
                The Challenges
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                The Challenges Loan Officers Face Every Day
              </h2>
            </motion.div>

            {/* Problem Cards */}
            <motion.div
              variants={containerVariants}
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
                    variants={cardVariants}
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

        {/* ══════════════════════════════════════
            SECTION 3 — How We Help
            ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#F0F7FF] py-20 sm:py-28">
          {/* Background accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-[#06B6D4]/[0.05] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-[#2563EB]/[0.04] blur-3xl" />
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
                Our Solutions
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                How GrowthGo Empowers Your Mortgage Business
              </h2>
            </motion.div>

            {/* Solution Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {solutions.map((solution) => {
                const Icon = solution.icon
                const colors = accentColor(solution.accent)
                return (
                  <motion.div
                    key={solution.title}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className={`group rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:shadow-md ${colors.border}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${colors.iconBg} transition-colors duration-200`}
                      >
                        <Icon className={`h-5 w-5 ${colors.iconText}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-[#0F172A]">
                          {solution.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 4 — LOA Assistant
            ══════════════════════════════════════ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mx-auto max-w-4xl"
            >
              {/* Accent top border card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#06B6D4]" />

                <div className="p-6 sm:p-10">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#06B6D4]/10">
                      <AlertTriangle className="h-7 w-7 text-[#06B6D4]" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                      Your Dedicated Loan Officer Assistant
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#64748B]">
                      Our specialized LOA (Loan Officer Assistant) agents are
                      trained in mortgage industry communication and workflows.
                      They handle the tasks that keep you busy so you can focus
                      on what matters: closing loans.
                    </p>
                  </motion.div>

                  {/* Feature list card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 rounded-xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8"
                  >
                    <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
                      LOA Service Includes
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {loaFeatures.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.06 }}
                          className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#06B6D4]" />
                          <span className="text-sm font-medium text-[#0F172A]">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mt-8 flex items-start gap-3 rounded-xl border-l-4 border-[#06B6D4] bg-[#06B6D4]/[0.04] p-5"
                  >
                    <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]/60" />
                    <p className="text-base italic leading-relaxed text-[#475569]">
                      This service allows our clients to concentrate on closing
                      deals while we handle the follow-up and pipeline
                      organization.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 5 — Dashboard Mockup
            ══════════════════════════════════════ */}
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
              <span className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
                Your Dashboard
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Everything at a Glance
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                Track your pipeline, partnerships, and progress in one
                centralized dashboard.
              </p>
            </motion.div>

            {/* Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto mt-16 max-w-2xl"
            >
              {/* Background glow */}
              <div className="rounded-3xl bg-gradient-to-br from-[#06B6D4]/10 to-[#2563EB]/10 p-2 blur-2xl" />

              <div className="relative rounded-2xl border border-white/60 bg-[#0F172A] p-6 shadow-2xl sm:p-8">
                {/* Title bar */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      LO Dashboard
                    </h3>
                    <p className="text-sm text-slate-400">
                      Pipeline &amp; partner overview
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                    <LayoutGrid className="h-5 w-5 text-[#06B6D4]" />
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {dashboardMetrics.map((metric) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3 sm:p-4"
                      >
                        <Icon className={`mb-2 h-5 w-5 ${metric.color}`} />
                        <p className="text-2xl font-bold text-white">
                          {metric.value}
                        </p>
                        <p className="text-xs text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {/* Progress section */}
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      Quarterly Volume Target
                    </span>
                    <span className="text-sm font-semibold text-[#06B6D4]">
                      64%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '64%' }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: 'easeOut',
                        delay: 0.5,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]"
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    $6.7M of $10.5M target volume
                  </p>
                </div>

                {/* Pipeline breakdown */}
                <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                  <p className="mb-3 text-sm font-medium text-white">
                    Pipeline Breakdown
                  </p>
                  <div className="space-y-2.5">
                    {pipelineBreakdown.map((item) => (
                      <div
                        key={item.stage}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${item.color}`}
                          />
                          <span className="text-sm text-slate-400">
                            {item.stage}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 6 — CTA
            ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B] py-20 sm:py-28">
          {/* Cyan accent orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/[0.08] blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#06B6D4]/[0.05] blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Scale Your{' '}
                <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">
                  Mortgage Business?
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                More partnerships. More loans. More revenue.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="group h-12 bg-[#06B6D4] px-8 font-semibold text-white shadow-lg shadow-[#06B6D4]/25 transition-all duration-300 hover:bg-[#0891B2] hover:shadow-xl hover:shadow-[#06B6D4]/40 hover:scale-[1.02]"
                  >
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/20 bg-transparent px-8 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                >
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onOpenAdmin={() => {}} />
    </div>
  )
}
