import Link from "next/link";

/* ─── solution items ─── */
const solutions = [
  {
    title: "Threat Intelligence Monitoring",
    desc: "Continuous surveillance across surface, deep, and dark web sources. Our platform aggregates and correlates threat data in real time so you never miss a signal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stat: "24/7",
    statLabel: "Active Monitoring",
  },
  {
    title: "Vulnerability Assessment",
    desc: "Identify weaknesses in your infrastructure before attackers do. We provide prioritized vulnerability reports with remediation guidance tailored to your stack.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    stat: "10K+",
    statLabel: "Vulnerabilities Tracked",
  },
  {
    title: "Incident Response",
    desc: "When threats materialize, speed matters. Our platform delivers automated playbooks and expert-guided remediation to contain incidents before they spread.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    stat: "<2h",
    statLabel: "Avg Response Time",
  },
  {
    title: "Brand Protection",
    desc: "Monitor for impersonation, phishing domains, fake apps, and social media abuse targeting your brand. We detect and take down threats to your reputation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    stat: "99.9%",
    statLabel: "Takedown Success",
  },
  {
    title: "Dark Web Intelligence",
    desc: "Our analysts monitor underground forums, marketplaces, and paste sites for leaked credentials, data breaches, and threat actor activity targeting your organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    stat: "500+",
    statLabel: "Sources Monitored",
  },
  {
    title: "Compliance & Reporting",
    desc: "Stay audit-ready with automated compliance reporting. We map threat intelligence to regulatory frameworks including ISO 27001, SOC 2, and GDPR.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    stat: "100%",
    statLabel: "Audit-Ready",
  },
];

export default function OurSolutionPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#132d5e] py-24 font-sans md:py-32">
        {/* ambient glows */}
        <div className="pointer-events-none absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#1F4590]/15 blur-[150px]" />

        <div className="relative mx-auto max-w-[860px] px-5 text-center md:px-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            Our Solution
          </p>
          <h1 className="text-[2rem] font-black uppercase leading-[1.08] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]">
            End-to-End Cyber{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
              Threat Intelligence
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-[1.8] text-blue-100/45">
            Beyond Cloud delivers a comprehensive platform that monitors,
            analyzes, and responds to cyber threats in real time — giving
            your team the clarity to act decisively.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1F4590] to-[#3b82f6] px-7 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#1F4590]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/30 hover:brightness-110"
            >
              Get Started
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 10H15M15 10L10 5M15 10L10 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-7 py-3 text-[14px] font-semibold text-blue-200/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION GRID ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf3ff] via-[#f4f8ff] to-white py-24 font-sans md:py-32">
        {/* ambient */}
        <div className="pointer-events-none absolute left-0 top-[10%] h-[400px] w-[400px] rounded-full bg-[#1F4590]/[0.04] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[10%] right-0 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/[0.03] blur-[130px]" />

        <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-[1.5rem] font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-[1.9rem] lg:text-[2.2rem]">
              What We Deliver
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-zinc-500">
              Six core capabilities that work together to protect your
              organization from every angle.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="group">
                {/* stat + icon row */}
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <span className="text-[2rem] font-black leading-none tracking-tight text-[#1F4590]">
                      {item.stat}
                    </span>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1F4590]/40">
                      {item.statLabel}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F4590]/10 bg-[#1F4590]/[0.05] text-[#1F4590] transition-all duration-300 group-hover:border-[#1F4590]/20 group-hover:bg-[#1F4590]/[0.08]">
                    {item.icon}
                  </div>
                </div>

                {/* divider */}
                <div className="mb-4 h-[1px] bg-gradient-to-r from-[#1F4590]/10 to-transparent" />

                {/* text */}
                <h3 className="mb-1.5 text-[16px] font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#0a1628] py-24 font-sans md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-[30%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#1F4590]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[960px] px-5 md:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              How It Works
            </p>
            <h2 className="text-[1.5rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.9rem] lg:text-[2.2rem]">
              Three Steps to Protection
            </h2>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3b82f6]/15 to-transparent lg:block" />

            <div className="flex flex-col gap-16 lg:gap-24">
              {[
                {
                  step: "01",
                  title: "Connect",
                  desc: "Integrate Beyond Cloud with your existing infrastructure in minutes. We connect to your cloud, endpoints, email, and network — no disruption to your workflow.",
                },
                {
                  step: "02",
                  title: "Analyze",
                  desc: "Our AI engine correlates data from hundreds of threat intelligence sources, identifies patterns, and prioritizes risks specific to your business context.",
                },
                {
                  step: "03",
                  title: "Protect",
                  desc: "Receive actionable alerts, automated response playbooks, and expert recommendations. Contain threats fast and continuously strengthen your security posture.",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`flex flex-col items-center gap-6 lg:flex-row ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  } lg:gap-16`}
                >
                  {/* text */}
                  <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#3b82f6]">
                      Step {item.step}
                    </span>
                    <h3 className="mt-2 text-[1.4rem] font-extrabold text-white sm:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-blue-100/40">
                      {item.desc}
                    </p>
                  </div>

                  {/* center dot */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#3b82f6]/10 blur-md" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#3b82f6]/20 bg-[#0f2240]">
                      <span className="text-[16px] font-black text-[#60a5fa]">{item.step}</span>
                    </div>
                  </div>

                  {/* spacer for alignment */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BOTTOM ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf3ff] to-white py-24 font-sans md:py-32">
        <div className="relative mx-auto max-w-[720px] px-5 text-center md:px-8">
          <h2 className="text-[1.5rem] font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-[1.9rem] lg:text-[2.2rem]">
            Ready to Secure Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-zinc-500">
            Join hundreds of organizations that trust Beyond Cloud for their
            cyber threat intelligence needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1F4590] to-[#3b82f6] px-7 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#1F4590]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1F4590]/30 hover:brightness-110"
            >
              Get Started Free
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 10H15M15 10L10 5M15 10L10 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-xl border border-[#1F4590]/20 bg-white px-7 py-3 text-[14px] font-semibold text-[#1F4590] transition-all duration-300 hover:border-[#1F4590]/35 hover:shadow-md"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
