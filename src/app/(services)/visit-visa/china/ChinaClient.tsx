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
  "China visa application form",
  "Bank statement",
  "Employment letter or NOC",
  "Travel itinerary",
  "Hotel booking",
  "Previous visa copies, if available",
];

const places = [
  "Great Wall of China",
  "Forbidden City, Beijing",
  "Shanghai Skyline",
  "Zhangjiajie National Forest Park",
  "Terracotta Army, Xi’an",
  "Temple of Heaven",
  "West Lake, Hangzhou",
  "Chengdu Panda Base",
];

export default function ChinaClient() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/visit/china/great-wall-of-china-visit-visa.webp"
            alt="China visit visa from Qatar and Great Wall of China tourism"
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
              China Visit Visa from Qatar
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Get professional support for China tourist visa requirements,
              document preparation, travel itinerary, hotel booking, and visa
              application guidance from Doha.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Apply for China Visa
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
            China Visa Requirements
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Required Documents for China Visit Visa from Qatar
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Prepare your China tourist visa file correctly before submission.
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
                  Need help preparing your China visa file?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Our team can help you review documents, prepare travel plans,
                  organize supporting papers, and guide you through the China
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
                src="/images/visit/china/zhangjiajie-china-tourism.webp"
                alt="Zhangjiajie China tourism place for China visit visa travellers"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                China Tourism
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Zhangjiajie National Forest Park
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                One of China’s most iconic destinations famous for dramatic
                mountain cliffs, sky bridges, and cinematic landscapes.
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
              China Travel Highlights
            </div>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              Most Visited Places in China
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              China is popular for historic landmarks, modern cities, natural
              mountains, cultural sites, and family-friendly tourist
              attractions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((place) => (
              <div
                key={place}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-base font-bold text-slate-950">{place}</p>
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
                Apply for China Visit Visa from Doha
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Start your China tourist visa application with proper document
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