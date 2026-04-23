"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why should I choose WMIBC for my immigration process?",
    answer:
      "WMIBC is a premier consultancy with offices in Qatar and Bangladesh, supporting applicants across GCC countries. We provide complete end-to-end assistance for work visas, visit visas, and student visas with professional guidance from eligibility checks to final submission.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide support for work visas, visit visas, tourist visas, student visas, Europe business setup, Qatar business setup, documentation assistance, and professional immigration consultation for global destinations.",
  },
  {
    question: "How long does the visa process typically take?",
    answer:
      "Processing time depends on the destination country, visa category, and document readiness. Most visit visa and work visa applications may take from a few days to several weeks depending on embassy and immigration requirements.",
  },
  {
    question: "What if my Schengen visa application is denied?",
    answer:
      "If your Schengen visa is denied, our team helps review the rejection reason, improve documentation, and guide you through reapplication strategies to increase approval chances.",
  },
  {
    question: "Can you help if my visa was previously rejected?",
    answer:
      "Yes. We specialize in handling previous visa rejection cases by reviewing documentation gaps, correcting application issues, and preparing stronger resubmissions with professional support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-(--bg-soft-blue) py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-(--brand-royal) text-sm font-semibold uppercase tracking-[0.18em]">
            Frequently Asked Questions
          </p>

          <h2 className="text-(--text-heading) mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Answers to Common Visa & Immigration Questions
          </h2>

          <p className="text-(--text-body) mt-5 text-base leading-8">
            Get clear answers about work visas, visit visas, student visas,
            business setup, documentation, and immigration consultation from
            WMIBC experts.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8"
                >
                  <span className="text-(--text-heading) pr-4 text-base font-semibold md:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-(--brand-royal) h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-8">
                      <p className="text-(--text-body) text-sm leading-8 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="from-(--brand-navy) to-(--brand-royal) mt-14 rounded-[28px] bg-linear-to-r p-8 text-white md:p-10">
          <div className="text-center">
            <p className="text-(--accent-cyan) text-sm font-semibold uppercase tracking-[0.18em]">
              Still Have Questions?
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Speak with Our Immigration Experts Today
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Our team is ready to help you with professional advice for work
              visas, visit visas, student visas, and business setup solutions
              from Qatar and GCC countries.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--brand-navy) transition hover:bg-slate-100"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}