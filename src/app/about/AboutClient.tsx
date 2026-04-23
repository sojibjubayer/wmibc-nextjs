import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Briefcase,
  Plane,
  GraduationCap,
} from "lucide-react";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Trusted Immigration Consultancy",
    description:
      "Professional guidance for work visas, visit visas, student visas, and business setup services from Qatar and GCC countries.",
  },
  {
    icon: Building2,
    title: "Regional Presence",
    description:
      "With offices in Qatar and Bangladesh, we support applicants across GCC countries with personalized consultation.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Support",
    description:
      "From eligibility checks and documentation review to submission guidance, we help reduce delays and common application mistakes.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "We focus on clear communication, proper documentation, and reliable support throughout every stage of the journey.",
  },
];

const serviceLinks = [
  {
    title: "Work Visa from Qatar",
    href: "/work-visa",
    icon: Briefcase,
    description:
      "Explore expert support for overseas work visa and work permit applications from Qatar.",
  },
  {
    title: "Visit Visa from Qatar",
    href: "/tourist-business-visit",
    icon: Plane,
    description:
      "Get professional guidance for visit visa and tourist visa applications from Qatar.",
  },
  {
    title: "Student Visa Support",
    href: "/study-visa",
    icon: GraduationCap,
    description:
      "Discover study abroad guidance for student visas, admissions, and documentation support.",
  },
];

export default function AboutClient() {
  return (
    <main className="bg-white">
      {/* Hero Section with Enhanced Depth */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50 py-20 md:py-28">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] mask-[linear-gradient(to_bottom,white,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        {/* Animated Glow Orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-(--accent-cyan)/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-(--brand-royal)/5 text-(--brand-royal) text-xs font-bold uppercase tracking-[0.2em] mb-6">
              About WMIBC
            </span>

            <h1 className="text-(--text-heading) text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
              Your Gateway to <span className="text-(--brand-royal)">Global</span> Opportunities
            </h1>

            <p className="text-(--text-body) mx-auto mt-8 max-w-3xl text-lg leading-relaxed md:text-xl opacity-90">
              World Multinational Immigration & Business Consultancy (WMIBC)
              provides premium support for work, student, and visit visas, 
              bridging the gap between Qatar and your future destination.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-(--brand-navy)"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work-visa"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-(--text-heading) transition-all hover:border-(--brand-sky)/30 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Split Layout */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="h-1 w-12 bg-(--brand-royal) rounded-full" />
            <h2 className="text-(--text-heading) text-3xl font-bold tracking-tight md:text-4xl">
              Helping Clients from Qatar <br /> Build Better Global Futures
            </h2>

            <div className="space-y-5 text-(--text-body) text-base leading-relaxed">
              <p>
                WMIBC stands as a beacon of trust in the Qatari consultancy landscape, 
                specializing in navigating the complexities of international migration.
              </p>
              <p>
                Whether it's a skilled work permit for Europe or a business setup 
                in North America, our tailored strategies ensure that every client’s 
                unique profile is presented with professional precision.
              </p>
            </div>
          </div>

          {/* Mission Card with "Glass" Effect */}
          <div className="relative rounded-[2.5rem] bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-10 text-white shadow-2xl overflow-hidden group">
             {/* Decorative Swoosh matching logo */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-(--accent-cyan)/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-(--accent-cyan)/30 transition-colors" />
            
            <span className="text-(--accent-cyan) text-xs font-bold uppercase tracking-widest">
              Our Mission
            </span>

            <h3 className="mt-4 text-3xl font-bold">
              We Drive to Achieve <br /> Your Goal
            </h3>

            <p className="mt-6 text-base leading-relaxed text-white/80">
              Our mission is to simplify complex visa and business processes
              through trusted consultation, proper documentation support, and
              personalized guidance tailored to each client’s needs.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Globe2 className="mt-1 h-6 w-6 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "Empowering individuals in Qatar to transcend borders and achieve 
                  extraordinary success on the global stage."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points - Grid with Hover Depth */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-(--text-heading) text-3xl font-bold tracking-tight md:text-4xl">
              Why Clients Trust WMIBC
            </h2>
            <p className="text-(--text-body) mt-4 text-lg">
              We combine regional expertise with global standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-(--brand-royal) group-hover:bg-(--brand-royal) group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-(--text-heading) mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-(--text-body) mt-4 text-sm leading-relaxed opacity-85">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services - Card Layout */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-(--text-heading) text-3xl font-bold md:text-4xl">
                Professional Visa Solutions
              </h2>
              <p className="text-(--text-body) mt-4 text-lg">
                Comprehensive support for every step of your international journey.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.href}
                  className="flex flex-col h-full rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-(--brand-royal)/20 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  <Icon className="h-10 w-10 text-(--brand-sky) mb-6" />
                  <h3 className="text-(--text-heading) text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-(--text-body) mt-4 text-base leading-relaxed grow opacity-80">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="group text-(--brand-royal) mt-8 inline-flex items-center gap-2 font-bold text-sm"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High Impact CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative rounded-[3rem] bg-linear-to-r from-(--brand-navy) via-(--brand-navy) to-(--brand-royal) p-8 md:p-16 text-white overflow-hidden">
             {/* Decorative Glow */}
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-(--accent-cyan)/10 blur-[100px] -mb-32 -mr-32" />
            
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold md:text-5xl leading-tight">
                  Ready to start your <br /> global journey?
                </h2>
                <p className="text-lg text-white/70">
                  Connect with Doha's most reliable consultancy and get 
                  an eligibility assessment today.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-(--brand-navy) shadow-2xl transition hover:bg-slate-100 hover:scale-105 active:scale-95"
              >
                Contact WMIBC
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}