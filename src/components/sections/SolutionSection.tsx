'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Network, HeadphonesIcon, Check, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: MonitorSmartphone,
    name: 'Digital Marketing & Visibility',
    description:
      'Build a powerful online presence that positions you as the go-to authority in your market.',
    capabilities: [
      'Social media management',
      'Content creation & editing',
      'Brand positioning',
      'Consistent online presence',
    ],
    gradient: 'from-[#2563EB] to-[#1E3A8A]',
    iconBg: 'bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]',
  },
  {
    icon: Network,
    name: 'Business Development',
    description:
      'Create strategic partnerships and referral systems that drive consistent, high-quality deal flow.',
    capabilities: [
      'B2B networking & partnerships',
      'Realtor-LO relationship building',
      'Strategic referral systems',
      'Industry-specific outreach',
    ],
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    iconBg: 'bg-gradient-to-br from-[#06B6D4] to-[#0891B2]',
  },
  {
    icon: HeadphonesIcon,
    name: 'Sales Support & Operations',
    description:
      'Never lose a lead again with systematic follow-up, nurturing, and pipeline management.',
    capabilities: [
      'Lead follow-up & nurturing',
      'Appointment setting',
      'CRM management',
      'Pipeline organization',
    ],
    gradient: 'from-[#10B981] to-[#059669]',
    iconBg: 'bg-gradient-to-br from-[#10B981] to-[#059669]',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const pillarVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="bg-gradient-to-b from-[#F0F7FF] to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#10B981]">
            The Solution
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            GrowthGo: Your Growth System, Not Just a Service
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            We combine marketing, business development, and sales support into
            one integrated growth engine for your real estate or mortgage
            business.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.name}
                variants={pillarVariants}
                whileHover={{ y: -6 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Gradient Icon */}
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconBg} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Pillar Name */}
                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {pillar.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {pillar.description}
                </p>

                {/* Capabilities List */}
                <ul className="mt-6 flex flex-col gap-3">
                  {pillar.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check className="h-3 w-3 text-[#10B981]" />
                      </div>
                      <span className="text-sm text-slate-600">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#book-a-call"
            className="group inline-flex items-center gap-2 text-base font-semibold text-[#2563EB] transition-colors duration-200 hover:text-[#1E3A8A]"
          >
            See how GrowthGo can transform your business
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
