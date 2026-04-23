import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

const destinations = [
  {
    title: "Europe",
    description:
      "Work visas, visit visas, student visas, and business setup opportunities across leading European countries.",
    href: "/tourist-business-visit",
  },
  {
    title: "Canada",
    description:
      "Professional support for tourist visas, student visas, work permits, and immigration pathways to Canada.",
    href: "/tourist-business-visit",
  },
  {
    title: "Australia",
    description:
      "Expert visa guidance for work opportunities, student admissions, and visit visa applications from Qatar.",
    href: "/tourist-business-visit",
  },
  {
    title: "New Zealand",
    description:
      "Reliable consultation for work visas, study pathways, and visit visa support with complete documentation help.",
    href: "/tourist-business-visit",
  },
  {
    title: "United Kingdom",
    description:
      "Visit visa, student visa, and work visa assistance for professionals and families planning to move abroad.",
    href: "/tourist-business-visit",
  },
  {
    title: "Qatar Business Setup",
    description:
      "Business formation, licensing, company registration, and legal consultancy support for entrepreneurs in Qatar.",
    href: "/business-setup",
  },
];

export default function DestinationsSection() {
  return (
    <section className="bg-(--bg-soft-blue) py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Popular Destinations
          </p>

          <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Global Opportunities Across Top Immigration Destinations
          </h2>

          <p className="text-(--text-body) mt-5 text-base leading-8">
            From Europe and Canada to Australia and New Zealand, WMIBC helps
            professionals, students, and travelers move forward with trusted
            visa support and business consultancy services.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
            >
              <div className="bg-(--bg-soft-blue) inline-flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:bg-(--brand-royal)">
                <Globe2 className="text-(--brand-royal) h-7 w-7 transition group-hover:text-white" />
              </div>

              <h3 className="text-(--text-heading) mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-(--text-body) mt-3 text-sm leading-7">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="text-(--brand-royal) mt-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
              >
                Explore Options
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="from-(--brand-navy) to-(--brand-royal) mt-14 rounded-[28px] bg-linear-to-r p-8 text-white md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                Your Next Destination Starts Here
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Expert Guidance for Global Mobility & Business Expansion
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                Speak with our experts and discover the right pathway for your
                work visa, visit visa, student visa, or business setup journey.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}