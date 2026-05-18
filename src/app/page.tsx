'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutDashboard, X } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyGrowthGoSection from '@/components/sections/WhyGrowthGoSection'
import ProcessSection from '@/components/sections/ProcessSection'
import RealtorsSection from '@/components/sections/RealtorsSection'
import LoanOfficersSection from '@/components/sections/LoanOfficersSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import ContactSection from '@/components/sections/ContactSection'
import AboutSection from '@/components/sections/AboutSection'
import AdminDashboard from '@/components/admin/LeadsDashboard'

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Section */}
        <TrustSection />

        {/* About Section */}
        <AboutSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Why GrowthGo Section */}
        <WhyGrowthGoSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Realtors Section */}
        <RealtorsSection />

        {/* Loan Officers Section */}
        <LoanOfficersSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Admin Dashboard (toggleable) */}
        <AnimatePresence>
          {showAdmin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <AdminDashboard />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final CTA Section */}
        <FinalCTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />

      {/* Admin Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        onClick={() => setShowAdmin(!showAdmin)}
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          showAdmin
            ? 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
            : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[#2563EB]/30'
        }`}
        aria-label={showAdmin ? 'Close admin dashboard' : 'Open admin dashboard'}
      >
        {showAdmin ? <X className="h-5 w-5" /> : <LayoutDashboard className="h-5 w-5" />}
      </motion.button>
    </div>
  )
}
