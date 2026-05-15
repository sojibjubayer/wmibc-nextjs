"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock3,
  FileCheck2,
  Globe2,
  GraduationCap,
  Landmark,
  MessageSquareQuote, 
  ShieldCheck, 
  Sparkles, 
} from "lucide-react"; 

const destinations = [
  { name: "Canada", note: "Top choice for post-study work & PGWP pathways." },
  { name: "United Kingdom", note: "Respected universities with flexible intakes." },
  { name: "United States", note: "World-class research and program diversity." },
  { name: "Australia", note: "Strong student support & industry-aligned courses." },
  { name: "Germany", note: "Low tuition costs with high academic standards." },
  { name: "Europe", note: "Affordable options in Poland, Hungary & France." },
];

const services = [
  {
    icon: GraduationCap,
    title: "University Guidance",
    description: "Personalized shortlisting of universities and programs based on your career goals.",
  },
  {
    icon: FileCheck2,
    title: "Admission Support",
    description: "Professional assistance with application forms, document checklists, and offer letters.",
  },
  {
    icon: MessageSquareQuote,
    title: "SOP & Review",
    description: "Expert feedback on your Statement of Purpose to highlight your academic strengths.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Filing",
    description: "Guided support for visa forms, financial proof requirements, and embassy submissions.",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Profile evaluation and destination planning." },
  { step: "02", title: "Application", description: "Shortlisting and university package submission." },
  { step: "03", title: "Documentation", description: "Organizing academic and financial records." },
  { step: "04", title: "Visa Filing", description: "Submission through the respective embassy/VFS." },
];

const requirements = [
  "Valid Passport",
  "Academic Transcripts",
  "English Proficiency (IELTS/PTE)",
  "Offer of Admission",
  "Financial Proofs",
  "Statement of Purpose (SOP)",
  "Passport Photos",
  "Medical/Biometrics",
];

const faqs = [
  { question: "Which countries do you support?", answer: "We specialize in Canada, UK, USA, Australia, Germany, and several European destinations." },
  { question: "Do you help with admission?", answer: "Yes. We manage the entire journey from university selection to receiving your offer letter." },
  { question: "Do you help with SOP preparation?", answer: "We provide structured guidance and review for your SOP to ensure it meets embassy standards." },
  { question: "Is visa approval guaranteed?", answer: "No consultancy can guarantee a visa as decisions belong to the embassy. We focus on maximizing your approval odds." },
];

export default function StudyVisaClient() {
  return (
    <main className="bg-white text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50/50 to-white pb-16 pt-12 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-(--brand-royal) shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
                Global Study Support from Qatar
              </div>

              <h1 className="text-balance text-4xl font-black tracking-tight text-(--text-heading) sm:text-5xl lg:text-6xl">
                Your Path to <span className="text-(--brand-royal)">Global Education</span> Starts Here
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-body) sm:text-lg">
                From choosing the right university to securing your student visa, 
                WMIBC helps students in Doha build a professional gateway to 
                top international destinations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white transition-all hover:bg-(--brand-royal) hover:shadow-lg active:scale-95">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-(--brand-royal) transition-all hover:bg-slate-50">
                  Free Assessment
                </Link>
              </div>
            </div>

            {/* Stats/Quick Info Card */}
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-2xl lg:p-10">
               <div className="mb-8 flex items-center gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                   <BookOpen className="h-6 w-6 text-(--brand-royal)" />
                 </div>
                 <h2 className="text-xl font-black text-(--text-heading)">Full Cycle Support</h2>
               </div>
               
               <div className="space-y-4">
                  {[
                    { icon: GraduationCap, label: "University Guidance", text: "Admission & scholarship support" },
                    { icon: Globe2, label: "Global Scope", text: "Canada, UK, USA, Europe & more" },
                    { icon: Clock3, label: "Efficient Process", text: "Documentation & deadline management" },
                  ].map((item, i) => (
                    <div key={i} className="group flex items-start gap-4 rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-colors hover:border-blue-100 hover:bg-white">
                      <item.icon className="mt-1 h-5 w-5 text-(--brand-royal)" />
                      <div>
                        <p className="text-sm font-bold text-(--text-heading)">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.text}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-14 text-center md:text-left">
          <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-(--brand-royal)">
            Core Services
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black text-(--text-heading) sm:text-4xl">
            Professional student visa support experience
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-4xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
                <div className="mb-6 inline-flex rounded-2xl bg-slate-50 p-4 text-(--brand-royal) transition-colors group-hover:bg-(--brand-royal) group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-(--text-heading)">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Destinations & Process */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            
            {/* Process */}
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-10 text-2xl font-black text-(--text-heading)">Simple Step-by-Step Journey</h2>
              <div className="space-y-10">
                {processSteps.map((item) => (
                  <div key={item.step} className="group flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--brand-navy) text-sm font-black text-white transition-transform group-hover:scale-110">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-(--text-heading)">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-10 text-2xl font-black text-(--text-heading)">Popular Destinations</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {destinations.map((country) => (
                  <div key={country.name} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:border-cyan-200 hover:bg-white hover:shadow-md">
                    <div className="mb-3 flex items-center gap-3">
                      <Landmark className="h-4 w-4 text-(--brand-royal)" />
                      <h3 className="font-bold text-(--text-heading)">{country.name}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500">{country.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-(--brand-royal)">
              Checklist
            </span>
            <h2 className="mt-4 text-balance text-3xl font-black text-(--text-heading) sm:text-4xl">
              Typical Student Visa Checklist
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Every country has specific requirements, but these are the 
              fundamental documents you will need to prepare for your application.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {requirements.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-colors hover:border-blue-200">
                <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-bold text-(--text-heading)">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-blue-50/30 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-black text-(--text-heading)">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="flex gap-3 text-lg font-bold text-(--text-heading)">
                  <span className="text-(--brand-royal)">Q.</span> 
                  {faq.question}
                </h3>
                <div className="mt-4 flex gap-4">
                  <div className="w-1.5 shrink-0 rounded-full bg-blue-100" />
                  <p className="text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-(--brand-navy) px-8 py-16 text-center text-white shadow-2xl md:px-12 md:py-20">
          {/* Decorative Blur */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          
          <h2 className="relative z-10 text-balance text-3xl font-black sm:text-5xl">
            Ready to Study Abroad?
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-blue-100/80">
            Let’s organize your admission and student visa process with a 
            professional, student-friendly workflow.
          </p>
          
          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full rounded-2xl bg-white px-10 py-4 text-sm font-bold text-(--brand-navy) transition-transform hover:scale-105 sm:w-auto">
              Apply Now
            </Link>
            <Link href="/services" className="w-full rounded-2xl border border-white/20 bg-white/5 px-10 py-4 text-sm font-bold backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}