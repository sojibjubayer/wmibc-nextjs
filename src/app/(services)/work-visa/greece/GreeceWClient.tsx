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
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Hotel,
  ShieldCheck,
  Sparkles,
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
  {
    title: "Visa Type",
    value: "Greece Work Permit Visa",
  },
  {
    title: "Main Keyword",
    value: "Greece Work Permit",
  },
  {
    title: "Available Sectors",
    value: "Hospitality, Construction, Warehouse",
  },
  {
    title: "Applicants",
    value: "Qatar-based applicants",
  },
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
    desc: "We review your profile, work experience, passport details, Qatar residence status, and eligibility for Greece work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Job Category Selection",
    desc: "Choose suitable Greece job categories such as hospitality, construction, warehouse, cleaner, hotel staff, or general worker.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Greece work visa checklist, application form guidance, work permit file preparation, and required documents.",
    icon: FileCheck2,
  },
  {
    title: "Visa Processing Support",
    desc: "Step-by-step support for Greece work permit, work visa application readiness, documentation, and process updates.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Greece work permit visa support from Qatar",
  "Hospitality, warehouse and construction job categories",
  "Greece work visa checklist and document guidance",
  "Professional consultation before starting the process",
];

const faqs = [
  {
    q: "How can I apply for a Greece work permit from Qatar?",
    a: "You can start by checking your profile, job category, passport validity, Qatar residence status, and document readiness. WMIBC provides guidance for Greece work permit visa processing from Qatar.",
  },
  {
    q: "What jobs are available for Greece work visa applicants?",
    a: "Common Greece work visa job categories include hospitality worker, hotel staff, restaurant helper, cleaner, warehouse worker, construction worker, kitchen helper, and general helper.",
  },
  {
    q: "What documents are required for Greece work visa?",
    a: "Common documents include passport, Qatar ID or residence permit copy, CV, photo, experience documents, educational certificates if available, and other supporting documents depending on employer and visa category.",
  },
  {
    q: "How long does Greece work permit visa processing take?",
    a: "Processing time varies depending on employer file, work permit approval, embassy or visa center schedule, and document readiness.",
  },
  {
    q: "Can Bangladeshi applicants apply for Greece work visa from Qatar?",
    a: "Yes. Bangladeshi applicants living in Qatar may apply depending on their profile, Qatar residence status, documents, job category, and current Greece work permit availability.",
  },
];

export default function GreeceWClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-(--bg-main) text-(--text-body) antialiased">
      <section className="relative overflow-hidden bg-(--hero-gradient) pb-20 pt-16 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[48px] border border-(--border-soft) bg-white shadow-2xl">
            <img
              src="/images/work/greece-work-permit-visa-qatar.webp"
              alt="Greece work permit visa processing from Qatar"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/35" />
            <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent" />

            <div className="relative z-10 grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_380px] lg:p-12 xl:grid-cols-[1fr_420px] xl:p-14">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-(--brand-navy) shadow-sm backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-(--accent-cyan)" />
                  Greece Work Permit Visa from Qatar
                </div>

                <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-(--text-heading) sm:text-6xl xl:text-7xl">
                  Greece Work Permit <br />
                  <span className="text-(--brand-royal)">Visa Processing</span>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--text-body)">
                  Apply for Greece work permit visa from Qatar with professional
                  support for hospitality jobs, warehouse jobs, construction
                  work, visa documentation, and application guidance.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
                  >
                    Apply for Greece Work Permit
                  </Link>

                  <Link
                    href="#jobs"
                    className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-sm font-bold text-(--brand-royal) shadow-sm backdrop-blur-md transition hover:bg-white"
                  >
                    View Job Categories
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-md"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600" />

                      <span className="text-sm font-medium text-(--text-heading)">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal)">
                    <Hotel className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-(--text-heading)">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Greece work visa sectors
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Hospitality",
                    "Hotel Staff",
                    "Warehouse",
                    "Construction",
                    "Cleaner",
                    "Kitchen Helper",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-(--border-soft) bg-white px-4 py-2 text-xs font-bold text-(--brand-navy) shadow-sm"
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

      <section className="border-y border-(--border-soft) bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-6 w-6 text-(--brand-royal)" />
            <span className="text-sm font-semibold text-(--text-body)">
              Greece work permit guidance
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-(--brand-royal)" />
            <span className="text-sm font-semibold text-(--text-body)">
              Job placement assistance
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-(--brand-royal)" />
            <span className="text-sm font-semibold text-(--text-body)">
              Visa document support
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Greece Work Permit Details
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
            Greece work permit visa information from Qatar
          </h2>

          <p className="mt-4 text-sm leading-7 text-(--text-body)">
            Key information for applicants searching for Greece work permit,
            Greece work visa, or Greece work permit visa processing from Qatar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visaInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft)"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-(--brand-royal)">
                {item.title}
              </p>

              <h3 className="mt-3 text-xl font-bold text-(--text-heading)">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="jobs" className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-(--brand-royal) shadow-sm">
              Greece Job Categories
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Greece work visa job categories
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              Explore popular job categories for Greece work permit visa
              applicants from Qatar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobCategories.map((job) => (
              <div
                key={job}
                className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

                  <p className="text-sm font-bold text-(--text-heading)">
                    {job}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Required Documents
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Greece work visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              These are common documents for Greece work visa processing. Exact
              requirements may vary by employer, job category, embassy, visa
              center, and applicant profile.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-(--brand-navy) px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              Check Your Documents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)"
              >
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-1 h-5 w-5 text-(--brand-royal)" />

                  <p className="text-sm font-medium leading-relaxed text-(--text-body)">
                    {doc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-(--brand-royal) shadow-sm">
              How It Works
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Greece work permit visa process from Qatar
            </h2>

            <p className="mt-4 text-sm leading-7 text-(--text-body)">
              A clear step-by-step process for Greece work permit and work visa
              application guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition-all hover:border-(--brand-royal)/30"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal) transition-colors group-hover:bg-(--brand-royal) group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-(--text-heading)">
                    <span className="mr-2 text-(--brand-royal)/30">
                      0{idx + 1}
                    </span>
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-(--text-body)">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Why Greece?
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-(--text-heading) sm:text-4xl">
              Why apply for Greece work permit visa?
            </h2>

            <p className="mt-5 text-sm leading-7 text-(--text-body)">
              Greece offers work opportunities in hospitality, hotel service,
              restaurant support, warehouse, construction, cleaning and general
              worker sectors. It is a popular European destination for
              applicants looking for international work experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Popular Europe work destination",
              "Hospitality and hotel job demand",
              "Warehouse and construction opportunities",
              "Suitable for general worker profiles",
              "Work permit based process",
              "Document guidance from Qatar",
            ].map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

                  <p className="text-sm font-medium leading-relaxed text-(--text-body)">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden rounded-[40px] border border-(--border-soft) bg-(--brand-navy) p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--accent-cyan)/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                Ready to Apply?
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Start your Greece work permit visa process today
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Contact WMIBC for Greece work permit visa consultation, document
                review, and application guidance from Qatar.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition hover:scale-105"
              >
                Apply Now
              </Link>

              <Link
                href="/work-visa"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Other Countries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Common Questions
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Greece work permit visa FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-3xl border border-(--border-soft) bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="flex gap-3 text-lg font-bold text-(--text-heading)">
                      <span className="text-(--brand-royal)">Q.</span>
                      {faq.q}
                    </h3>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-(--brand-royal) transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="ml-7 text-sm leading-relaxed text-(--text-body) opacity-90">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
