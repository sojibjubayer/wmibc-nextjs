"use client";

import { useState } from "react";
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

const jobCategories = [
  "Hospitality Worker",
  "Hotel Staff",
  "Restaurant Helper",
  "Cleaner",
  "Warehouse Worker",
  "Construction Worker",
  "General Helper",
  "Kitchen Helper",
];

const visaInfo = [
  { title: "Visa Type", value: "Greece Work Permit Visa" },
  { title: "Main Keyword", value: "Greece Work Permit" },
  { title: "Available Sectors", value: "Hospitality, Construction, Warehouse" },
  { title: "Applicants", value: "Qatar-based applicants" },
];

const documents = [
  "Valid passport",
  "Qatar ID / residence permit copy",
  "Updated CV",
  "Passport-size photo",
  "Current work experience documents",
  "Previous employment or experience certificates",
  "Educational certificates if available",
  "Police clearance if required",
  "Pre-medical certificate if required",
];

const processSteps = [
  {
    title: "Profile Review",
    desc: "We review your profile, current work experience, passport details, Qatar residence status, and eligibility for Greece work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Job Category Selection",
    desc: "Choose suitable Greece job categories such as hospitality, construction, warehouse, cleaner, helper, and kitchen support roles based on your profile.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Greece work visa checklist, application guidance, experience document checking, and embassy submission preparation.",
    icon: FileCheck2,
  },
  {
    title: "Visa Processing Support",
    desc: "Step-by-step support for Greece work permit processing, assessment updates, documentation, embassy submission, and visa stamping process.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Greece work permit visa support from Qatar",
  "Hospitality, construction and warehouse sectors",
  "Current work experience preferred",
  "Document checking and embassy submission guidance",
];

const faqs = [
  {
    q: "How can I apply for Greece work permit from Qatar?",
    a: "You can start by checking your profile, passport validity, Qatar residence status, work experience, and document readiness. WMIBC provides guidance for Greece work permit visa processing from Qatar.",
  },
  {
    q: "What jobs are available for Greece work visa applicants?",
    a: "Current Greece work visa job categories include hospitality worker, hotel staff, restaurant helper, cleaner, warehouse worker, construction worker, general helper, and kitchen helper.",
  },
  {
    q: "What documents are required for Greece work visa?",
    a: "Common documents include passport, Qatar ID or residence permit copy, CV, photo, work experience documents, previous employment certificates, educational certificates if available, and other supporting documents depending on employer and visa category.",
  },
  {
    q: "How long does Greece work permit visa processing take?",
    a: "The estimated processing time may vary depending on employer file, work permit approval, embassy schedule, document readiness, and visa stamping process.",
  },
  {
    q: "Is work experience required for Greece work visa?",
    a: "Work experience is preferred and may be required depending on the job category, employer requirement, and visa file.",
  },
  {
    q: "Can Qatar residents apply for Greece work permit visa?",
    a: "Yes, Qatar-based applicants can apply if they meet the required profile, documentation, employer file, and embassy submission requirements.",
  },
];

export default function GreeceWClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(--hero-gradient) pb-12 pt-10 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-(--border-soft) bg-white shadow-2xl lg:rounded-[3rem]">
            {/* Background Image Container */}
            <div className="relative h-62.5 sm:h-87.5 lg:absolute lg:inset-0 lg:h-full lg:w-full">
              <img
                src="/images/work/greece-work-permit-visa-qatar.webp"
                alt="Greece work permit visa processing from Qatar"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent lg:bg-linear-to-r lg:from-white lg:via-white/95 lg:to-white/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_380px] lg:items-center lg:p-16 xl:grid-cols-[1fr_440px]">
              <div>
                <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-(--brand-navy) shadow-sm backdrop-blur-md sm:text-sm">
                  <Sparkles className="h-4 w-4 shrink-0 text-yellow-500" />
                  <span className="truncate">
                    Greece Work Permit Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-(--text-heading) sm:text-5xl md:text-6xl">
                  Greece Work Permit <br className="hidden sm:block" />
                  <span className="text-(--brand-royal) sm:text-6xl md:text-6xl">
                    Visa Processing
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-(--text-body) sm:text-lg">
                  Apply for Greece work permit visa from Qatar with professional
                  support for hospitality, construction, warehouse, cleaner, and
                  helper job categories.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-(--brand-navy)/90 active:scale-95"
                  >
                    Apply for Greece Work Permit
                  </Link>

                  <Link
                    href="#jobs"
                    className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white/80 px-8 py-4 text-center text-sm font-bold text-(--brand-royal) shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:scale-95"
                  >
                    View Job Categories
                  </Link>
                </div>

                {/* Highlights Grid */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/60 bg-white/50 px-4 py-3 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-xs font-semibold text-(--text-heading) sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="hidden rounded-[2.5rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-[0_25px_60px_-20px_rgba(15,23,42,0.35)] lg:block">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal)">
                    <Store className="h-7 w-7" />
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-(--text-heading)">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Greece work visa sectors
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Hospitality", "Construction", "Warehouse"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-(--border-soft) bg-white px-4 py-2 text-[11px] font-bold text-(--brand-navy) shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--brand-royal)/20 hover:shadow-md"
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: BadgeCheck, text: "Greece work permit guidance" },
            { icon: Building2, text: "Job category assistance" },
            { icon: ShieldCheck, text: "Visa document support" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-(--bg-soft-blue) md:justify-start"
            >
              <item.icon className="h-7 w-7 shrink-0 text-(--brand-royal)" />
              <span className="text-sm font-bold text-(--text-heading) md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Visa Info Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-(--brand-royal)">
            Greece Work Permit Details
          </div>

          <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl lg:text-5xl">
            Visa information from Qatar
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visaInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-(--border-soft) bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-xl"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-(--brand-royal)">
                {item.title}
              </p>

              <h3 className="mt-4 text-lg font-bold leading-snug text-(--text-heading)">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Job Categories Section */}
      <section id="jobs" className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl">
              Available Categories
            </h2>

            <p className="mt-4 text-(--text-body)">
              Current Greece work permit positions for Qatar-based applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Required Documents
            </div>

            <h2 className="text-3xl font-black tracking-tight text-(--text-heading) sm:text-4xl">
              Greece work visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              Common documents for processing. Final checklist may vary
              depending on employer file, work permit approval, embassy
              requirements, and visa category.
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
      <section className="bg-(--bg-soft-blue) px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-black text-(--text-heading) sm:text-4xl">
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

      {/* Processing Time Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[2.5rem] border border-(--border-soft) bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/20 hover:shadow-xl sm:p-12">
          <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Processing Time
          </div>

          <h2 className="text-3xl font-black tracking-tight text-(--text-heading) sm:text-4xl">
            Greece work permit processing timeline
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-(--text-body) sm:text-base">
            The processing timeline may vary depending on employer file, work
            permit approval, embassy appointment availability, document
            readiness, and visa stamping process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-black text-(--text-heading)">
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
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 font-bold text-(--text-heading) sm:text-lg">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-(--border-soft) bg-(--bg-soft-blue)/10 p-6 text-sm leading-relaxed text-(--text-body)">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-(--brand-navy) p-8 text-center shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.6)] sm:p-16 lg:p-20 lg:text-left">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Start your Greece journey today.
              </h2>

              <p className="mt-6 text-lg text-white/70">
                Professional consultation and document review for Qatar
                residents applying for Greece work permit visa.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-10 py-4 font-bold text-(--brand-navy) shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Apply Now
              </Link>

              <Link
                href="/work-visa"
                className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
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