'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, FileText, Handshake, DollarSign, XCircle, BarChart3, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const painPoints = [
  { icon: XCircle, title: 'Disorganized Pipeline', description: 'Loans fall through the cracks because your pipeline is managed in spreadsheets and sticky notes instead of a systematic process.' },
  { icon: XCircle, title: 'Weak Realtor Partnerships', description: 'Without strong, strategic relationships with Realtors, your purchase business relies on walk-ins and luck instead of predictable referral flow.' },
  { icon: XCircle, title: 'Operational Overload', description: 'You\'re buried in document preparation, follow-ups, and coordination instead of focusing on building relationships and closing loans.' },
  { icon: XCircle, title: 'Inconsistent Follow-Up', description: 'Leads go cold because there\'s no systematic process for timely follow-up, costing you real revenue and market share.' },
]

const solutions = [
  { icon: CheckCircle2, title: 'Pipeline Organization & Management', description: 'We keep your pipeline visible, organized, and actionable. From lead intake to clear-to-close, every loan is tracked and nothing falls through the cracks.' },
  { icon: CheckCircle2, title: 'Realtor Partnership Development', description: 'We build and nurture strategic relationships with top-producing Realtors who can become your most valuable source of purchase business referrals.' },
  { icon: CheckCircle2, title: 'Appointment Coordination', description: 'We handle scheduling, confirmations, and reminders so your calendar stays full with qualified borrowers and referral partners.' },
  { icon: CheckCircle2, title: 'CRM Management', description: 'Your CRM stays clean, updated, and working for you. We manage contacts, track interactions, and ensure follow-ups happen on time, every time.' },
  { icon: CheckCircle2, title: 'Loan File Preparation', description: 'Our team assists with document collection, file organization, and preparation, freeing you to focus on relationship-building and closing deals.' },
  { icon: CheckCircle2, title: 'Sales Process Optimization', description: 'We analyze and optimize your sales workflow, identifying bottlenecks and implementing improvements that increase conversion rates and reduce time-to-close.' },
]

const workProcess = [
  { step: '01', title: 'Assessment', description: 'We evaluate your current pipeline, partnerships, and processes to identify growth opportunities.' },
  { step: '02', title: 'Strategy', description: 'We create a customized plan focused on Realtor partnerships, pipeline management, and operational efficiency.' },
  { step: '03', title: 'Execution', description: 'Our specialized team deploys the systems, builds the relationships, and manages the operations.' },
  { step: '04', title: 'Growth', description: 'Continuous optimization and reporting ensures your business scales predictably and profitably.' },
]

const impactMetrics = [
  { value: '2.5x', label: 'More Realtor Partners', icon: Users, color: 'text-[#06B6D4]' },
  { value: '94%', label: 'Follow-Up Rate', icon: CheckCircle2, color: 'text-[#10B981]' },
  { value: '40%', label: 'Time Saved', icon: BarChart3, color: 'text-[#2563EB]' },
  { value: '60%', label: 'Cost Savings', icon: DollarSign, color: 'text-[#8B5CF6]' },
]

export default function LoanOfficersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#06B6D4]/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 h-56 w-56 rounded-full bg-[#2563EB]/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-4 border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#22D3EE]">
                FOR LOAN OFFICERS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Streamline Your Pipeline. <span className="gradient-text">Strengthen Your Partnerships.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                GrowthGo provides the operational support and business development expertise that mortgage professionals need to thrive in today&apos;s competitive market.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 shadow-lg shadow-[#06B6D4]/25">
                    Get Started as a Loan Officer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold tracking-widest text-red-600">THE CHALLENGE</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Are These Holding You Back?</h2>
              <p className="mt-4 text-lg text-[#64748B]">Loan Officers face unique challenges that keep them from reaching their full potential.</p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <motion.div key={point.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-red-200 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors duration-200 group-hover:bg-red-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A]">{point.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-[#F0F7FF] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-[#06B6D4]/20 bg-[#06B6D4]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#06B6D4]">THE SOLUTION</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">How GrowthGo <span className="text-[#06B6D4]">Supports</span> Your Success</h2>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div key={solution.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#06B6D4]/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{solution.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{solution.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">The Impact</h2>
              <p className="mt-4 text-lg text-[#64748B]">Real results that Loan Officers experience with GrowthGo.</p>
            </motion.div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <motion.div key={metric.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                    <Icon className={`mx-auto h-8 w-8 ${metric.color}`} />
                    <p className="mt-3 text-3xl font-bold text-[#0F172A]">{metric.value}</p>
                    <p className="mt-1 text-sm text-[#64748B]">{metric.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">How We <span className="text-[#06B6D4]">Work Together</span></h2>
            </motion.div>
            <div className="mt-16 space-y-0">
              {workProcess.map((step, index) => (
                <motion.div key={step.step} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start pb-12 relative">
                  {index < workProcess.length - 1 && <div className="absolute left-[1.75rem] top-14 bottom-0 w-px bg-[#06B6D4]/20" />}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] text-white font-bold text-lg shadow-lg shadow-[#06B6D4]/25">
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
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Streamline Your Pipeline?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Book a free strategy call and discover how GrowthGo can transform your mortgage business.</p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 shadow-lg shadow-[#06B6D4]/25">
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
