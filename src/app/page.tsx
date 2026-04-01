import Link from "next/link";
import OurSolution from "@/components/OurSolution";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";

/* ─── floating label positions (radial around center) ─── */
const floatingLabels = [
  { label: "AI Security", angle: -65, radius: 48, delay: "0.1s" },
  { label: "Cloud Protection", angle: -25, radius: 52, delay: "0.25s" },
  { label: "Zero Trust", angle: 15, radius: 50, delay: "0.4s" },
  { label: "Threat Intel", angle: 55, radius: 48, delay: "0.55s" },
  { label: "Endpoint Shield", angle: -95, radius: 40, delay: "0.7s" },
  { label: "SIEM Integration", angle: 95, radius: 40, delay: "0.85s" },
];

/* ─── particles ─── */
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.round(5 + ((i * 37 + 13) % 90))}%`,
  top: `${Math.round(5 + ((i * 53 + 7) % 85))}%`,
  size: 1 + (i % 3),
  opacity: 0.15 + (i % 5) * 0.08,
  dur: `${4 + (i % 4)}s`,
  delay: `${(i % 7) * 0.5}s`,
}));

export default function Home() {
  return (
    <>
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col overflow-hidden font-sans">
      {/* ═══ DARK BLUE GRADIENT BACKGROUND ═══ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#132d5e]" />

      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-[15%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#1F4590]/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[#3b82f6]/10 blur-[140px]" />

      {/* ═══ PARTICLES ═══ */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#3b82f6]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `particle-drift ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ═══ SINGLE UNIFIED HERO ═══ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1480px] flex-1 flex-col px-5 py-6 md:px-8 lg:py-8">

        {/* ── top badge ── */}
        <div
          className="mb-4 self-center"
          style={{ animation: "fade-up 0.7s ease-out both" }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3b82f6]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3b82f6]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-200/80">
              Cyber Threat Intelligence Platform
            </span>
          </div>
        </div>

        {/* ── floating system — NO card container, elements float directly ── */}
        <div
          className="relative flex flex-1 items-center justify-center"
          style={{ animation: "fade-up 0.8s 0.15s ease-out both" }}
        >
          <div className="relative w-full max-w-[780px]">

            {/* floating labels */}
            {floatingLabels.map((tag) => {
              const rad = (tag.angle * Math.PI) / 180;
              const x = 50 + tag.radius * Math.cos(rad);
              const y = 50 + tag.radius * Math.sin(rad) * 0.55;
              return (
                <div
                  key={tag.label}
                  className="absolute z-20 hidden md:block"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animation: `fade-up 0.7s ${tag.delay} ease-out both, label-float 6s ease-in-out infinite`,
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-[1px] origin-left bg-gradient-to-r from-[#3b82f6]/25 to-transparent"
                    style={{
                      width: `${tag.radius * 2.5}px`,
                      transform: `rotate(${180 + tag.angle}deg)`,
                    }}
                  />
                  <div className="relative rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-1.5 backdrop-blur-md transition-all duration-500 hover:border-[#3b82f6]/30 hover:bg-white/[0.08]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-200/70">
                      {tag.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* diffused glow behind the floating system */}
            <div
              className="absolute -inset-x-24 -inset-y-20 rounded-full bg-[#1F4590]/20 blur-[100px]"
              style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
            />
            <div
              className="absolute -inset-x-12 -inset-y-10 rounded-full bg-[#3b82f6]/10 blur-[70px]"
              style={{ animation: "glow-pulse 4s 1.5s ease-in-out infinite" }}
            />

            {/* ── FLOATING SVG SYSTEM (no card wrapper) ── */}
            <div
              className="relative"
              style={{ animation: "card-float 6s ease-in-out infinite" }}
            >
              <svg
                viewBox="0 0 720 340"
                fill="none"
                className="relative h-auto w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="cg" cx="360" cy="170" r="150" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#1F4590" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="sg" x1="360" y1="55" x2="360" y2="270" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1F4590" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="sf" x1="360" y1="65" x2="360" y2="255" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1F4590" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="gl" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* center radial glow */}
                <circle cx="360" cy="170" r="130" fill="url(#cg)">
                  <animate attributeName="r" values="110;150;110" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.5;1" dur="5s" repeatCount="indefinite" />
                </circle>

                {/* orbit 1 */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 360 170" to="360 360 170" dur="22s" repeatCount="indefinite" />
                  <ellipse cx="360" cy="170" rx="160" ry="48" fill="none" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="0.8" transform="rotate(-12 360 170)" />
                  <circle cx="520" cy="170" r="4.5" fill="#3b82f6" fillOpacity="0.4" transform="rotate(-12 360 170)" filter="url(#gl)">
                    <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* orbit 2 */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="360 360 170" to="0 360 170" dur="28s" repeatCount="indefinite" />
                  <ellipse cx="360" cy="170" rx="180" ry="40" fill="none" stroke="#60a5fa" strokeOpacity="0.1" strokeWidth="0.6" transform="rotate(18 360 170)" />
                  <circle cx="540" cy="170" r="3.5" fill="#60a5fa" fillOpacity="0.3" transform="rotate(18 360 170)" filter="url(#gl)">
                    <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* orbit 3 */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 360 170" to="360 360 170" dur="16s" repeatCount="indefinite" />
                  <ellipse cx="360" cy="170" rx="100" ry="55" fill="none" stroke="#93c5fd" strokeOpacity="0.08" strokeWidth="0.5" transform="rotate(-30 360 170)" />
                  <circle cx="460" cy="170" r="3" fill="#93c5fd" fillOpacity="0.25" transform="rotate(-30 360 170)" filter="url(#gl)">
                    <animate attributeName="fill-opacity" values="0.15;0.4;0.15" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* shield */}
                <path d="M360 72 L425 106 L425 188 C425 232 393 258 360 274 C327 258 295 232 295 188 L295 106 Z" fill="url(#sf)" stroke="url(#sg)" strokeWidth="1.2">
                  <animate attributeName="stroke-opacity" values="1;0.4;1" dur="3.5s" repeatCount="indefinite" />
                </path>
                <path d="M360 88 L416 118 L416 185 C416 222 390 244 360 257 C330 244 304 222 304 185 L304 118 Z" fill="none" stroke="#3b82f6" strokeOpacity="0.1" strokeWidth="0.5" />

                {/* lock */}
                <rect x="345" y="158" width="30" height="28" rx="5" fill="none" stroke="#93c5fd" strokeOpacity="0.5" strokeWidth="1.2" />
                <path d="M351 158 L351 148 C351 141 355 137 360 137 C365 137 369 141 369 148 L369 158" fill="none" stroke="#93c5fd" strokeOpacity="0.5" strokeWidth="1.2" />
                <circle cx="360" cy="172" r="3.5" fill="#3b82f6" fillOpacity="0.5">
                  <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <line x1="360" y1="175" x2="360" y2="180" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.2" />

                {/* left nodes */}
                {[
                  { cx: 80, cy: 85 }, { cx: 55, cy: 170 }, { cx: 90, cy: 255 },
                  { cx: 165, cy: 285 }, { cx: 150, cy: 105 },
                ].map((n, i) => (
                  <g key={`l${i}`}>
                    <line x1={n.cx} y1={n.cy} x2="295" y2="170" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="4 6">
                      <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3s" repeatCount="indefinite" />
                    </line>
                    <circle cx={n.cx} cy={n.cy} r="14" fill="#1F4590" fillOpacity="0.15" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.5" />
                    <circle cx={n.cx} cy={n.cy} r="3.5" fill="#3b82f6" fillOpacity="0.35">
                      <animate attributeName="r" values="3;5;3" dur={`${3.5 + i * 0.5}s`} repeatCount="indefinite" />
                      <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur={`${3.5 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* right nodes */}
                {[
                  { cx: 640, cy: 85 }, { cx: 665, cy: 170 }, { cx: 630, cy: 255 },
                  { cx: 555, cy: 285 }, { cx: 570, cy: 105 },
                ].map((n, i) => (
                  <g key={`r${i}`}>
                    <line x1={n.cx} y1={n.cy} x2="425" y2="170" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="4 6">
                      <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3s" repeatCount="indefinite" />
                    </line>
                    <circle cx={n.cx} cy={n.cy} r="14" fill="#1F4590" fillOpacity="0.15" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.5" />
                    <circle cx={n.cx} cy={n.cy} r="3.5" fill="#3b82f6" fillOpacity="0.35">
                      <animate attributeName="r" values="3;5;3" dur={`${3 + i * 0.6}s`} repeatCount="indefinite" />
                      <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur={`${3 + i * 0.6}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* scanning pulse */}
                <circle cx="360" cy="170" r="80" fill="none" stroke="#3b82f6" strokeOpacity="0.1" strokeWidth="0.8">
                  <animate attributeName="r" values="60;170;60" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.12;0;0.12" dur="6s" repeatCount="indefinite" />
                </circle>

                {/* scan bar */}
                <rect x="60" width="600" height="1" fill="#3b82f6" fillOpacity="0.15" rx="0.5">
                  <animate attributeName="y" values="50;280;50" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="5s" repeatCount="indefinite" />
                </rect>

                {/* HUD labels */}
                <rect x="45" y="305" width="115" height="22" rx="11" fill="#1F4590" fillOpacity="0.2" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.5" />
                <text x="102" y="320" textAnchor="middle" fill="#93c5fd" fillOpacity="0.6" fontSize="8" fontFamily="var(--font-geist-mono), monospace" fontWeight="500">SYS:ACTIVE</text>

                <rect x="560" y="305" width="115" height="22" rx="11" fill="#1F4590" fillOpacity="0.2" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.5" />
                <text x="617" y="320" textAnchor="middle" fill="#93c5fd" fillOpacity="0.6" fontSize="8" fontFamily="var(--font-geist-mono), monospace" fontWeight="500">THREAT:0</text>

                <rect x="275" y="305" width="170" height="22" rx="11" fill="#1F4590" fillOpacity="0.2" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.5">
                  <animate attributeName="fill-opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="360" y="320" textAnchor="middle" fill="#93c5fd" fillOpacity="0.7" fontSize="8" fontFamily="var(--font-geist-mono), monospace" fontWeight="600">ENCRYPTION:AES-256</text>

                <rect x="295" y="16" width="130" height="24" rx="12" fill="#1F4590" fillOpacity="0.25" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="0.5">
                  <animate attributeName="fill-opacity" values="0.2;0.35;0.2" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="360" y="32" textAnchor="middle" fill="#93c5fd" fillOpacity="0.7" fontSize="9" fontFamily="var(--font-geist-mono), monospace" fontWeight="600">PROTECTED</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── bottom text — INSIDE hero, pinned to bottom ── */}
        <div
          className="relative z-20 mt-auto flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          style={{ animation: "fade-up 0.8s 0.35s ease-out both" }}
        >
          {/* left — heading */}
          <div className="max-w-lg shrink-0">
            <h1 className="text-[2rem] font-black uppercase leading-[1.05] tracking-tight text-white sm:text-[2.8rem] lg:text-[3rem]">
              Your Partner In{" "}
              <br />
              Navigating{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                Cyber Threats
              </span>
            </h1>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-300/50">
              Beyond Cloud: Your Cyber Threat Intelligence Partner
            </p>
          </div>

          {/* right — description + CTA */}
          <div className="max-w-sm lg:text-right">
            <p className="text-[13.5px] leading-[1.75] text-blue-100/50">
              We help businesses understand and stay ahead of digital risks
              with clear insights and proactive strategies — protecting what
              matters most to you.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1F4590] to-[#3b82f6] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-[#1F4590]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/30 hover:brightness-110"
              >
                Get Started
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-6 py-2.5 text-[13px] font-semibold text-blue-200/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ═══════════════ WHY US ═══════════════ */}
    <WhyUs />

    {/* ═══════════════ OUR SOLUTION ═══════════════ */}
    <OurSolution />

    {/* ═══════════════ WHAT DO WE SOLVE? ═══════════════ */}
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#0a1628] py-24 font-sans md:py-32">

      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-[10%] h-[500px] w-[500px] rounded-full bg-[#1F4590]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-1/4 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-[1100px] px-5 md:px-8">

        {/* heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            Challenges We Address
          </p>
          <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2rem] lg:text-[2.4rem]">
            What Do We Solve?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-blue-100/40">
            Organizations face growing cyber risks every day. Beyond Cloud
            tackles the most critical challenges head-on.
          </p>
        </div>

        {/* pill cards — flex wrap */}
        <div className="flex flex-wrap justify-center gap-4">

          {[
            {
              title: "Lack of Visibility",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ),
            },
            {
              title: "Alert Fatigue",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              ),
            },
            {
              title: "Slow Incident Response",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Evolving Attack Surface",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              ),
            },
            {
              title: "Compliance Pressure",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
            },
            {
              title: "Talent Shortage",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
            },
            {
              title: "Data Breach Risk",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
            },
            {
              title: "Third-Party Risks",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 00-6.364-6.364L4.5 8.257" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#3b82f6]/25 hover:bg-white/[0.06] hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.2)]"
            >
              {/* icon */}
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#3b82f6]/10 blur-sm transition-all duration-300 group-hover:bg-[#3b82f6]/20 group-hover:blur-md" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/15 bg-[#3b82f6]/[0.08] text-[#60a5fa] transition-all duration-300 group-hover:border-[#3b82f6]/30 group-hover:text-[#93c5fd]">
                  {item.icon}
                </div>
              </div>

              {/* label */}
              <span className="text-[13px] font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>

    {/* ═══════════════ FAQ ═══════════════ */}
    <FAQ />
    </>
  );
}
