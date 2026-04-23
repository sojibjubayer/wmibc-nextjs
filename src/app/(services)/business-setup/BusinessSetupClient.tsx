import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const setupOptions = [
  {
    icon: Building2,
    title: "Company Formation",
    description:
      "Complete guidance for starting a company in Qatar with the right structure, documentation, and registration support.",
  },
  {
    icon: FileCheck2,
    title: "Trade License Support",
    description:
      "Professional assistance with business license applications, document preparation, and submission processes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consultation",
    description:
      "Strategic support to help you choose the right business activity, setup model, and operational direction.",
  },
  {
    icon: Landmark,
    title: "Legal & PRO Assistance",
    description:
      "Support for approvals, official processes, paperwork, and compliance steps required for business setup in Qatar.",
  },
];

const processSteps = [
  "Initial consultation and business activity review",
  "Choosing the right company structure",
  "Document preparation and application support",
  "Trade license and registration process",
  "Post-setup guidance and operational support",
];

const faqs = [
  {
    question: "How can I start a business in Qatar?",
    answer:
      "Starting a business in Qatar usually involves selecting the right business activity, choosing a company structure, preparing documents, and completing registration and licensing requirements. WMIBC helps simplify this process with professional guidance.",
  },
  {
    question: "Can WMIBC help with company formation in Qatar?",
    answer:
      "Yes. WMIBC provides expert support for company formation, trade license processes, documentation, and consultation for entrepreneurs planning to establish a business in Qatar.",
  },
  {
    question: "What support do you provide for business setup?",
    answer:
      "We provide help with company formation, trade license guidance, legal documentation support, PRO assistance, and consultation for choosing the right business pathway.",
  },
];

export default function BusinessSetupClient() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50 to-blue-100 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-(--brand-royal)/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              Business Setup in Qatar
            </p>

            <h1 className="text-(--text-heading) mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Start Your Business in Qatar with Expert Guidance
            </h1>

            <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
              WMIBC provides professional support for company formation, trade
              license assistance, legal documentation, and business consultancy
              services for entrepreneurs and investors planning business setup in
              Qatar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--brand-navy)"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://wa.me/97430221975"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-(--text-heading) transition-all duration-200 hover:border-sky-200 hover:bg-sky-50 hover:text-(--brand-royal)"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              Why WMIBC
            </p>

            <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Trusted Support for Company Formation & Business Growth
            </h2> 

            <p className="text-(--text-body) mt-5 text-base leading-8">
              Starting a business in Qatar requires the right planning,
              documentation, and process support. WMIBC helps entrepreneurs move
              forward with a more structured and reliable setup journey.
            </p>

            <p className="text-(--text-body) mt-5 text-base leading-8">
              From selecting the right business structure to guiding you through
              registration, licensing, and documentation steps, our team focuses
              on helping you establish your company with clarity and confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
                <p className="text-3xl font-bold text-(--text-heading)">Qatar</p>
                <p className="mt-2 text-sm text-(--text-body)">
                  Focused support for business setup and company registration
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
                <p className="text-3xl font-bold text-(--text-heading)">Expert</p>
                <p className="mt-2 text-sm text-(--text-body)">
                  Guidance for documentation, licensing, and consultation
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-8 text-white md:p-10">
            <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
              Business Setup Services
            </p>

            <h3 className="mt-4 text-2xl font-bold md:text-3xl">
              Professional Support from Planning to Registration
            </h3>

            <p className="mt-5 text-sm leading-8 text-white/80 md:text-base">
              WMIBC assists with company formation, trade license processes,
              legal paperwork, and consultation so you can start your business
              in Qatar with better clarity and less confusion.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-7 text-white/85">
                  Company formation and registration support
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-7 text-white/85">
                  Documentation and licensing guidance
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-7 text-white/85">
                  Consultation for the right business pathway
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--bg-soft-blue) py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              What We Help With
            </p>

            <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Core Business Setup Services in Qatar
            </h2>

            <p className="text-(--text-body) mt-5 text-base leading-8">
              Explore the main areas where WMIBC supports entrepreneurs,
              investors, and business owners planning to establish operations in
              Qatar.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {setupOptions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue)">
                    <Icon className="h-6 w-6 text-(--brand-royal)" />
                  </div>

                  <h3 className="text-(--text-heading) mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-(--text-body) mt-3 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
                Our Process
              </p>

              <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                A Clear Path to Starting Your Business in Qatar
              </h2>

              <p className="text-(--text-body) mt-5 text-base leading-8">
                We simplify the business setup journey through a structured
                approach that helps reduce confusion and keep your process more
                organized.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--bg-soft-blue) font-semibold text-(--brand-royal)">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-(--text-body)">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--bg-soft-blue) py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              Frequently Asked Questions
            </p>

            <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Common Questions About Business Setup in Qatar
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
              >
                <h3 className="text-(--text-heading) text-lg font-semibold">
                  {faq.question}
                </h3>
                <p className="text-(--text-body) mt-3 text-sm leading-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-16 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-4xl bg-linear-to-r from-(--brand-navy) to-(--brand-royal) p-8 text-white md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                  Ready to Start?
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Get Expert Help for Your Business Setup in Qatar
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/80 md:text-base">
                  Contact WMIBC for professional guidance on company formation,
                  licensing, documentation, and business setup consultation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/97430221975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}