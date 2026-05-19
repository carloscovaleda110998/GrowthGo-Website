'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'What exactly does GrowthGo do?',
    answer:
      'GrowthGo provides comprehensive growth support for Realtors and Loan Officers, including social media management, content creation, business development, lead follow-up, CRM support, and sales assistance. We function as an extension of your team, not just a service provider.',
  },
  {
    question: 'How is GrowthGo different from a marketing agency?',
    answer:
      'Unlike generic marketing agencies, GrowthGo is exclusively focused on the real estate and mortgage industry. We combine marketing, business development, and operational support into one integrated system. We don\'t just run ads — we help build sustainable growth engines.',
  },
  {
    question: 'Who are GrowthGo\'s services for?',
    answer:
      'Our services are designed specifically for Realtors and Loan Officers in the United States who want to scale their businesses more efficiently. Whether you\'re an independent agent or part of a larger team, we can customize our support to fit your needs.',
  },
  {
    question: 'How does the remote team model work?',
    answer:
      'Our specialized team operates remotely from Colombia, providing high-quality support at a fraction of US hiring costs. This model allows us to offer premium talent and consistent results while keeping your costs significantly lower than hiring locally.',
  },
  {
    question: 'What kind of results can I expect?',
    answer:
      'Results vary based on your current situation and goals, but our clients typically see increased lead generation, improved follow-up rates, stronger online presence, and more strategic business relationships. We focus on measurable KPIs and provide regular reporting.',
  },
  {
    question: 'How do I get started with GrowthGo?',
    answer:
      'Simply book a free strategy call through our website. We\'ll learn about your business, discuss your goals, and create a customized plan. There\'s no commitment required for the initial consultation.',
  },
  {
    question: 'Can I scale services as my business grows?',
    answer:
      'Absolutely. GrowthGo is built for scalability. As your business expands, we can add more support, new services, and additional resources without the need to rebuild your team from scratch.',
  },
  {
    question: 'Do you offer long-term contracts?',
    answer:
      'We offer flexible engagement models designed to fit your needs. We believe in earning your business through results, not locking you into long-term contracts. Specific terms are discussed during your strategy call.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748B]">
            Everything you need to know about working with GrowthGo
          </p>
        </motion.div>

        {/* Accordion */}
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
                value={`item-${index}`}
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
  )
}
