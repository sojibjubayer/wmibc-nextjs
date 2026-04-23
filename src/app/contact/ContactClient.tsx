import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock3,
} from "lucide-react";

const offices = [
  {
    title: "Qatar Office (Regional HQ)",
    address:
      "Gitco Tower, 13th Floor, Office No. 1306, Building No. 8, Street No. 820, Doha, Qatar",
    phones: ["+974 4402 9807", "+974 3022 1975"],
  },
  {
    title: "Bangladesh Office",
    address: "Modern Mor, Sadar, Dinajpur, Bangladesh",
    phones: ["+880 1786 552585", "+880 1757 546065"],
  },
];

const quickHelp = [
  "Work Visa Consultation",
  "Visit Visa Guidance",
  "Student Visa Support",
  "Business Setup Assistance",
];

export default function ContactClient() {
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
              Contact WMIBC
            </p>

            <h1 className="text-(--text-heading) mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Speak with Our Immigration & Business Experts
            </h1>

            <p className="text-(--text-body) mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
              Contact WMIBC for trusted support with work visas, visit visas,
              student visas, and business setup services from Qatar and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)] md:p-8">
            <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
              Send Us a Message
            </p>

            <h2 className="text-(--text-heading) mt-3 text-2xl font-bold md:text-3xl">
              Let’s Discuss Your Next Step
            </h2>

            <p className="text-(--text-body) mt-4 text-sm leading-7 md:text-base">
              Fill in your details and our team will get back to you regarding
              your visa or business setup requirements.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-(--text-heading) mb-2 block text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-(--text-body) outline-none transition focus:border-(--brand-royal)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-(--text-heading) mb-2 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-(--text-body) outline-none transition focus:border-(--brand-royal)"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-(--text-heading) mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-(--text-body) outline-none transition focus:border-(--brand-royal)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-(--text-heading) mb-2 block text-sm font-medium"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-(--text-body) outline-none transition focus:border-(--brand-royal)"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Work Visa</option>
                    <option>Visit Visa</option>
                    <option>Student Visa</option>
                    <option>Business Setup</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-(--text-heading) mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your requirement"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-(--text-body) outline-none transition focus:border-(--brand-royal)"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-(--brand-royal) px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--brand-navy)"
              >
                Send Inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-4xl bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-6 text-white md:p-8">
              <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
                Quick Contact
              </p>

              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                We’re Ready to Help
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                Reach out for expert consultation on work visas, visit visas,
                student visas, and business setup services.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+97444029807"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">Call Us</p>
                    <p className="mt-1 text-sm text-white/80">
                      +974 4402 9807
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@wmibc.com"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">Email Us</p>
                    <p className="mt-1 text-sm text-white/80">info@wmibc.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/97430221975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      WhatsApp Support
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      Fast response consultation
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-(--accent-cyan)" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Services We Handle
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {quickHelp.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {offices.map((office) => (
              <div
                key={office.title}
                className="rounded-[28px] border border-slate-200 bg-(--bg-soft-blue) p-6"
              >
                <h3 className="text-(--text-heading) text-lg font-semibold">
                  {office.title}
                </h3>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-(--brand-royal)" />
                  <p className="text-(--text-body) text-sm leading-7">
                    {office.address}
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-(--brand-royal)" />
                  <div className="flex flex-col text-sm leading-7 text-(--text-body)">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="transition hover:text-(--brand-royal)"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]">
              <h3 className="text-(--text-heading) text-lg font-semibold">
                Need Immediate Help?
              </h3>
              <p className="text-(--text-body) mt-3 text-sm leading-7">
                For faster support, contact us directly on WhatsApp or speak
                with our team about your work visa, visit visa, student visa, or
                business setup requirements.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/97430221975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-(--whatsapp) px-5 py-3 text-sm font-semibold text-(--whatsapp) transition hover:bg-(--whatsapp) hover:text-white"
                >
                  WhatsApp Now
                </a>

                <Link
                  href="/work-visa"
                  className="inline-flex items-center justify-center rounded-full bg-(--brand-royal) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--brand-navy)"
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