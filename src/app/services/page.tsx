'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Share2, PenTool, Users, PhoneCall, Database, Calendar,
  Landmark, TrendingUp, ArrowRight, Check, MonitorSmartphone,
  Network, HeadphonesIcon, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const pillars = [
  {
    icon: MonitorSmartphone,
    name: 'Digital Marketing & Visibility',
    description: 'Build a powerful online presence that positions you as the go-to authority in your market. We handle everything from social media strategy to content creation, ensuring your brand stays consistent and visible across all platforms.',
    capabilities: ['Social media management', 'Content creation & editing', 'Brand positioning', 'Consistent online presence', 'Multi-platform strategy', 'Engagement optimization'],
    gradient: 'from-[#2563EB] to-[#1E3A8A]',
    iconBg: 'bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]',
  },
  {
    icon: Network,
    name: 'Business Development',
    description: 'Create strategic partnerships and referral systems that drive consistent, high-quality deal flow. Our team actively builds relationships between Realtors and Loan Officers, creating sustainable referral pipelines that fuel your growth.',
    capabilities: ['B2B networking & partnerships', 'Realtor-LO relationship building', 'Strategic referral systems', 'Industry-specific outreach', 'Event coordination', 'Partner vetting & matching'],
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    iconBg: 'bg-gradient-to-br from-[#06B6D4] to-[#0891B2]',
  },
  {
    icon: HeadphonesIcon,
    name: 'Sales Support & Operations',
    description: 'Never lose a lead again with systematic follow-up, nurturing, and pipeline management. We handle the operational burden so you can focus on what you do best — closing deals and growing your business.',
    capabilities: ['Lead follow-up & nurturing', 'Appointment setting', 'CRM management', 'Pipeline organization', 'Follow-up automation', 'Performance tracking'],
    gradient: 'from-[#10B981] to-[#059669]',
    iconBg: 'bg-gradient-to-br from-[#10B981] to-[#059669]',
  },
]

const services = [
  {
    icon: Share2, name: 'Social Media Management',
    description: 'Build a consistent, authoritative online presence across all platforms',
    benefits: ['Strategic content planning', 'Multi-platform management', 'Brand consistency', 'Engagement tracking'],
    color: 'bg-blue-50 text-[#2563EB]', gradientFrom: '#2563EB',
  },
  {
    icon: PenTool, name: 'Content Creation',
    description: 'Engaging content that captures attention and builds trust with your audience',
    benefits: ['Visual & audiovisual production', 'Platform-optimized content', 'Brand storytelling', 'Content calendar management'],
    color: 'bg-cyan-50 text-[#06B6D4]', gradientFrom: '#06B6D4',
  },
  {
    icon: Users, name: 'Business Development',
    description: 'Strategic partnerships that drive sustainable growth and referral pipelines',
    benefits: ['B2B relationship building', 'Realtor-LO connections', 'Referral network development', 'Partnership strategy'],
    color: 'bg-emerald-50 text-[#10B981]', gradientFrom: '#10B981',
  },
  {
    icon: PhoneCall, name: 'Lead Follow-Up',
    description: 'Never let another opportunity slip away with systematic lead nurturing',
    benefits: ['Systematic lead nurturing', 'Quick response protocols', 'Follow-up automation', 'Lead scoring & qualification'],
    color: 'bg-amber-50 text-[#F59E0B]', gradientFrom: '#F59E0B',
  },
  {
    icon: Database, name: 'CRM Support',
    description: 'Keep your pipeline organized and actionable with expert CRM management',
    benefits: ['CRM data management', 'Pipeline tracking', 'Contact organization', 'Reporting & analytics'],
    color: 'bg-violet-50 text-[#8B5CF6]', gradientFrom: '#8B5CF6',
  },
  {
    icon: Calendar, name: 'Appointment Setting',
    description: 'Fill your calendar with qualified prospects through strategic scheduling',
    benefits: ['Strategic scheduling', 'Confirmation & reminders', 'Calendar optimization', 'No-show reduction'],
    color: 'bg-rose-50 text-[#F43F5E]', gradientFrom: '#F43F5E',
  },
  {
    icon: Landmark, name: 'Loan Officer Assistant',
    description: 'Specialized support for mortgage professionals who need operational help',
    benefits: ['Pipeline coordination', 'Document preparation support', 'Realtor liaison services', 'Compliance tracking'],
    color: 'bg-sky-50 text-[#0EA5E9]', gradientFrom: '#0EA5E9',
  },
  {
    icon: TrendingUp, name: 'Sales Support',
    description: 'Close more deals with dedicated sales assistance and process optimization',
    benefits: ['Prospect qualification', 'Sales process optimization', 'Performance tracking', 'Closing support'],
    color: 'bg-teal-50 text-[#14B8A6]', gradientFrom: '#14B8A6',
  },
]

const process = [
  { step: '01', title: 'Discovery Call', description: 'We learn about your business, goals, and challenges to identify the right service mix.' },
  { step: '02', title: 'Custom Strategy', description: 'We create a tailored plan with clear objectives, timelines, and KPIs for your growth.' },
  { step: '03', title: 'Team Deployment', description: 'Our specialized team deploys the systems and processes to start driving results.' },
  { step: '04', title: 'Ongoing Optimization', description: 'We continuously monitor, report, and refine strategies to maximize your ROI.' },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-[#06B6D4]/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-4 border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#60A5FA]">
                OUR SERVICES
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Everything You Need to <span className="gradient-text">Scale</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Comprehensive growth solutions designed specifically for real estate and mortgage professionals. One integrated system, unlimited potential.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 shadow-lg shadow-[#2563EB]/25">
                    Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/realtors">
                  <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                    For Realtors
                  </Button>
                </Link>
                <Link href="/loan-officers">
                  <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                    For Loan Officers
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]">
                OUR APPROACH
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Three Pillars of <span className="text-[#2563EB]">Growth</span>
              </h2>
              <p className="mt-4 text-lg text-[#64748B]">We combine marketing, business development, and operations into one powerful engine.</p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <motion.div key={pillar.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col rounded-2xl bg-white p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconBg} shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{pillar.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{pillar.description}</p>
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
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="bg-[#F8FAFC] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Full Service <span className="text-[#2563EB]">Catalog</span>
              </h2>
              <p className="mt-4 text-lg text-[#64748B]">Every service is tailored to the real estate and mortgage industry.</p>
            </motion.div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div key={service.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative flex flex-col rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{service.description}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: service.gradientFrom }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:gap-2 transition-all">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]">HOW IT WORKS</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Getting Started is <span className="text-[#2563EB]">Simple</span></h2>
            </motion.div>
            <div className="mt-16 space-y-0">
              {process.map((step, index) => (
                <motion.div key={step.step} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start pb-12 relative">
                  {index < process.length - 1 && <div className="absolute left-[1.75rem] top-14 bottom-0 w-px bg-[#2563EB]/20" />}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white font-bold text-lg shadow-lg shadow-[#2563EB]/25">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#0F172A]">{step.title}</h3>
                    <p className="mt-2 text-base text-[#64748B] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Scale Your Business?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Book a free strategy call and discover how GrowthGo can transform your real estate or mortgage business.</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
