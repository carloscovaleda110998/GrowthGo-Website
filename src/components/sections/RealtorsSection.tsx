'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Users, Calendar, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  'Lead generation & follow-up systems',
  'Personal brand building & social media',
  'Content creation that attracts buyers & sellers',
  'Referral network development',
  'CRM organization & pipeline management',
  'Appointment scheduling & coordination',
]

const dashboardMetrics = [
  { label: 'New Leads', value: '12', icon: Users, color: 'text-[#10B981]' },
  { label: 'Appointments', value: '8', icon: Calendar, color: 'text-[#2563EB]' },
  { label: 'Closings', value: '3', icon: Home, color: 'text-[#06B6D4]' },
]

export default function RealtorsSection() {
  return (
    <section
      id="realtors"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle blue gradient accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#2563EB]/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-[#10B981]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              For Realtors
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Close More Deals.{' '}
              <span className="text-[#2563EB]">Build Your Brand.</span>{' '}
              Grow Your Network.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
              GrowthGo helps real estate agents generate more visibility,
              nurture more leads, and build a referral engine that never stops.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#10B981]" />
                  <span className="text-base text-[#475569]">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Link href="/realtors">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold px-8 shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#2563EB]/30"
                >
                  Get Started as a Realtor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/10 blur-2xl" />

            {/* Dashboard card */}
            <div className="relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
              {/* Title bar */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Agent Dashboard
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    Real-time performance overview
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10">
                  <Users className="h-5 w-5 text-[#2563EB]" />
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
                    Monthly Goal Progress
                  </span>
                  <span className="text-sm font-semibold text-[#10B981]">
                    78%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                  />
                </div>
                <p className="mt-2 text-xs text-[#64748B]">
                  23 of 30 target closings this quarter
                </p>
              </div>

              {/* Recent activity */}
              <div className="mt-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm font-medium text-[#0F172A]">
                  Recent Activity
                </p>
                <div className="space-y-2.5">
                  {[
                    { text: 'New lead from Zillow', time: '2m ago' },
                    { text: 'Appointment confirmed', time: '15m ago' },
                    { text: 'Offer received — 123 Oak St', time: '1h ago' },
                  ].map((activity) => (
                    <div
                      key={activity.text}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-[#475569]">
                        {activity.text}
                      </span>
                      <span className="text-xs text-[#94A3B8]">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
