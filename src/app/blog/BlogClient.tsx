import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Canada Tourist Visa from Qatar – Complete Guide 2026",
    slug: "canada-tourist-visa-from-qatar",
    image: "/images/blog/canada-tourist-visa.jpg",
    date: "12 Jan 2026",
    category: "Visit Visa",
    excerpt:
      "Learn the complete Canada tourist visa process from Qatar including requirements, documents, fees, and processing time.",
  },
  {
    id: 2,
    title: "Europe Work Visa Process 2026 for Foreign Workers",
    slug: "europe-work-visa-process-2026",
    image: "/images/blog/europe-work-visa.jpg",
    date: "18 Jan 2026",
    category: "Work Visa",
    excerpt:
      "Explore how to apply for Europe work permits from Qatar with employer sponsorship and legal job opportunities.",
  },
  {
    id: 3,
    title: "Student Visa for Malta from Qatar – Step by Step",
    slug: "malta-student-visa-from-qatar",
    image: "/images/blog/malta-student-visa.jpg",
    date: "24 Jan 2026",
    category: "Student Visa",
    excerpt:
      "Complete student visa guidance for Malta including university selection, admission process, and visa requirements.",
  },
];

export default function BlogClient() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-white via-sky-50 to-blue-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            WMIBC Blog
          </p>

          <h1 className="text-(--text-heading) mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Visa Guides, Immigration Updates & Expert Insights
          </h1>

          <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
            Stay updated with the latest work visa, visit visa, student visa,
            and business setup guides for clients from Qatar and GCC countries.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,6,23,0.08)]"
              >
                {/* Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-(--bg-soft-blue) px-3 py-1 text-xs font-semibold text-(--brand-royal)">
                      {blog.category}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-(--text-muted)">
                      <CalendarDays className="h-4 w-4" />
                      {blog.date}
                    </div>
                  </div>

                  <h2 className="text-(--text-heading) text-xl font-semibold leading-snug">
                    {blog.title}
                  </h2>

                  <p className="text-(--text-body) mt-4 text-sm leading-7">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-(--brand-royal) mt-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}