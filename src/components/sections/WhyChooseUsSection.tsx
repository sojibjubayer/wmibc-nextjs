import {
  CheckCircle2,
  FileCheck2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: FileCheck2,
    title: "Complete Documentation Support",
    description:
      "From eligibility checks to final submission, we guide you through every document requirement to reduce delays and rejection risks.",
  },
  {
    icon: Clock3,
    title: "Faster & Reliable Processing",
    description:
      "Our expert team follows updated immigration policies and process requirements to ensure a smooth and time-efficient application journey.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Trusted Process",
    description:
      "Clear communication, honest guidance, and no hidden confusion—our focus is building trust and delivering professional immigration solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Consultation",
    description:
      "Every applicant is different. We provide customized solutions for work visas, visit visas, student visas, and business setup goals.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Why Choose WMIBC
          </p>

          <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted Expertise for Work, Visit & Student Visa Success
          </h2>

          <p className="text-(--text-body) mt-5 text-base leading-8">
            WMIBC helps professionals, students, and travelers confidently move
            toward international opportunities through reliable support,
            transparent processes, and expert immigration consultation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-[28px] border border-slate-200 bg-(--bg-soft-blue) p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-royal)">
              Your Trusted Immigration Partner
            </p>

            <h3 className="text-(--text-heading) mt-4 text-2xl font-bold leading-tight md:text-3xl">
              Helping You Reach Global Opportunities with Confidence
            </h3>

            <p className="text-(--text-body) mt-5 text-base leading-8">
              We support applicants from Qatar, Bangladesh, and GCC countries
              with expert visa guidance for Europe, Canada, Australia, the UK,
              and other major destinations.
            </p>

            <p className="text-(--text-body) mt-5 text-base leading-8">
              Whether your goal is working abroad, studying overseas, traveling
              internationally, or starting a business, WMIBC provides
              personalized consultation and reliable end-to-end assistance.
            </p>

            <div className="from-(--brand-navy) to-(--brand-royal) mt-8 rounded-3xl bg-linear-to-r p-6 text-white">
              <p className="text-xl font-bold">10+ Years of Industry Experience</p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Supporting thousands of successful immigration applications with
                strong professional guidance and client-first service.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
                >
                  <div className="bg-(--bg-soft-blue) inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Icon className="text-(--brand-royal) h-6 w-6" />
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
      </div>
    </section>
  );
}