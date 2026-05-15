import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Briefcase,
  Plane,
  GraduationCap,
  Landmark,
} from "lucide-react";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Trusted Immigration Consultancy",
    description:
      "Professional guidance for work visas, visit visas, student visas, and business setup services from Qatar and GCC countries.",
  },
  {
    icon: Building2,
    title: "Regional Presence",
    description:
      "With offices in Qatar and Bangladesh, we support applicants across GCC countries with personalized consultation.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Support",
    description:
      "From eligibility checks and documentation review to submission guidance, we help reduce delays and common application mistakes.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "We focus on clear communication, proper documentation, and reliable support throughout every stage of the journey.",
  },
];

const serviceLinks = [
  {
    title: "Work Visa from Qatar",
    href: "/work-visa",
    icon: Briefcase,
    description:
      "Explore expert support for overseas work visa and work permit applications from Qatar.",
  },
  {
    title: "Visit Visa from Qatar",
    href: "/visit-visa",
    icon: Plane,
    description:
      "Get professional guidance for visit visa and tourist visa applications from Qatar.",
  },
  {
    title: "Student Visa Support",
    href: "/study-visa",
    icon: GraduationCap,
    description:
      "Discover study abroad guidance for student visas, admissions, and documentation support.",
  },
  {
    title: "Business Setup",
    href: "/business-setup",
    icon: Landmark,
    description:
      "Company formation support in Qatar and Europe with legal documentation, licensing, and expert consultation.",
  },
];

const teamRoles = [
  "Marketing Manager",
  "Client Relationship Manager",
  "Document Controller",
  "Consultant Officer",
  "Visa Processing Officer",
  "Client Support Executive",
  "Documentation Specialist",
  "Application Support Officer",
  "Business Consultant",
  "Immigration Consultant",
];

const teamMembers = Array.from({ length: 10 }).map((_, index) => {
  return {
    name: "WMIBC Team",
    role: teamRoles[index] || "Consultant Officer",
    image: `/images/team/team${index + 1}.webp`,
  };
});

export default function AboutClient() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50 py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03] mask-[linear-gradient(to_bottom,white,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-30 h-72 w-72 rounded-full bg-(--accent-cyan)/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-0 left-30 h-72 w-72 rounded-full bg-(--brand-royal)/10 blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full bg-(--brand-royal)/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-(--brand-royal) sm:text-xs">
              About WMIBC
            </span>

            <h1 className="text-(--text-heading) text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
              Your Gateway to{" "}
              <span className="text-(--brand-royal)">Global</span>{" "}
              Opportunities
            </h1>

            <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-relaxed opacity-90 sm:text-lg md:mt-8 md:text-xl">
              World Multinational Immigration & Business Consultancy (WMIBC)
              provides professional support for work visas, visit visas, student
              visas, and business setup services from Qatar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-(--brand-navy) sm:px-8 sm:py-4"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work-visa"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-(--text-heading) transition-all hover:border-(--brand-sky)/30 hover:bg-slate-50 sm:px-8 sm:py-4"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-6">
            <div className="h-1 w-12 rounded-full bg-(--brand-royal)" />

            <h2 className="text-(--text-heading) text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Helping Clients from Qatar Build Better Global Futures
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-(--text-body) sm:text-base">
              <p>
                WMIBC stands as a trusted consultancy brand in Qatar, supporting
                individuals and businesses with professional guidance for
                international visa and business processes.
              </p>

              <p>
                Whether it is a skilled work permit, a tourist visa, a student
                visa, or company formation support, our team focuses on clear
                consultation, proper documentation, and a smooth client
                experience.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-6 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-(--accent-cyan)/20 blur-3xl" />

            <span className="text-xs font-bold uppercase tracking-widest text-(--accent-cyan)">
              Our Mission
            </span>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              We Drive to Achieve Your Goal
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
              Our mission is to simplify complex visa and business processes
              through trusted consultation, proper documentation support, and
              personalized guidance tailored to each client’s needs.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:mt-10 sm:p-6">
              <div className="flex items-start gap-4">
                <Globe2 className="mt-1 h-6 w-6 shrink-0 text-(--accent-cyan)" />

                <p className="text-sm leading-relaxed text-white/90 italic">
                  “Empowering individuals and businesses in Qatar to move
                  forward with confidence, clarity, and professional support.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
            <h2 className="text-(--text-heading) text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Why Clients Trust WMIBC
            </h2>

            <p className="text-(--text-body) mt-4 text-base sm:text-lg">
              We combine regional expertise with global standards.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-(--brand-royal) transition-colors duration-300 group-hover:bg-(--brand-royal) group-hover:text-white sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="text-(--text-heading) mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="text-(--text-body) mt-3 text-sm leading-relaxed opacity-85 sm:mt-4">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-(--brand-royal)/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-(--brand-royal) sm:text-xs">
                Our Services
              </span>

              <h2 className="text-(--text-heading) mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Visa & Business Consultancy Services
              </h2>

              <p className="text-(--text-body) mt-4 text-base leading-relaxed sm:text-lg">
                Comprehensive support for visas, global mobility, and company
                formation from Qatar.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            {serviceLinks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.href}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--brand-royal)/20 hover:shadow-2xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-(--brand-sky) transition-all duration-300 group-hover:bg-(--brand-royal) group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-(--text-heading) text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-(--text-body) mt-4 grow text-sm leading-relaxed opacity-80 sm:text-base">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="group/link mt-8 inline-flex items-center gap-2 text-sm font-bold text-(--brand-royal)"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
            <span className="inline-block rounded-full bg-(--brand-royal)/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-(--brand-royal) sm:text-xs">
              Our Team
            </span>

            <h2 className="text-(--text-heading) mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Meet the Professionals Behind WMIBC
            </h2>

            <p className="text-(--text-body) mt-4 text-base leading-relaxed sm:text-lg">
              Experienced consultants dedicated to guiding your international
              journey with professionalism and care.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <div
                key={member.image}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at WMIBC`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-(--text-heading) text-base font-bold">
                    {member.name}
                  </h3>

                  <p className="text-(--text-body) mt-1 text-sm opacity-70">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-(--brand-navy) via-(--brand-navy) to-(--brand-royal) p-6 text-white sm:rounded-[3rem] sm:p-10 md:p-16">
            <div className="absolute -bottom-32 -right-32 h-64 w-64 bg-(--accent-cyan)/10 blur-[100px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                  Ready to start your global journey?
                </h2>

                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  Connect with WMIBC and get professional consultation for your
                  visa, documentation, or business setup requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-(--brand-navy) shadow-2xl transition hover:scale-105 hover:bg-slate-100 active:scale-95 sm:w-auto sm:px-10 sm:py-5 sm:text-base"
              >
                Contact WMIBC
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}