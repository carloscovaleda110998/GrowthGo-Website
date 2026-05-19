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
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

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

export default function ContactSection() {
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

      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours.",
      })
      form.reset()
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form - Left Side (3 cols) */}
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
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
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

                  {/* Email */}
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

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone */}
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

                  {/* Company */}
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

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Role Select */}
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

                  {/* Service Interest Select */}
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

          {/* Info - Right Side (2 cols) */}
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
                href="https://wa.me/573018353436?text=Hi%20GrowthGo%2C%20I%20am%20interested%20in%20your%20services!"
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
                    <p className="text-sm font-medium text-[#0F172A]">
                      Location
                    </p>
                    <p className="text-sm text-[#64748B]">
                      Colombia - United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#E2E8F0] pt-5">
                <p className="text-sm text-[#64748B]">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
