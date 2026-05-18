'use client'

import { motion } from 'framer-motion'
import {
  Target,
  DollarSign,
  BarChart3,
  Brain,
  Handshake,
  Globe,
  ArrowRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const differentiators = [
  {
    icon: Target,
    title: 'Real Estate Specialization',
    description:
      "We don't work with just anyone. Our entire system is built around the unique needs of Realtors and Loan Officers.",
    accentColor: '#2563EB',
  },
  {
    icon: DollarSign,
    title: 'Cost-Efficient Remote Team',
    description:
      'Access specialized talent at a fraction of local hiring costs, without sacrificing quality or professionalism.',
    accentColor: '#10B981',
  },
  {
    icon: BarChart3,
    title: 'Built for Scale',
    description:
      'Our services grow with your business. No need to rebuild your team from scratch every time you want to expand.',
    accentColor: '#06B6D4',
  },
  {
    icon: Brain,
    title: 'Strategic Vision',
    description:
      "We don't just execute tasks. We understand your business goals and build systems that drive real results.",
    accentColor: '#8B5CF6',
  },
  {
    icon: Handshake,
    title: 'B2B Networking Power',
    description:
      'We create bridges between Realtors and Loan Officers that generate sustainable referral pipelines.',
    accentColor: '#F59E0B',
  },
  {
    icon: Globe,
    title: 'Mortgage Expertise',
    description:
      'Deep understanding of the mortgage industry means we can support Loan Officers with precision and relevance.',
    accentColor: '#0EA5E9',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function WhyGrowthGoSection() {
  return (
    <section id="why-growthgo" className="relative bg-[#0F172A] py-20 sm:py-28">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            WHY GROWTHGO
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for Your Industry.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Powered by Results.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            We&apos;re not a generic agency. We&apos;re your specialized growth
            partner.
          </p>
        </motion.div>

        {/* Differentiator Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
            >
              {/* Subtle glow on hover */}
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
                  style={{
                    backgroundColor: `${item.accentColor}15`,
                  }}
                >
                  <item.icon
                    className="h-6 w-6"
                    style={{ color: item.accentColor }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-slate-300">
            Ready to experience the GrowthGo difference?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 bg-[#2563EB] px-8 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
          >
            <a href="#book-a-call">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
