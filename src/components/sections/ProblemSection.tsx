'use client'

import { motion } from 'framer-motion'
import {
  UserX,
  MegaphoneOff,
  Briefcase,
  Clock,
  DollarSign,
  Handshake,
} from 'lucide-react'

const problems = [
  {
    icon: UserX,
    title: 'Lost Leads',
    description:
      'Leads slip through the cracks because there\'s no systematic follow-up process in place',
  },
  {
    icon: MegaphoneOff,
    title: 'Inconsistent Marketing',
    description:
      'Your online presence is sporadic and doesn\'t build the authority you need',
  },
  {
    icon: Briefcase,
    title: 'Operational Overload',
    description:
      'You\'re buried in admin tasks instead of focusing on closing deals',
  },
  {
    icon: Clock,
    title: 'Missed Opportunities',
    description:
      'Slow response times and disorganized pipelines cost you real revenue',
  },
  {
    icon: DollarSign,
    title: 'High Local Costs',
    description:
      'Hiring full-time local staff is expensive and hard to scale',
  },
  {
    icon: Handshake,
    title: 'No Strategic Support',
    description:
      'You need a partner who understands your industry, not just task execution',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function ProblemSection() {
  return (
    <section id="problems" className="bg-white py-20 sm:py-28">
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
            The Challenge
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Running a real estate business shouldn&apos;t feel like this
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            Most Realtors and Loan Officers face the same obstacles that keep
            them from scaling
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
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
                      {problem.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {problem.description}
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
