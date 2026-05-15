import { BadgeCheck, Building2, Globe2, Star } from "lucide-react";

const trustStats = [
  {
    icon: BadgeCheck,
    title: "High Success Rate",
    description:
      "Reliable support for work, visit, and student visas with expert documentation guidance for higher approval chances.",
  },
  {
    icon: Building2,
    title: "Regional Presence",
    description:
      "Physical offices in Qatar and Bangladesh offering dedicated support for applicants across the GCC.",
  },
  {
    icon: Globe2,
    title: "Global Destinations",
    description:
      "Expert assistance for Europe, Canada, Australia, New Zealand, UK, and other top immigration hubs.",
  },
  {
    icon: Star,
    title: "Trusted Excellence",
    description:
      "Transparent processes and personalized consultation focused on achieving faster and successful outcomes.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-(--brand-royal)">
            Trusted Immigration Partner
          </p>

          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-(--text-heading) sm:text-4xl md:text-5xl">
            Why Professionals Choose WMIBC
          </h2>

          <p className="mt-6 text-base leading-relaxed text-(--text-body) sm:text-lg">
            Achieve your global goals with Doha's premier immigration
            consultancy. We provide expert visa guidance and personalized
            support from start to finish.
          </p>
        </div>

        {/* Trust Stats Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue) transition-colors group-hover:bg-(--brand-royal)">
                  <Icon className="h-6 w-6 text-(--brand-royal) transition-colors group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-(--text-heading)">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-(--text-body)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

{/* Bottom Highlight Statistics based on image_e6bc43.png */}
<div className="mt-16 overflow-hidden rounded-[2.5rem] bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-8 text-white shadow-xl md:p-12">
  <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
    
    {/* Global Clients */}
    <div className="space-y-1">
      <p className="text-4xl font-black tracking-tight sm:text-5xl">1100+</p>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-100/90">
        Global Clients Assisted
      </p>
    </div>

    {/* Global Reach */}
    <div className="space-y-1 border-slate-400/20 py-6 md:border-x md:px-10 md:py-0">
      <p className="text-4xl font-black tracking-tight sm:text-5xl">25+</p>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-100/90">
        Countries Covered
      </p>
    </div>

    {/* Process Quality */}
    <div className="space-y-1 md:pl-10">
      <p className="text-4xl font-black tracking-tight sm:text-5xl">100%</p>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-100/90">
        Transparent Process
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}
