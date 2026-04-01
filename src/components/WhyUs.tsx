"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Actionable Intelligence",
    desc: "Cut through the noise with business-relevant, qualified, and actionable threat intelligence tailored to your industry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Proactive Protection",
    desc: "Stay ahead of emerging threats with strategic monitoring, early warning systems, and automated response workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Expert Analysis",
    desc: "Benefit from our team of seasoned security experts providing tailored insights and hands-on guidance for your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const dotPositions = ["16.67%", "50%", "83.33%"];
const stepSequence = [0, 1, 2, 1];

export default function WhyUs() {
  const [activeStep, setActiveStep] = useState(0);
  const [seqIndex, setSeqIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeqIndex((prev) => {
        const next = (prev + 1) % stepSequence.length;
        setActiveStep(stepSequence[next]);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#0a1628] py-28 font-sans md:py-36 lg:py-40">

      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#1F4590]/12 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-1/4 h-[400px] w-[500px] rounded-full bg-[#3b82f6]/6 blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#60a5fa]/4 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1060px] px-5 md:px-8">

        {/* ── heading ── */}
        <motion.div
          className="mb-20 text-center lg:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
            Core Capabilities
          </p>
          <h2 className="text-[2.2rem] font-black leading-[1.1] tracking-tight text-white sm:text-[2.8rem] lg:text-[3.4rem]">
            Why Beyond Cloud
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/40">
            Three pillars that power your cyber defense strategy.
          </p>
        </motion.div>

        {/* ── glowing line with step dots ── */}
        <div className="relative mx-auto mb-16 h-14 lg:mb-20">

          {/* line glow — more visible */}
          <div className="absolute left-0 right-0 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-[#3b82f6]/10 blur-lg" />

          {/* line */}
          <div
            className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2"
            style={{
              background: "linear-gradient(90deg, transparent 2%, rgba(59,130,246,0.4) 16%, rgba(96,165,250,0.55) 50%, rgba(59,130,246,0.4) 84%, transparent 98%)",
            }}
          />

          {/* 3 fixed point dots */}
          {dotPositions.map((left, i) => (
            <div
              key={`fp-${i}`}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left }}
            >
              {/* glow ring when active */}
              <AnimatePresence>
                {activeStep === i && (
                  <motion.div
                    className="absolute inset-[-16px] rounded-full bg-[#3b82f6]/20"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ filter: "blur(10px)" }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                className="relative h-3.5 w-3.5 rounded-full border-2 bg-[#0f2240]"
                animate={{
                  borderColor: activeStep === i ? "rgba(96,165,250,0.9)" : "rgba(59,130,246,0.25)",
                  scale: activeStep === i ? 1.3 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          ))}

          {/* moving glowing dot */}
          <motion.div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ left: dotPositions[activeStep] }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-[-16px] rounded-full bg-[#3b82f6]/25 blur-xl" />
            <div className="absolute inset-[-10px] rounded-full bg-[#60a5fa]/20 blur-lg" />
            <div className="relative h-4 w-4 rounded-full bg-[#60a5fa] shadow-[0_0_20px_8px_rgba(96,165,250,0.3)]" />
          </motion.div>
        </div>

        {/* ── 3 feature blocks ── */}
        <div className="grid gap-12 sm:grid-cols-3 lg:gap-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            >
              {/* icon */}
              <motion.div
                className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center"
                animate={{ scale: activeStep === i ? 1.15 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg"
                  animate={{
                    backgroundColor: activeStep === i ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.05)",
                    scale: activeStep === i ? 1.6 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border"
                  animate={{
                    borderColor: activeStep === i ? "rgba(59,130,246,0.35)" : "rgba(59,130,246,0.1)",
                    backgroundColor: activeStep === i ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.04)",
                    color: activeStep === i ? "#93c5fd" : "#60a5fa",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {feature.icon}
                </motion.div>
              </motion.div>

              {/* title */}
              <motion.h3
                className="mb-3 text-[1.25rem] font-bold leading-snug lg:text-[1.4rem]"
                animate={{
                  color: activeStep === i ? "#ffffff" : "rgba(255,255,255,0.4)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {feature.title}
              </motion.h3>

              {/* description */}
              <motion.p
                className="mx-auto max-w-[300px] text-[15px] leading-[1.8]"
                animate={{
                  color: activeStep === i ? "rgba(203,213,225,0.7)" : "rgba(203,213,225,0.25)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
