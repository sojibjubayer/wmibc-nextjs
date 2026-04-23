"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
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
    description: "Choose the right country, university, and program based on your profile and future goals.",
  },
  {
    icon: FileCheck2,
    title: "Admission file preparation",
    description: "Support for organizing documents, reviewing applications, and submission readiness.",
  },
  {
    icon: MessageSquareQuote,
    title: "SOP & application review",
    description: "Improve your application with stronger presentation and clearer supporting documents.",
  },
  {
    icon: ShieldCheck,
    title: "Study visa filing support",
    description: "Get guided help with visa forms, checklists, and final submission preparation.",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We review your academic profile, destination preference, and intake plan." },
  { step: "02", title: "University application", description: "Shortlist institutions and prepare your application package properly." },
  { step: "03", title: "Document stage", description: "Organize financial, academic, and supporting documents for the next step." },
  { step: "04", title: "Visa submission", description: "Complete the visa process with a clear and structured workflow." },
];

const requirements = [
  "Valid passport",
  "Academic certificates and transcripts",
  "English proficiency result (IELTS/PTE)",
  "Admission offer letter",
  "Proof of financial capability",
  "Statement of Purpose (SOP)",
  "Passport-size photos",
  "Medical/Biometrics (if required)",
];

const faqs = [
  { question: "Which countries do you support?", answer: "We support major destinations including Canada, the UK, the USA, Australia, Germany, and selected European countries." },
  { question: "Do you help with admission too?", answer: "Yes, we support university shortlisting, application readiness, and document preparation before the visa stage." },
  { question: "Do you help with SOP and documents?", answer: "Yes, we help organize your file and improve how your documents and SOP are presented to the admission committee." },
  { question: "Is visa approval guaranteed?", answer: "No. Final approval is always decided by the respective embassy or immigration authority. We focus on making your file as strong as possible." },
];

export default function StudyVisaClient() {
  return (
    <main className="bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white/80 px-4 py-2 text-sm font-medium text-(--brand-navy) backdrop-blur">
                <Sparkles className="h-4 w-4 text-(--accent-cyan)" />
                Study Visa Assistance from Qatar
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-(--text-heading) sm:text-5xl lg:text-6xl">
                Your Path to <span className="text-(--brand-royal)">Global Education</span> Starts Here
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-(--text-body) sm:text-lg">
                From university selection to final visa preparation, we help students in Qatar 
                build a professional path for international education.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white px-6 py-3.5 text-sm font-semibold text-(--brand-royal) transition hover:bg-gray-50">
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="rounded-[32px] border border-(--border-soft) bg-white p-6 shadow-xl lg:p-8">
               <div className="mb-6 flex items-center gap-3">
                 <div className="rounded-2xl bg-(--bg-soft-blue) p-3">
                   <BookOpen className="h-6 w-6 text-(--brand-royal)" />
                 </div>
                 <h2 className="text-xl font-bold text-(--text-heading)">Admission to Visa</h2>
               </div>
               <div className="space-y-4">
                  {[
                    { icon: GraduationCap, label: "University Guidance", text: "Shortlisting & program selection" },
                    { icon: Globe2, label: "Global Destinations", text: "UK, USA, Canada, Europe, Australia" },
                    { icon: Clock3, label: "Support Model", text: "Structured & document-focused" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border border-(--border-soft) bg-(--bg-main) p-4 flex items-start gap-4">
                      <item.icon className="h-5 w-5 text-(--brand-royal) mt-1" />
                      <div>
                        <p className="text-sm font-bold text-(--text-heading)">{item.label}</p>
                        <p className="text-xs text-(--text-body)">{item.text}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Core Support
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
            Professional student visa support experience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-[24px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition-all hover:-translate-y-1 hover:border-(--accent-cyan)">
                <div className="mb-5 inline-flex rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal) group-hover:bg-(--brand-royal) group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-(--text-heading) mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-(--text-body)">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Destinations & Process */}
      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Process */}
            <div className="rounded-[32px] border border-(--border-soft) bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-(--text-heading) mb-8">Simple step-by-step journey</h2>
              <div className="space-y-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--brand-navy) text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-(--text-heading)">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-(--text-body)">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="rounded-[32px] border border-(--border-soft) bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-(--text-heading) mb-8">Popular Destinations</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {destinations.map((country) => (
                  <div key={country.name} className="rounded-2xl border border-(--border-soft) bg-(--bg-main) p-5 transition hover:border-(--accent-cyan)">
                    <div className="flex items-center gap-3 mb-3">
                      <Landmark className="h-5 w-5 text-(--brand-royal)" />
                      <h3 className="font-bold text-(--text-heading)">{country.name}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-(--text-body)">{country.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Requirements
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Typical student visa checklist
            </h2>
            <p className="mt-4 text-(--text-body)">
              Exact requirements vary by country, but these are the fundamental documents needed to start your application from Qatar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {requirements.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-(--border-soft) bg-white p-4 shadow-sm">
                <BadgeCheck className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm font-semibold text-(--text-heading)">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-(--text-heading)">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-(--border-soft) bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-(--text-heading) flex gap-3">
                  <span className="text-(--brand-royal)">Q.</span> {faq.question}
                </h3>
                <div className="mt-3 flex gap-3">
                  <div className="w-1 bg-(--bg-soft-blue) rounded-full" />
                  <p className="text-sm text-(--text-body)">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-(--brand-navy) p-8 text-white shadow-2xl sm:p-12 lg:p-16 relative overflow-hidden text-center">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--accent-cyan)/20 blur-3xl" />
          <h2 className="text-3xl font-bold sm:text-5xl mb-6 relative z-10">
            Ready to study abroad?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10 relative z-10">
            Let’s organize your admission and student visa process with a professional, 
            student-friendly workflow.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center relative z-10">
            <Link href="/contact" className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition hover:scale-105">
              Apply Now
            </Link>
            <Link href="/services" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}