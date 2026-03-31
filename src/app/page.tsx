import Link from "next/link";

/* ─── stat data ─── */
const stats = [
  { value: "80K+", label: "Users Protected" },
  { value: "10M+", label: "Threats Blocked" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-gradient-to-br from-[#e6f0ff] via-[#f0f5ff] to-[#f8fbff] font-sans">
      {/* ── grid pattern overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#1F4590 1px, transparent 1px), linear-gradient(90deg, #1F4590 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── glow accents ── */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#1F4590]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#1F4590]/[0.04] blur-[100px]" />

      {/* ── main container ── */}
      <div className="relative mx-auto flex h-full max-w-[1240px] items-center px-4 py-16 md:px-6 lg:py-20">
        <div className="w-full overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-8 shadow-[0_8px_60px_-12px_rgba(31,69,144,0.08)] backdrop-blur-sm lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">

            {/* ═══ LEFT COLUMN ═══ */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up">
              {/* tag */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F4590]/10 bg-[#1F4590]/[0.04] px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F4590]/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1F4590]" />
                </span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1F4590]">
                  AI-Powered Security
                </span>
              </div>

              {/* headline */}
              <h1 className="font-sans text-[2.5rem] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-zinc-900 lg:text-[3.2rem]">
                Defend
                <br />
                <span className="text-[#1F4590]">Every</span>
                <br />
                Digital
                <br />
                Frontier
              </h1>

              {/* divider */}
              <div className="mt-6 h-[2px] w-12 rounded-full bg-[#1F4590]/20 lg:mt-8" />

              {/* stats */}
              <div className="mt-6 flex gap-6 lg:mt-8 lg:gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-sans text-2xl font-extrabold tracking-tight text-[#1F4590] lg:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ CENTER — hero visual ═══ */}
            <div className="relative mx-auto flex w-[260px] shrink-0 items-center justify-center lg:w-[300px] animate-fade-up-delay-1">
              {/* glow behind — breathing */}
              <div className="absolute inset-0 scale-90 rounded-[2rem] bg-gradient-to-b from-[#1F4590]/10 to-[#1F4590]/[0.02] blur-2xl animate-pulse-soft" />

              {/* floating card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1F4590]/10 bg-gradient-to-b from-[#1F4590]/[0.06] to-transparent shadow-[0_20px_50px_-20px_rgba(31,69,144,0.15)] animate-float">
                <svg
                  viewBox="0 0 300 440"
                  fill="none"
                  className="h-auto w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bodyGrad" x1="150" y1="0" x2="150" y2="440" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1F4590" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#1F4590" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="glowGrad" x1="150" y1="80" x2="150" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1F4590" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#1F4590" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="coreGlow" cx="150" cy="200" r="80" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1F4590" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1F4590" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="300" height="440" rx="32" fill="url(#bodyGrad)" />

                  {/* circuit lines */}
                  {[80, 140, 200, 260, 320, 380].map((y) => (
                    <line key={`h-${y}`} x1="20" y1={y} x2="280" y2={y} stroke="#1F4590" strokeOpacity="0.06" strokeWidth="0.5" />
                  ))}
                  {[60, 120, 180, 240].map((x) => (
                    <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="420" stroke="#1F4590" strokeOpacity="0.06" strokeWidth="0.5" />
                  ))}

                  {/* core glow — animated pulse */}
                  <circle cx="150" cy="200" r="80" fill="url(#coreGlow)">
                    <animate attributeName="r" values="75;85;75" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" />
                  </circle>

                  {/* shield outer */}
                  <path
                    d="M150 100 L200 125 L200 195 C200 240 175 270 150 285 C125 270 100 240 100 195 L100 125 Z"
                    fill="none"
                    stroke="url(#glowGrad)"
                    strokeWidth="1.5"
                  >
                    <animate attributeName="stroke-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
                  </path>

                  {/* shield inner */}
                  <path
                    d="M150 115 L192 136 L192 192 C192 230 171 256 150 269 C129 256 108 230 108 192 L108 136 Z"
                    fill="#1F4590"
                    fillOpacity="0.04"
                    stroke="#1F4590"
                    strokeOpacity="0.12"
                    strokeWidth="0.5"
                  />

                  {/* lock body */}
                  <rect x="137" y="180" width="26" height="22" rx="4" fill="none" stroke="#1F4590" strokeOpacity="0.5" strokeWidth="1.2" />
                  {/* lock shackle */}
                  <path d="M143 180 L143 172 C143 168 146 165 150 165 C154 165 157 168 157 172 L157 180" fill="none" stroke="#1F4590" strokeOpacity="0.5" strokeWidth="1.2" />
                  {/* lock keyhole */}
                  <circle cx="150" cy="190" r="2" fill="#1F4590" fillOpacity="0.5">
                    <animate attributeName="fill-opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* orbit rings — rotating */}
                  <ellipse cx="150" cy="200" rx="110" ry="40" fill="none" stroke="#1F4590" strokeOpacity="0.08" strokeWidth="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 150 200" to="360 150 200" dur="30s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx="150" cy="200" rx="90" ry="110" fill="none" stroke="#1F4590" strokeOpacity="0.06" strokeWidth="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 150 200" to="-360 150 200" dur="40s" repeatCount="indefinite" />
                  </ellipse>

                  {/* data nodes — pulse */}
                  {[
                    { cx: 60, cy: 160 },
                    { cx: 240, cy: 160 },
                    { cx: 80, cy: 300 },
                    { cx: 220, cy: 300 },
                    { cx: 150, cy: 340 },
                    { cx: 50, cy: 240 },
                    { cx: 250, cy: 240 },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.cx} cy={n.cy} r="12" fill="#1F4590" fillOpacity="0.03" stroke="#1F4590" strokeOpacity="0.1" strokeWidth="0.5" />
                      <circle cx={n.cx} cy={n.cy} r="3" fill="#1F4590" fillOpacity="0.25">
                        <animate attributeName="r" values="2.5;4;2.5" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.2;0.45;0.2" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                      </circle>
                      <line x1={n.cx} y1={n.cy} x2="150" y2="200" stroke="#1F4590" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2s" repeatCount="indefinite" />
                      </line>
                    </g>
                  ))}

                  {/* scanning line — animated */}
                  <rect x="30" width="240" height="1" fill="#1F4590" fillOpacity="0.12" rx="0.5">
                    <animate attributeName="y" values="120;300;120" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" />
                  </rect>

                  {/* floating data text */}
                  <text x="45" y="400" fill="#1F4590" fillOpacity="0.15" fontSize="8" fontFamily="var(--font-geist-mono), monospace">
                    SYS:ACTIVE//SECURE
                  </text>
                  <text x="155" y="400" fill="#1F4590" fillOpacity="0.15" fontSize="8" fontFamily="var(--font-geist-mono), monospace">
                    THREAT:0//CLEAR
                  </text>
                  <text x="45" y="415" fill="#1F4590" fillOpacity="0.1" fontSize="7" fontFamily="var(--font-geist-mono), monospace">
                    ENCRYPTION:AES-256
                  </text>
                  <text x="170" y="415" fill="#1F4590" fillOpacity="0.1" fontSize="7" fontFamily="var(--font-geist-mono), monospace">
                    NODE:ONLINE
                  </text>

                  {/* top badge */}
                  <rect x="100" y="50" width="100" height="24" rx="12" fill="#1F4590" fillOpacity="0.06" stroke="#1F4590" strokeOpacity="0.1" strokeWidth="0.5">
                    <animate attributeName="fill-opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <text x="150" y="66" textAnchor="middle" fill="#1F4590" fillOpacity="0.5" fontSize="9" fontFamily="var(--font-geist-mono), monospace" fontWeight="600">
                    PROTECTED
                  </text>
                </svg>
              </div>
            </div>

            {/* ═══ RIGHT COLUMN ═══ */}
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right animate-fade-up-delay-2">
              <h2 className="font-sans text-[1.6rem] font-bold uppercase leading-tight tracking-[0.06em] text-zinc-800 lg:text-[1.9rem]">
                Next-Gen
                <br />
                Cloud
                <br />
                <span className="text-[#1F4590]">Intelligence</span>
              </h2>

              <p className="mt-5 max-w-xs font-sans text-[14px] leading-relaxed text-zinc-500">
                Real-time threat detection powered by AI. Protect your infrastructure,
                users, and data with enterprise-grade security that scales.
              </p>

              {/* feature pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-end">
                {["Zero Trust", "AI Detection", "Real-Time"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1F4590]/10 bg-white/80 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1F4590]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#"
                className="group mt-8 inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#1F4590] transition-all duration-300 ease-out hover:gap-3"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* trust badge */}
              <div className="mt-8 flex items-center gap-2 animate-fade-up-delay-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#1F4590]/20 to-[#1F4590]/5"
                    >
                      <svg viewBox="0 0 24 24" fill="#1F4590" fillOpacity="0.4" className="h-3 w-3">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="font-sans text-[11px] font-medium text-zinc-400">
                  Trusted by 80K+ users
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
