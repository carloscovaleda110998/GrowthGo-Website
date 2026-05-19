'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Home,
  Handshake,
  BarChart3,
  Zap,
  Globe,
  TrendingUp,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const trustCards = [
  {
    icon: Home,
    metric: '',
    label: 'Real Estate Focus',
    description: 'Deep expertise in the real estate and mortgage industry',
    isEmoji: true,
    emoji: '🏠',
  },
  {
    icon: Handshake,
    metric: '50+',
    label: 'Active Client Partnerships',
    description: 'Trusted partnerships driving measurable results',
  },
  {
    icon: BarChart3,
    metric: '94%',
    label: 'Client Retention Rate',
    description: 'Our clients stay because we deliver consistent value',
  },
  {
    icon: Zap,
    metric: '3x',
    label: 'Average Lead Increase',
    description: 'Proven strategies that multiply your lead generation',
  },
  {
    icon: Globe,
    metric: '',
    label: 'Remote-First',
    description: 'Cost-efficient specialized talent from Latin America',
    isEmoji: true,
    emoji: '🌎',
  },
  {
    icon: TrendingUp,
    metric: '',
    label: 'B2B Networking',
    description: 'Strategic relationship building between professionals',
    isEmoji: true,
    emoji: '📈',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function TrustCard({
  card,
  index,
}: {
  card: (typeof trustCards)[number]
  index: number
}) {
  return (
    <motion.div variants={cardVariants}>
      <Card className="group relative h-full overflow-hidden border border-slate-200/80 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30 hover:-translate-y-1">
        {/* Gradient border top on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-6 flex flex-col items-start gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/[0.08] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB]/[0.15]">
            {card.isEmoji ? (
              <span className="text-2xl">{card.emoji}</span>
            ) : (
              <card.icon className="h-6 w-6" />
            )}
          </div>

          {/* Metric */}
          {card.metric && (
            <div className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {card.metric}
            </div>
          )}

          {/* Label */}
          <h3 className="text-lg font-semibold text-[#0F172A] leading-tight">
            {card.label}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#64748B] leading-relaxed">
            {card.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="trust"
      className="relative bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Why Industry Leaders Trust GrowthGo
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            Specialized expertise. Proven results. Strategic partnerships.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustCards.map((card, index) => (
            <TrustCard key={card.label} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
