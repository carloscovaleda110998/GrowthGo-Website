'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Users, Calendar, Home, TrendingUp, XCircle, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const painPoints = [
  { icon: XCircle, title: 'Lost Leads', description: 'Leads slip through the cracks because there\'s no systematic follow-up process. Every missed lead is lost revenue that you can never recover.' },
  { icon: XCircle, title: 'Inconsistent Marketing', description: 'Your social media presence is sporadic, making it impossible to build the authority and trust that top-producing agents rely on.' },
  { icon: XCircle, title: 'No Time for Prospecting', description: 'You\'re so busy with active clients and admin tasks that you can\'t build the pipeline that will sustain your business next quarter.' },
  { icon: XCircle, title: 'Weak Referral Network', description: 'Without strategic partnerships with Loan Officers and other professionals, your referral pipeline is unpredictable and insufficient.' },
]

const solutions = [
  { icon: CheckCircle2, title: 'Lead Generation & Follow-Up', description: 'Our team implements systematic lead nurturing that ensures no opportunity falls through the cracks. Quick response protocols and automated follow-up sequences keep your pipeline full.' },
  { icon: CheckCircle2, title: 'Personal Brand Building', description: 'We create and manage a consistent, authoritative online presence that positions you as the go-to agent in your market. Social media, content, and brand strategy all working together.' },
  { icon: CheckCircle2, title: 'Content Creation', description: 'Professional visual and written content that attracts buyers and sellers, showcases your expertise, and builds trust with your audience across all platforms.' },
  { icon: CheckCircle2, title: 'Referral Network Development', description: 'We build strategic B2B relationships between you and Loan Officers, title companies, and other professionals to create a sustainable referral engine.' },
  { icon: CheckCircle2, title: 'CRM & Pipeline Management', description: 'Keep your contacts organized, your pipeline visible, and your follow-ups on autopilot. We manage your CRM so you always know where your next deal is coming from.' },
  { icon: CheckCircle2, title: 'Appointment Scheduling', description: 'Fill your calendar with qualified prospects. We handle confirmation, reminders, and rescheduling so you can focus on closing deals.' },
]

const impactMetrics = [
  { value: '3x', label: 'More Qualified Leads', icon: TrendingUp, color: 'text-[#10B981]' },
  { value: '94%', label: 'Follow-Up Rate', icon: Users, color: 'text-[#2563EB]' },
  { value: '2x', label: 'Appointments Set', icon: Calendar, color: 'text-[#06B6D4]' },
  { value: '60%', label: 'Cost Savings', icon: BarChart3, color: 'text-[#8B5CF6]' },
]

export default function RealtorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#10B981]/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-4 border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#34D399]">
                FOR REALTORS
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Close More Deals. <span className="gradient-text">Build Your Brand.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                GrowthGo helps real estate agents generate more visibility, nurture more leads, and build a referral engine that never stops producing results.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 shadow-lg shadow-[#2563EB]/25">
                    Get Started as a Realtor <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Sound Familiar?</h2>
              <p className="mt-4 text-lg text-[#64748B]">Most Realtors face the same obstacles that keep them from scaling their business.</p>
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
        <section className="bg-[#F8FAFC] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4 border-[#10B981]/20 bg-[#10B981]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#10B981]">THE SOLUTION</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">How GrowthGo <span className="text-[#10B981]">Transforms</span> Your Business</h2>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div key={solution.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#10B981]/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#10B981]/10 text-[#10B981] mb-4">
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
              <p className="mt-4 text-lg text-[#64748B]">Real results that Realtors experience with GrowthGo.</p>
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

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Close More Deals?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Book a free strategy call and discover how GrowthGo can help you build a stronger, more scalable real estate business.</p>
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
