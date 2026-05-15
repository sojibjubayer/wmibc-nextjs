"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Why should I choose WMIBC for my immigration process?",
    answer:
      "WMIBC is a premier consultancy with established offices in Doha, Qatar and Bangladesh. We offer localized expertise for GCC residents, providing end-to-end support for work, visit, and student visas—from initial eligibility assessments to final embassy submissions.",
  },
  {
    question: "What specific visa services do you offer?",
    answer:
      "We specialize in Work Visas (Europe, UK, Canada), Student Visas (Australia, NZ, USA), and Visit/Tourist visas. Additionally, we provide comprehensive Business Setup services both in Qatar and for entrepreneurs looking to expand into the European market.",
  },
  {
    question: "How long does the visa process typically take?",
    answer:
      "Timelines vary by destination and visa category. While some visit visas can be processed in a few business days, work and student visas may take several weeks. We prioritize document readiness to ensure the fastest possible processing time from the embassy.",
  },
  {
    question: "How do you assist with Schengen visa rejections?",
    answer:
      "In the event of a denial, our experts conduct a forensic review of your rejection letter. We identify documentation gaps, correct application errors, and develop a strategic re-application plan to significantly improve your approval chances.",
  },
  {
    question: "Can you help if my visa was previously rejected?",
    answer:
      "Yes. A previous rejection is not a permanent barrier. We specialize in complex cases, helping you rebuild a stronger application profile by addressing the specific concerns raised by immigration authorities in your previous attempt.",
  },
];

export default function FAQSection() {
  // Set to null to start with all closed, or 0 to start with the first one open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-(--bg-soft-blue) py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-(--brand-royal) shadow-sm">
            <MessageCircleQuestion className="h-3.5 w-3.5" />
            Common Inquiries
          </div>

          <h2 className="text-(--text-heading) text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Clear Answers to Your Visa & Immigration Questions
          </h2>

          <p className="text-(--text-body) mt-6 text-base leading-relaxed sm:text-lg">
            Everything you need to know about work permits, student pathways, 
            and business setup with WMIBC experts.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-4xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-blue-200 bg-white shadow-lg" 
                    : "border-slate-100 bg-white/50 hover:border-blue-100 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-6 text-left md:px-10"
                >
                  <span className={`pr-4 text-base font-bold transition-colors md:text-lg ${
                    isOpen ? "text-(--brand-royal)" : "text-(--text-heading)"
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? "bg-(--brand-royal) text-white" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-(--brand-royal)"
                  }`}>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 md:px-10">
                      <div className="h-px w-full bg-slate-100 mb-6" />
                      <p className="text-(--text-body) text-sm leading-relaxed md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    
      </div>
    </section>
  );
}