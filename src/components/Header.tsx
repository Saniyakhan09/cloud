"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── data ─── */

const protectItems = [
  {
    title: "Payment Fraud",
    desc: "Reduce fraud. Increase real payments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Account Takeover",
    desc: "Prevent attacks without hurting UX.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "SMS Fraud",
    desc: "Stop SMS fraud and SMS pumping.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "New Account Fraud",
    desc: "Stop repeat signups and trial abuse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const growItems = [
  {
    title: "Returning User Experience",
    desc: "Tailor experiences. Remove friction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Account Sharing Prevention",
    desc: "Convert users into paying customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    title: "Paywall",
    desc: "Eliminate bypass techniques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
];

const industryItems = [
  "Fintech",
  "E-commerce",
  "Buy Now Pay Later (BNPL)",
  "iGaming",
  "Travel",
  "Cryptocurrency",
];

/* ─── components ─── */

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-50 lg:hidden"
      aria-label="Toggle menu"
    >
      <div className="flex w-[18px] flex-col gap-[5px]">
        <span
          className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "scale-x-0 opacity-0" : ""
          }`}
        />
        <span
          className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
}

/* ═══════════════════════ HEADER ═══════════════════════ */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openUseCases = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setUseCasesOpen(true);
  };

  const closeUseCases = () => {
    closeTimer.current = setTimeout(() => setUseCasesOpen(false), 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-200/80 bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-4 md:px-6">
          {/* ── logo ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="https://beyondcloudintel.com/wp-content/uploads/2023/12/gologo-1.png"
              alt="Beyond Cloud"
              width={170}
              height={44}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* ── desktop nav ── */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Product
            </Link>

            {/* Use Cases dropdown */}
            <div className="relative" onMouseEnter={openUseCases} onMouseLeave={closeUseCases}>
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-all duration-200 ${
                  useCasesOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                Use Cases
                <ChevronDown open={useCasesOpen} />
              </button>

              {/* mega dropdown */}
              <div
                className={`absolute left-1/2 top-full pt-3 transition-all duration-250 ${
                  useCasesOpen
                    ? "pointer-events-auto visible -translate-x-1/2 translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-x-1/2 -translate-y-1.5 opacity-0"
                }`}
              >
                <div className="w-[800px] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]">
                  <div className="grid grid-cols-[1fr_1fr_220px]">
                    {/* Protect column */}
                    <div className="border-r border-zinc-100 p-5">
                      <p className="mb-3 flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                        <span className="inline-block h-1 w-1 rounded-full bg-blue-500" />
                        Protect
                      </p>
                      <div className="flex flex-col gap-0.5">
                        {protectItems.map((item) => (
                          <Link
                            key={item.title}
                            href="#"
                            className="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-all duration-200 hover:bg-blue-50/60"
                          >
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1F4590]/10 bg-[#1F4590]/5 text-[#1F4590] transition-all duration-200 group-hover:border-[#1F4590]/20 group-hover:bg-[#1F4590]/10">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-zinc-800 transition-colors duration-200 group-hover:text-[#1F4590]">
                                {item.title}
                              </p>
                              <p className="text-[12.5px] leading-snug text-zinc-400 transition-colors duration-200 group-hover:text-zinc-500">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Grow column */}
                    <div className="border-r border-zinc-100 p-5">
                      <p className="mb-3 flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                        <span className="inline-block h-1 w-1 rounded-full bg-emerald-500" />
                        Grow
                      </p>
                      <div className="flex flex-col gap-0.5">
                        {growItems.map((item) => (
                          <Link
                            key={item.title}
                            href="#"
                            className="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-all duration-200 hover:bg-blue-50/60"
                          >
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1F4590]/10 bg-[#1F4590]/5 text-[#1F4590] transition-all duration-200 group-hover:border-[#1F4590]/20 group-hover:bg-[#1F4590]/10">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-zinc-800 transition-colors duration-200 group-hover:text-[#1F4590]">
                                {item.title}
                              </p>
                              <p className="text-[12.5px] leading-snug text-zinc-400 transition-colors duration-200 group-hover:text-zinc-500">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Industry column */}
                    <div className="bg-zinc-50/50 p-5">
                      <p className="mb-3 flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                        <span className="inline-block h-1 w-1 rounded-full bg-violet-500" />
                        By Industry
                      </p>
                      <div className="flex flex-col gap-0.5">
                        {industryItems.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-600 transition-all duration-200 hover:bg-blue-50/80 hover:text-blue-600"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* bottom bar */}
                  <div className="border-t border-zinc-100 bg-zinc-50/40 px-6 py-3">
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
                    >
                      See all use cases
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M7 4L13 10L7 16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Demo
            </Link>
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900"
            >
              Pricing
            </Link>
          </nav>

          {/* ── right side CTAs ── */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-[13.5px] font-semibold text-[#1F4590] transition-colors duration-200 hover:bg-[#1F4590]/5 hover:text-[#163670]"
            >
              Login
            </Link>
            <Link
              href="#"
              className="rounded-lg border border-[#1F4590]/20 bg-white px-4 py-2 text-[13.5px] font-semibold text-[#1F4590] transition-all duration-200 hover:border-[#1F4590]/30 hover:bg-[#1F4590]/5"
            >
              Contact Sales
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-[#1F4590] px-5 py-2 text-[13.5px] font-semibold text-white shadow-sm shadow-[#1F4590]/20 transition-all duration-200 hover:bg-[#163670] hover:shadow-md hover:shadow-[#1F4590]/25"
            >
              Get Started
            </Link>
          </div>

          {/* ── mobile hamburger ── */}
          <MobileButton open={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
        </div>
      </header>

      {/* ═══ mobile overlay ═══ */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ═══ mobile drawer ═══ */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[320px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-5">
          <Image
            src="https://beyondcloudintel.com/wp-content/uploads/2023/12/gologo-1.png"
            alt="Beyond Cloud"
            width={150}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-0.5">
          {["Product", "Use Cases", "Docs", "Resources", "Demo", "Pricing"].map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-zinc-100 pt-6">
          <Link
            href="#"
            className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-[#1F4590] transition-colors hover:bg-[#1F4590]/5"
          >
            Login
          </Link>
          <Link
            href="#"
            className="rounded-lg border border-[#1F4590]/20 px-4 py-2.5 text-center text-sm font-semibold text-[#1F4590] transition-all duration-200 hover:bg-[#1F4590]/5"
          >
            Contact Sales
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-[#1F4590] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm shadow-[#1F4590]/20 transition-all duration-200 hover:bg-[#163670] hover:shadow-md"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}
