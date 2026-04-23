import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const successStories = [
  {
    name: "Ahmed Kabir",
    title: "UK Visit Visa Approved",
    review:
      "Great support throughout my UK visit visa process. The team was professional and guided me at every step.",
  },
  {
    name: "Rifat Mia",
    title: "Greece Visa Approved",
    review:
      "I applied for my Greece visa through WMIBC and today I received my visa successfully. Very happy with the support.",
  },
  {
    name: "Salim Sheikh",
    title: "Romania Work Visa Success",
    review:
      "Very satisfied with the support for my Romania work visa. The process was clear, fast, and well organized.",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Trusted by Our Customers
          </p>

          <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Real Success Stories from Our Clients
          </h2>

          <p className="text-(--text-body) mt-5 text-base leading-8">
            Thousands of professionals, students, and travelers trust WMIBC for
            work visas, visit visas, student visas, and business consultancy
            services from Qatar and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {successStories.map((story) => (
            <div
              key={story.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-(--text-body) mt-5 text-sm leading-7">
                “{story.review}”
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="text-(--text-heading) text-base font-semibold">
                  {story.name}
                </h3>

                <p className="text-(--brand-royal) mt-1 text-sm font-medium">
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="from-(--brand-navy) to-(--brand-royal) mt-14 rounded-[28px] bg-linear-to-r p-8 text-white md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                More Success Stories
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Your Visa Success Could Be the Next Story
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                Explore more client success stories and see how WMIBC helps
                applicants achieve work visa, visit visa, and study visa success.
              </p>
            </div>

            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
            >
              View All Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}