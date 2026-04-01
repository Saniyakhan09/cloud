"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Continuous Monitoring",
    desc: "24/7 surveillance across surface, deep, and dark web to detect threats before they reach you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stat: "24/7",
    statLabel: "Monitoring",
  },
  {
    title: "Smart Alerting",
    desc: "AI-driven prioritization that filters noise and surfaces only what matters to your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    stat: "97%",
    statLabel: "Noise Filtered",
  },
  {
    title: "Rapid Response",
    desc: "Actionable playbooks and expert guidance to contain and remediate incidents fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    stat: "<2h",
    statLabel: "Avg Response",
  },
];

export default function OurSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // reactively update activeIndex via useMotionValueEvent
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.33) setActiveIndex(0);
    else if (progress < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  // progress bar width (0% → 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative font-sans"
      style={{ height: "280vh" }}
    >
      {/* dark background that fills entire scroll area */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#0a1628]" />

      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-[10%] h-[500px] w-[500px] rounded-full bg-[#1F4590]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[20%] right-1/4 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/8 blur-[130px]" />

      {/* ── sticky inner container ── */}
      <div className="sticky top-0 flex h-screen items-center">
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-5 md:px-8 lg:flex-row lg:items-center lg:gap-20">

          {/* ── LEFT: text content ── */}
          <div className="shrink-0 lg:w-[440px]">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Our Solution
            </p>
            <h2 className="text-[1.5rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.9rem] lg:text-[2.2rem]">
              End-to-End Cyber{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                Threat Intelligence
              </span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.8] text-blue-100/40">
              Beyond Cloud delivers a comprehensive platform that monitors,
              analyzes, and responds to cyber threats in real time — giving
              your team the clarity to act decisively.
            </p>

            {/* feature list with active highlight */}
            <div className="mt-10 flex flex-col gap-2">
              {cards.map((card, i) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => {
                    if (!sectionRef.current) return;
                    const top = sectionRef.current.offsetTop;
                    const h = sectionRef.current.offsetHeight;
                    window.scrollTo({ top: top + (i / 3) * h + 1, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left transition-all duration-500 ${
                    activeIndex === i
                      ? "bg-white/[0.06] shadow-[0_0_20px_-4px_rgba(59,130,246,0.15)]"
                      : "opacity-35 hover:opacity-50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
                      activeIndex === i
                        ? "border-[#3b82f6]/20 bg-[#3b82f6]/10 text-[#60a5fa]"
                        : "border-white/[0.06] bg-white/[0.03] text-white/30"
                    }`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <span
                      className={`text-[13px] font-semibold transition-colors duration-500 ${
                        activeIndex === i ? "text-white" : "text-white/40"
                      }`}
                    >
                      {card.title}
                    </span>
                    {activeIndex === i && (
                      <p className="mt-0.5 text-[12px] leading-snug text-blue-100/30">
                        {card.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* scroll progress bar */}
            <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#1F4590] to-[#3b82f6]"
                style={{ width: progressWidth }}
              />
            </div>
          </div>

          {/* ── RIGHT: animated card ── */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative h-[400px] w-full max-w-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full">
                    {/* glow behind card */}
                    <div className="absolute -inset-6 rounded-[2rem] bg-[#1F4590]/15 blur-[40px]" />

                    {/* card */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_0_60px_-12px_rgba(59,130,246,0.2)] backdrop-blur-xl sm:p-10">
                      {/* glowing edges */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F4590]/20 to-transparent" />
                      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#3b82f6]/15 to-transparent" />
                      <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#3b82f6]/15 to-transparent" />

                      {/* icon */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#3b82f6]/15 bg-[#3b82f6]/[0.08] text-[#60a5fa]">
                        {cards[activeIndex].icon}
                      </div>

                      {/* stat */}
                      <div className="mb-6">
                        <span className="text-[2.8rem] font-black leading-none tracking-tight text-white">
                          {cards[activeIndex].stat}
                        </span>
                        <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-blue-300/40">
                          {cards[activeIndex].statLabel}
                        </p>
                      </div>

                      {/* text */}
                      <h3 className="mb-2 text-[18px] font-bold text-white">
                        {cards[activeIndex].title}
                      </h3>
                      <p className="text-[14px] leading-[1.75] text-blue-100/40">
                        {cards[activeIndex].desc}
                      </p>

                      {/* bottom accent bar */}
                      <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#1F4590] to-[#3b82f6]" />
                    </div>

                    {/* depth layers */}
                    <div className="pointer-events-none absolute -bottom-2 left-5 right-5 -z-10 h-10 rounded-2xl border border-white/[0.03] bg-[#1F4590]/8 blur-[2px]" />
                    <div className="pointer-events-none absolute -bottom-4 left-10 right-10 -z-20 h-8 rounded-2xl bg-[#1F4590]/4 blur-[4px]" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
