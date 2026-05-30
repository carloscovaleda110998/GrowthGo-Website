'use client'

import { motion } from 'framer-motion'
import {
  Share2,
  PenTool,
  Users,
  PhoneCall,
  Database,
  Calendar,
  Landmark,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    icon: Share2,
    name: 'Social Media Management',
    description: 'Build a consistent, authoritative online presence',
    benefits: [
      'Strategic content planning',
      'Multi-platform management',
      'Brand consistency',
    ],
    color: 'bg-blue-50 text-[#2563EB]',
    gradientFrom: '#2563EB',
  },
  {
    icon: PenTool,
    name: 'Content Creation',
    description: 'Engaging content that captures attention and builds trust',
    benefits: [
      'Visual & audiovisual production',
      'Platform-optimized content',
      'Brand storytelling',
    ],
    color: 'bg-cyan-50 text-[#06B6D4]',
    gradientFrom: '#06B6D4',
  },
  {
    icon: Users,
    name: 'Business Development',
    description: 'Strategic partnerships that drive sustainable growth',
    benefits: [
      'B2B relationship building',
      'Realtor-LO connections',
      'Referral network development',
    ],
    color: 'bg-emerald-50 text-[#10B981]',
    gradientFrom: '#10B981',
  },
  {
    icon: PhoneCall,
    name: 'Lead Follow-Up',
    description: 'Never let another opportunity slip away',
    benefits: [
      'Systematic lead nurturing',
      'Quick response protocols',
      'Follow-up automation',
    ],
    color: 'bg-amber-50 text-[#F59E0B]',
    gradientFrom: '#F59E0B',
  },
  {
    icon: Database,
    name: 'CRM Support',
    description: 'Keep your pipeline organized and actionable',
    benefits: [
      'CRM data management',
      'Pipeline tracking',
      'Contact organization',
    ],
    color: 'bg-violet-50 text-[#8B5CF6]',
    gradientFrom: '#8B5CF6',
  },
  {
    icon: Calendar,
    name: 'Appointment Setting',
    description: 'Fill your calendar with qualified prospects',
    benefits: [
      'Strategic scheduling',
      'Confirmation & reminders',
      'Calendar optimization',
    ],
    color: 'bg-rose-50 text-[#F43F5E]',
    gradientFrom: '#F43F5E',
  },
  {
    icon: Landmark,
    name: 'Loan Officer Assistant',
    description: 'Specialized support for mortgage professionals',
    benefits: [
      'Pipeline coordination',
      'Document preparation support',
      'Realtor liaison services',
    ],
    color: 'bg-sky-50 text-[#0EA5E9]',
    gradientFrom: '#0EA5E9',
  },
  {
    icon: TrendingUp,
    name: 'Sales Support',
    description: 'Close more deals with dedicated sales assistance',
    benefits: [
      'Prospect qualification',
      'Sales process optimization',
      'Performance tracking',
    ],
    color: 'bg-teal-50 text-[#14B8A6]',
    gradientFrom: '#14B8A6',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
          >
            OUR SERVICES
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Everything You Need to{' '}
            <span className="text-[#2563EB]">Scale</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            Comprehensive growth solutions designed specifically for real estate
            and mortgage professionals
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="group relative flex flex-col rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5"
            >
              {/* Gradient accent at top */}
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, ${service.gradientFrom}, ${service.gradientFrom}66)`,
                }}
              />

              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              {/* Service Name */}
              <h3 className="text-lg font-bold text-[#0F172A]">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="mt-4 flex-1 space-y-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-[#64748B]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: service.gradientFrom }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Get Started Link */}
              <a
                href="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] transition-all duration-200 hover:gap-2 hover:underline"
              >
                Explore Service Details
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
