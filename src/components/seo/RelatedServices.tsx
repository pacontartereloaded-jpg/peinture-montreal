import type { RelatedPage } from '../../data/seoTypes'

interface Props {
  pages: RelatedPage[]
  lang: 'en' | 'fr' | 'es'
}

const HEADINGS = {
  en: 'Related services',
  fr: 'Services connexes',
  es: 'Servicios relacionados',
}

export default function RelatedServices({ pages, lang }: Props) {
  if (pages.length === 0) return null
  return (
    <section className="bg-[#F8F7F4] border-b border-[#E8E4DD] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#5F6368] mb-5">
          {HEADINGS[lang]}
        </h2>
        <div className="flex flex-wrap gap-3">
          {pages.map((p) => (
            <a
              key={p.path}
              href={p.path}
              className="inline-flex items-center gap-2 bg-white border border-[#E8E4DD] rounded-lg px-4 py-2.5 text-[13px] font-medium text-[#2C2C2C] hover:border-[#102A43] hover:text-[#102A43] transition-colors duration-150"
            >
              {p.label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
