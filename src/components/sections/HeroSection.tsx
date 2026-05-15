"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Plane,
} from "lucide-react";

const destinations = [
  "Europe",
  "Canada",
  "Australia",
  "New Zealand",
  "USA",
  "UK",
];

const trustPoints = [
  "Work Visa Support",
  "Visit Visa Guidance",
  "Student Visa Assistance",
];

const heroStats = [
  { value: "7+ Years", label: "Experience" }, // Shortened for mobile fit
  { value: "25+", label: "Destinations" },
  { value: "Doha", label: "Office" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">
      {/* Premium Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-40 h-64 w-64 rounded-full bg-blue-400/15 blur-[80px] md:h-128 md:w-lg md:blur-[130px]" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-indigo-600/10 blur-[80px] md:h-112 md:w-md md:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 pr-3 shadow-sm backdrop-blur">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-700 px-2.5 py-1 text-[10px] font-bold text-white sm:text-xs">
                <BadgeCheck className="h-3 w-3" />
                WMIBC Official
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900 sm:text-xs sm:tracking-widest">
                Trusted Consultancy
              </span>
              <ChevronRight className="hidden h-3.5 w-3.5 text-blue-600 sm:block" />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
              Global Careers Start with{" "}
              <span className="bg-linear-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                WMIBC
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              WMIBC helps applicants from Qatar with professional guidance for
              work, visit, and student visas. Get clear support from
              consultation to submission.
            </p>

            {/* Destination Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {destinations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm transition-all hover:border-blue-400 sm:px-4 sm:py-2 sm:text-sm"
                >
                  <Globe2 className="h-3.5 w-3.5 text-cyan-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-blue-700 sm:flex-none"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 sm:flex-none"
              >
                View Visa Options
              </Link>
            </div>

            {/* Trust Points - Improved Mobile Grid */}
            <div className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur sm:flex-col sm:text-center lg:flex-row lg:text-left"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image Area */}
          <div className="relative w-full">
            <div className="relative mx-auto aspect-4/5 w-full max-w-500px overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-2xl lg:max-w-none">
              <div className="relative h-full w-full overflow-hidden rounded-4xl bg-slate-100">
                <Image
                  src="/images/home/wmibc-hero.webp"
                  alt="WMIBC immigration consultancy"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute left-4 top-4 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur sm:left-6 sm:top-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold uppercase text-slate-500">
                        WMIBC Qatar
                      </p>
                      <p className="text-xs font-extrabold text-slate-900">
                        Verified Support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-md sm:bottom-6 sm:p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="h-6 w-6 shrink-0 text-cyan-400" />
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">
                        End-to-End Guidance
                      </h3>
                      <p className="text-[11px] text-white/80 sm:text-xs">
                        Professional documentation & submission support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Adjusted for Mobile */}
            <div className="relative z-10 -mt-10 flex justify-center gap-2 px-2 sm:gap-4">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="flex-1 rounded-xl border border-slate-100 bg-white p-3 text-center shadow-lg sm:p-5"
                >
                  <p className="text-base font-extrabold text-blue-700 sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-tighter text-slate-500 sm:text-[10px] sm:tracking-normal">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
