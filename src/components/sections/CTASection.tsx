import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="from-(--brand-navy) to-(--brand-royal) relative overflow-hidden rounded-4xl bg-linear-to-r p-8 text-white md:p-12 lg:p-14">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                Ready to Start?
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Your Global Journey Starts with the Right Consultation
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/80 md:text-base">
                Whether you need a work visa, visit visa, student visa, or
                business setup support, WMIBC provides trusted guidance from
                Qatar to Europe, Canada, Australia, and beyond.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-(--brand-navy) transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/97430221975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  WhatsApp Us
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Info Cards */}
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Phone className="h-5 w-5 text-(--accent-cyan)" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Talk to Our Experts
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Get personalized consultation for your visa application,
                      documentation, and immigration planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <MessageCircle className="h-5 w-5 text-(--accent-cyan)" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Fast Response Support
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Contact us directly via WhatsApp for faster support and
                      real-time assistance with your application process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-medium text-white/80">
                  Trusted by applicants across Qatar, Bangladesh, and GCC
                  countries for professional immigration consultancy and business
                  setup solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}