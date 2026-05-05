import { useState } from 'react'
import type { FAQ } from '../../data/seoTypes'

interface Props {
  faqs: FAQ[]
  lang: 'en' | 'fr' | 'es'
}

const HEADINGS = {
  en: 'Frequently asked questions',
  fr: 'Questions fréquemment posées',
  es: 'Preguntas frecuentes',
}

export default function ServiceFAQ({ faqs, lang }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-10">
          {HEADINGS[lang]}
        </h2>
        <div className="max-w-3xl divide-y divide-[#E8E4DD]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-start justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-medium text-[#111111] group-hover:text-[#102A43] transition-colors leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#E8E4DD] flex items-center justify-center text-[#5F6368] mt-0.5 transition-all duration-200 group-hover:border-[#102A43] group-hover:text-[#102A43]">
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true"
                    className={`transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                  >
                    <path d="M6 2v8M2 6h8" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="pb-5 text-[14px] text-[#5F6368] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
