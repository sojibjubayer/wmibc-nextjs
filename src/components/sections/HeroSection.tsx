"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  BadgeCheck, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight
} from "lucide-react";

const destinations = ["Europe", "Canada", "Australia", "New Zealand", "USA", "UK"];

const trustPoints = [
  "Work Visa Support",
  "Visit Visa Guidance",
  "Student Visa Assistance",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* 2026 Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] h-125 w-125 rounded-full bg-(--accent-cyan)/10 blur-[120px]" />
        <div className="absolute top-[20%] left-[5%] h-100 w-100 rounded-full bg-(--brand-royal)/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start">
            <div className="group mb-6 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-white/50 p-1 pr-4 text-xs font-semibold backdrop-blur-md transition-all hover:bg-white">
              <span className="flex h-7 items-center justify-center rounded-full bg-(--brand-royal) px-3 text-white">
                New for 2026
              </span>
              <span className="text-(--brand-navy)">Trusted Immigration from Qatar</span>
              <ChevronRight className="h-3 w-3 text-(--brand-royal) transition-transform group-hover:translate-x-1" />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-(--text-heading) sm:text-5xl lg:text-7xl">
              Global Careers <br />
              <span className="bg-linear-to-r from-(--brand-royal) to-(--accent-cyan) bg-clip-text text-transparent">
                Simplified in Qatar
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--text-body)">
              WMIBC bridges the gap between ambition and reality. Whether you&apos;re seeking 
              career growth in <strong>Europe</strong>, education in <strong>Canada</strong>, 
              or business setup in the <strong>GCC</strong>, we provide the compliance-first 
              expertise you need.
            </p>

            {/* Destination Badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {destinations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-2 text-sm font-bold text-(--brand-navy) transition-all hover:border-(--accent-cyan) hover:bg-white"
                >
                  <Globe2 className="h-3.5 w-3.5 text-(--accent-cyan)" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 w-full sm:flex-row sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-(--brand-navy) px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-900/10 transition-all hover:-translate-y-1 hover:bg-(--brand-royal)"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-(--text-heading) transition-all hover:border-(--brand-royal) hover:bg-slate-50"
              >
                View Visa Options
              </Link>
            </div>

            {/* Quick Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 gap-4 w-full sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 border-l-2 border-(--accent-cyan)/30 pl-4 py-1">
                  <CheckCircle2 className="h-4 w-4 text-(--brand-royal)" />
                  <span className="text-xs font-bold uppercase tracking-wider text-(--text-muted)">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Card Column */}
          <div className="relative lg:ml-auto">
            {/* Background Shape */}
            <div className="absolute -inset-4 rotate-2 rounded-[40px] bg-linear-to-tr from-(--brand-royal)/20 to-(--accent-cyan)/20 blur-2xl" />
            
            <div className="relative overflow-hidden rounded-[40px] border border-white bg-white/40 p-2 shadow-2xl backdrop-blur-xl">
              <div className="rounded-4xl bg-(--brand-navy) p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Sparkles className="h-6 w-6 text-(--accent-cyan)" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">WMIBC Official</p>
                    <p className="text-xs font-bold text-(--accent-cyan)">Verified Residency Support</p>
                  </div>
                </div>

                <h3 className="mt-10 text-2xl font-bold leading-tight">
                  End-to-End Compliance <br />
                  for Global Mobility.
                </h3>

                <div className="mt-8 space-y-4">
                  {[
                    { 
                      icon: ShieldCheck, 
                      title: "Compliance First", 
                      desc: "All files reviewed by senior consultants." 
                    },
                    { 
                      icon: Globe2, 
                      title: "Multi-Region", 
                      desc: "Serving Qatar, UAE, and Bangladesh." 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                      <item.icon className="mt-1 h-5 w-5 text-(--accent-cyan)" />
                      <div>
                        <p className="text-sm font-bold text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between rounded-2xl bg-white/10 p-5">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-(--brand-navy) bg-slate-400" />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold text-white/80">
                    JOIN 2,500+ SUCCESSFUL APPLICANTS 
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