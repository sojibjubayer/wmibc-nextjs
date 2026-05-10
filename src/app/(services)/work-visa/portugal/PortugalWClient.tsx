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
  Leaf,
  ShieldCheck,
  Sparkles,
  Tractor,
  Users2,
} from "lucide-react";

const jobCategories = [
  "Agriculture Worker",
  "Farm Worker",
  "Fruit Picker",
  "Vegetable Farm Worker",
  "Greenhouse Worker",
  "Livestock Helper",
  "Packing Helper",
  "General Farm Helper",
];

const visaInfo = [
  { title: "Visa Type", value: "Portugal D1 Work Visa" },
  { title: "Main Category", value: "Agriculture D1 Category" },
  { title: "Available Sector", value: "Agriculture & Farm Work" },
  { title: "Applicants", value: "Qatar-based applicants" },
];

const documents = [
  "Valid passport",
  "Qatar ID / residence permit copy",
  "Updated CV",
  "Passport-size photo",
  "Agriculture or farm work experience if available",
  "Previous employment documents",
  "Police clearance if required",
  "Medical or insurance documents if required",
];

const processSteps = [
  {
    title: "Profile Review",
    desc: "We review your passport, Qatar residence status, work experience, and eligibility for Portugal Agriculture D1 work visa processing.",
    icon: Users2,
  },
  {
    title: "Agriculture Category Selection",
    desc: "Choose suitable Portugal agriculture work categories such as farm worker, fruit picker, greenhouse worker, packing helper, or general farm helper.",
    icon: Tractor,
  },
  {
    title: "Document Preparation",
    desc: "Get support for Portugal D1 visa checklist, work visa application guidance, document preparation, and employer file readiness.",
    icon: FileCheck2,
  },
  {
    title: "Visa Processing Support",
    desc: "Step-by-step guidance for Portugal Agriculture D1 work visa processing, documentation, application readiness, and updates.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Portugal Agriculture D1 work visa support from Qatar",
  "Farm worker and agriculture job categories",
  "Portugal D1 visa checklist and document guidance",
  "Professional consultation before starting the process",
];

const faqs = [
  {
    q: "What is Portugal Agriculture D1 work visa?",
    a: "Portugal D1 work visa is commonly used for employment-based work opportunities in Portugal. Under the agriculture category, applicants may apply for farm, greenhouse, packing, or general agriculture-related work depending on eligibility and employer requirements.",
  },
  {
    q: "Can I apply for Portugal D1 work visa from Qatar?",
    a: "Yes. Qatar-based applicants may apply depending on passport validity, Qatar residence status, work experience, documents, employer file, and current appointment or submission availability.",
  },
  {
    q: "What jobs are available under Portugal Agriculture D1 category?",
    a: "Common agriculture job categories include agriculture worker, farm worker, fruit picker, vegetable farm worker, greenhouse worker, livestock helper, packing helper, and general farm helper.",
  },
  {
    q: "What documents are required for Portugal Agriculture D1 visa?",
    a: "Common documents include passport, Qatar ID or residence permit copy, CV, photo, work experience documents if available, police clearance if required, and other supporting documents depending on the employer and visa process.",
  },
  {
    q: "How long does Portugal D1 work visa processing take?",
    a: "Processing time varies depending on employer documents, appointment availability, embassy or visa center schedule, applicant documents, and overall application readiness.",
  },
];

export default function PortugalWClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden bg-slate-50 text-slate-900 antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white pb-12 pt-10 lg:pb-32 lg:pt-24">
        {/* Decorative Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl lg:rounded-[3rem]">
            {/* Background Image */}
            <div className="relative h-64 sm:h-80 lg:absolute lg:inset-0 lg:h-full lg:w-full">
              <Image
                src="/images/work/portugal-agriculture-d1-work-visa-qatar.webp"
                alt="Portugal Agriculture D1 work visa processing from Qatar"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent lg:bg-linear-to-r lg:from-white lg:via-white/95 lg:to-white/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:min-h-162.5 lg:grid-cols-[1fr_380px] lg:items-center lg:p-16 xl:grid-cols-[1fr_440px]">
              <div>
                <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-md sm:text-sm">
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-500" />
                  <span className="truncate">
                    Portugal Work Visa from Qatar
                  </span>
                </div>

                <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl">
                  Portugal work permit<br className="hidden sm:block" />
                  <span className="text-blue-600"> Visa Processing</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Apply for Portugal Agriculture D1 work visa from Qatar with
                  professional support for farm worker, agriculture, greenhouse,
                  packing, and general helper categories.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
                  >
                    Apply for Portugal D1 Visa
                  </Link>

                  <Link
                    href="#jobs"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-center text-sm font-bold text-blue-600 shadow-sm backdrop-blur-md transition hover:bg-white active:scale-95"
                  >
                    View Agriculture Jobs
                  </Link>
                </div>

                {/* Highlights Grid */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/60 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-md"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="hidden rounded-[2.5rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:block">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Leaf className="h-7 w-7" /> 
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      Agriculture Jobs
                    </h2>
                    <p className="text-xs font-medium text-slate-500">
                      Portugal D1 category
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Farm Worker",
                    "Fruit Picker",
                    "Greenhouse",
                    "Packing Helper",
                    "Agriculture",
                    "General Helper",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-100 bg-white px-4 py-2 text-[11px] font-bold text-slate-800 shadow-sm"
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
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: BadgeCheck, text: "Portugal D1 visa guidance" },
            { icon: Building2, text: "Agriculture job category support" },
            { icon: ShieldCheck, text: "Visa document preparation" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 md:justify-start"
            >
              <item.icon className="h-7 w-7 shrink-0 text-blue-600" />
              <span className="text-sm font-bold text-slate-900 md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Visa Info Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="mb-12 max-w-3xl text-center md:text-left">
          <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
            Portugal Agriculture D1 Details
          </div>

          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Visa information from Qatar
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visaInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                {item.title}
              </p>
              <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Job Categories Section */}
      <section id="jobs" className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Agriculture Job Categories
            </h2>
            <p className="mt-4 text-slate-600">
              Popular Portugal Agriculture D1 categories for Qatar-based
              applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {jobCategories.map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm font-bold text-slate-900">
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
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
              Required Documents
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Portugal D1 visa checklist
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Common documents for Portugal Agriculture D1 work visa processing.
              Requirements may vary by employer, embassy, visa center, or
              applicant profile.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
            >
              Check Your Documents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {doc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-black text-slate-900 sm:text-4xl">
            Application Process
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-transform group-hover:-translate-y-1">
                  <step.icon className="h-8 w-8" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  <span className="mr-2 opacity-20">0{idx + 1}</span>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 font-bold text-slate-900 sm:text-lg">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-slate-100 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-center sm:p-16 lg:p-20 lg:text-left">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Start your Portugal work visa journey today.
              </h2>

              <p className="mt-6 text-lg text-slate-400">
                Professional consultation and document review for Qatar
                residents applying under Portugal Agriculture D1 category.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-10 py-4 font-bold text-slate-900 shadow-xl transition hover:scale-105"
              >
                Apply Now
              </Link>

              <Link
                href="/work-visa"
                className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
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