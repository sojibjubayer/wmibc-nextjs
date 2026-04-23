import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Music2 } from "lucide-react";

const services = [
  { label: "Work Visas", href: "/work-visa" },
  { label: "Business / Visit Visas", href: "/tourist-business-visit" },
  { label: "Student Visas", href: "/study-visa" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Globe,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: Music2,
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--brand-navy) text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:pr-6">
            <h3 className="text-2xl font-bold tracking-tight">WMIBC</h3>
            <p className="mt-3 text-sm font-medium text-(--accent-cyan)">
              We drive to achieve your goal.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              WMIBC is a premier global migration consultancy providing expert
              guidance for work, student, and visit visas across Europe, Asia,
              and the Pacific.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/75 transition-colors hover:text-(--accent-cyan)"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-base font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-(--accent-cyan)"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold">Global Offices</h4>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Qatar Office (Regional HQ)
              </p>

              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-6 text-white/75">
                  Gitco Tower, 13th Floor, Office No. 1306, Building No. 8,
                  Street No. 820, Doha, Qatar
                </p>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-cyan)" />
                <div className="text-sm leading-6 text-white/75">
                  <a
                    href="tel:+97444029807"
                    className="transition-colors hover:text-white"
                  >
                    +974 4402 9807
                  </a>
                  <span className="mx-2 text-white/30">|</span>
                  <a
                    href="tel:+97430221975"
                    className="transition-colors hover:text-white"
                  >
                    +974 3022 1975
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Bangladesh Office
              </p>

              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-cyan)" />
                <p className="text-sm leading-6 text-white/75">
                  Modern Mor, Sadar, Dinajpur, Bangladesh
                </p>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-cyan)" />
                <div className="text-sm leading-6 text-white/75">
                  <a
                    href="tel:+8801786552585"
                    className="transition-colors hover:text-white"
                  >
                    +880 1786 552585
                  </a>
                  <span className="mx-2 text-white/30">|</span>
                  <a
                    href="tel:+8801757546065"
                    className="transition-colors hover:text-white"
                  >
                    +880 1757 546065
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold">Quick Links & Socials</h4>

            <div className="mt-4 space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-(--accent-cyan)" />
                    <span>WMIBC on {social.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-cyan)" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a
                    href="mailto:info@wmibc.com"
                    className="mt-1 inline-block text-sm text-white/75 transition-colors hover:text-white"
                  >
                    info@wmibc.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/60">
            Copyright © 2026 WMIBC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}