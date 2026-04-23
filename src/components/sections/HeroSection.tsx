import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";

const destinations = ["Qatar", "Europe", "Canada", "Australia", "New Zealand"];

const trustPoints = [
  "Work Visa Support",
  "Visit Visa Guidance",
  "Student Visa Assistance",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50 to-blue-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-(--brand-royal)/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-12 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-(--brand-royal) shadow-sm backdrop-blur">
            Trusted Immigration Consultancy from Qatar
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-(--text-heading) md:text-5xl lg:text-6xl">
            Work Visa & Visit Visa Solutions from Qatar for Global Opportunities
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-(--text-body) md:text-lg">
            WMIBC helps professionals, students, and travelers move forward with
            expert support for work visas, visit visas, student visas, and
            business setup services across Europe, Canada, Australia, and beyond.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {destinations.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-(--text-body) shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--brand-navy)"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/tourist-business-visit"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-(--text-heading) transition-all duration-200 hover:border-sky-200 hover:bg-sky-50 hover:text-(--brand-royal)"
            >
              Explore Visa Options
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-(--text-body) shadow-sm backdrop-blur"
              >
                <BadgeCheck className="h-4 w-4 text-(--brand-royal)" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card Area */}
        <div className="relative">
          <div className="mx-auto max-w-xl rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur md:p-8">
            <div className="rounded-3xl bg-(--brand-navy) p-6 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-cyan)">
                WMIBC
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                Expert Solutions for Visas, Business Setup & Global Opportunities
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                We provide reliable guidance for work visa, business / visit visa,
                student visa, and business setup processes with a focus on
                clarity, compliance, and client confidence.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Global Destination Support
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Europe, Canada, Australia, New Zealand, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Professional End-to-End Guidance
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      From consultation and documents to submission support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-medium text-white/80">
                  Start your journey with a trusted consultancy serving clients
                  from Qatar, Bangladesh, and GCC countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}