"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";

const documents = [
  "Valid passport with minimum 6 months validity",
  "Qatar QID copy",
  "Recent passport-size photo",
  "Japan visa application form",
  "Bank statement",
  "Employment letter or NOC",
  "Travel itinerary",
  "Hotel booking",
  "Previous visa copies, if available",
];

const places = [
  "Mount Fuji",
  "Tokyo Tower",
  "Shibuya Crossing, Tokyo",
  "Fushimi Inari Shrine, Kyoto",
  "Arashiyama Bamboo Forest",
  "Osaka Castle",
  "Nara Park",
  "Universal Studios Japan",
];

const badges = [
  "Top Attraction",
  "Must Visit",
  "Travel Highlight",
  "Popular Spot",
];

const cardStyles = [
  "from-blue-500/10 to-cyan-500/10 border-blue-200",
  "from-violet-500/10 to-fuchsia-500/10 border-violet-200",
  "from-emerald-500/10 to-teal-500/10 border-emerald-200",
  "from-orange-500/10 to-amber-500/10 border-orange-200",
  "from-pink-500/10 to-rose-500/10 border-pink-200",
  "from-indigo-500/10 to-blue-500/10 border-indigo-200",
  "from-sky-500/10 to-blue-500/10 border-sky-200",
  "from-purple-500/10 to-indigo-500/10 border-purple-200",
];

export default function JapanClient() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/visit/japan/japan-visit-visa.webp"
            alt="Japan visit visa from Qatar with Mount Fuji tourism view"
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <Plane className="h-4 w-4" />
              Tourist & Visit Visa Assistance
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Japan Visit Visa from Qatar
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Get professional support for Japan tourist visa requirements,
              document preparation, travel itinerary, hotel booking, and visa
              application guidance from Doha.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Apply for Japan Visa
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#required-documents"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Check Required Documents
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="required-documents"
        className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 lg:grid-cols-[1fr_380px]"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            <FileText className="h-4 w-4" />
            Japan Visa Requirements
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Required Documents for Japan Visit Visa from Qatar
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Prepare your Japan tourist visa file correctly before submission.
            WMIBC assists Qatar residents, Bangladeshi applicants, and GCC
            residents with complete document checking and application support.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />

                <p className="text-sm font-medium leading-6 text-slate-700">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-4xl border border-slate-800 bg-linear-to-br from-[#0F172A] via-[#132238] to-[#1E3A5F] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  WMIBC Visa Support
                </div>

                <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                  Need help preparing your Japan visa file?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Our team can help you review documents, prepare travel plans,
                  organize supporting papers, and guide you through the Japan
                  visit visa process from Qatar.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                    Document Review
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                    Itinerary Support
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                    Application Guidance
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  Get Visa Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl">
            <div className="relative aspect-4/5">
              <Image
                src="/images/visit/japan/miyajima-boat-japan-tourism.webp"
                alt="Miyajima Japan tourism place for visit visa travellers"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Japan Tourism
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Miyajima, Japan
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                One of Japan’s most scenic destinations known for its floating
                torii gate, peaceful island views, traditional culture, and
                coastal landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <MapPin className="h-4 w-4" />
              Japan Travel Highlights
            </div>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              Most Visited Places in Japan
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Japan is popular for modern cities, historic temples, natural
              landscapes, cherry blossoms, shopping districts, cultural
              experiences, and family attractions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((place, index) => (
              <div
                key={place}
                className={`group relative overflow-hidden rounded-[1.75rem] border bg-linear-to-br p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  cardStyles[index % cardStyles.length]
                }`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/30 blur-2xl" />

                <div className="relative">
                  <div className="mb-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {badges[index % badges.length]}
                  </div>

                  <p className="text-base font-bold leading-7 text-slate-950">
                    {place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-linear-to-r from-[#0F172A] via-[#132238] to-[#1E3A5F] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <ShieldCheck className="h-4 w-4" />
                WMIBC Visa Support
              </div>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Apply for Japan Visit Visa from Doha
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Start your Japan tourist visa application with proper document
                guidance and professional support.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Start Application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
