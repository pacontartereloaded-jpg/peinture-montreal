interface Props {
  h1: string
  tagline: string
  intro: string
  lang: 'en' | 'fr' | 'es'
}

const CTA_LABELS = {
  en: { primary: 'Get a Free Estimate', secondary: 'View Our Services' },
  fr: { primary: 'Obtenir une soumission gratuite', secondary: 'Nos services' },
  es: { primary: 'Obtener presupuesto gratuito', secondary: 'Ver servicios' },
}

const ESTIMATE_PATH = {
  en: '/en/painting-estimate-montreal',
  fr: '/fr/soumission-peinture-montreal',
  es: '/es/cotizacion-pintura-montreal',
}

export default function ServiceHero({ h1, tagline, intro, lang }: Props) {
  const labels = CTA_LABELS[lang]
  const estimatePath = ESTIMATE_PATH[lang]

  return (
    <section className="bg-[#F8F7F4] border-b border-[#E8E4DD] pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
              Peinture MTL
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-4 text-balance">
            {h1}
          </h1>

          <p className="text-[18px] text-[#5F6368] font-medium mb-5 italic">
            {tagline}
          </p>

          <p className="text-[17px] text-[#3C3C3C] leading-relaxed mb-8 max-w-2xl">
            {intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={estimatePath}
              className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] active:scale-[0.98] transition-all duration-200"
            >
              {labels.primary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
            <a
              href="/#services"
              className="inline-flex items-center gap-2 border border-[#E8E4DD] bg-white text-[#111111] text-[14px] font-medium px-6 py-3.5 rounded hover:border-[#102A43] hover:text-[#102A43] transition-all duration-200"
            >
              {labels.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
