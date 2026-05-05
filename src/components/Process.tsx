import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

export default function Process() {
  const lang = useLang()
  const t = HOMEPAGE[lang].process

  return (
    <section id="process" className="bg-white py-20 lg:py-28" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
              {t.eyebrow}
            </span>
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 text-balance"
          >
            {t.h2}
          </h2>
          <p className="text-[16px] text-[#5F6368] leading-relaxed text-balance">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.steps.map((step, index) => (
            <article key={step.number} className="relative">
              {index < t.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%+0px)] w-full h-px bg-[#E8E4DD] -translate-x-1/2 z-0"
                  aria-hidden="true"
                  style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 1.5rem)' }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#F8F7F4] border border-[#E8E4DD] flex items-center justify-center flex-shrink-0">
                    <span className="text-[18px] font-bold text-[#102A43] leading-none">{step.number}</span>
                  </div>
                  <div className="flex-1 h-px bg-[#E8E4DD] lg:hidden" aria-hidden="true" />
                </div>

                <h3 className="text-[16px] font-semibold text-[#111111] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#5F6368] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 border-t border-[#E8E4DD]">
          <p className="text-[15px] text-[#5F6368] text-center">
            {t.bottomText}
          </p>
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3 rounded hover:bg-[#1a3a58] transition-colors duration-200 flex-shrink-0"
          >
            {t.bottomCta}
          </a>
        </div>
      </div>
    </section>
  )
}
