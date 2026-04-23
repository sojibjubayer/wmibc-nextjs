"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  Globe2,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

type CountryItem = {
  name: string;
  slug: string;
  tagline: string;
  roles: string[];
  featured?: boolean;
};

const countries: CountryItem[] = [
  {
    name: "Poland",
    slug: "/work-visa/poland",
    tagline: "Construction Worker, Cleaner",
    roles: ["Construction Worker", "Cleaner"],
    featured: true,
  },
  {
    name: "Italy",
    slug: "/work-visa/italy",
    tagline: "Light Duty Driver, Forklift Driver, Agricultural Worker, Waiter, Cleaner, Factory Worker",
    roles: ["Light Duty Driver", "Forklift Driver", "Agricultural Worker", "Waiter / Waitress", "Cleaner", "Factory Worker"],
    featured: true,
  },
  {
    name: "Portugal",
    slug: "/work-visa/portugal",
    tagline: "Agriculture (D1)",
    roles: ["Agriculture (D1)"],
    featured: true,
  },
  {
    name: "Greece",
    slug: "/work-visa/greece",
    tagline: "Hospitality, Construction, Warehouse",
    roles: ["Hospitality", "Construction", "Warehouse"],
    featured: true,
  },
  {
    name: "Cyprus",
    slug: "/work-visa/cyprus",
    tagline: "Hospitality, Construction, Warehouse, Helper",
    roles: ["Hospitality", "Construction", "Warehouse", "Helper"],
  },
  {
    name: "Bulgaria",
    slug: "/work-visa/bulgaria",
    tagline: "Hospitality, Construction, Warehouse, Helper",
    roles: ["Hospitality", "Construction", "Warehouse", "Helper"],
  },
  {
    name: "North Macedonia",
    slug: "/work-visa/macedonia",
    tagline: "Cleaner, Vegetable Worker",
    roles: ["Cleaner", "Vegetable Worker"],
  },
  {
    name: "Montenegro",
    slug: "/work-visa/montenegro",
    tagline: "Hospitality, Construction, Warehouse, Electrician, Tile Mason, Gypsum",
    roles: ["Hospitality", "Construction", "Warehouse", "Electrician", "Tile Mason", "Gypsum"],
  },
  {
    name: "Bosnia",
    slug: "/work-visa/bosnia",
    tagline: "General Worker",
    roles: ["General Worker"],
  },
  {
    name: "Croatia",
    slug: "/work-visa/croatia",
    tagline: "Housekeeping, Butcher, General Worker",
    roles: ["Housekeeping", "Butcher", "General Worker"],
  },
  {
    name: "Albania",
    slug: "/work-visa/albania",
    tagline: "Grill Chef / Kitchen Helper, Mason / Bricklayer",
    roles: ["Grill Chef / Kitchen Helper", "Mason / Bricklayer"],
  },
  {
    name: "Turkey",
    slug: "/work-visa/turkey",
    tagline: "Waiter, Waitress, Cook, Chef, Housekeeping, Barista, Dishwasher",
    roles: ["Waiter", "Waitress", "Cook", "Chef", "Housekeeping", "Barista", "Dishwasher"],
  },
  {
    name: "UK",
    slug: "/work-visa/uk",
    tagline: "Hospitality Worker, Hotel Line Worker",
    roles: ["Hospitality Worker", "Hotel Line Worker"],
    featured: true,
  },
  {
    name: "Australia",
    slug: "/work-visa/australia",
    tagline: "Warehouse Packer",
    roles: ["Warehouse Packer"],
  },
  {
    name: "New Zealand",
    slug: "/work-visa/new-zealand",
    tagline: "Warehouse Packer",
    roles: ["Warehouse Packer"],
  },
  {
    name: "Canada",
    slug: "/work-visa/canada",
    tagline: "Multiple Positions Available",
    roles: ["Multiple Positions Available"],
  },
  {
    name: "Moldova",
    slug: "/work-visa/moldova",
    tagline: "Female Massage Therapist",
    roles: ["Female Massage Therapist"],
  },
  {
    name: "Serbia",
    slug: "/work-visa/serbia",
    tagline: "Construction, Cleaner, Warehouse, Tile Mason",
    roles: ["Construction", "Cleaner", "Warehouse", "Tile Mason"],
  },
];

const processSteps = [
  {
    title: "Choose Destination",
    desc: "Select your preferred country and job category based on your background and goals.",
    icon: Globe2,
  },
  {
    title: "Profile Review",
    desc: "We review your eligibility, available openings, and required documents from Qatar.",
    icon: Users2,
  },
  {
    title: "Document Support",
    desc: "Get guidance for offer letters, work permit files, visa forms, and application preparation.",
    icon: FileCheck2,
  },
  {
    title: "Visa Processing",
    desc: "We support the full process from application guidance to submission readiness and updates.",
    icon: ShieldCheck,
  },
];

const trustItems = [
  "Qatar-focused consultation and document guidance",
  "Europe work permit and job visa assistance",
  "Clear process explanation before you apply",
  "Support for applicants living in Doha and across Qatar",
];

const faqs = [
  {
    q: "Which countries do you process work visas for from Qatar?",
    a: "We assist with selected work visa and work permit destinations including Poland, Italy, Portugal, Greece, Cyprus, Bulgaria, UK, Serbia, Croatia, and more depending on available roles and current intake.",
  },
  {
    q: "Can applicants from Bangladesh apply while living in Qatar?",
    a: "Yes. Many applicants living in Qatar ask for support while holding Bangladeshi nationality. Eligibility depends on residence status, job category, and destination requirements.",
  },
  {
    q: "Do I need a job offer for a Europe work visa?",
    a: "For many work permit routes, a job offer or employer-backed process is required. The exact requirement depends on the destination country and visa category.",
  },
  {
    q: "How long does work visa processing take?",
    a: "Processing time varies by destination, employer file, embassy or visa center scheduling, and document readiness. Timelines are always case-specific.",
  },
  {
    q: "Do you help with document preparation from Doha?",
    a: "Yes. We guide applicants in Qatar on document collection, formatting, application steps, and process readiness before submission.",
  },
];

function CountryCard({ item }: { item: CountryItem }) {
  return (
    <Link
      href={item.slug}
      className="group relative flex flex-col h-full overflow-hidden rounded-[24px] border border-(--border-soft) bg-(--bg-card) p-6 shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1.5 hover:border-(--accent-cyan) hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-(--brand-royal) to-(--accent-cyan) opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center rounded-full bg-(--bg-soft-blue) px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-(--brand-royal)">
            Work Visa
          </div>
          <h3 className="text-xl font-bold tracking-tight text-(--text-heading) group-hover:text-(--brand-royal) transition-colors">
            {item.name}
          </h3>
        </div>

        {item.featured && (
          <span className="rounded-full border border-(--border-soft) bg-white px-3 py-1 text-[10px] font-bold uppercase text-(--brand-navy) shadow-sm">
            Popular
          </span>
        )}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-(--text-body) line-clamp-2">
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

export default function WorkVisaClient() {
  const featuredCountries = countries.filter((item) => item.featured);
  const otherCountries = countries.filter((item) => !item.featured);

  return (
    <main className="bg-(--bg-main) text-(--text-body) antialiased">
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-(--hero-gradient)">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white/60 px-4 py-2 text-sm font-semibold text-(--brand-navy) backdrop-blur-sm shadow-sm">
                <Sparkles className="h-4 w-4 text-(--accent-cyan)" />
                Work Visa Opportunities from Qatar
              </div>

              <h1 className="text-4xl font-black tracking-tight text-(--text-heading) sm:text-6xl xl:text-7xl">
                Global Careers <br />
                <span className="text-(--brand-royal)">Start in Doha.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--text-body) opacity-90">
                Explore trusted work visa opportunities from Doha with support for job placement, 
                work permit processing, and document preparation for 18+ destinations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#destinations" className="rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105 active:scale-95">
                  View Destinations
                </Link>
                <Link href="/contact" className="rounded-2xl border border-(--border-soft) bg-white px-8 py-4 text-sm font-bold text-(--brand-royal) shadow-sm transition hover:bg-gray-50">
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

            <div className="lg:col-span-5">
              <div className="rounded-[32px] border border-(--border-soft) bg-white p-8 shadow-2xl">
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-2xl bg-(--bg-soft-blue) p-4 text-(--brand-royal)">
                    <BriefcaseBusiness className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-(--text-heading)">Qatar Support</h2>
                    <p className="text-xs font-medium text-(--text-muted)">Based in Doha, Qatar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 rounded-2xl border border-(--border-soft) bg-(--bg-main) p-4">
                    <MapPin className="h-5 w-5 mt-1 text-(--brand-royal)" />
                    <div>
                      <h4 className="text-sm font-bold text-(--text-heading)">Doha Office Support</h4>
                      <p className="text-xs text-(--text-body)">Expertise in local embassy requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-2xl border border-(--border-soft) bg-(--bg-main) p-4">
                    <PhoneCall className="h-5 w-5 mt-1 text-(--whatsapp)" />
                    <div>
                      <h4 className="text-sm font-bold text-(--text-heading)">Fast Updates</h4>
                      <p className="text-xs text-(--text-body)">Constant communication on your file.</p>
                    </div>
                  </div>
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
            <span className="text-sm font-semibold text-(--text-body)">Work permit guidance</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-(--brand-royal)" />
            <span className="text-sm font-semibold text-(--text-body)">Job placement support</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-(--brand-royal)" />
            <span className="text-sm font-semibold text-(--text-body)">Document assistance</span>
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
            Popular Destinations
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
            Countries we process from Qatar
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredCountries.map((item) => (
            <CountryCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-20 mb-8 border-t border-(--border-soft) pt-16">
          <h3 className="text-2xl font-bold text-(--text-heading)">More Available Programs</h3>
          <p className="mt-2 text-sm text-(--text-muted)">Explore additional job categories and work permit destinations.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherCountries.map((item) => (
            <CountryCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-(--bg-soft-blue)">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-(--brand-royal) shadow-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              A simple work visa process from Qatar
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="group rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition-all hover:border-(--brand-royal)/30">
                  <div className="mb-4 inline-flex rounded-2xl bg-(--bg-soft-blue) p-3 text-(--brand-royal) group-hover:bg-(--brand-royal) group-hover:text-white transition-colors">
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl leading-tight">
              Premium work visa guidance with a Qatar-first approach
            </h2>
            <div className="mt-8 space-y-4">
              {["Doha-based consultation", "Full document preparation", "Transparent fee structure"].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-(--text-heading)">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Strong SEO and user flow for Qatar applicants",
              "Country-specific conversion pages",
              "Clean premium design and trust",
              "Structured Europe job visa content",
              "Clear CTA blocks for inquiries",
              "Scalable setup for future pages",
            ].map((point) => (
              <div key={point} className="rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft)">
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-1 h-4 w-4 text-(--brand-royal)" />
                  <p className="text-sm font-medium leading-relaxed text-(--text-body)">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[40px] border border-(--border-soft) bg-(--brand-navy) p-8 text-white shadow-2xl sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--accent-cyan)/20 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                Ready to Start?
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Begin your work visa process from Doha today
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition hover:scale-105">
                Apply Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
                Get Consultation
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
              Work visa FAQ for Qatar residents
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-(--border-soft) bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-(--text-heading) flex gap-3">
                  <span className="text-(--brand-royal)">Q.</span>
                  {faq.q}
                </h3>
                <p className="mt-3 ml-7 text-sm leading-relaxed text-(--text-body) opacity-90">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-(--text-heading) sm:text-3xl">
            Work visa from Qatar for Europe and beyond
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-(--text-body) sm:text-base opacity-80">
            <p>
              If you are searching for a <strong>work visa from Qatar</strong>, Europe work
              permit guidance, or job visa processing support in Doha, this page
              is built to help you explore the right destinations and understand
              the process clearly.
            </p>
            <p>
              We support applicants looking for opportunities in Poland, Italy,
              Portugal, Greece, Cyprus, UK, Serbia, Croatia, and other selected
              destinations based on job category availability and current intake.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}