"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is Cyber Threat Intelligence?",
    a: "Cyber Threat Intelligence (CTI) is the process of collecting, analyzing, and acting on information about current and potential cyber threats. It helps organizations understand who might attack them, how, and what they can do to prevent it — turning raw data into strategic defense.",
  },
  {
    q: "How does Beyond Cloud protect my business?",
    a: "We provide 24/7 monitoring across surface, deep, and dark web sources. Our platform correlates threat data from hundreds of feeds, filters noise using AI, and delivers actionable alerts with step-by-step remediation guidance — so your team can respond fast and decisively.",
  },
  {
    q: "Do I need a dedicated security team?",
    a: "No. Beyond Cloud is designed to augment your existing team, whether you have a full SOC or just one IT person. Our AI handles the heavy lifting — threat correlation, prioritization, and automated response — while our experts provide hands-on support when you need it.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most organizations are up and running within 24–48 hours. Our onboarding process is streamlined with pre-built integrations for major cloud providers, SIEMs, and endpoint solutions. Minimal configuration required.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve organizations across fintech, e-commerce, healthcare, SaaS, cryptocurrency, iGaming, travel, and more. Any business with digital assets and customer data can benefit from our threat intelligence platform.",
  },
  {
    q: "Is the platform compliant with industry standards?",
    a: "Yes. Beyond Cloud maps intelligence to major regulatory frameworks including ISO 27001, SOC 2, GDPR, and PCI-DSS. We provide automated compliance reporting and audit trails to keep you audit-ready at all times.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#0a1628] py-24 font-sans md:py-32 lg:py-36">

      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/3 top-[15%] h-[500px] w-[500px] rounded-full bg-[#1F4590]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-1/4 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/6 blur-[130px]" />

      <div className="relative mx-auto max-w-[1140px] px-5 md:px-8">

        {/* heading */}
        <div className="mb-14 text-center lg:mb-16">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
            FAQ
          </p>
          <h2 className="text-[2rem] font-black leading-tight tracking-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* split layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">

          {/* ── LEFT: question list ── */}
          <div className="flex shrink-0 flex-col gap-1.5 lg:w-[400px]">
            {faqs.map((faq, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex items-center gap-3.5 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.06]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  {/* left accent bar */}
                  <motion.div
                    className="absolute left-0 top-[20%] h-[60%] w-[3px] rounded-full bg-[#3b82f6]"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleY: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* number */}
                  <span
                    className={`shrink-0 font-mono text-[12px] font-bold transition-colors duration-300 ${
                      isActive ? "text-[#3b82f6]" : "text-white/20"
                    }`}
                  >
                    0{i + 1}
                  </span>

                  {/* question */}
                  <span
                    className={`text-[14px] font-semibold leading-snug transition-colors duration-300 lg:text-[15px] ${
                      isActive ? "text-white" : "text-white/40 group-hover:text-white/55"
                    }`}
                  >
                    {faq.q}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: answer panel ── */}
          <div className="relative min-h-[280px] flex-1 lg:min-h-[320px]">
            {/* glass panel */}
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
              {/* top edge glow */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />

              <div className="relative flex h-full flex-col justify-center p-8 sm:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {/* question as title */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/[0.08]">
                        <span className="font-mono text-[11px] font-bold text-[#60a5fa]">
                          0{activeIndex + 1}
                        </span>
                      </div>
                      <h3 className="text-[18px] font-bold text-white lg:text-[20px]">
                        {faqs[activeIndex].q}
                      </h3>
                    </div>

                    {/* answer */}
                    <p className="text-[15px] leading-[1.85] text-white/50 lg:text-[16px]">
                      {faqs[activeIndex].a}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* depth shadow */}
            <div className="pointer-events-none absolute -bottom-2 left-5 right-5 -z-10 h-8 rounded-2xl bg-[#1F4590]/8 blur-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
