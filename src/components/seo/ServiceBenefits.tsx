import type { Benefit } from '../../data/seoTypes'

interface Props {
  benefits: Benefit[]
  lang: 'en' | 'fr' | 'es'
}

const SECTION_HEADINGS = {
  en: 'What sets our work apart',
  fr: 'Ce qui distingue notre travail',
  es: 'Lo que diferencia nuestro trabajo',
}

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 8l4 4 8-8" />
  </svg>
)

export default function ServiceBenefits({ benefits, lang }: Props) {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-10">
          {SECTION_HEADINGS[lang]}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 border border-[#E8E4DD] rounded-xl bg-[#F8F7F4] hover:border-[#102A43]/20 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#102A43]/10 flex items-center justify-center text-[#102A43] mb-4 flex-shrink-0">
                {CHECK_ICON}
              </div>
              <h3 className="text-[15px] font-semibold text-[#111111] mb-2">{b.title}</h3>
              <p className="text-[13px] text-[#5F6368] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
