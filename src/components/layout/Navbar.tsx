"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/success-stories" },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Business / Visit Visa", href: "/tourist-business-visit" },
  { label: "Work Visa", href: "/work-visa" },
  { label: "Study Visa", href: "/study-visa" },
  { label: "Business Setup", href: "/business-setup" },
];

const servicePaths = new Set([
  "/services",
  "/tourist-business-visit",
  "/work-visa",
  "/study-visa",
  "/business-setup",
]);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const isServicesActive = servicePaths.has(pathname);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/wmibc-logo.png"
            alt="WMIBC"
            width={160}
            height={50}
            priority
            className="h-auto w-24 md:w-24"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <DesktopNavLink href="/" label="Home" active={isActive("/")} />
          <DesktopNavLink href="/about" label="About" active={isActive("/about")} />

          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              className={`group relative inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isServicesActive
                  ? "text-(--brand-royal)"
                  : "text-(--text-heading) hover:bg-(--bg-soft-blue) hover:text-(--brand-royal)"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-4 h-0.5 w-[calc(100%-2rem)] origin-left rounded-full bg-(--brand-royal) transition-transform duration-300 ${
                  isServicesActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(2,6,23,0.10)] transition-all duration-200 ${
                desktopServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="space-y-1">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-(--bg-soft-blue) text-(--brand-royal)"
                        : "text-(--text-body) hover:bg-(--bg-soft-blue) hover:text-(--brand-royal)"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-400">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <DesktopNavLink href="/contact" label="Contact" active={isActive("/contact")} />
          <DesktopNavLink href="/blog" label="Blog" active={isActive("/blog")} />
          <DesktopNavLink
            href="/success-stories"
            label="Success Stories"
            active={isActive("/success-stories")}
          />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/97430221975"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-(--whatsapp) px-4 py-2 text-sm font-semibold text-(--whatsapp) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--whatsapp) hover:text-white"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-(--brand-royal) px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--brand-navy)"
          >
            Talk to an Expert
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-(--text-heading) transition-colors hover:bg-(--bg-soft-blue) lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="/" label="Home" active={isActive("/")} />
            <MobileNavLink href="/about" label="About" active={isActive("/about")} />

            <div className="rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  isServicesActive
                    ? "bg-(--bg-soft-blue) text-(--brand-royal)"
                    : "text-(--text-heading) hover:bg-(--bg-soft-blue)"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-96 pb-2" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-1 px-2">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-(--bg-soft-blue) text-(--brand-royal)"
                          : "text-(--text-body) hover:bg-(--bg-soft-blue) hover:text-(--brand-royal)"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink href="/contact" label="Contact" active={isActive("/contact")} />
            <MobileNavLink href="/blog" label="Blog" active={isActive("/blog")} />
            <MobileNavLink
              href="/success-stories"
              label="Success Stories"
              active={isActive("/success-stories")}
            />

            <div className="mt-3 flex flex-col gap-3 pt-2">
              <a
                href="https://wa.me/97430221975"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-(--whatsapp) px-4 py-3 text-center text-sm font-semibold text-(--whatsapp) transition-colors hover:bg-(--whatsapp) hover:text-white"
              >
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-(--brand-royal) px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-(--brand-navy)"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopNavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
        active
          ? "text-(--brand-royal)"
          : "text-(--text-heading) hover:bg-(--bg-soft-blue) hover:text-(--brand-royal)"
      }`}
    >
      <span>{label}</span>
      <span
        className={`absolute bottom-0 left-4 h-0.5 w-[calc(100%-2rem)] origin-left rounded-full bg-(--brand-royal) transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
        active
          ? "bg-(--bg-soft-blue) text-(--brand-royal)"
          : "text-(--text-heading) hover:bg-(--bg-soft-blue) hover:text-(--brand-royal)"
      }`}
    >
      {label}
    </Link>
  );
}