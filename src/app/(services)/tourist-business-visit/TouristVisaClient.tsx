"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Globe,
  Map,
  MapPin,
  Palmtree,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Ticket,
} from "lucide-react";

type Destination = {
  name: string;
  slug: string;
  type: string;
  popular?: boolean;
};

const destinations: Destination[] = [
  { name: "China", slug: "/tourist-visa/china", type: "Tourist & Visit Visas", popular: true },
  { name: "South Korea", slug: "/tourist-visa/south-korea", type: "Tourist & Visit Visas", popular: true },
  { name: "Japan", slug: "/tourist-visa/japan", type: "Tourist & Visit Visas", popular: true },
  { name: "Thailand", slug: "/tourist-visa/thailand", type: "Tourist & Visit Visas" },
  { name: "Malaysia", slug: "/tourist-visa/malaysia", type: "Tourist & Visit Visas" },
  { name: "UK", slug: "/tourist-visa/uk", type: "Tourist & Visit Visas", popular: true },
  { name: "Canada", slug: "/tourist-visa/canada", type: "Tourist & Visit Visas" },
  { name: "USA", slug: "/tourist-visa/usa", type: "Tourist & Visit Visas", popular: true },
  { name: "India", slug: "/tourist-visa/india", type: "Tourist & Visit Visas" },
  { name: "Singapore", slug: "/tourist-visa/singapore", type: "Tourist & Visit Visas" },
  { name: "Netherlands", slug: "/tourist-visa/netherlands", type: "Tourist & Visit Visas" },
  { name: "Australia", slug: "/tourist-visa/australia", type: "Tourist & Visit Visas" },
  { name: "New Zealand", slug: "/tourist-visa/new-zealand", type: "Tourist & Visit Visas" },
  { name: "Turkey", slug: "/tourist-visa/turkey", type: "Tourist & Visit Visas" },
  { name: "Europe", slug: "/tourist-visa/europe", type: "Tourist & Visit Visas", popular: true },
];

export default function TouristVisaClient() {
  return (
    <main className="bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white/80 px-4 py-2 text-sm font-medium text-(--brand-navy) backdrop-blur">
              <Plane className="h-4 w-4 text-(--accent-cyan)" />
              Tourist Visa Services in Qatar
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-(--text-heading) sm:text-6xl">
              Explore the World with <span className="text-(--brand-royal)">Ease.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-(--text-body)">
              Professional assistance for tourist and visit visas from Doha. We handle the 
              documentation so you can focus on the journey.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="#all-destinations" className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                Explore Destinations
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white px-8 py-4 text-sm font-bold text-(--brand-royal) shadow-sm transition hover:bg-gray-50">
                Check Requirements
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave or Path */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-(--bg-main) to-transparent" />
      </section>

      {/* Destinations Grid */}
      <section id="all-destinations" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
              Destinations
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Apply for Your Tourist Visa
            </h2>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-(--text-muted) group-focus-within:text-(--brand-royal)" />
            <input 
              type="text" 
              placeholder="Search country..." 
              className="w-full md:w-64 rounded-2xl border border-(--border-soft) bg-white py-3 pl-11 pr-4 text-sm focus:border-(--brand-royal) focus:outline-none focus:ring-2 focus:ring-(--brand-royal)/10 transition-all"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((country) => (
            <Link
              key={country.name}
              href={country.slug}
              className="group relative flex flex-col rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition-all hover:-translate-y-1.5 hover:border-(--brand-royal) hover:shadow-xl"
            >
              {country.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-(--accent-cyan)/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-(--accent-cyan)">
                  Top Choice
                </div>
              )}
              
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue) text-(--brand-royal) group-hover:bg-(--brand-royal) group-hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-(--text-heading) group-hover:text-(--brand-royal) transition-colors">
                {country.name}
              </h3>
              
              <p className="mt-2 text-xs font-medium text-(--text-muted) uppercase tracking-wide">
                {country.type}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-bold text-(--brand-navy)">Check Requirements</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-main) text-(--brand-navy) group-hover:bg-(--brand-royal) group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Use Our Service */}
      <section className="bg-(--brand-navy) text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe className="absolute -right-20 -bottom-20 h-96 w-96" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Expert Review",
                desc: "We verify your document set to minimize the risk of rejection."
              },
              {
                icon: Compass,
                title: "Doha-Based Support",
                desc: "In-person or remote assistance tailored for Qatar residents."
              },
              {
                icon: Ticket,
                title: "Complete Forms",
                desc: "We handle complex visa application forms and appointment scheduling."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <item.icon className="h-8 w-8 text-(--accent-cyan)" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[40px] border border-(--border-soft) bg-white p-8 lg:p-16 shadow-sm">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
                Ready to Go?
              </div>
              <h2 className="text-3xl font-bold text-(--text-heading) sm:text-4xl mb-6">
                Standard Tourist Visa Requirements
              </h2>
              <p className="text-(--text-body) mb-8">
                While every country is different, most tourist visa applications from Qatar 
                require the following core documents:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Original Passport (6m validity)",
                  "Qatar ID Copy",
                  "NOC Letter from Employer",
                  "Bank Statement (3-6 Months)",
                  "Travel Insurance",
                  "Hotel & Flight Proof"
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-sm font-semibold text-(--text-heading)">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-4xl bg-(--bg-soft-blue) flex items-center justify-center">
                <Map className="h-48 w-48 text-(--brand-royal)/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-3xl bg-white p-8 shadow-2xl animate-pulse">
                    <Sparkles className="h-12 w-12 text-(--accent-cyan) mb-4" />
                    <p className="font-bold text-(--brand-navy)">Hassle-Free Approval</p>
                    <p className="text-xs text-(--text-muted)">Start your file today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-linear-to-br from-(--brand-royal) to-(--brand-navy) p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold sm:text-5xl mb-6">Planning a holiday?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10">
              Speak to our consultants in Doha today for a free initial assessment of your visa eligibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition hover:scale-105 shadow-xl">
                Start My Application
              </Link>
              <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20">
                Contact via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}