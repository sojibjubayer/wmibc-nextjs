import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Plane, Building2 } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Visit & Tourist Visa",
    description:
      "Apply for visit visas and tourist visas from Qatar with expert guidance for Europe, UK, Canada, Australia, and more.",
    href: "/tourist-business-visit",
  },
  {
    icon: Briefcase,
    title: "Work Permit Visa",
    description:
      "Professional support for Europe work permits, employer sponsorship, and legal overseas job opportunities.",
    href: "/work-visa",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Complete assistance for study visas, university applications, admission support, and overseas education planning.",
    href: "/study-visa",
  },
  {
    icon: Building2,
    title: "Business Setup",
    description:
      "Company formation support in Qatar and Europe with legal documentation, licensing, and expert consultation.",
    href: "/business-setup",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-(--bg-soft-blue) py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Our Services
          </p>

          <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Immigration & Business Solutions Designed for Global Success
          </h2>

          <p className="text-(--text-body) mt-5 text-base leading-8">
            From visit visas and work permits to student visas and business setup,
            WMIBC provides professional end-to-end guidance to help you move
            forward with confidence and clarity.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
              >
                <div className="bg-(--bg-soft-blue) inline-flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:bg-(--brand-royal)">
                  <Icon className="text-(--brand-royal) h-7 w-7 transition group-hover:text-white" />
                </div>

                <h3 className="text-(--text-heading) mt-6 text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="text-(--text-body) mt-3 text-sm leading-7">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="text-(--brand-royal) mt-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="from-(--brand-navy) to-(--brand-royal) mt-14 rounded-[28px] bg-linear-to-r p-8 text-white md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-cyan)">
                Need Expert Guidance?
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Let’s Build Your International Journey Together
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                Speak with our expert team for professional advice on work visas,
                visit visas, study visas, and business setup services from Qatar.
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