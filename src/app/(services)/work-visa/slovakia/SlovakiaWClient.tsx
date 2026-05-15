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
  Factory,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const jobCategories = [
  "Factory Worker",
  "Warehouse Worker",
  "General Helper",
  "Helper",
];

const visaInfo = [
  { title: "Visa Type", value: "Slovakia Work Permit Visa" },
  { title: "Main Keyword", value: "Slovakia Work Permit" },
  { title: "Available Sectors", value: "Factory, Warehouse, Helper" },
  { title: "Applicants", value: "Qatar-based applicants" },
];

const documents = [
  "Valid passport",
  "Qatar ID / residence permit copy",
  "Updated CV",
  "Passport-size photo",
  "Educational or experience certificates if available",
  "Previous work experience documents",
  "Police clearance if required",
  "Medical or insurance documents if required",
];

const processSteps = [
  {
    title: "Profile Review",
    desc: "We review your profile, work experience, passport details, Qatar residence status, and eligibility for Slovakia work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Job Category Selection",
    desc: "Choose suitable Slovakia job categories such as factory worker, warehouse worker, helper, or general helper.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Slovakia work visa checklist, application form guidance, work permit file preparation, and required documents.",
    icon: FileCheck2,
  },
  {
    title: "Visa Processing Support",
    desc: "Step-by-step support for Slovakia work permit, work visa application readiness, documentation, and process updates.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Slovakia work permit visa support from Qatar",
  "Factory, warehouse and helper job categories",
  "Slovakia work visa checklist and document guidance",
  "Professional consultation before starting the process",
];

const faqs = [
  {
    q: "How can I apply for a Slovakia work permit from Qatar?",
    a: "You can start by checking your profile, job category, passport validity, Qatar residence status, and document readiness. WMIBC provides guidance for Slovakia work permit visa processing from Qatar.",
  },
  {
    q: "What jobs are available for Slovakia work visa applicants?",
    a: "Common Slovakia work visa job categories include factory worker, warehouse worker, helper, and general helper.",
  },
  {
    q: "What documents are required for Slovakia work visa?",
    a: "Common documents include passport, Qatar ID or residence permit copy, CV, photo, experience documents, educational certificates if available, and other supporting documents depending on employer and visa category.",
  },
  {
    q: "How long does Slovakia work permit visa processing take?",
    a: "Processing time varies depending on employer file, work permit approval, embassy or visa center schedule, and document readiness.",
  },
  {
    q: "Can Bangladeshi applicants apply for Slovakia work visa from Qatar?",
    a: "Yes. Bangladeshi applicants living in Qatar may apply depending on their profile, Qatar residence status, documents, job category, and current Slovakia work permit availability.",
  },
];

export default function SlovakiaWClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(--hero-gradient) pb-12 pt-8 sm:pt-10 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-(--accent-cyan)/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -left-24 top-48 h-80 w-80 rounded-full bg-(--brand-royal)/10 blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-(--border-soft) bg-white shadow-2xl sm:rounded-[2.5rem] lg:rounded-[3rem]">
            <div className="relative h-72 sm:h-96 lg:absolute lg:inset-0 lg:h-full lg:w-full">
              <Image
                src="/images/work/slovakia-work-permit-visa-qatar.webp"
                alt="Slovakia work permit visa processing from Qatar"
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
                  <Sparkles className="h-4 w-4 shrink-0 text-(--accent-cyan)" />
                  <span className="truncate">
                    Slovakia Work Permit Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-(--text-heading) sm:text-5xl md:text-6xl lg:text-7xl">
                  Slovakia Work Permit{" "}
                  <br className="hidden sm:block" />
                  <span className="text-(--brand-royal) sm:text-5xl md:text-6xl">
                    Visa Processing
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-body) sm:mt-6 sm:text-lg">
                  Apply for Slovakia work permit visa from Qatar with
                  professional support for factory, warehouse, and helper job
                  categories.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-6 py-3.5 text-center text-xs font-bold text-white shadow-lg transition hover:bg-(--brand-navy)/90 active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    Apply for Slovakia Work Permit
                  </Link>

                  <Link
                    href="#jobs"
                    className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white/85 px-6 py-3.5 text-center text-xs font-bold text-(--brand-royal) shadow-sm backdrop-blur-md transition hover:bg-white active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    View Job Categories
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/65 px-4 py-3 shadow-xs backdrop-blur-md"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5" />
                      <span className="text-[11px] font-semibold leading-5 text-(--text-heading) sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-white/70 bg-white/92 p-6 shadow-xl backdrop-blur-xl lg:block lg:rounded-[2.5rem] lg:p-8">
                <div className="mb-5 flex items-center gap-4 sm:mb-6">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal)">
                    <Factory className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-(--text-heading) sm:text-xl">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Slovakia work visa sectors
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {jobCategories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-(--border-soft) bg-white px-3 py-2 text-[10px] font-bold text-(--brand-navy) shadow-sm sm:px-4 sm:text-[11px]"
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
            { icon: BadgeCheck, text: "Slovakia work permit guidance" },
            { icon: Building2, text: "Job placement assistance" },
            { icon: ShieldCheck, text: "Visa document support" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 md:justify-start"
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
            Slovakia Work Permit Details
          </div>

          <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl lg:text-5xl">
            Visa information from Qatar
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visaInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-(--border-soft) bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
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
              Available Categories
            </h2>
            <p className="mt-4 text-sm text-(--text-body) sm:text-base">
              Popular Slovakia work permit sectors for Qatar-based applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobCategories.map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-white p-5 shadow-xs"
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
              Slovakia work visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              Common documents for processing. Requirements may vary by
              employer, embassy, or applicant profile.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-(--brand-navy) px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-(--brand-navy)/90"
            >
              Check Your Documents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-xs"
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
                className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--brand-royal) text-white shadow-lg transition-transform group-hover:-translate-y-1">
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
                className="overflow-hidden rounded-2xl border border-(--border-soft) bg-white transition-all"
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
                    className={`h-5 w-5 shrink-0 transition-transform ${
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-(--brand-navy) p-7 text-center sm:rounded-[2.5rem] sm:p-12 lg:p-20 lg:text-left">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Start your Slovakia journey today.
              </h2>
              <p className="mt-5 text-base text-white/70 sm:text-lg">
                Professional consultation and document review for Qatar
                residents.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-(--brand-navy) shadow-xl transition hover:scale-105 sm:px-10"
              >
                Apply Now
              </Link>

              <Link
                href="/work-visa"
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:px-10"
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
