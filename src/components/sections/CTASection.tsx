import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="from-(--brand-navy) to-(--brand-royal) relative overflow-hidden rounded-[2.5rem] bg-linear-to-r p-8 text-white md:p-12 lg:p-16">
          
          {/* Background Decorative Elements */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content (Span 7) */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
                <Globe className="h-3 w-3" />
                Global Expansion
              </span>

              <h2 className="mt-6 text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Your Global Journey Starts with Expert Guidance
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
                Whether you are pursuing a career in Europe, a degree in Canada, 
                or launching a business in Doha, WMIBC provides the strategic 
                consultation you need to move forward.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) transition-all hover:bg-blue-50 hover:shadow-lg active:scale-95"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/97430221975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
                >
                  <MessageCircle className="h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  WhatsApp Support
                </a>
              </div>
            </div>

            {/* Right Side Cards (Span 5) */}
            <div className="grid gap-4 lg:col-span-5">
              <a 
                href="tel:+97430221975" 
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-(--brand-navy)">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Talk to Our Experts</h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/70">
                      Personalized planning for your visa application and document legalities.
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Real-time Assistance</h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/70">
                      Get fast responses via WhatsApp for any urgent application updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-linear-to-br from-white/10 to-transparent p-6 ring-1 ring-white/10">
                <p className="text-sm font-semibold italic text-blue-200">
                  "Trusted by professionals and entrepreneurs across Qatar and the GCC for seamless global transitions."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}