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
  ChefHat,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const jobCategories = [
  "Waiter",
  "Waitress",
  "Cook",
  "Chef",
  "Housekeeping Staff",
  "Barista",
  "Dishwasher",
];

const visaInfo = [
  { title: "Visa Type", value: "Turkey Work Permit Visa" },
  { title: "Processing From", value: "Qatar" },
  {
    title: "Available Sectors",
    value: "Hospitality, Restaurant, Hotel, Cafe & Kitchen",
  },
  { title: "Applicant Support", value: "Qatar, GCC & Bangladesh" },
];

const documents = [
  "Valid passport",
  "Qatar ID / residence permit copy, if applying from Qatar",
  "GCC residence permit copy, if applicable",
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
    desc: "We review your profile, work experience, passport details, residence status, and eligibility for Turkey work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Job Category Selection",
    desc: "Choose suitable Turkey job categories such as waiter, waitress, cook, chef, housekeeping staff, barista, or dishwasher.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Turkey work visa checklist, application form guidance, work permit file preparation, and required documents.",
    icon: FileCheck2,
  },
  {
    title: "Application Support",
    desc: "Step-by-step support for Turkey work permit, document checking, application readiness, and process updates from our team.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Turkey work permit visa support from Qatar",
  "Support for Qatar, GCC and Bangladesh applicants",
  "Hospitality, hotel and restaurant sectors",
  "Complete document checking and application guidance",
];

const faqs = [
  {
    q: "How can I apply for a Turkey work permit from Qatar?",
    a: "You can start by checking your profile, job category, passport validity, residence status, and document readiness. WMIBC provides guidance for Turkey work permit visa processing from Qatar.",
  },
  {
    q: "What jobs are available for Turkey work visa applicants?",
    a: "Common Turkey work visa job categories include waiter, waitress, cook, chef, housekeeping staff, barista, and dishwasher.",
  },
  {
    q: "What documents are required for Turkey work visa?",
    a: "Common documents include passport, residence permit copy if applicable, CV, photo, experience documents, educational certificates if available, and other supporting documents depending on employer and visa category.",
  },
  {
    q: "How long does Turkey work permit visa processing take?",
    a: "Processing time varies depending on employer file, work permit approval, embassy or visa center schedule, applicant location, and document readiness.",
  },
  {
    q: "Can applicants from Qatar, GCC countries, or Bangladesh apply?",
    a: "Yes. WMIBC assists Qatar residents, GCC-based applicants, and Bangladeshi applicants depending on profile, documents, job category, employer file, and current Turkey work permit availability. Processing coordination is handled from Qatar, with additional support available through our Bangladesh office.",
  },
];

export default function TurkeyWClient() {
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
                src="/images/work/turkey-work-permit-visa-qatar.webp"
                alt="Turkey work permit visa processing support from Qatar for GCC and Bangladesh applicants"
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
                    Turkey Work Permit Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-(--text-heading) sm:text-5xl md:text-6xl lg:text-6xl">
                  Turkey Work Permit <br className="hidden sm:block" />
                  <span className="text-(--brand-royal)">
                    Visa Processing
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-body) sm:mt-6 sm:text-lg">
                  Apply for Turkey work permit visa with WMIBC. We assist Qatar
                  residents, GCC-based applicants, and Bangladeshi applicants
                  through document checking, job category guidance, and
                  application support.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-6 py-3.5 text-center text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--brand-navy)/90 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    Apply for Turkey Work Permit
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
                    <ChefHat className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-(--text-heading) sm:text-xl">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Turkey work visa sectors
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
            { icon: Building2, text: "Bangladesh office coordination" },
            { icon: ShieldCheck, text: "GCC applicant document guidance" },
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
            Turkey Work Permit Details
          </div>

          <h2 className="text-3xl font-black text-(--text-heading) sm:text-4xl lg:text-5xl">
            Visa information for applicants
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-(--text-body) sm:text-base">
            WMIBC provides Turkey work permit visa guidance for Qatar residents,
            GCC-based applicants, and Bangladeshi applicants with document
            checking and application preparation support.
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
              Available Categories
            </h2>

            <p className="mt-4 text-sm text-(--text-body) sm:text-base">
              Popular Turkey work permit job categories for applicants from
              Qatar, GCC countries, and Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              Turkey work visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              Common documents for Turkey work permit visa processing. Final
              requirements may vary by employer, embassy, visa center, job
              category, and applicant location.
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
                Start your Turkey journey today.
              </h2>

              <p className="mt-5 text-base text-white/70 sm:text-lg">
                Professional consultation, document review, and application
                support for Qatar residents, GCC applicants, and Bangladeshi
                applicants.
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