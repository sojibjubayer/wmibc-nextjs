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
  Hotel,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const jobCategories = [
  "Housekeeping Staff",
  "Butcher",
  "General Worker",
  "Hotel Worker",
];

const visaInfo = [
  { title: "Visa Type", value: "Croatia Work Permit Visa" },
  { title: "Processing From", value: "Qatar" },
  {
    title: "Available Sectors",
    value: "Hospitality, Housekeeping, Meat Processing, General Work",
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
  "Educational or experience certificates if available",
  "Previous work experience documents",
  "Police clearance if required",
  "Medical or insurance documents if required",
];

const processSteps = [
  {
    title: "Profile Review",
    desc: "We review your profile, work experience, passport details, residence status, and eligibility for Croatia work permit visa processing.",
    icon: Users2,
  },
  {
    title: "Job Category Selection",
    desc: "Choose suitable Croatia job categories such as housekeeping staff, butcher, hotel worker, or general worker.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Croatia work visa checklist, application form guidance, work permit file preparation, and required documents.",
    icon: FileCheck2,
  },
  {
    title: "Application Support",
    desc: "Step-by-step support for Croatia work permit, document checking, application readiness, and process updates from our team.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Croatia work permit visa support from Qatar",
  "Support for Qatar, GCC and Bangladesh applicants",
  "Hospitality, housekeeping and general worker sectors",
  "Complete document checking and application guidance",
];

const faqs = [
  {
    q: "How can I apply for a Croatia work permit from Qatar?",
    a: "You can start by checking your profile, job category, passport validity, residence status, and document readiness. WMIBC provides guidance for Croatia work permit visa processing from Qatar.",
  },
  {
    q: "What jobs are available for Croatia work visa applicants?",
    a: "Common Croatia work visa job categories include housekeeping staff, butcher, hotel worker, and general worker.",
  },
  {
    q: "What documents are required for Croatia work visa?",
    a: "Common documents include passport, residence permit copy if applicable, CV, photo, experience documents, educational certificates if available, and other supporting documents depending on employer and visa category.",
  },
  {
    q: "How long does Croatia work permit visa processing take?",
    a: "Processing time varies depending on employer file, work permit approval, embassy or visa center schedule, applicant location, and document readiness.",
  },
  {
    q: "Can applicants from Qatar, GCC countries, or Bangladesh apply?",
    a: "Yes. WMIBC assists Qatar residents, GCC-based applicants, and Bangladeshi applicants depending on profile, documents, job category, employer file, and current Croatia work permit availability. Processing coordination is handled from Qatar, with additional support available through our Bangladesh office.",
  },
];

export default function CroatiaWClient() {
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
                src="/images/work/croatia-work-permit-visa-qatar.webp"
                alt="Croatia work permit visa processing support from Qatar for GCC and Bangladesh applicants"
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
                    Croatia Work Permit Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-(--text-heading) sm:text-5xl md:text-6xl lg:text-6xl">
                  Croatia Work Permit <br className="hidden sm:block" />
                  <span className="text-(--brand-royal)">
                    Visa Processing
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-body) sm:mt-6 sm:text-lg">
                  Apply for Croatia work permit visa with WMIBC. We assist
                  Qatar residents, GCC-based applicants, and Bangladeshi
                  applicants through document checking, job category guidance,
                  and application support.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-6 py-3.5 text-center text-xs font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--brand-navy)/90 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    Apply for Croatia Work Permit
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
                    <Hotel className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-(--text-heading) sm:text-xl">
                      Available Jobs
                    </h2>
                    <p className="text-xs font-medium text-(--text-muted)">
                      Croatia work visa sectors
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
    </main>
  );
} 