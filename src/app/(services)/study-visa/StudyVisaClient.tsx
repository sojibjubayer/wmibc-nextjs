"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  GraduationCap,
  Landmark,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const destinations = [
  { name: "Canada", note: "Popular for post-study work opportunities and strong student demand." },
  { name: "United Kingdom", note: "Globally respected universities and flexible study pathways." },
  { name: "United States", note: "Top-ranked institutions and wide program variety." },
  { name: "Australia", note: "Student-friendly system with recognized qualifications." },
  { name: "Germany", note: "Excellent academic quality and attractive tuition options." },
  { name: "Europe", note: "Multiple destinations for affordable and career-focused education." },
];

const services = [
  {
    icon: GraduationCap,
    title: "University & course guidance",
    description:
      "Choose the right country, university, and program based on your profile and future goals.",
  },
  {
    icon: FileCheck2,
    title: "Admission file preparation",
    description:
      "Support for organizing documents, reviewing applications, and submission readiness.",
  },
  {
    icon: MessageSquareQuote,
    title: "SOP & application review",
    description:
      "Improve your application with stronger presentation and clearer supporting documents.",
  },
  {
    icon: ShieldCheck,
    title: "Study visa filing support",
    description:
      "Get guided help with visa forms, checklists, and final submission preparation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We review your academic profile, destination preference, and intake plan.",
  },
  {
    step: "02",
    title: "University application",
    description:
      "Shortlist institutions and prepare your application package properly.",
  },
  {
    step: "03",
    title: "Document stage",
    description:
      "Organize financial, academic, and supporting documents for the next step.",
  },
  {
    step: "04",
    title: "Visa submission",
    description:
      "Complete the visa process with a clear and structured workflow.",
  },
];

const requirements = [
  "Valid passport",
  "Academic certificates and transcripts",
  "English proficiency result if required",
  "Offer letter or admission letter",
  "Proof of financial capability",
  "Statement of purpose or supporting letter",
  "Passport-size photos",
  "Medical or biometric documents if needed",
];

const faqs = [
  {
    question: "Which countries do you support?",
    answer:
      "We support major destinations including Canada, the UK, the USA, Australia, Germany, and selected European countries.",
  },
  {
    question: "Do you help with admission too?",
    answer:
      "Yes, we can support university shortlisting, application readiness, and document preparation before the visa stage.",
  },
  {
    question: "Do you help with SOP and documents?",
    answer:
      "Yes, we help organize your file and improve how your documents are presented.",
  },
  {
    question: "Is visa approval guaranteed?",
    answer:
      "No. Final approval is always decided by the embassy or immigration authority.",
  },
];

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
      <Sparkles className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export default function StudyVisaClient() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-violet-950/40 to-slate-950" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionBadge label="Study Visa Assistance from Qatar" />

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Study abroad with a{" "}
                <span className="bg-linear-to-r from-white to-violet-200 bg-clip-text text-transparent">
                  premium student visa
                </span>{" "}
                support experience
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                From university selection to admission support and final visa preparation,
                we help students in Qatar build a stronger path for global education.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Start your application
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Free consultation
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Student-focused guidance",
                  "Clear documentation support",
                  "Major destination coverage",
                  "Premium one-to-one assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Student visa support</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Admission to visa, made simple
                  </h2>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-sm text-slate-400">Focus area</p>
                      <p className="font-medium text-white">
                        Study permit and university application guidance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-sm text-slate-400">Top destinations</p>
                      <p className="font-medium text-white">
                        Canada, UK, USA, Australia, Germany and Europe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-sm text-slate-400">Support model</p>
                      <p className="font-medium text-white">
                        Structured, guided, document-focused
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Core support
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything needed for a stronger study visa application
          </h2>
          <p className="mt-4 text-slate-300">
            Built for students who want a cleaner and more professional process.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full p-6 hover:bg-white/[0.07] transition">
                <div className="w-fit rounded-2xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Simple step-by-step journey</h2>

            <div className="mt-8 space-y-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Popular destinations
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Top countries for students</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {destinations.map((country) => (
                <div
                  key={country.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2">
                      <Landmark className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{country.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{country.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Requirements
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Typical study visa checklist
            </h2>
            <p className="mt-4 text-slate-300">
              Exact requirements vary by country and profile, but these are commonly needed.
            </p>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Card className="p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Common questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 md:pb-28">
        <div className="rounded-4xl border border-white/10 bg-linear-to-r from-violet-900/40 via-slate-900 to-blue-900/30 p-8 shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                Start your journey
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Ready to apply for your study visa?
              </h2>
              <p className="mt-4 text-slate-200">
                Let’s organize your admission and student visa process with a premium,
                student-friendly workflow.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}