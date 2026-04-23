import { BadgeCheck, Building2, Globe2, Star } from "lucide-react";

const trustStats = [
  {
    icon: BadgeCheck,
    title: "High Success Rate",
    description:
      "Reliable support for work visas, visit visas, and student visa applications with strong documentation guidance.",
  },
  {
    icon: Building2,
    title: "Qatar + Bangladesh Offices",
    description:
      "Physical offices with dedicated consultation support for applicants across Qatar, Bangladesh, and GCC countries.",
  },
  {
    icon: Globe2,
    title: "Global Destination Support",
    description:
      "Expert assistance for Europe, Canada, Australia, New Zealand, UK, and other leading immigration destinations.",
  },
  {
    icon: Star,
    title: "Trusted by Clients",
    description:
      "Professional consultation with transparent processes, faster support, and a strong focus on successful outcomes.",
  },
];

export default function TrustSection() { 
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-royal)">
            Trusted Immigration Partner
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--text-heading) md:text-4xl">
            Why Professionals Choose WMIBC for Global Opportunities
          </h2>

          <p className="mt-5 text-base leading-8 text-(--text-body)">
            WMIBC is a premier international immigration and business consultancy
            helping professionals, students, and travelers achieve their global
            goals through expert visa guidance, transparent processes, and
            personalized support from start to finish.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue)">
                  <Icon className="h-6 w-6 text-(--brand-royal)" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-(--text-heading)">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-(--text-body)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 rounded-[28px] bg-linear-to-r from-(--brand-navy) to-(--brand-royal) p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold">5000+</p>
              <p className="mt-2 text-sm text-white/80">
                Successful Visa Applications Supported
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">10+ Years</p>
              <p className="mt-2 text-sm text-white/80">
                Experience in Immigration & Business Consultancy
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">GCC Wide</p>
              <p className="mt-2 text-sm text-white/80">
                Supporting Applicants Across Qatar and GCC Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}