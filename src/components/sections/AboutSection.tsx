'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Target,
  Lightbulb,
  Globe,
  HeartHandshake,
  TrendingUp,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { WHATSAPP_URL } from '@/lib/constants'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy, every action, every decision is focused on generating measurable results for your business.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Thinking',
    description: 'We don\'t just execute tasks — we think ahead, anticipate challenges, and build systems that create long-term value.',
  },
  {
    icon: Globe,
    title: 'Global Talent',
    description: 'Our specialized team in Colombia brings world-class skills at a fraction of US hiring costs, without compromising quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership First',
    description: 'We function as an extension of your team, not an outside vendor. Your growth is our success.',
  },
]

const stats = [
  { value: '50+', label: 'Active Client Partnerships' },
  { value: '94%', label: 'Client Retention Rate' },
  { value: '3x', label: 'Average Lead Increase' },
  { value: '60%', label: 'Cost Savings vs Local Hire' },
]

const highlights = [
  'Specialized exclusively in Real Estate & Mortgage',
  'Remote-first model for maximum efficiency',
  'Integrated approach: Marketing + BD + Operations',
  'Bilingual team with US market expertise',
  'Scalable solutions that grow with you',
  'Strategic B2B networking between Realtors & LOs',
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card with company info */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 sm:p-10 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06B6D4]/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/growthgo-logo.png"
                    alt="GrowthGo Logo"
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Growth<span className="text-[#60A5FA]">Go</span>
                    </h3>
                    <p className="text-sm text-slate-400">Growth Partner</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8">
                  GrowthGo is a specialized growth partner for Realtors and Loan Officers
                  in the United States. We combine marketing, business development, and
                  operational support into one integrated system designed to help you
                  scale faster, spend less, and build a stronger business.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-4"
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-dark rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]/20">
                  <TrendingUp className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Growth Rate</p>
                  <p className="text-sm font-bold text-white">+247% YoY</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
            >
              ABOUT US
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Your Strategic Growth Partner for{' '}
              <span className="text-[#2563EB]">Real Estate & Mortgage</span>
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
              GrowthGo was built to solve a specific problem: Realtors and Loan Officers
              need dedicated, specialized support to grow — but hiring locally is expensive,
              and generic agencies don&apos;t understand the industry.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#64748B]">
              We bridge that gap by providing a remote, specialized team that becomes an
              extension of your business. From social media management to lead follow-up,
              from B2B networking to operational support — we handle the work that keeps
              your business growing while you focus on closing deals.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                  <span className="text-sm text-[#475569]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline transition-all hover:gap-3"
              >
                Learn More About Us
                <span>→</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#2563EB] transition-colors"
              >
                Let&apos;s talk about your growth
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              What Drives Us
            </h3>
            <p className="mt-3 text-[#64748B]">
              Our core values shape every relationship, every strategy, and every result we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2563EB]/10 mb-4">
                    <value.icon className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
