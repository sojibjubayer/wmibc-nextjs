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
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Plane,
    title: "Visit & Tourist Visa",
    description:
      "Apply for tourist and visit visas from Qatar with expert guidance for Europe, UK, Canada, Australia, and more.",
    href: "/tourist-business-visit",
    badge: "Popular",
  },
  {
    icon: BriefcaseBusiness,
    title: "Work Permit Visa",
    description:
      "Professional support for Europe work permits, employer sponsorship, and overseas legal work opportunities.",
    href: "/work-visa",
    badge: "High Demand",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Study abroad guidance with university applications, admission support, and student visa processing.",
    href: "/study-visa",
    badge: "Study Abroad",
  },
  {
    icon: Building2,
    title: "Qatar Business Setup",
    description:
      "Company formation, trade license, legal documentation, and expert business consultation in Qatar.",
    href: "/business-setup",
    badge: "Business",
  },
  {
    icon: Globe2,
    title: "Europe Business Setup",
    description:
      "Business registration, documentation, tax guidance, and strategic expansion support across Europe.",
    href: "/business-setup",
    badge: "Global",
  },
  {
    icon: BadgeCheck,
    title: "Immigration Consultation",
    description:
      "Personalized consultation for choosing the right visa pathway and improving approval chances.",
    href: "/contact",
    badge: "Expert Help",
  },
];

export default function ServicesClient() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50 to-blue-100 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Our Services
          </p>

          <h1 className="text-(--text-heading) mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Professional Visa & Business Solutions from Qatar
          </h1>

          <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
            WMIBC helps professionals, students, travelers, and entrepreneurs
            with trusted support for work visas, visit visas, student visas,
            and business setup services across global destinations.
          </p>
        </div>
      </section>

      {/* Animated Cards */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(2,6,23,0.08)]"
                >
                  {/* badge */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-(--bg-soft-blue) transition-all duration-300 group-hover:bg-(--brand-royal)">
                      <Icon className="h-7 w-7 text-(--brand-royal) transition-all duration-300 group-hover:text-white" />
                    </div>

                    <span className="rounded-full bg-(--bg-soft-blue) px-3 py-1 text-xs font-semibold text-(--brand-royal)">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-(--text-heading) text-xl font-semibold">
                    {service.title}
                  </h2>

                  <p className="text-(--text-body) mt-4 text-sm leading-7">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="text-(--brand-royal) mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-linear-to-r from-(--brand-royal) to-(--accent-cyan) transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-4xl bg-linear-to-r from-(--brand-navy) to-(--brand-royal) p-8 text-white md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                  Need Expert Help?
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Let’s Find the Right Path for Your Global Goals
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/80 md:text-base">
                  Speak with WMIBC for professional consultation on work visa,
                  visit visa, student visa, and business setup solutions.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}