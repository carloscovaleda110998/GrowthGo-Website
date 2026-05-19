'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-24 sm:py-32"
    >
      {/* Animated CSS-only particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Glow behind headline */}
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/10 blur-[80px]" />

        {/* Floating dots */}
        <span className="particle absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="particle absolute left-[25%] top-[60%] h-1 w-1 rounded-full bg-white/15" />
        <span className="particle absolute left-[45%] top-[15%] h-2 w-2 rounded-full bg-white/10" />
        <span className="particle absolute left-[65%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="particle absolute left-[80%] top-[30%] h-1 w-1 rounded-full bg-white/20" />
        <span className="particle absolute left-[90%] top-[80%] h-2 w-2 rounded-full bg-white/10" />
        <span className="particle absolute left-[15%] top-[85%] h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="particle absolute left-[55%] top-[45%] h-1 w-1 rounded-full bg-white/15" />
        <span className="particle absolute left-[35%] top-[35%] h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="particle absolute left-[75%] top-[55%] h-1 w-1 rounded-full bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Build a Smarter, More Scalable
          <br className="hidden sm:block" /> Business with GrowthGo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          More visibility. More referrals. More closings. Scale faster and spend
          less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://wa.me/573018353436?text=Hi%20GrowthGo%2C%20I%20am%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#2563EB] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10"
            >
              <Phone className="mr-2 size-4" />
              Contact Us
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 text-sm text-slate-400"
        >
          No commitment required. 30-minute strategic consultation.
        </motion.p>
      </div>

      {/* CSS animation for particles */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-120px) scale(0.5);
            opacity: 0;
          }
        }
        .particle {
          animation: float-up 6s ease-in-out infinite;
        }
        .particle:nth-child(3) {
          animation-delay: 0.5s;
          animation-duration: 7s;
        }
        .particle:nth-child(4) {
          animation-delay: 1s;
          animation-duration: 5.5s;
        }
        .particle:nth-child(5) {
          animation-delay: 1.5s;
          animation-duration: 8s;
        }
        .particle:nth-child(6) {
          animation-delay: 2s;
          animation-duration: 6.5s;
        }
        .particle:nth-child(7) {
          animation-delay: 2.5s;
          animation-duration: 7.5s;
        }
        .particle:nth-child(8) {
          animation-delay: 0.3s;
          animation-duration: 5s;
        }
        .particle:nth-child(9) {
          animation-delay: 1.8s;
          animation-duration: 6s;
        }
        .particle:nth-child(10) {
          animation-delay: 3s;
          animation-duration: 8.5s;
        }
        .particle:nth-child(11) {
          animation-delay: 0.8s;
          animation-duration: 5.8s;
        }
        .particle:nth-child(12) {
          animation-delay: 2.2s;
          animation-duration: 7.2s;
        }
      `}</style>
    </section>
  )
}
