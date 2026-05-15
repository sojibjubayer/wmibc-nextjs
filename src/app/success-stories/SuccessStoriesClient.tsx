"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Heart,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
} from "lucide-react";

const reviews = [
  {
    name: "sumaiya shimu",
    initials: "S",
    avatarColor: "bg-[#6B4638]",
    rating: 5,
    time: "2 weeks ago",
    title: "Hard Working Team",
    review: "Hard working team 💪",
    category: "Client Review",
  },
  {
    name: "SHARIFUL ISLAM",
    initials: "S",
    avatarColor: "bg-orange-600",
    rating: 5,
    time: "2 weeks ago",
    title: "Poland Visa Approved",
    review:
      "Received My Poland Visa through Wmibc. Now friend Visa is under process. Let’s hope for the best and Good luck Wmibc team.",
    category: "Poland Visa",
  },
  {
    name: "MI Monir",
    initials: "MI",
    avatarColor: "bg-green-600",
    rating: 5,
    time: "2 weeks ago",
    title: "Greece Visa Approved",
    review:
      "Got our Greece visas! today! Me and my friends are so thankful to the WMIBC team for their hard work. They are very helpful and know exactly how to handle the application process for Bangladeshis here in Doha. Truly the best experience!",
    category: "Greece Visa",
  },
  {
    name: "Mir Parvez",
    initials: "M",
    avatarColor: "bg-teal-800",
    rating: 5,
    time: "2 weeks ago",
    title: "Greece Visa Success",
    review:
      "Alhamdulillah. I got my Greece visa successfully today. Very professional service, smooth processing, and helpful guidance throughout the whole application process. Thankyou WMIBC !",
    category: "Greece Visa",
  },
  {
    name: "Faysal Ali",
    initials: "F",
    avatarColor: "bg-slate-700",
    rating: 5,
    time: "2 weeks ago",
    title: "Smooth Greece Visa Process",
    review:
      "Alhamdulillah. Got my Greece visa successfully today. Very smooth process and excellent support from start to finish. Professional and trusted service. Highly recommended!",
    category: "Greece Visa",
  },
  {
    name: "Jahangir Hossain",
    initials: "J",
    avatarColor: "bg-violet-600",
    rating: 5,
    time: "4 weeks ago",
    title: "Portugal Visa Approved",
    review:
      "I applied for a Portugal visa with WMIBC. It was a long 7-month wait, but the team stayed with it and I finally got the visa. Appreciate the final result!",
    category: "Portugal Visa",
  },
];

const stats = [
  {
    value: "Real",
    label: "Google Reviews",
  },
  {
    value: "Trusted",
    label: "Client Support",
  },
  {
    value: "Qatar",
    label: "Based Guidance",
  },
];

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Trusted Visa Guidance",
    text: "Professional support for visit visa, work visa, student visa, and immigration documentation.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "Clients receive proper updates, document guidance, and support throughout the process.",
  },
  {
    icon: BadgeCheck,
    title: "Real Client Experience",
    text: "These reviews are based on genuine customer experiences shared publicly on Google.",
  },
];

export default function ReviewsClient() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-(--brand-royal)/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-(--accent-cyan)/15 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-royal) shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Real Google Reviews
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-(--text-heading) sm:text-5xl lg:text-6xl">
              Client Reviews & Success Stories
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-(--text-body) sm:text-lg">
              See what real clients say about WMIBC visa consultation,
              documentation support, and successful visa processing experiences
              from Qatar.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-bold text-(--brand-royal) sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-(--text-body) sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-royal) px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-(--brand-navy)"
              >
                Start Your Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work-visa"
                className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-white px-6 py-3 text-sm font-semibold text-(--brand-royal) transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Explore Visa Services
              </Link>
            </div>
          </div>

          {/* Hero Review Card */}
          <div className="relative">
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-white/70 blur-2xl lg:block" />

            <div className="relative rounded-4xl border border-white/80 bg-white/85 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-royal)">
                    Featured Review
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-(--text-heading)">
                    Greece Visa Approved
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50">
                  <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-5 text-base leading-8 text-(--text-body)">
                “Got our Greece visas! Me and my friends are so thankful to the
                WMIBC team for their hard work. They are very helpful and know
                exactly how to handle the application process.”
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  MI
                </div>
                <div>
                  <p className="font-semibold text-(--text-heading)">
                    MI Monir
                  </p>
                  <p className="text-sm text-(--text-body)">
                    Verified Google Review
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 max-w-sm rounded-2xl border border-blue-100 bg-white/80 p-4 text-center text-sm text-(--text-body) shadow-sm">
              Recommended visual: passport, visa stamp, travel documents, or
              premium office image — no personal visa details.
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-royal)">
              What Clients Say
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
              Real Feedback from WMIBC Clients
            </h2>

            <p className="mt-5 text-base leading-8 text-(--text-body)">
              From Greece and Poland to Portugal visa support, our clients value
              professional service, smooth processing, and trusted guidance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={`${review.name}-${review.title}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_24px_50px_rgba(15,23,42,0.09)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${review.avatarColor} text-sm font-bold text-white`}
                    >
                      {review.initials}
                    </div>

                    <div>
                      <h3 className="font-bold leading-tight text-(--text-heading)">
                        {review.name}
                      </h3>
                      <p className="mt-1 text-xs text-(--text-body)">
                        1 review · {review.time}
                      </p>
                    </div>
                  </div>

                  <Quote className="h-5 w-5 shrink-0 text-blue-200 transition group-hover:text-(--brand-royal)" />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-(--brand-royal)">
                    {review.category}
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-semibold text-(--text-heading)">
                  {review.title}
                </h4>

                <p className="mt-3 flex-1 text-sm leading-7 text-(--text-body)">
                  “{review.review}”
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-(--brand-royal)">
                  <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                  Verified Google Review
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-(--bg-soft-blue) py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand-royal)">
                Why Clients Trust WMIBC
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--text-heading) sm:text-4xl">
                Professional Visa Support with Real Client Confidence
              </h2>

              <p className="mt-5 text-base leading-8 text-(--text-body)">
                WMIBC supports applicants with consultation, documentation
                review, application preparation, and step-by-step guidance for
                international visa services.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {trustCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                      <Icon className="h-6 w-6 text-(--brand-royal)" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-(--text-heading)">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-(--text-body)">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-(--brand-navy) to-(--brand-royal) p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                  <Users2 className="h-3.5 w-3.5" />
                  Start Your Visa Journey
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your Review Could Be Our Next Success Story
                </h2>

                <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                  Contact WMIBC for trusted support with work visa, visit visa,
                  student visa, and business setup services.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Contact WMIBC
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/visit-visa"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  View Visit Visa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}