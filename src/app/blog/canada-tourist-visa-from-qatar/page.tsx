import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  HelpCircle,
  Info,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Canada Tourist Visa from Qatar – Complete Guide 2026 | WMIBC",
  description:
    "Complete 2026 guide for Canada tourist visa from Qatar. Learn requirements, documents, fees, biometrics, processing time, and how WMIBC supports applicants in Qatar.",
  keywords: [
    "Canada tourist visa from Qatar",
    "Canada visit visa Qatar",
    "Canada visitor visa from Doha",
    "Canada visa requirements Qatar",
    "Canada tourist visa documents Qatar",
    "Canada visa consultant Qatar",
    "Canada visa from Qatar 2026",
    "Canada visit visa fee Qatar",
  ],
  alternates: {
    canonical: "https://www.wmibc.com/blog/canada-tourist-visa-from-qatar",
  },
  openGraph: {
    title: "Canada Tourist Visa from Qatar – Complete Guide 2026",
    description:
      "A complete guide for Qatar residents applying for a Canada tourist visa in 2026, including documents, fees, biometrics, processing time, and application steps.",
    url: "https://www.wmibc.com/blog/canada-tourist-visa-from-qatar",
    siteName: "WMIBC",
    type: "article",
    images: [
      {
        url: "https://www.wmibc.com/images/blog/canada-tourist-visa-from-qatar.webp",
        width: 1200,
        height: 800,
        alt: "Canada tourist visa application from Qatar",
      },
    ],
  },
};

const quickFacts = [
  {
    icon: Globe2,
    title: "Visa Type",
    value: "Canada Visitor Visa / Tourist Visa",
  },
  {
    icon: Banknote,
    title: "Government Fee",
    value: "From CAD 100",
  },
  {
    icon: Clock3,
    title: "Processing Time",
    value: "Varies by country and application",
  },
  {
    icon: MapPin,
    title: "For Applicants",
    value: "Qatar residents and eligible travellers",
  },
];

const requiredDocuments = [
  "Valid passport with enough validity",
  "Qatar ID / valid Qatar residence permit copy",
  "Recent passport-size photograph as per Canada visa photo rules",
  "Employment letter or business documents",
  "Salary certificate, bank statement, or proof of financial support",
  "Travel history copies, including previous visas and entry stamps",
  "Purpose of travel explanation",
  "Hotel booking or accommodation details",
  "Flight reservation or planned travel itinerary",
  "Invitation letter, if visiting family or friends in Canada",
  "Proof of family, employment, business, or financial ties to Qatar",
];

const steps = [
  {
    title: "Check Eligibility",
    text: "Review whether you need a visitor visa or another travel authorization based on nationality, travel purpose, and passport type.",
  },
  {
    title: "Prepare Documents",
    text: "Arrange passport, Qatar residence documents, financial proof, employment or business records, travel purpose, and supporting documents.",
  },
  {
    title: "Submit Online Application",
    text: "Complete the Canada visitor visa application online and upload the required documents correctly.",
  },
  {
    title: "Pay Fees",
    text: "Pay the applicable visitor visa fee and biometrics fee, if required, through the official system.",
  },
  {
    title: "Give Biometrics",
    text: "If biometrics are required, book an appointment and provide fingerprints and photo at the visa application centre.",
  },
  {
    title: "Wait for Decision",
    text: "After submission, IRCC reviews the application. Extra documents, medical exam, or additional information may be requested.",
  },
  {
    title: "Passport Submission",
    text: "If approved, the applicant receives passport submission instructions before the visa is placed in the passport.",
  },
];

const commonReasons = [
  "Weak travel purpose or unclear itinerary",
  "Insufficient financial proof",
  "Unclear source of funds",
  "Weak home-country or Qatar ties",
  "Missing employment or business documents",
  "Incomplete travel history explanation",
  "Incorrect or inconsistent application details",
];

const faqs = [
  {
    question: "Is Canada tourist visa open from Qatar in 2026?",
    answer:
      "Yes, eligible applicants in Qatar can apply for a Canada visitor visa online. The exact requirements depend on nationality, travel purpose, and personal circumstances.",
  },
  {
    question: "Do Qatar citizens need a Canada tourist visa?",
    answer:
      "Canada has announced eTA eligibility for Qatari citizens travelling by air, but Qatar residents with other nationalities may still need a visitor visa. Applicants should check based on their passport nationality.",
  },
  {
    question: "How much is the Canada tourist visa fee?",
    answer:
      "The Canada visitor visa government fee starts from CAD 100. Biometrics fee may apply separately depending on the applicant’s situation.",
  },
  {
    question: "Is bank statement required for Canada tourist visa?",
    answer:
      "Strong financial proof is usually important. Applicants commonly submit bank statements, salary certificates, business documents, or sponsor financial documents depending on the case.",
  },
  {
    question: "Can WMIBC help with Canada tourist visa from Qatar?",
    answer:
      "Yes, WMIBC can support with document review, application guidance, travel purpose explanation, and submission preparation for Qatar-based applicants.",
  },
];

export default function CanadaTouristVisaBlogPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 antialiased">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-white via-sky-50/50 to-blue-100/40 py-12 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-(--brand-royal)/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-(--brand-royal) shadow-sm backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Canada Visa Guide 2026
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--text-heading) sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Canada Tourist Visa from Qatar – Complete Guide 2026
            </h1>

            <p className="mt-4 text-base leading-relaxed text-(--text-body) sm:text-lg">
              Planning to visit Canada from Qatar for tourism, family visits, or
              a short stay? This guide explains the Canada visitor visa
              requirements, documents, fees, biometrics, processing steps, and
              how WMIBC can support your application.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-900/10 transition-all hover:-translate-y-0.5 hover:bg-(--brand-navy) hover:shadow-lg"
              >
                Get Canada Visa Assistance
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/visit-visa"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-(--brand-royal) shadow-xs transition-all hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Explore Visit Visas
              </Link>
            </div>
          </div>

          {/* Hero Image + Quick Overview Card */}
          <div className="mt-12 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/80">
              <div className="relative aspect-16/10 w-full lg:h-64 xl:h-72 lg:aspect-auto">
                <Image
                  src="/images/blog/canada-tourist-visa-from-qatar.webp"
                  alt="Canada tourist visa application from Qatar"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-(--brand-royal)">
                      Quick Overview
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-(--text-heading) sm:text-2xl">
                      Canada Visitor Visa
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Plane className="h-6 w-6 text-(--brand-royal)" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {quickFacts.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-all hover:bg-slate-50"
                      >
                        <Icon className="h-5 w-5 text-(--brand-royal)" />
                        <p className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-(--text-heading)">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-xs leading-relaxed text-amber-900">
                      <strong>Note:</strong> Qatar citizens may be eligible for an eTA when travelling
                      by air, while many Qatar residents with other nationalities
                      may still need a visitor visa. Always check based on
                      passport nationality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Article Main Body */}
          <article className="min-w-0 lg:col-span-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-(--brand-royal)">
                  Complete Guide
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  What is a Canada Tourist Visa?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-(--text-body)">
                  A Canada tourist visa is commonly known as a Canada visitor visa
                  or temporary resident visa. It allows eligible travellers to
                  enter Canada for a temporary purpose such as tourism, visiting
                  family, attending short business meetings, or enjoying a holiday.
                </p>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  For Qatar-based applicants, the process is usually completed
                  online. After submitting the application, applicants may need to
                  provide biometrics and wait for the decision from Immigration,
                  Refugees and Citizenship Canada (IRCC).
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-(--text-heading)">
                  <BadgeCheck className="h-5 w-5 text-(--brand-royal)" />
                  Who Can Apply from Qatar?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-body)">
                  Qatar residents, expatriates, workers, business owners,
                  families, and students may apply from Qatar if they meet the
                  visitor visa requirements. The final decision depends on the
                  applicant’s purpose of travel, documents, financial condition,
                  travel history, and ties to Qatar or home country.
                </p>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Requirements Grid */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Canada Tourist Visa Requirements from Qatar
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  A strong application should clearly prove why you are travelling
                  to Canada, how you will pay for the trip, and why you will leave
                  Canada after your authorized stay.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {requiredDocuments.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                      <p className="text-sm font-medium leading-normal text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Application Process Timeline */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Canada Visitor Visa Application Process
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  The Canada visitor visa process should be handled carefully
                  because incomplete documents, weak explanation, or inconsistent
                  information can affect the result.
                </p>

                <div className="relative mt-8 space-y-6 pl-4 before:absolute before:bottom-2 before:left-4.75 before:top-2 before:w-0.5 before:bg-slate-100">
                  {steps.map((step, index) => (
                    <div key={step.title} className="relative flex gap-4 sm:gap-6">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--brand-royal) text-sm font-bold text-white shadow-md shadow-blue-900/10 z-10">
                        {index + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs transition-all hover:border-slate-200">
                        <h3 className="text-base font-bold text-(--text-heading) sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-(--text-body)">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Visa Fee Structural Cards */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Canada Tourist Visa Fee from Qatar
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  The Canada visitor visa government fee starts from CAD 100.
                  Biometrics fees may apply separately if the applicant is required
                  to provide fingerprints and photos. Additional service charges may
                  apply depending on the application layout framework.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-(--brand-royal)">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-(--text-heading) text-sm">
                      Visa Fee
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-(--text-body)">
                      From CAD 100 government entry application fee.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-(--brand-royal)">
                      <FileCheck2 className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-(--text-heading) text-sm">
                      Biometrics
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-(--text-body)">
                      Required parameters for global first-time system entries.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-(--brand-royal)">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-(--text-heading) text-sm">
                      Validity
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-(--text-body)">
                      Dependent on continuous system approvals & passport lifecycle.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Timeline Processing Warning */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Canada Tourist Visa Processing Time from Qatar
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  Canada visa processing time is not fixed. It can change based on
                  application volume, completeness of documents, biometrics,
                  background checks, and whether additional documents are
                  requested.
                </p>

                <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
                  <div className="flex gap-3">
                    <Clock3 className="h-5 w-5 shrink-0 text-orange-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-orange-950 text-sm">
                        Apply Early Before Travel
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-orange-900">
                        Do not book non-refundable tickets before your visa is
                        approved. Apply early and keep enough time for biometrics,
                        review, decision, and passport processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Refusal Reasons */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Common Reasons for Canada Tourist Visa Refusal
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  Canada visitor visa applications can be refused when the officer
                  is not satisfied that the applicant is a genuine temporary
                  visitor. Proper documentation and explanation are crucial.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {commonReasons.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl border border-rose-100 bg-rose-50/40 p-4"
                    >
                      <HelpCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
                      <p className="text-sm font-medium leading-normal text-rose-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Support Checkpoints */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  How WMIBC Helps Canada Visa Applicants in Qatar
                </h2>
                <p className="mt-3 text-base leading-relaxed text-(--text-body)">
                  WMIBC supports Qatar-based applicants with professional guidance
                  for Canada tourist visa documentation, application preparation,
                  and submission planning.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Document checklist guidance",
                    "Application form support",
                    "Travel purpose explanation",
                    "Financial document review",
                    "Invitation letter guidance",
                    "Biometrics and next-step guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs"
                    >
                      <ShieldCheck className="h-5 w-5 shrink-0 text-(--brand-royal)" />
                      <p className="text-sm font-semibold text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* FAQs Accordion Block Layout */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-3">
                  {faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-slate-100 bg-slate-50/30 p-5 transition-all hover:bg-slate-50/60"
                    >
                      <h3 className="text-base font-bold text-(--text-heading)">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-(--text-body)">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-8 lg:col-span-4 lg:mt-0 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-(--brand-royal)">
                  Need Help?
                </p>
                <h2 className="mt-2 text-xl font-bold text-(--text-heading)">
                  Apply for Canada Visa from Qatar
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-(--text-body)">
                  Speak with WMIBC for document guidance and Canada visitor visa
                  application support.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-4 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-(--brand-navy)"
                >
                  Contact WMIBC
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-(--text-heading)">
                  <Users2 className="h-5 w-5 text-(--brand-royal)" />
                  Best For
                </h3>
                <ul className="mt-3 space-y-2 text-xs font-medium leading-relaxed text-(--text-body)">
                  <li className="flex items-center gap-2">• Tourism and holiday travel</li>
                  <li className="flex items-center gap-2">• Visiting family or friends</li>
                  <li className="flex items-center gap-2">• Short business visit</li>
                  <li className="flex items-center gap-2">• Attending events or conferences</li>
                  <li className="flex items-center gap-2">• Qatar residents applying from Doha</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold text-(--text-heading)">
                  Important Reminder
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-(--text-body)">
                  Visa approval is not guaranteed. The final decision is made by
                  the Canadian immigration authority based on the applicant’s
                  documents and eligibility parameters.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer Banner CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-(--brand-navy) to-(--brand-royal) p-6 text-white shadow-lg sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Canada Tourist Visa Support
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Ready to Start Your Canada Visa Application?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Get professional guidance for Canada tourist visa documents,
                  application preparation, and submission support from Qatar.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-(--brand-navy) shadow-xs transition-transform hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/visit-visa/canada"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Canada Visit Visa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
