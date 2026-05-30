'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MonitorSmartphone,
  Network,
  Headphones,
  Check,
  ArrowRight,
  Sparkles,
  Camera,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

/* ─────────── Animation Variants ─────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/* ─────────── Pillar Data ─────────── */
const pillars = [
  {
    title: 'Presencia Digital Profesional',
    subtitle: 'Social Media Management',
    color: '#2563EB',
    colorLight: 'bg-blue-50',
    icon: MonitorSmartphone,
    description:
      'Creamos contenido, gestionamos redes sociales y posicionamos la marca de nuestros clientes para generar autoridad, confianza y recordación.',
    services: [
      'Creación de contenido estratégico',
      'Edición de videos profesionales',
      'Diseño de piezas gráficas',
      'Planificación estratégica de contenido',
      'Programación y publicación',
      'Parrillas mensuales',
      'Optimización de marca personal',
      'Manejo de Instagram, TikTok, Facebook y LinkedIn',
    ],
    callout: {
      title: 'Contenido sin necesidad de salir en cámara',
      text: 'Entendemos que no todos los profesionales desean grabarse o aparecer en video. Por eso trabajamos con modelos, creadores de contenido y recursos visuales de apoyo que permiten comunicar la marca sin necesidad de estar frente a cámara.',
      icon: Camera,
    },
  },
  {
    title: 'Business Development',
    subtitle: 'Relaciones B2B',
    color: '#06B6D4',
    colorLight: 'bg-cyan-50',
    icon: Network,
    description:
      'Nuestros Business Developers se enfocan en crear y fortalecer alianzas estratégicas entre profesionales del sector inmobiliario e hipotecario.',
    services: [
      'Búsqueda y conexión entre Realtors y Loan Officers',
      'Desarrollo de relaciones comerciales a largo plazo',
      'Generación de oportunidades de referidos',
      'Impulso de colaboraciones estratégicas',
      'Construcción de redes de negocio sólidas',
    ],
    callout: {
      title: '¿Por qué importa?',
      text: 'En Real Estate y Mortgage, las relaciones correctas generan oportunidades constantes. Un Realtor conectado con un buen Loan Officer puede enviar clientes calificados de manera recurrente. Y un Loan Officer con una red sólida de Realtors puede construir una fuente estable de nuevos préstamos. GrowthGo ayuda a crear ese puente.',
      icon: Target,
    },
  },
  {
    title: 'Loan Officer Assistance & Sales Support',
    subtitle: 'Asistencia Comercial',
    color: '#10B981',
    colorLight: 'bg-emerald-50',
    icon: Headphones,
    description:
      'Ofrecemos asistentes y agentes comerciales especializados en comunicación inmobiliaria e hipotecaria, enfocados en apoyar el proceso de ventas y seguimiento.',
    services: [
      'Llamadas a leads',
      'Seguimiento de clientes potenciales',
      'Prospección en frío y en caliente',
      'Agendamiento de citas',
      'Calificación de prospectos',
      'Actualización de CRM',
      'Clasificación de leads según nivel de interés',
      'Recordatorios y continuidad comercial',
    ],
    callout: null,
  },
]

/* ─────────── Packages Data ─────────── */
const packages = [
  {
    name: 'Starter',
    tagline: 'Ideal para fortalecer presencia digital',
    color: '#2563EB',
    features: [
      'Manejo de redes sociales',
      '12 posts mensuales',
      'Edición de video',
      'Diseño básico',
      'Programación de publicaciones',
    ],
    recommended: false,
  },
  {
    name: 'Growth',
    tagline: 'Presencia digital + apoyo comercial',
    color: '#06B6D4',
    features: [
      'Manejo de redes sociales',
      'Business Developer',
      'Seguimiento de leads',
      'Generación de relaciones B2B',
      'Soporte estratégico',
    ],
    recommended: true,
  },
  {
    name: 'Scale',
    tagline: 'Estructura completa y robusta',
    color: '#10B981',
    features: [
      'Equipo remoto completo',
      'Sales Agent',
      'Appointment Setter',
      'Business Development',
      'Marketing digital',
      'Seguimiento comercial',
      'Soporte operativo integral',
    ],
    recommended: false,
  },
]

/* ─────────── Benefits Data ─────────── */
const benefits = [
  'Reducción de costos operativos',
  'Mayor presencia digital',
  'Más visibilidad de marca',
  'Mejor organización comercial',
  'Seguimiento efectivo de leads',
  'Más oportunidades de negocio',
  'Más referidos y relaciones estratégicas',
  'Más tiempo para actividades de alto valor',
  'Operación más ordenada y escalable',
]

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* ─── SECTION 1: Hero ─── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] py-24 sm:py-32 lg:py-40">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.08] blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/[0.06] blur-[100px]" />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="services-grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#services-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-white/10 bg-white/[0.04] px-5 py-1.5 text-sm font-semibold tracking-widest text-slate-300 backdrop-blur-sm"
              >
                OUR SERVICES
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Soluciones Integrales para{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Tu Crecimiento
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed"
            >
              GrowthGo une tres pilares esenciales para el crecimiento de
              cualquier negocio en Real Estate y Mortgage
            </motion.p>

            {/* Decorative three-dot indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-3"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        </section>

        {/* ─── SECTION 2: Three Pillars ─── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
            >
              <Badge
                variant="outline"
                className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
              >
                THREE PILLARS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Nuestros Tres Pilares de{' '}
                <span className="text-[#2563EB]">Crecimiento</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                Cada pilar trabaja de forma independiente pero se complementa
                para impulsar tu negocio al siguiente nivel.
              </p>
            </motion.div>

            {/* Pillar Cards */}
            <div className="space-y-12 sm:space-y-16">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
                      index % 2 === 0
                        ? 'hover:shadow-[#2563EB]/5'
                        : index === 1
                        ? 'hover:shadow-[#06B6D4]/5'
                        : 'hover:shadow-[#10B981]/5'
                    }`}
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${pillar.color}, ${pillar.color}88)`,
                      }}
                    />

                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left: Title & Description */}
                        <div className="lg:col-span-5">
                          <div className="flex items-center gap-4 mb-5">
                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-xl ${pillar.colorLight}`}
                            >
                              <pillar.icon
                                className="h-7 w-7"
                                style={{ color: pillar.color }}
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                                {pillar.title}
                              </h3>
                              <p
                                className="text-sm font-medium"
                                style={{ color: pillar.color }}
                              >
                                {pillar.subtitle}
                              </p>
                            </div>
                          </div>

                          <p className="text-base leading-relaxed text-[#64748B]">
                            {pillar.description}
                          </p>
                        </div>

                        {/* Right: Services List & Callout */}
                        <div className="lg:col-span-7">
                          <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
                          >
                            {pillar.services.map((service) => (
                              <motion.li
                                key={service}
                                variants={staggerItem}
                                className="flex items-start gap-2.5 text-sm text-[#0F172A]"
                              >
                                <Check
                                  className="mt-0.5 h-4 w-4 shrink-0"
                                  style={{ color: pillar.color }}
                                />
                                <span>{service}</span>
                              </motion.li>
                            ))}
                          </motion.ul>

                          {/* Special Callout */}
                          {pillar.callout && (
                            <motion.div
                              variants={fadeInUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="rounded-xl border p-5 sm:p-6"
                              style={{
                                borderColor: `${pillar.color}25`,
                                backgroundColor: `${pillar.color}08`,
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                  style={{
                                    backgroundColor: `${pillar.color}15`,
                                  }}
                                >
                                  <pillar.callout.icon
                                    className="h-5 w-5"
                                    style={{ color: pillar.color }}
                                  />
                                </div>
                                <div>
                                  <h4
                                    className="text-sm font-bold mb-1"
                                    style={{ color: pillar.color }}
                                  >
                                    {pillar.callout.title}
                                  </h4>
                                  <p className="text-sm leading-relaxed text-[#64748B]">
                                    {pillar.callout.text}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Service Packages ─── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
            >
              <Badge
                variant="outline"
                className="mb-4 border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#2563EB]"
              >
                PACKAGES
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Elige Tu Plan de{' '}
                <span className="text-[#2563EB]">Crecimiento</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                Paquetes diseñados para cada etapa de tu negocio
              </p>
            </motion.div>

            {/* Package Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  variants={staggerItem}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    pkg.recommended
                      ? 'border-[#06B6D4]/40 shadow-lg shadow-[#06B6D4]/10 ring-1 ring-[#06B6D4]/20'
                      : 'border-gray-100 shadow-sm hover:shadow-gray-200/80'
                  }`}
                >
                  {/* Recommended Badge */}
                  {pkg.recommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#06B6D4] px-4 py-1 text-xs font-bold text-white shadow-md shadow-[#06B6D4]/25">
                        <Sparkles className="h-3.5 w-3.5" />
                        RECOMMENDED
                      </span>
                    </div>
                  )}

                  {/* Package Name */}
                  <div className="mb-5">
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: pkg.color }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-5 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${pkg.color}30, ${pkg.color}08)`,
                    }}
                  />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#0F172A]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: pkg.color }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact" className="mt-auto">
                    <Button
                      className={`w-full font-semibold transition-all duration-200 ${
                        pkg.recommended
                          ? 'bg-[#06B6D4] hover:bg-[#0891B2] text-white shadow-md shadow-[#06B6D4]/25 hover:shadow-lg hover:shadow-[#06B6D4]/30'
                          : 'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md'
                      }`}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 4: Benefits ─── */}
        <section className="py-20 sm:py-28 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
            >
              <Badge
                variant="outline"
                className="mb-4 border-[#10B981]/20 bg-[#10B981]/5 px-4 py-1 text-xs font-semibold tracking-widest text-[#10B981]"
              >
                BENEFITS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                ¿Qué Obtienes con{' '}
                <span className="text-[#10B981]">GrowthGo</span>?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                Beneficios tangibles que transforman la forma en que operas y
                creces
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={staggerItem}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#10B981]/20"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10B981]/10">
                    <Check className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 5: Final CTA ─── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-[#0F172A] py-20 sm:py-28">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#2563EB]/[0.06] blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#10B981]/[0.04] blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                GrowthGo no solo ayuda a crecer.{' '}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                  Ayuda a crecer mejor.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
                Descubre cómo nuestros tres pilares pueden transformar tu
                operación y llevar tu negocio al siguiente nivel.
              </p>

              <div className="mt-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group h-13 px-8 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold shadow-lg shadow-[#2563EB]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/40 hover:scale-[1.02]"
                  >
                    Schedule Your Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
