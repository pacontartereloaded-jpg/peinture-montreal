import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

const ICONS = [
  <svg key="shield" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2L3 6v6c0 4 3.5 6.5 7 7.5C13.5 18.5 17 16 17 12V6L10 2z" />
    <path d="M7 10l2 2 4-4" />
  </svg>,
  <svg key="lines" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10h14M3 6h14M3 14h10" />
  </svg>,
  <svg key="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 16L16 4M16 4H10M16 4v6" />
  </svg>,
  <svg key="clock" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 5v5l3 3" />
  </svg>,
  <svg key="person" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM3 18a7 7 0 0114 0" />
  </svg>,
  <svg key="paint" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2v10M10 2L7 5M10 2l3 3" />
    <path d="M4 12c0 3 2.5 6 6 6s6-3 6-6v-2H4v2z" />
  </svg>,
  <svg key="chat" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 6a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2H8l-4 3V6z" />
  </svg>,
  <svg key="pin" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2C6.5 2 4 5 4 8c0 5 6 10 6 10s6-5 6-10c0-3-2.5-6-6-6z" />
    <circle cx="10" cy="8" r="2" />
  </svg>,
]

export default function WhyChooseUs() {
  const lang = useLang()
  const t = HOMEPAGE[lang].whyUs

  return (
    <section id="why-us" className="bg-[#F8F7F4] py-20 lg:py-28 border-y border-[#E8E4DD]" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[16px] text-[#5F6368] leading-relaxed mb-8 text-balance">
              {t.subtitle}
            </p>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] transition-colors duration-200"
            >
              {t.cta}
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {t.features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-white border border-[#E8E4DD] rounded-xl p-5 hover:shadow-sm hover:border-[#102A43]/20 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F8F7F4] flex items-center justify-center mb-4 text-[#102A43]">
                  {ICONS[i]}
                </div>
                <h3 className="text-[14px] font-semibold text-[#111111] mb-2">{feature.title}</h3>
                <p className="text-[13px] text-[#5F6368] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
