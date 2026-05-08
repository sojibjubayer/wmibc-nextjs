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
  ChevronRight,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

// --- Types ---
type CountryItem = {
  name: string;
  slug: string;
  tagline: string;
  roles: string[];
  featured?: boolean;
};

// --- Static Data (Moved outside to optimize performance) ---
const countries: CountryItem[] = [
  { name: "Greece", slug: "/work-visa/greece", tagline: "Hospitality, Construction, Warehouse", roles: ["Hospitality", "Construction", "Warehouse"], featured: true },
  { name: "Portugal", slug: "/work-visa/portugal", tagline: "Agriculture D1 Work Visa", roles: ["Agriculture D1"], featured: true },
  { name: "Bulgaria", slug: "/work-visa/bulgaria", tagline: "Hospitality, Construction, Warehouse, Helper", roles: ["Hospitality", "Construction", "Warehouse", "Helper"], featured: true },
  { name: "Poland", slug: "/work-visa/poland", tagline: "Construction Worker, Cleaner", roles: ["Construction Worker", "Cleaner"], featured: true },
  { name: "Slovakia", slug: "/work-visa/slovakia", tagline: "Factory Worker, Warehouse, Helper", roles: ["Factory Worker", "Warehouse", "Helper"], featured: true },
  { name: "Italy", slug: "/work-visa/italy", tagline: "Light Duty Driver, Forklift Driver, Agricultural Worker, Waiter, Cleaner, Factory Worker", roles: ["Light Duty Driver", "Forklift Driver", "Agricultural Worker", "Waiter / Waitress", "Cleaner", "Factory Worker"] },
  { name: "Cyprus", slug: "/work-visa/cyprus", tagline: "Hospitality, Construction, Warehouse, Helper", roles: ["Hospitality", "Construction", "Warehouse", "Helper"] },
  { name: "North Macedonia", slug: "/work-visa/macedonia", tagline: "Cleaner, Vegetable Worker", roles: ["Cleaner", "Vegetable Worker"] },
  { name: "Montenegro", slug: "/work-visa/montenegro", tagline: "Hospitality, Construction, Warehouse, Electrician, Tile Mason, Gypsum", roles: ["Hospitality", "Construction", "Warehouse", "Electrician", "Tile Mason", "Gypsum"] },
  { name: "Bosnia", slug: "/work-visa/bosnia", tagline: "General Worker", roles: ["General Worker"] },
  { name: "Croatia", slug: "/work-visa/croatia", tagline: "Housekeeping, Butcher, General Worker", roles: ["Housekeeping", "Butcher", "General Worker"] },
  { name: "Albania", slug: "/work-visa/albania", tagline: "Grill Chef / Kitchen Helper, Mason / Bricklayer", roles: ["Grill Chef / Kitchen Helper", "Mason / Bricklayer"] },
  { name: "Turkey", slug: "/work-visa/turkey", tagline: "Waiter, Waitress, Cook, Chef, Housekeeping, Barista, Dishwasher", roles: ["Waiter", "Waitress", "Cook", "Chef", "Housekeeping", "Barista", "Dishwasher"] },
  { name: "UK", slug: "/work-visa/uk", tagline: "Hospitality Worker, Hotel Line Worker", roles: ["Hospitality Worker", "Hotel Line Worker"] },
  { name: "Australia", slug: "/work-visa/australia", tagline: "Warehouse Packer", roles: ["Warehouse Packer"] },
  { name: "New Zealand", slug: "/work-visa/new-zealand", tagline: "Warehouse Packer", roles: ["Warehouse Packer"] },
  { name: "Canada", slug: "/work-visa/canada", tagline: "Multiple Positions Available", roles: ["Multiple Positions Available"] },
  { name: "Moldova", slug: "/work-visa/moldova", tagline: "Female Massage Therapist", roles: ["Female Massage Therapist"] },
  { name: "Serbia", slug: "/work-visa/serbia", tagline: "Construction, Cleaner, Warehouse, Tile Mason", roles: ["Construction", "Cleaner", "Warehouse", "Tile Mason"] },
];

const processSteps = [
  { title: "Choose Destination", desc: "Select your preferred country and job category based on your background and career goals.", icon: Globe2 },
  { title: "Profile Review", desc: "We review your eligibility, available openings, and required documents for applicants from Qatar, GCC & Bangladesh.", icon: Users2 },
  { title: "Document Support", desc: "Get guidance for offer letters, work permit files, visa forms, and application preparation.", icon: FileCheck2 },
  { title: "Visa Processing", desc: "We support the full process from application guidance to submission readiness and updates.", icon: ShieldCheck },
];

const trustItems = [
  "Consultation for Qatar & GCC applicants",
  "Europe work permit and job visa assistance",
  "Clear process explanation before you apply",
  "International work visa documentation support",
];

const faqs = [
  { q: "Which countries do you process work visas for from Qatar?", a: "We assist with work permit destinations including Greece, Portugal, Bulgaria, Poland, Slovakia, Italy, UK, and more, depending on current intake and available job roles." },
  { q: "Can Bangladeshi applicants apply through WMIBC?", a: "Yes. Bangladeshi applicants residing in Qatar or abroad can apply depending on their profile, job category, and the specific requirements of the destination country." },
  { q: "Do I need a job offer for a Europe work visa?", a: "Most work permit routes require an employer-backed process. We guide you through the requirements for each specific destination." },
  { q: "How long does work visa processing take?", a: "Timelines vary by country, embassy scheduling, and document readiness. We provide estimated timelines during your initial consultation." },
  { q: "Do you help with document preparation?", a: "Absolutely. We provide comprehensive guidance on document collection, formatting, and application steps to ensure submission readiness." },
];

// --- Sub-Components ---

function CountryCard({ item }: { item: CountryItem }) {
  return (
    <Link
      href={item.slug}
      title={`Learn more about ${item.name} work visa`}
      className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-(--border-soft) bg-(--bg-card) p-6 shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1.5 hover:border-(--accent-cyan) hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-(--brand-royal) to-(--accent-cyan) opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center rounded-full bg-(--bg-soft-blue) px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-(--brand-royal)">
            Work Visa
          </div>
          <h3 className="text-xl font-bold tracking-tight text-(--text-heading) transition-colors group-hover:text-(--brand-royal)">
            {item.name}
          </h3>
        </div>
        {item.featured && (
          <span className="rounded-full border border-(--border-soft) bg-white px-3 py-1 text-[10px] font-bold uppercase text-(--brand-navy) shadow-sm">
            Popular
          </span>
        )}
      </div>

      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-(--text-body)">
        {item.tagline}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {item.roles.slice(0, 3).map((role) => (
          <span
            key={role}
            className="rounded-lg border border-(--border-soft) bg-(--bg-main) px-2.5 py-1 text-[11px] font-medium text-(--text-muted)"
          >
            {role}
          </span>
        ))}
      </div>

      <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-(--brand-royal)">
        View details
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

// --- Main Page Component ---

export default function WorkVisaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(--hero-gradient) pb-20 pt-16 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white/60 px-4 py-2 text-sm font-semibold text-(--brand-navy) shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-(--accent-cyan)" />
                Work Visa Experts in Doha, Qatar
              </div>

              <h1 className="text-4xl font-black tracking-tight text-(--text-heading) sm:text-6xl xl:text-7xl">
                Global Work Visa <br />
                <span className="text-(--brand-royal)">Processing from Qatar</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--text-body) opacity-90">
                Explore trusted work visa opportunities and Europe work permits. We provide specialized 
                consultation for residents in Qatar, the GCC, and Bangladesh looking for international job placements.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#destinations"
                  className="rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
                >
                  View Destinations
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-(--border-soft) bg-white px-8 py-4 text-sm font-bold text-(--brand-royal) shadow-sm transition hover:bg-gray-50"
                >
                  Free Consultation
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-(--text-heading)">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="lg:col-span-5">
              <div className="rounded-4xl border border-(--border-soft) bg-white p-8 shadow-2xl">
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-4 text-(--brand-royal)">
                    <BriefcaseBusiness className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-(--text-heading)">Expert Visa Support</h2>
                    <p className="text-xs font-medium text-(--text-muted)">Professional guidance for international applicants</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Multiple Country Options", desc: "Europe, UK, Canada, Australia, and New Zealand options.", icon: Globe2 },
                    { title: "Document Preparation", desc: "Checklist support and work permit file readiness.", icon: FileCheck2 },
                    { title: "Step-by-Step Guidance", desc: "Transparent process and timeline explanation.", icon: ShieldCheck }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 rounded-2xl border border-(--border-soft) bg-(--bg-main) p-4">
                      <feature.icon className="mt-1 h-5 w-5 text-(--brand-royal)" />
                      <div>
                        <h4 className="text-sm font-bold text-(--text-heading)">{feature.title}</h4>
                        <p className="text-xs text-(--text-body)">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-(--border-soft) bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: BadgeCheck, text: "Work permit guidance" },
            { icon: Building2, text: "Job placement support" },
            { icon: ShieldCheck, text: "Document assistance" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="h-6 w-6 text-(--brand-royal)" />
              <span className="text-sm font-semibold text-(--text-body)">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Explore Opportunities
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
            Available Work Visa Destinations
          </h2>
          <p className="mt-4 text-sm leading-7 text-(--text-body)">
            Select a country to view specific job categories and visa requirements for Qatar residents.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((item) => (
            <CountryCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-(--brand-royal) shadow-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Our 4-Step Application Process
            </h2>
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
                    <span className="mr-2 text-(--brand-royal)/30">0{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--text-body)">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Common Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
            Work Visa FAQ for Qatar Residents
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="overflow-hidden rounded-3xl border border-(--border-soft) bg-white shadow-sm">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <h3 className="flex gap-3 text-lg font-bold text-(--text-heading)">
                    <span className="text-(--brand-royal)">Q.</span>
                    {faq.q}
                  </h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-(--brand-royal) transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="ml-7 text-sm leading-relaxed text-(--text-body) opacity-90">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden rounded-[40px] bg-(--brand-navy) p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--accent-cyan)/20 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Ready to start your journey from Doha?
              </h2>
              <p className="mt-4 text-white/80">Get a free consultation for your Europe work permit today.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition hover:scale-105">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}