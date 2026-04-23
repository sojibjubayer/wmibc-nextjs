"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Plane,
  Globe2,
  BadgeCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Plane,
    title: "Visit & Tourist Visa",
    description: "Expert guidance for Schengen, UK, Canada, and USA visitor visas from Doha.",
    href: "/tourist-business-visit",
    badge: "Popular",
    color: "from-blue-500/20 to-cyan-400/20",
  },
  {
    icon: BriefcaseBusiness,
    title: "Work Permit Visa",
    description: "Legal pathways for European employer sponsorship and global work permits.",
    href: "/work-visa",
    badge: "High Demand",
    color: "from-indigo-500/20 to-purple-400/20",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description: "Full admission support for top-tier universities in Canada, UK, and Australia.",
    href: "/study-visa",
    badge: "Academic",
    color: "from-emerald-500/20 to-teal-400/20",
  },
  {
    icon: Building2,
    title: "Qatar Business Setup",
    description: "Trade licenses and legal company formation for entrepreneurs in Qatar.",
    href: "/business-setup",
    badge: "Local Expert",
    color: "from-amber-500/20 to-orange-400/20",
  },
  {
    icon: Globe2,
    title: "Europe Business Setup",
    description: "Strategic expansion and tax registration services across EU jurisdictions.",
    href: "/business-setup",
    badge: "Global",
    color: "from-rose-500/20 to-pink-400/20",
  },
  {
    icon: BadgeCheck,
    title: "Immigration Consultation",
    description: "Tailored eligibility assessments and high-success visa pathway mapping.",
    href: "/contact",
    badge: "Professional",
    color: "from-slate-500/20 to-slate-400/20",
  },
];

export default function ServicesClient() {
  return (
    <main className="bg-white selection:bg-(--brand-royal) selection:text-white">
      {/* Dynamic Header */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-125 w-250 -translate-x-1/2 bg-linear-to-b from-sky-50/50 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-xs font-bold tracking-widest text-(--brand-royal) uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            WMIBC Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-(--text-heading) sm:text-5xl lg:text-6xl"
          >
            Precision <span className="text-(--brand-royal)">Immigration</span> & Business Strategies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-(--text-body) leading-relaxed"
          >
            Navigating global borders requires more than paperwork—it requires strategy. 
            We provide end-to-end support for your international transitions from Qatar.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-(--brand-royal)/30 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                {/* Decorative Background Glow */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-linear-to-br ${service.color} blur-2xl transition-all group-hover:scale-150`} />

                <div>
                  <div className="mb-8 flex items-start justify-between">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-(--brand-royal)/5 blur-sm transition-all group-hover:bg-(--brand-royal)/10" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all group-hover:bg-(--brand-royal) group-hover:text-white">
                        <service.icon className="h-7 w-7 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <span className="rounded-lg bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 ring-1 ring-slate-100 group-hover:bg-(--brand-royal)/10 group-hover:text-(--brand-royal)">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-(--text-heading) group-hover:text-(--brand-royal) transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-(--text-body)/80">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="mt-10 flex items-center justify-between border-t border-slate-50 pt-6 text-sm font-bold text-(--brand-navy) transition-all hover:text-(--brand-royal)"
                >
                  Explore Details
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-(--brand-royal) group-hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized CTA */}
      <section className="px-4 pb-24 md:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[48px] bg-(--brand-navy) py-16 px-8 md:px-16 md:py-20 shadow-2xl">
          {/* Abstract Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-(--brand-royal) blur-[120px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-5xl lg:leading-tight">
                Ready to begin your <br className="hidden lg:block" /> 
                <span className="text-(--accent-cyan)">global transition?</span>
              </h2>
              <p className="mt-6 text-lg text-white/70">
                Book a 1-on-1 session with our certified consultants in Doha for 
                compliance checks and pathway mapping.
              </p>
            </div>

            <div className="mt-10 flex shrink-0 flex-col gap-4 sm:flex-row lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-(--accent-cyan) px-8 py-4 text-sm font-bold text-(--brand-navy) transition-all hover:-translate-y-1 hover:brightness-110 shadow-lg"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/your-number"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Inquire on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}