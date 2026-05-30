'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Loader2,
  Clock,
  MessageCircle,
} from 'lucide-react'
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { WHATSAPP_URL } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

/* ────────────── Form Schema ────────────── */

const contactSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

const roleOptions = ['Realtor', 'Loan Officer', 'Other']
const serviceOptions = [
  'Social Media Management',
  'Content Creation',
  'Business Development',
  'Lead Follow-Up',
  'CRM Support',
  'Appointment Setting',
  'Loan Officer Assistant',
  'Sales Support',
]

/* ────────────── FAQ Data ────────────── */

const faqItems = [
  {
    question: 'How do I get started?',
    answer:
      "Book a free strategy call. We'll learn about your business, discuss your goals, and create a customized plan. No commitment for the initial consultation.",
  },
  {
    question: 'How quickly can I see results?',
    answer:
      'Most clients see improvements in their online presence within the first 2 weeks. Lead generation and B2B relationships typically develop within the first 30-60 days.',
  },
  {
    question: 'Do I need to be on camera?',
    answer:
      "Not at all! We work with content creators and visual resources so your brand can shine without you needing to be on camera.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "Minimal. After our initial strategy session, we handle the heavy lifting. You'll spend just a few minutes per week reviewing and approving content.",
  },
]

/* ────────────── Page Component ────────────── */

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      service: '',
      message: '',
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          company: data.company || undefined,
          role: data.role || undefined,
          service: data.service || undefined,
          message: data.message || undefined,
          source: 'contact-form',
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to submit form')
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.")
      form.reset()
    } catch {
      toast.error('Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ──── Section 1: Hero ──── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-20 sm:py-28">
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Build Your{' '}
              <span className="bg-gradient-to-r from-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                Growth System
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Schedule a free strategy call and discover how GrowthGo can transform your business.
            </motion.p>
          </div>
        </section>

        {/* ──── Section 2: Contact Form + Info ──── */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Left — Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-2 text-lg text-[#64748B]">
                  Ready to grow? Let&apos;s start a conversation.
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Full Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="h-11 rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Email <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="h-11 rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Phone
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="h-11 rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Company / Business Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Company"
                                className="h-11 rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 3: Role + Service */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Role
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-11 w-full rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {roleOptions.map((role) => (
                                  <SelectItem key={role} value={role}>
                                    {role}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#0F172A]">
                              Service Interest
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-11 w-full rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceOptions.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#0F172A]">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your goals and how we can help..."
                              rows={4}
                              className="rounded-lg border-[#E2E8F0] bg-white transition-colors focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-lg bg-[#2563EB] px-8 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 size-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>

              {/* Right — Info Panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="rounded-xl bg-[#F8FAFC] p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Prefer to talk?
                  </h3>
                  <p className="mt-2 text-[#64748B]">
                    Schedule a free strategy call
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25 transition-all duration-200 hover:bg-[#059669] hover:shadow-xl"
                    >
                      <Calendar className="mr-2 size-4" />
                      Book a Call
                    </Button>
                  </a>

                  <div className="mt-8 space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10">
                        <Mail className="size-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0F172A]">Email</p>
                        <a
                          href="mailto:camilo.martinez@growthgo.com"
                          className="text-sm text-[#2563EB] hover:underline"
                        >
                          camilo.martinez@growthgo.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10">
                        <Phone className="size-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0F172A]">Phone</p>
                        <a
                          href="tel:+573042522718"
                          className="text-sm text-[#2563EB] hover:underline"
                        >
                          +57 (304) 252-2718
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10">
                        <MapPin className="size-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0F172A]">Location</p>
                        <p className="text-sm text-[#64748B]">Colombia - United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#E2E8F0] pt-5">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-[#10B981]" />
                      <p className="text-sm text-[#64748B]">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual company card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mt-6 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#2563EB]/20">
                      <MessageCircle className="size-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">GrowthGo</p>
                      <p className="text-sm text-slate-400">Growth System for Real Estate</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    We help Realtors and Loan Officers scale their businesses with
                    marketing, business development, lead follow-up, and operational
                    support across the US market.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#06B6D4]">
                    <MapPin className="size-4" />
                    <span>Colombia - United States</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──── Section 3: Quick FAQ ──── */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Common Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-12"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-[#E2E8F0] data-[state=open]:border-l-[#2563EB] data-[state=open]:pl-4 transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-[#0F172A] hover:text-[#2563EB] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-[#64748B]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onOpenAdmin={() => {}} />
    </div>
  )
}
