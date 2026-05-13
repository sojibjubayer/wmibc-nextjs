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
  {
    value: "100+",
    label: "Successful Applicants",
  },
  {
    value: "25+",
    label: "Visa Destinations",
  },
  {
    value: "Doha",
    label: "Based Consultation",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-40 h-80 w-80 rounded-full bg-blue-400/15 blur-[100px] md:h-128 md:w-lg md:blur-[130px]" />
        <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px] md:h-112 md:w-md md:blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 pr-4 shadow-sm backdrop-blur lg:mx-0 lg:justify-start">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-700 px-3 py-1.5 text-[10px] font-bold text-white sm:text-xs">
                <BadgeCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                WMIBC Official
              </span>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 sm:text-xs sm:tracking-[0.18em]">
                Trusted Immigration Consultancy
              </span>

              <ChevronRight className="hidden h-3.5 w-3.5 text-blue-600 sm:block" />
            </div>

            <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:mx-0 lg:text-7xl">
              Global Careers Start with{" "}
              <span className="bg-linear-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                WMIBC
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              WMIBC helps applicants from Qatar with professional guidance for
              work visas, visit visas, student visas, and global mobility
              documentation. Get clear support from consultation to submission.
            </p>

            {/* Destination Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {destinations.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
                >
                  <Globe2 className="h-3.5 w-3.5 text-cyan-500 sm:h-4 sm:w-4" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/15 transition-all hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-600/40 hover:bg-slate-50"
              >
                View Visa Options
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur lg:justify-start"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative mx-auto mt-8 w-full max-w-140 lg:mt-0 lg:max-w-none">
            {/* Background Glow */}
            <div className="absolute -inset-3 rounded-4xl bg-linear-to-tr from-blue-600/20 via-cyan-400/10 to-white blur-2xl sm:-inset-4 sm:rounded-[3rem]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-2xl shadow-blue-950/10 sm:rounded-[3rem] sm:p-3">
              <div className="relative aspect-4/5 min-h-170.5 overflow-hidden rounded-4xl bg-slate-100 sm:min-h-140 sm:rounded-[2.5rem] lg:min-h-0">
                <Image
                  src="/images/home/wmibc-hero.webp"
                  alt="WMIBC immigration consultancy office in Qatar"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 560px, 48vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/5 to-transparent" />

                {/* Floating Verified Card */}
                <div className="absolute left-3 top-3 rounded-xl border border-white/20 bg-white/90 p-2 shadow-xl backdrop-blur sm:left-5 sm:top-5 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-11 sm:w-11 sm:rounded-xl">
                      <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                        WMIBC Official
                      </p>
                      <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                        Qatar Office Support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Glass Card */}
                <div className="absolute inset-x-3 bottom-4 rounded-2xl border border-white/15 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-md sm:inset-x-5 sm:bottom-6 sm:rounded-3xl sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <ShieldCheck className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold sm:text-lg">
                        End-to-End Visa Guidance
                      </h3>

                      <p className="mt-1 text-[11px] leading-relaxed text-white/80 sm:text-sm">
                        Professional documentation and application guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="relative z-10 -mt-6 grid grid-cols-3 gap-2 px-2 sm:-mt-8 sm:gap-3 sm:px-4">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xl shadow-blue-950/5 sm:rounded-2xl sm:p-4"
                >
                  <p className="text-sm font-extrabold text-blue-700 sm:text-xl">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-tight text-slate-500 sm:text-[11px] sm:tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Floating Mini Card */}
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl xl:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Plane className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500">
                    Featured Service
                  </p>
                  <p className="text-sm font-extrabold text-slate-900">
                    Europe Work Permit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}