'use client'

import { useState, useEffect } from 'react'
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

  // Secret keyboard shortcut: Ctrl+Shift+L to toggle admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault()
        setShowAdmin((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

        {/* Admin Dashboard (hidden, accessed via Ctrl+Shift+L) */}
        {showAdmin && (
          <div>
            <AdminDashboard />
          </div>
        )}

        {/* Final CTA Section */}
        <FinalCTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
