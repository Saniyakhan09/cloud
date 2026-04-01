"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Cyber Threat Intelligence?",
    a: "Cyber Threat Intelligence (CTI) is the process of collecting, analyzing, and acting on information about current and potential cyber threats. It helps organizations understand who might attack them, how, and what they can do to prevent it.",
  },
  {
    q: "How does Beyond Cloud protect my business?",
    a: "We provide 24/7 monitoring across surface, deep, and dark web sources. Our platform correlates threat data, filters noise using AI, and delivers actionable alerts with remediation guidance — so your team can respond fast.",
  },
  {
    q: "Do I need a dedicated security team to use the platform?",
    a: "No. Beyond Cloud is designed to augment your existing team, whether you have a full SOC or just one IT person. Our AI handles the heavy lifting, and our experts provide support when you need it.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most organizations are up and running within 24–48 hours. Our onboarding process is streamlined — we connect to your existing infrastructure with minimal configuration required.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve organizations across fintech, e-commerce, healthcare, SaaS, cryptocurrency, iGaming, travel, and more. Any business with digital assets and customer data can benefit from our platform.",
  },
  {
    q: "Is the platform compliant with industry standards?",
    a: "Yes. Beyond Cloud maps intelligence to major regulatory frameworks including ISO 27001, SOC 2, GDPR, and PCI-DSS. We provide automated compliance reporting to keep you audit-ready at all times.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8ff] via-white to-[#f8fbff] py-24 font-sans md:py-32">
      {/* ambient */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#1F4590]/[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-[780px] px-5 md:px-8">

        {/* heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            FAQ
          </p>
          <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-[2rem] lg:text-[2.4rem]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-zinc-500">
            Everything you need to know about Beyond Cloud and our platform.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#1F4590]/15 bg-white shadow-[0_4px_24px_-4px_rgba(31,69,144,0.08)]"
                    : "border-zinc-200/80 bg-white/60 hover:border-[#1F4590]/10 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-[15px] font-semibold transition-colors duration-300 ${isOpen ? "text-[#1F4590]" : "text-zinc-800"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#1F4590]/20 bg-[#1F4590]/[0.08] text-[#1F4590]"
                        : "border-zinc-200 bg-zinc-50 text-zinc-400"
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[13.5px] leading-[1.75] text-zinc-500">
                      {faq.a}
                    </p>
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
