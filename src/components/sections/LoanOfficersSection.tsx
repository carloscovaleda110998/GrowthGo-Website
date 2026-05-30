'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Handshake,
  DollarSign,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/constants'

const features = [
  'Pipeline organization & management',
  'Realtor partnership development',
  'Appointment coordination & scheduling',
  'CRM management & follow-up support',
  'Loan file preparation assistance',
  'Sales process optimization',
]

const dashboardMetrics = [
  {
    label: 'Active Loans',
    value: '18',
    icon: FileText,
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
    icon: DollarSign,
    color: 'text-[#10B981]',
  },
]

export default function LoanOfficersSection() {
  return (
    <section
      id="loan-officers"
      className="relative overflow-hidden bg-[#F0F7FF] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-[#06B6D4]/[0.05] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-[#2563EB]/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Dashboard Mockup (reversed from Realtors) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#06B6D4]/10 to-[#2563EB]/10 blur-2xl" />

            {/* Dashboard card */}
            <div className="relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
              {/* Title bar */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    LO Dashboard
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    Pipeline &amp; partner overview
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                  <FileText className="h-5 w-5 text-[#06B6D4]" />
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {dashboardMetrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4 shadow-sm"
                    >
                      <Icon className={`mb-2 h-5 w-5 ${metric.color}`} />
                      <p className="text-2xl font-bold text-[#0F172A]">
                        {metric.value}
                      </p>
                      <p className="text-xs text-[#64748B]">{metric.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Progress section */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#0F172A]">
                    Quarterly Volume Target
                  </span>
                  <span className="text-sm font-semibold text-[#06B6D4]">
                    64%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '64%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]"
                  />
                </div>
                <p className="mt-2 text-xs text-[#64748B]">
                  $6.7M of $10.5M target volume
                </p>
              </div>

              {/* Pipeline breakdown */}
              <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm font-medium text-[#0F172A]">
                  Pipeline Breakdown
                </p>
                <div className="space-y-2.5">
                  {[
                    { stage: 'Pre-approval', count: 5, color: 'bg-[#06B6D4]' },
                    {
                      stage: 'In Processing',
                      count: 8,
                      color: 'bg-[#2563EB]',
                    },
                    {
                      stage: 'Underwriting',
                      count: 3,
                      color: 'bg-[#1E3A8A]',
                    },
                    { stage: 'Clear to Close', count: 2, color: 'bg-[#10B981]' },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${item.color}`}
                        />
                        <span className="text-sm text-[#475569]">
                          {item.stage}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-[#0F172A]">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content (reversed from Realtors) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#06B6D4]">
              For Loan Officers
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Streamline Your Pipeline.{' '}
              <span className="text-[#06B6D4]">
                Strengthen Your Partnerships.
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
              GrowthGo provides the operational support and business development
              expertise that mortgage professionals need to thrive.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#06B6D4]" />
                  <span className="text-base text-[#475569]">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 shadow-lg shadow-[#06B6D4]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#06B6D4]/30"
                >
                  <a href="/loan-officers">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4]/10 font-semibold px-8 transition-all duration-200"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
