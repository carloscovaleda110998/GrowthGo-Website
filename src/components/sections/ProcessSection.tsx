'use client'

import { motion } from 'framer-motion'
import { Search, Target, Rocket, BarChart3, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description:
      'We learn about your business, goals, challenges, and current processes to identify growth opportunities',
    icon: Search,
  },
  {
    number: 2,
    title: 'Strategy',
    description:
      'We create a customized growth plan with clear objectives, timelines, and KPIs tailored to your market',
    icon: Target,
  },
  {
    number: 3,
    title: 'Implementation',
    description:
      'Our specialized team deploys the systems, content, and processes to start driving results immediately',
    icon: Rocket,
  },
  {
    number: 4,
    title: 'Optimization',
    description:
      'We continuously monitor performance and refine strategies to maximize your return on investment',
    icon: BarChart3,
  },
  {
    number: 5,
    title: 'Growth',
    description:
      'Scale your business with a proven system that generates consistent leads, referrals, and revenue',
    icon: TrendingUp,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#2563EB]/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#06B6D4]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            From Discovery to Growth{' '}
            <span className="text-[#2563EB]">in 5 Steps</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            A proven, structured process designed to deliver measurable results
          </p>
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
            {/* Connecting line behind the steps */}
            <div className="absolute top-[2.75rem] left-[calc(10%+1.25rem)] right-[calc(10%+1.25rem)] h-0.5">
              <div className="h-full w-full border-t-2 border-dashed border-[#2563EB]/30" />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative z-10 flex w-1/5 flex-col items-center"
                >
                  {/* Step number circle */}
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

                  {/* Arrow connector (desktop only, between steps) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-[2.75rem] -right-[10%] z-20 hidden lg:block">
                      <div className="flex h-5 w-5 items-center justify-center">
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
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative flex gap-5"
                  >
                    {/* Step number circle */}
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
