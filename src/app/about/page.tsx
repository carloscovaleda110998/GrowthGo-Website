'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Lightbulb, Globe, HeartHandshake, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const values = [
  { icon: Target, title: 'Results-Driven', description: 'Every strategy, every action, every decision is focused on generating measurable results for your business. We track KPIs obsessively and adjust course when needed.' },
  { icon: Lightbulb, title: 'Strategic Thinking', description: 'We don\'t just execute tasks — we think ahead, anticipate challenges, and build systems that create long-term value for your business growth.' },
  { icon: Globe, title: 'Global Talent', description: 'Our specialized team in Colombia brings world-class skills at a fraction of US hiring costs, without compromising quality or professionalism.' },
  { icon: HeartHandshake, title: 'Partnership First', description: 'We function as an extension of your team, not an outside vendor. Your growth is our success, and we treat your business like our own.' },
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

const colombiaBenefits = [
  { title: 'World-Class Talent', description: 'Colombia has become a hub for highly skilled marketing, sales, and operations professionals with strong English proficiency and deep understanding of the US market.' },
  { title: 'Significant Cost Savings', description: 'Access premium talent at 40-60% less than US hiring costs. This allows you to build a robust support team without breaking your budget.' },
  { title: 'Time Zone Alignment', description: 'Colombia operates on CST/EST-compatible hours, ensuring real-time collaboration during your business day with no communication delays.' },
  { title: 'Cultural Affinity', description: 'Strong cultural alignment with US business practices, work ethic, and communication style means seamless integration with your team.' },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 h-56 w-56 rounded-full bg-[#10B981]/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-4 border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#60A5FA]">
                ABOUT US
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Strategic Growth <span className="gradient-text">Partner</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                GrowthGo was built to solve a specific problem: Realtors and Loan Officers need dedicated, specialized support to grow — but hiring locally is expensive, and generic agencies don&apos;t understand the industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 sm:p-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06B6D4]/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Image src="/growthgo-logo.png" alt="GrowthGo Logo" width={48} height={48} className="h-12 w-auto" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">Growth<span className="text-[#60A5FA]">Go</span></h3>
                        <p className="text-sm text-slate-400">Growth Partner</p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      GrowthGo is a specialized growth partner for Realtors and Loan Officers in the United States. We combine marketing, business development, and operational support into one integrated system designed to help you scale faster, spend less, and build a stronger business.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-4">
                          <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  Bridging the <span className="text-[#2563EB]">Gap</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                  We bridge the gap by providing a remote, specialized team that becomes an extension of your business. From social media management to lead follow-up, from B2B networking to operational support — we handle the work that keeps your business growing while you focus on closing deals.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10B981] mt-0.5" />
                      <span className="text-sm text-[#475569]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Colombia Model */}
        <section className="bg-[#F0F7FF] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-[#06B6D4]/20 bg-[#06B6D4]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#06B6D4]">OUR MODEL</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                The Colombia <span className="text-[#06B6D4]">Advantage</span>
              </h2>
              <p className="mt-4 text-lg text-[#64748B]">Why our Colombia-based team delivers premium results at a fraction of the cost.</p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {colombiaBenefits.map((benefit, index) => (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full bg-white">
                    <h4 className="text-base font-bold text-[#0F172A] mb-3">{benefit.title}</h4>
                    <p className="text-sm leading-relaxed text-[#64748B]">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">What Drives Us</h3>
              <p className="mt-3 text-[#64748B]">Our core values shape every relationship, strategy, and result we deliver.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2563EB]/10 mb-4">
                      <value.icon className="h-5 w-5 text-[#2563EB]" />
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A] mb-2">{value.title}</h4>
                    <p className="text-sm leading-relaxed text-[#64748B]">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s Build Something Great Together</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Discover how GrowthGo can become the growth partner your business needs.</p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 shadow-lg shadow-[#2563EB]/25">
                    Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer onOpenAdmin={() => {}} />
    </div>
  )
}
