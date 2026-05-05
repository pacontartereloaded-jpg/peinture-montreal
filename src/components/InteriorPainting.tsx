import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

const INTERIOR_ROOMS = [
  { en: 'Living rooms & dining rooms', fr: 'Salons et salles à manger', es: 'Salas y comedores', color: '#F0EDE8' },
  { en: 'Bedrooms & master suites', fr: 'Chambres et suites principales', es: 'Habitaciones y suites principales', color: '#D8C7B2' },
  { en: 'Kitchens & bathrooms', fr: 'Cuisines et salles de bain', es: 'Cocinas y baños', color: '#A8B8A0' },
  { en: 'Hallways & staircases', fr: 'Couloirs et escaliers', es: 'Pasillos y escaleras', color: '#BCC5C0' },
  { en: 'Home offices & studios', fr: 'Bureaux à domicile et studios', es: 'Oficinas en casa y estudios', color: '#E8E4DD' },
  { en: 'Full-home repaints', fr: 'Repeintures complètes de maison', es: 'Repintados completos del hogar', color: '#102A43' },
]

const INTERIOR_FEATURES = {
  en: ['Walls, ceilings, trim, and doors', 'Smooth preparation and priming', 'Consistent coverage and colour', 'Clean edges on all transitions', 'Furniture and floor protection', 'Low-VOC options available'],
  fr: ['Murs, plafonds, moulures et portes', 'Préparation lisse et apprêtage', 'Couvrance et couleur uniformes', 'Arêtes nettes sur toutes les transitions', 'Protection des meubles et planchers', 'Options à faible COV disponibles'],
  es: ['Paredes, techos, molduras y puertas', 'Preparación suave y sellado', 'Cobertura y color consistentes', 'Bordes limpios en todas las transiciones', 'Protección de muebles y pisos', 'Opciones de bajo COV disponibles'],
}

export default function InteriorPainting() {
  const lang = useLang()
  const t = HOMEPAGE[lang].interior

  return (
    <section id="interior" className="bg-white py-20 lg:py-28" aria-labelledby="interior-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#F8F7F4] rounded-2xl border border-[#E8E4DD] p-7 mb-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#5F6368] mb-5">
                {t.spacesLabel}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {INTERIOR_ROOMS.map((room) => (
                  <div
                    key={room.en}
                    className="flex items-center gap-3 bg-white rounded-lg border border-[#E8E4DD] px-3.5 py-3 hover:border-[#102A43]/30 transition-colors duration-200"
                  >
                    <span
                      className="w-5 h-5 rounded flex-shrink-0 border border-white shadow-sm"
                      style={{ backgroundColor: room.color }}
                      aria-hidden="true"
                    />
                    <span className="text-[12px] font-medium text-[#2C2C2C] leading-tight">{room[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality callout */}
            <div className="bg-[#102A43] text-white rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2L2.5 6v5.5C2.5 14.5 5.5 17 9 17.5 12.5 17 15.5 14.5 15.5 11.5V6L9 2z" />
                  <path d="M6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] font-semibold mb-1">{t.calloutTitle}</p>
                <p className="text-[13px] text-white/75 leading-relaxed">
                  {lang === 'fr'
                    ? "Nous sablons, bouchons et apprêtons avant toute application de peinture. C'est ce qui distingue un fini qui reste beau des années d'un qui vieillit trop vite."
                    : lang === 'es'
                    ? "Lijamos, rellenamos y sellamos antes de aplicar cualquier pintura. Es lo que distingue un acabado hermoso por años de uno que envejece demasiado pronto."
                    : "We sand, fill, and prime before any paint is applied. It's what separates a finish that looks beautiful for years from one that shows its age too soon."}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="interior-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[17px] text-[#5F6368] leading-relaxed mb-8 text-balance">
              {t.subtitle}
            </p>

            {/* Feature checklist */}
            <ul className="space-y-3 mb-9" aria-label="Interior painting features">
              {INTERIOR_FEATURES[lang].map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EEF2EE] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5L3.5 6.5L7 2.5" stroke="#A8B8A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-[#2C2C2C] font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="#estimate" className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] transition-colors duration-200">
                {t.cta}
              </a>
              <a href="#process" className="inline-flex items-center gap-2 text-[#111111] text-[14px] font-semibold px-6 py-3.5 rounded border border-[#E8E4DD] hover:border-[#2C2C2C] hover:bg-[#F8F7F4] transition-all duration-200">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
