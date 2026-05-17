"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Clock3,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const quickHelp = [
  "Work Visa Consultation",
  "Visit Visa Guidance",
  "Student Visa Support",
  "Business Setup Assistance",
];

const services = [
  "Work Visa",
  "Visit Visa",
  "Student Visa",
  "Business Setup",
];

export default function ContactClient() {
  return (
    <main className="min-h-screen overflow-hidden bg-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 right-15 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute bottom-20 left-17.5 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl sm:h-80 sm:w-80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm">
            Contact WMIBC
          </p>
          <h1 className="text-slate-900 mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Connect with Our Immigration & Business Experts
          </h1>
          <p className="text-slate-600 mx-auto mt-5 max-w-3xl text-sm leading-7 sm:text-base md:mt-6 md:text-lg md:leading-8">
            Get professional guidance for work visas, visit visas, student
            visas, and business setup services with a trusted consultancy
            team.
          </p>
        </div>
      </section>

      {/* Contact Section - Fixed Alignment & Spacing */}
      <section className="relative z-20 -mt-12 pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          
          {/* Form Card (Left) */}
          <div className="flex flex-col rounded-4xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8 lg:col-span-7">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">
              Send Us a Message
            </p>
            <h2 className="text-slate-900 mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Let’s Discuss Your Next Step
            </h2>
            <p className="text-slate-500 mt-4 text-sm leading-7 sm:text-base">
              Share your details below and our team will contact you regarding
              your requirements.
            </p>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-900 text-sm font-semibold">Full Name</label>
                  <input id="name" type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-slate-900 text-sm font-semibold">Phone Number</label>
                  <input id="phone" type="tel" placeholder="Enter your phone number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-900 text-sm font-semibold">Email Address</label>
                  <input id="email" type="email" placeholder="Enter your email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-slate-900 text-sm font-semibold">Service Needed</label>
                  <div className="relative">
                    <select id="service" className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-900 text-sm font-semibold">Message</label>
                <textarea id="message" rows={6} placeholder="Tell us about your requirement" className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" />
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar (Right) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Quick Contact Card */}
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-900 to-blue-900 p-6 text-white shadow-xl sm:p-8">
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Quick Contact</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">We’re Ready to Help</h2>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "Call Us", val: "+974 4402 9807", href: "tel:+97444029807" },
                    { icon: Mail, label: "Email Us", val: "info@wmibc.com", href: "mailto:info@wmibc.com" },
                    { icon: MessageCircle, label: "WhatsApp Support", val: "Fast response consultation", href: "https://wa.me/97430221975" },
                  ].map((item, i) => (
                    <a key={i} href={item.href} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition hover:bg-white/10">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-cyan-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                        <p className="text-sm font-semibold">{item.val}</p>
                      </div>
                    </a>
                  ))}
                  
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-cyan-400">
                            <Clock3 className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-semibold">Services We Handle</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {quickHelp.map(h => (
                            <span key={h} className="text-[10px] uppercase tracking-wider font-bold bg-white/10 px-2.5 py-1 rounded-md border border-white/5">{h}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
              <h3 className="text-slate-900 text-lg font-bold">Need Immediate Help?</h3>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                For faster support, contact our team directly on WhatsApp or explore available work visa opportunities.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a href="https://wa.me/97430221975" className="flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-4 py-3.5 text-xs font-bold text-[#25D366] transition hover:bg-[#25D366] hover:text-white">
                  WhatsApp Now <MessageCircle className="h-4 w-4" />
                </a>
                <Link href="/work-visa" className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3.5 text-xs font-bold text-white transition hover:bg-blue-700">
                  Explore Work Visa <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Trust Points (Fixed Grid) */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "Professional consultation",
                "Clear document guidance",
                "Responsive support",
                "Multiple visa services",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}