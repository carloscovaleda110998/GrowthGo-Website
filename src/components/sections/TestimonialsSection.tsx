'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Realtor',
    quote:
      'GrowthGo transformed how I manage my leads and online presence. I\'ve seen a 3x increase in qualified leads since we started working together.',
  },
  {
    name: 'David Rodriguez',
    role: 'Loan Officer',
    quote:
      'Having a dedicated assistant who understands the mortgage industry has been a game-changer. My pipeline is more organized than ever.',
  },
  {
    name: 'Jennifer Adams',
    role: 'Realtor',
    quote:
      'The B2B networking alone has generated more referral partnerships than I could have built on my own in years. Incredible value.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            Client Success
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Trusted by Real Estate &amp; Mortgage Professionals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748B]">
            See how GrowthGo helps industry professionals scale their businesses
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <Card className="h-full border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                <CardContent className="relative p-6">
                  {/* Quote Icon */}
                  <Quote className="mb-4 size-10 fill-[#2563EB]/10 text-[#2563EB]/20" />

                  {/* Star Rating */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="mb-6 text-base italic leading-relaxed text-[#334155]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-[#E2E8F0] pt-4">
                    <p className="font-semibold text-[#0F172A]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
