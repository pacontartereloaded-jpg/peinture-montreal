import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

const EXTERIOR_SURFACES = {
  en: ['Wood siding & clapboard', 'Brick & masonry surfaces', 'Balconies & railings', 'Fascias, soffits & trim', 'Exterior doors & shutters', 'Garages & sheds'],
  fr: ['Bardages en bois et planches', 'Surfaces en brique et maçonnerie', 'Balcons et rampes', 'Fascias, soffites et moulures', 'Portes extérieures et volets', 'Garages et remises'],
  es: ['Revestimiento de madera y tablas', 'Superficies de ladrillo y mampostería', 'Balcones y barandillas', 'Fascias, sofitos y molduras', 'Puertas exteriores y persianas', 'Garajes y cobertizos'],
}

const EXTERIOR_HIGHLIGHTS = {
  en: [
    { title: 'Weather-resistant finishes', description: 'Formulated to endure Montréal freeze-thaw cycles, UV exposure, and seasonal moisture without peeling or fading prematurely.' },
    { title: 'Seasonal planning', description: 'Exterior painting is temperature and humidity sensitive. We schedule outdoor projects during optimal conditions for the best adhesion and cure.' },
    { title: 'Surface inspection & prep', description: 'We identify and address failing paint, rot, caulking gaps, and moisture issues before we begin — so the new finish has the best possible foundation.' },
  ],
  fr: [
    { title: 'Finis résistants aux intempéries', description: 'Formulés pour résister aux cycles gel-dégel de Montréal, aux UV et à l\'humidité saisonnière sans s\'écailler ni se décolorer prématurément.' },
    { title: 'Planification saisonnière', description: 'La peinture extérieure est sensible à la température et à l\'humidité. Nous planifions les projets extérieurs dans des conditions optimales pour une meilleure adhérence.' },
    { title: 'Inspection et préparation des surfaces', description: 'Nous identifions et corrigeons la peinture défaillante, la pourriture, les fissures de calfeutrage et les problèmes d\'humidité avant de commencer.' },
  ],
  es: [
    { title: 'Acabados resistentes al clima', description: 'Formulados para soportar los ciclos de congelación y deshielo de Montreal, la exposición UV y la humedad estacional sin descascararse ni decolorarse prematuramente.' },
    { title: 'Planificación estacional', description: 'La pintura exterior es sensible a la temperatura y humedad. Programamos proyectos exteriores en condiciones óptimas para la mejor adhesión y curado.' },
    { title: 'Inspección y preparación de superficies', description: 'Identificamos y corregimos pintura deteriorada, podredumbre, huecos de sellado y problemas de humedad antes de comenzar.' },
  ],
}

export default function ExteriorPainting() {
  const lang = useLang()
  const t = HOMEPAGE[lang].exterior

  return (
    <section id="exterior" className="bg-[#F8F7F4] py-20 lg:py-28 border-y border-[#E8E4DD]" aria-labelledby="exterior-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="exterior-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[17px] text-[#5F6368] leading-relaxed mb-8 text-balance">
              {t.subtitle}
            </p>

            {/* Surface types */}
            <div className="mb-9">
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#5F6368] mb-4">
                {t.surfacesLabel}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {EXTERIOR_SURFACES[lang].map((surface) => (
                  <div key={surface} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#102A43]/40 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-[#2C2C2C] font-medium">{surface}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] transition-colors duration-200"
            >
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {EXTERIOR_HIGHLIGHTS[lang].map((item, index) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8E4DD] rounded-xl p-6 hover:shadow-sm hover:border-[#102A43]/20 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full bg-[#102A43] text-white flex items-center justify-center flex-shrink-0 text-[13px] font-bold leading-none mt-0.5"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-[#5F6368] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Seasonal note */}
            <div className="bg-[#102A43]/[0.04] border border-[#102A43]/[0.12] rounded-xl p-5 mt-2">
              <div className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#102A43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 5v3l2 2" />
                </svg>
                <p className="text-[13px] font-medium text-[#102A43]">
                  {t.seasonalNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
