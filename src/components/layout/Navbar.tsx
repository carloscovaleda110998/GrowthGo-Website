'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Realtors', path: '/realtors' },
  { label: 'Loan Officers', path: '/loan-officers' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Determine if navbar should look "scrolled" (white bg):
  // - Always on sub-pages (they have their own layout)
  // - On home only after scrolling past threshold
  const hasSolidBg = pathname !== '/' || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidBg
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & Company Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/growthgo-logo-icon.png"
            alt="GrowthGo Logo"
            width={30}
            height={30}
            className="h-[30px] w-auto"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300">
            Growth<span className="text-[#2563EB]">Go</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#2563EB]/10 hover:text-[#2563EB] ${
                  isActive
                    ? 'text-[#2563EB]'
                    : 'text-[#475569]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold px-5 shadow-md shadow-[#2563EB]/25 transition-all duration-200 hover:shadow-lg hover:shadow-[#2563EB]/30"
              size="default"
            >
              Book a Call
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#0F172A] hover:bg-[#2563EB]/10 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <SheetHeader className="border-b border-slate-100 px-6 py-5">
                <SheetTitle className="flex items-center gap-2.5">
                  <Image
                    src="/growthgo-logo-icon.png"
                    alt="GrowthGo Logo"
                    width={28}
                    height={28}
                    className="h-7 w-auto"
                  />
                  <span className="text-lg font-bold text-[#0F172A]">
                    Growth<span className="text-[#2563EB]">Go</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col px-4 py-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = pathname === link.path
                  return (
                    <SheetClose asChild key={link.path}>
                      <Link
                        href={link.path}
                        className={`flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors hover:bg-[#2563EB]/10 hover:text-[#2563EB] ${
                          isActive
                            ? 'text-[#2563EB] bg-[#2563EB]/5'
                            : 'text-[#0F172A]'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>

              <div className="mt-auto border-t border-slate-100 px-6 py-5">
                <SheetClose asChild>
                  <a
                    href="https://wa.me/573045252718?text=Hi%20GrowthGo%2C%20I%20am%20interested%20in%20your%20services!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold shadow-md shadow-[#2563EB]/25 transition-all duration-200"
                      size="lg"
                    >
                      Book a Call
                    </Button>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
