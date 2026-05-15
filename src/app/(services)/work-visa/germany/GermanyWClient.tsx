"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Store,
  Users2,
} from "lucide-react";

const jobCategories = ["Food Court Worker", "Super Market Worker"];

const visaInfo = [
  { title: "Visa Type", value: "Germany Work Permit Visa" },
  { title: "Processing From", value: "Qatar" },
  {
    title: "Available Positions",
    value: "Food Court & Super Market",
  },
  {
    title: "Applicant Support",
    value: "Qatar, GCC & Bangladesh",
  },
];

const documents = [
  "Valid passport",
  "Qatar ID / residence permit copy, if applying from Qatar",
  "GCC residence permit copy, if applicable",
  "Updated CV",
  "Passport-size photo",
  "Current work experience documents",
  "Previous employment or experience certificates",
  "Educational certificates if available",
  "Police clearance if required",
  "Pre-medical certificate required while submitting at embassy",
];

const processSteps = [
  {
    title: "Profile Review",
    desc: "We review your passport, residence status, current work experience, previous employment background, and eligibility for Germany work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Position Selection",
    desc: "Choose suitable Germany work categories such as food court worker or super market worker based on your profile and work experience.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Germany work visa checklist, application preparation, experience document checking, and embassy submission readiness.",
    icon: FileCheck2,
  },
  {
    title: "Application Support",
    desc: "Step-by-step support for Germany work permit processing, assessment update, pre-medical guidance, and visa stamping process.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Germany work permit visa support from Qatar",
  "Food court and super market job categories",
  "Current work experience required",
  "Document checking and embassy submission guidance",
];

const faqs = [
  {
    q: "How can I apply for Germany work permit visa from Qatar?",
    a: "You can start by checking your passport, residence status, current work experience, CV, and supporting documents. WMIBC provides Germany work permit visa guidance from Qatar for eligible applicants.",
  },
  {
    q: "What positions are available for Germany work visa?",
    a: "Current available positions include food court worker and super market worker.",
  },
  {
    q: "How long does Germany work permit visa processing take?",
    a: "The estimated processing time is around 3 to 4 months. Timeline may vary depending on assessment, employer file, embassy schedule, document readiness, and visa stamping process.",
  },
  {
    q: "Is current work experience required?",
    a: "Yes. Current work experience is required along with documents for Germany work permit visa processing.",
  },
  {
    q: "Is medical required for Germany work visa submission?",
    a: "Yes. Pre-medical is required while submitting at the embassy.",
  },
];

export default function GermanyWClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(--hero-gradient) pb-12 pt-8 sm:pt-10 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -left-24 top-48 h-80 w-80 rounded-full bg-red-500/10 blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-(--border-soft) bg-white shadow-2xl sm:rounded-[2.5rem] lg:rounded-[3rem]">
            <div className="relative h-72 sm:h-96 lg:absolute lg:inset-0 lg:h-full lg:w-full">
              <Image
                src="/images/work/germany-work-permit-visa-qatar.webp"
                alt="Germany work permit visa processing support from Qatar for food court and super market jobs"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center lg:object-right"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-white/20 lg:bg-linear-to-r lg:from-white lg:via-white/90 lg:to-white/20" />
            </div>

            <div className="relative z-10 grid gap-8 p-5 sm:p-8 md:p-10 lg:grid-cols-[1fr_380px] lg:items-center lg:p-16 xl:grid-cols-[1fr_440px]">
              <div>
                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[11px] font-semibold text-(--brand-navy) shadow-sm backdrop-blur-md sm:text-sm">
                  <Sparkles className="h-4 w-4 shrink-0 text-yellow-500" />
                  <span className="truncate">
                    Germany Work Permit Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-(--text-heading) sm:text-5xl md:text-6xl lg:text-6xl">
                  Germany Work Permit <br className="hidden sm:block" />
                  <span className="text-(--brand-royal)">
                    Visa Processing
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-body) sm:mt-6 sm:text-lg">
                  Apply for Germany work permit visa with WMIBC. We assist
                  applicants from Qatar with food court and super market job
                  categories, document checking, current work experience
                  guidance, assessment updates, and embassy submission support.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-6 py-3.5 text-center text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--brand-navy)/90 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    Apply for Germany Work Permit
                  </Link>

                  <Link
                    href="#jobs"
                    className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white/85 px-6 py-3.5 text-center text-xs font-bold text-(--brand-royal) shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-(--brand-royal)/20 hover:bg-white hover:shadow-md active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    View Job Categories
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/65 px-4 py-3 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-md"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5" />
                      <span className="text-[11px] font-semibold leading-5 text-(--text-heading) sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-white/70 bg-white/92 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-2xl lg:block lg:rounded-[2.5rem] lg:p-8">
                <div className="mb-5 flex items-center gap-4 sm:mb-6">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal)">
                    <Store className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-(--text-heading) sm:text-xl">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Germany work visa sectors
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {jobCategories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-(--border-soft) bg-white px-3 py-2 text-[10px] font-bold text-(--brand-navy) shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--brand-royal)/20 hover:shadow-md sm:px-4 sm:text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-(--border-soft) bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-10">
          {[
            { icon: BadgeCheck, text: "Qatar-based processing support" },
            { icon: Building2, text: "Germany work permit guidance" },
            { icon: ShieldCheck, text: "Document and embassy support" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-(--bg-soft-blue) md:justify-start"
            >
              <item.icon className="h-6 w-6 shrink-0 text-(--brand-royal) sm:h-7 sm:w-7" />
              <span className="text-sm font-bold text-(--text-heading) md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Visa Info Grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <header className="mb-10 max-w-3xl lg:mb-12">
          <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-(--brand-royal)">
            Germany Work Permit Details
          </div>

          <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl lg:text-5xl">
            Visa information for applicants
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-(--text-body) sm:text-base">
            WMIBC provides Germany work permit visa support from Qatar with job
            category guidance, document checking, assessment update, pre-medical
            guidance, and embassy submission preparation.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visaInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-(--border-soft) bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-xl sm:p-7"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-(--brand-royal)">
                {item.title}
              </p>
              <h3 className="mt-4 text-base font-bold leading-snug text-(--text-heading) sm:text-lg">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Job Categories Section */}
      <section id="jobs" className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 text-center lg:mb-12 lg:text-left">
            <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl">
              Available Positions
            </h2>

            <p className="mt-4 text-sm text-(--text-body) sm:text-base">
              Current Germany work permit positions for applicants from Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {jobCategories.map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-lg"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm font-bold text-(--text-heading)">
                  {job}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Required Documents
            </div>

            <h2 className="text-3xl font-black tracking-tight text-(--text-heading) sm:text-4xl">
              Germany work visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              Common documents for Germany work permit visa processing.
              Current work experience is required. Pre-medical is also required
              while submitting at the embassy.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-(--brand-navy) px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--brand-navy)/90 hover:shadow-xl"
            >
              Check Your Documents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-(--brand-royal)" />
                  <p className="text-sm font-medium leading-relaxed text-(--text-body)">
                    {doc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-(--bg-soft-blue) px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-black text-(--text-heading) sm:text-4xl lg:mb-16">
            Application Process
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-transparent bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/15 hover:shadow-xl lg:p-7 lg:text-left"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--brand-royal) text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 lg:mx-0">
                  <step.icon className="h-8 w-8" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-(--text-heading)">
                  <span className="mr-2 opacity-20">0{idx + 1}</span>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-(--text-body)">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-4xl border border-(--border-soft) bg-white p-7 shadow-sm sm:p-8 lg:p-10">
            <h3 className="text-2xl font-black text-(--text-heading)">
              Processing Time
            </h3>

            <p className="mt-4 text-4xl font-black text-(--brand-royal)">
              3 – 4 Months
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-(--text-body)">
              Processing time may vary depending on assessment, employer file,
              embassy schedule, document readiness, and visa stamping process.
              In some cases, assessment reports may come within a week.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-black text-(--text-heading) sm:text-4xl lg:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-(--border-soft) bg-white transition-all duration-300 hover:border-(--brand-royal)/20 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                >
                  <span className="pr-4 text-sm font-bold text-(--text-heading) sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-(--border-soft) bg-(--bg-soft-blue)/10 p-5 text-sm leading-relaxed text-(--text-body) sm:p-6">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-(--brand-navy) p-7 text-center shadow-2xl sm:rounded-[2.5rem] sm:p-12 lg:p-20 lg:text-left">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Start your Germany journey today.
              </h2>

              <p className="mt-5 text-base text-white/70 sm:text-lg">
                Professional consultation, document review, assessment guidance,
                and Germany work permit visa support for food court and super
                market positions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-(--brand-navy) shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-10"
              >
                Apply Now
              </Link>

              <Link
                href="/work-visa"
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:px-10"
              >
                View All Countries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}