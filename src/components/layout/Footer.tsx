'use client'

import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Shield,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  onOpenAdmin: () => void
}

const serviceLinks = [
  { label: 'Marketing', href: '#services' },
  { label: 'Business Development', href: '#services' },
  { label: 'Lead Follow-Up', href: '#services' },
  { label: 'Operational Support', href: '#services' },
  { label: 'CRM & Automation', href: '#services' },
]

const industryLinks = [
  { label: 'Realtors', href: '#realtors' },
  { label: 'Loan Officers', href: '#loan-officers' },
  { label: 'Mortgage Brokers', href: '#loan-officers' },
  { label: 'Real Estate Teams', href: '#realtors' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export default function Footer({ onOpenAdmin }: FooterProps) {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="mt-auto bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/growthgo-logo.png"
                alt="GrowthGo Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold tracking-tight">
                Growth<span className="text-[#2563EB]">Go</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400 max-w-xs">
              Empowering Realtors and Loan Officers across the US with
              marketing, business development, lead follow-up, and operational
              support to scale your business faster.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all duration-200 hover:bg-[#2563EB] hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#06B6D4]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#06B6D4]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:camilo.martinez@growthgo.com"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors duration-200 hover:text-[#06B6D4]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#2563EB]" />
                  camilo.martinez@growthgo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573042522718"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors duration-200 hover:text-[#06B6D4]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#2563EB]" />
                  +57 (304) 252-2718
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 shrink-0 text-[#2563EB] mt-0.5" />
                  Colombia - United States
                </span>
              </li>
            </ul>
            <Button
              onClick={() => handleNavClick('#contact')}
              className="bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold shadow-md shadow-[#2563EB]/25 transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
              size="default"
            >
              Book a Call
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} GrowthGo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-6">
                <a
                  href={link.href}
                  className="text-xs text-slate-500 transition-colors duration-200 hover:text-slate-300"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="h-3 w-px bg-slate-700" aria-hidden="true" />
                )}
              </span>
            ))}
            {/* Subtle admin access button - looks like a copyright/auth icon */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-xs text-slate-700 hover:text-slate-500 transition-colors duration-200 cursor-default"
              title="Admin"
              aria-label="Admin access"
            >
              <Shield className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
