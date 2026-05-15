"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Globe,
  Map,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Ticket,
} from "lucide-react";
import { destinationRegions, destinations } from "./destinations";

export default function TouristVisaClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredDestinations = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return destinations.filter((country) => {
      const matchesSearch =
        country.name.toLowerCase().includes(query) ||
        country.type.toLowerCase().includes(query) ||
        country.region.toLowerCase().includes(query);

      const matchesRegion =
        activeRegion === "All" || country.region === activeRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, activeRegion]);

  const popularDestinations = destinations.filter((country) => country.popular);

  return (
    <main className="overflow-x-hidden bg-(--bg-main) text-(--text-body) antialiased">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-(--border-soft) bg-white/80 px-4 py-2 text-xs font-semibold text-(--brand-navy) shadow-sm backdrop-blur sm:text-sm">
              <Plane className="h-4 w-4 shrink-0 text-(--accent-cyan)" />
              <span className="truncate">
                Tourist Visa Services for Qatar Residents
              </span>
            </div>

            <h1 className="text-balance text-4xl font-black tracking-tight text-(--text-heading) sm:text-5xl lg:text-7xl">
              Visit Visa Assistance from Qatar for{" "}
              <span className="text-(--brand-royal)">
                50+ Global Destinations.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--text-body) sm:text-lg">
              WMIBC assists Qatar residents of different nationalities with
              tourist and visit visa documentation for Schengen countries, UK,
              USA, Canada, Australia, Turkey, Asia, GCC, and selected European
              countries.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#all-destinations"
                className="inline-flex items-center justify-center rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-(--brand-navy)/90 active:scale-95"
              >
                Explore Destinations
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-(--border-soft) bg-white px-8 py-4 text-sm font-bold text-(--brand-royal) shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 active:scale-95"
              >
                Check Requirements
              </Link>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                "Visit visa support from Qatar",
                "Embassy document guidance",
                "Tourist & family visit visas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-xs font-bold text-(--text-heading) shadow-sm backdrop-blur sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-(--bg-main) to-transparent" />
      </section>

      {/* Popular Destinations */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-(--brand-royal)">
              Most Requested
            </div>

            <h2 className="text-3xl font-black tracking-tight text-(--text-heading) sm:text-4xl">
              Popular visit visa destinations
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-(--text-body)">
            These are common destinations requested by non-Qatari residents
            applying from Qatar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularDestinations.slice(0, 8).map((country) => (
            <Link
              key={country.name}
              href={country.slug}
              className="group rounded-3xl border border-(--border-soft) bg-white p-5 shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1 hover:border-(--brand-royal)/30 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--bg-soft-blue) text-(--brand-royal) transition-colors group-hover:bg-(--brand-royal) group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-(--accent-cyan)/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-(--accent-cyan)">
                  Popular
                </span>
              </div>

              <h3 className="text-lg font-black text-(--text-heading) transition-colors group-hover:text-(--brand-royal)">
                {country.name}
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                {country.region}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section
        id="all-destinations"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-(--brand-royal)">
              Destinations
            </div>

            <h2 className="text-3xl font-black tracking-tight text-(--text-heading) sm:text-4xl">
              Apply for your tourist visa
            </h2>

            <p className="mt-4 text-sm leading-6 text-(--text-body) sm:text-base">
              Search by country or filter by region to find visit visa services
              available for Qatar-based applicants.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-(--text-muted)" />
            <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-(--border-soft) bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none transition-all focus:border-(--brand-royal) focus:ring-4 focus:ring-(--brand-royal)/10"
            />
          </div>
        </div>

        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
          {destinationRegions.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setActiveRegion(region)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 sm:text-sm ${
                activeRegion === region
                  ? "border-(--brand-royal) bg-(--brand-royal) text-white shadow-md"
                  : "border-(--border-soft) bg-white text-(--text-body) hover:border-(--brand-royal)/30 hover:text-(--brand-royal)"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm font-semibold text-(--text-muted)">
          Showing {filteredDestinations.length} destinations
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((country) => (
              <Link
                key={country.name}
                href={country.slug}
                className="group relative flex min-h-[220px] flex-col rounded-[28px] border border-(--border-soft) bg-white p-6 shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1.5 hover:border-(--brand-royal)/40 hover:shadow-xl"
              >
                {country.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-(--accent-cyan)/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-(--accent-cyan)">
                    Top Choice
                  </div>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue) text-(--brand-royal) transition-colors group-hover:bg-(--brand-royal) group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-black text-(--text-heading) transition-colors group-hover:text-(--brand-royal)">
                  {country.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-(--text-muted)">
                  {country.type}
                </p>

                <p className="mt-3 text-xs font-semibold text-(--brand-royal)">
                  {country.region}
                </p>

                <div className="mt-auto flex items-center justify-between pt-8">
                  <span className="text-sm font-bold text-(--brand-navy)">
                    Check Requirements
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-main) text-(--brand-navy) transition-all group-hover:bg-(--brand-royal) group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-(--border-soft) bg-white p-10 text-center">
            <h3 className="text-xl font-black text-(--text-heading)">
              No destination found
            </h3>
            <p className="mt-2 text-sm text-(--text-body)">
              Try another country name or select a different region.
            </p>
          </div>
        )}
      </section>

      {/* Why Use Our Service */}
      <section className="relative overflow-hidden bg-(--brand-navy) text-white">
        <div className="absolute inset-0 opacity-10">
          <Globe className="absolute -bottom-20 -right-20 h-96 w-96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Why WMIBC
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Professional visit visa support from Doha
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Expert Review",
                desc: "We review your document set, travel purpose, bank statement, employment proof, and application details before submission.",
              },
              {
                icon: Compass,
                title: "Doha-Based Support",
                desc: "In-person or remote assistance tailored for Qatar residents of different nationalities.",
              },
              {
                icon: Ticket,
                title: "Complete File Guidance",
                desc: "Support for application forms, appointment guidance, cover letters, hotel booking, travel insurance, and document preparation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 md:text-left"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 md:mx-0">
                  <item.icon className="h-7 w-7 text-(--accent-cyan)" />
                </div>

                <h3 className="mb-3 text-xl font-black">{item.title}</h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-(--border-soft) bg-white p-6 shadow-sm sm:rounded-[40px] sm:p-8 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-(--bg-soft-blue) px-4 py-1.5 text-sm font-semibold text-(--brand-royal)">
                Ready to Go?
              </div>

              <h2 className="mb-6 text-3xl font-black text-(--text-heading) sm:text-4xl">
                Standard tourist visa requirements
              </h2>

              <p className="mb-8 text-sm leading-7 text-(--text-body) sm:text-base">
                Every country has different requirements, but most tourist visa
                applications from Qatar require these core documents.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Original passport with validity",
                  "Qatar ID / residence permit copy",
                  "NOC letter from employer",
                  "Bank statement for 3–6 months",
                  "Travel insurance",
                  "Hotel and flight reservation",
                  "Passport-size photo",
                  "Previous travel history if available",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm font-semibold text-(--text-heading)">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-(--bg-soft-blue) sm:rounded-4xl">
                <Map className="h-40 w-40 text-(--brand-royal)/20 sm:h-48 sm:w-48" />

                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="rounded-3xl bg-white p-7 shadow-2xl sm:p-8">
                    <Sparkles className="mb-4 h-12 w-12 text-(--accent-cyan)" />
                    <p className="font-black text-(--brand-navy)">
                      Hassle-Free Guidance
                    </p>
                    <p className="mt-1 text-xs text-(--text-muted)">
                      Start your visa file today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 rounded-2xl bg-(--bg-main) p-4 text-xs leading-6 text-(--text-muted)">
            Note: Final visa approval is always decided by the embassy,
            consulate, or immigration authority. WMIBC provides documentation
            guidance and application support.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-(--brand-royal) to-(--brand-navy) p-8 text-center text-white shadow-2xl sm:rounded-[40px] sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-black sm:text-5xl">
              Planning a holiday or family visit?
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Speak to our consultants in Doha for an initial assessment of
              your tourist visa documentation and eligibility.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                Start My Application
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-95"
              >
                Contact via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}