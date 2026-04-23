import Link from "next/link";
import { ArrowRight, Star, BadgeCheck, MessageCircle } from "lucide-react";

const stories = [
  {
    name: "Ahmed Kabir",
    title: "UK Visit Visa Approved",
    category: "Visit Visa",
    review:
      "Great support throughout my UK visit visa process. The team was very professional and guided me at every step.",
  },
  {
    name: "Rifat Mia",
    title: "Greece Visa Approved",
    category: "Visit Visa",
    review:
      "I applied for my Greece visa through WMIBC and today I got my visa on my passport. I am very happy with the support.",
  },
  {
    name: "Salim Sheikh",
    title: "Romania Work Visa Success",
    category: "Work Visa",
    review:
      "Very satisfied with the support for my Romania work visa. The process was clear and well organized.",
  },
  {
    name: "Youssef Adel",
    title: "Malta Student Visa Support",
    category: "Student Visa",
    review:
      "The team helped me successfully apply for my Malta student visa. Very supportive and knowledgeable.",
  },
  {
    name: "Nayeem Islam",
    title: "Work Visa Process Support",
    category: "Work Visa",
    review:
      "Excellent support for my work visa process. The team was professional and very helpful throughout.",
  },
  {
    name: "Imran Ali",
    title: "Smooth Visit Visa Experience",
    category: "Visit Visa",
    review:
      "Very smooth experience applying for my visit visa. The staff was friendly, responsive, and clear.",
  },
];

const highlights = [
  "Trusted by clients across Qatar, Bangladesh, and GCC countries",
  "Support for work visa, visit visa, and student visa applications",
  "Professional guidance from consultation to submission",
];

export default function SuccessStoriesClient() {
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
              Success Stories
            </p>

            <h1 className="text-(--text-heading) mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Real Client Results That Build Trust
            </h1>

            <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
              Explore real success stories from clients who received support
              from WMIBC for visit visas, work visas, and student visa
              applications from Qatar and beyond.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-(--text-body) shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              Trusted by Our Customers
            </p>

            <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Success Across Visit Visa, Work Visa & Student Visa Applications
            </h2>

            <p className="text-(--text-body) mt-5 text-base leading-8">
              These stories reflect the support, clarity, and professional
              guidance WMIBC provides to clients planning international travel,
              work, study, and global opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <article
                key={`${story.name}-${story.title}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="rounded-full bg-(--bg-soft-blue) px-3 py-1 text-xs font-semibold text-(--brand-royal)">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-(--text-heading) mt-5 text-xl font-semibold">
                  {story.title}
                </h3>

                <p className="text-(--text-body) mt-4 text-sm leading-7">
                  “{story.review}”
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-(--text-heading) font-semibold">
                    {story.name}
                  </p>
                  <p className="mt-1 text-sm text-(--brand-royal)">
                    Verified WMIBC Client Story
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--bg-soft-blue) py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
              <div className="bg-(--bg-soft-blue) inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <BadgeCheck className="h-6 w-6 text-(--brand-royal)" />
              </div>
              <h3 className="text-(--text-heading) mt-5 text-lg font-semibold">
                Professional Guidance
              </h3>
              <p className="text-(--text-body) mt-3 text-sm leading-7">
                Clients trust WMIBC for clear support with documentation,
                eligibility review, and submission planning.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
              <div className="bg-(--bg-soft-blue) inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <Star className="h-6 w-6 text-(--brand-royal)" />
              </div>
              <h3 className="text-(--text-heading) mt-5 text-lg font-semibold">
                Client Confidence
              </h3>
              <p className="text-(--text-body) mt-3 text-sm leading-7">
                Strong communication and reliable follow-up help applicants move
                through the process with more confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
              <div className="bg-(--bg-soft-blue) inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <MessageCircle className="h-6 w-6 text-(--brand-royal)" />
              </div>
              <h3 className="text-(--text-heading) mt-5 text-lg font-semibold">
                Responsive Support
              </h3>
              <p className="text-(--text-body) mt-3 text-sm leading-7">
                From initial consultation to final updates, WMIBC focuses on a
                smooth and supportive client experience.
              </p>
            </div>
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
                  Your Success Story Could Be Next
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/80 md:text-base">
                  Speak with WMIBC for trusted support on work visa, visit visa,
                  student visa, and business setup services from Qatar.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
                >
                  Contact WMIBC
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/work-visa"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Explore Work Visa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}