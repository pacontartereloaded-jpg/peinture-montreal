import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

const NEIGHBOURHOODS = [
  { en: 'Plateau-Mont-Royal', desc: { en: 'Victorian homes and triplexes', fr: 'Maisons victoriennes et triplex', es: 'Casas victorianas y triplex' } },
  { en: 'Mile End', desc: { en: 'Lofts and heritage buildings', fr: 'Lofts et bâtiments patrimoniaux', es: 'Lofts y edificios patrimoniales' } },
  { en: 'Outremont', desc: { en: 'Elegant family residences', fr: 'Élégantes résidences familiales', es: 'Elegantes residencias familiares' } },
  { en: 'Westmount', desc: { en: 'Classic and contemporary homes', fr: 'Maisons classiques et contemporaines', es: 'Casas clásicas y contemporáneas' } },
  { en: 'Griffintown', desc: { en: 'Condos and new developments', fr: 'Condos et nouveaux développements', es: 'Condos y nuevos desarrollos' } },
  { en: 'Old Montréal', desc: { en: 'Heritage stonework and interiors', fr: 'Maçonnerie patrimoniale et intérieurs', es: 'Mampostería patrimonial e interiores' } },
  { en: 'NDG', desc: { en: 'Spacious family homes', fr: 'Grandes maisons familiales', es: 'Amplias casas familiares' } },
  { en: 'Rosemont', desc: { en: 'Residential and mixed-use', fr: 'Résidentiel et usage mixte', es: 'Residencial y uso mixto' } },
  { en: 'Verdun', desc: { en: 'Homes and rental properties', fr: 'Maisons et propriétés locatives', es: 'Casas y propiedades de alquiler' } },
  { en: 'Ville-Marie', desc: { en: 'Downtown condos and offices', fr: 'Condos et bureaux du centre-ville', es: 'Condos y oficinas del centro' } },
  { en: 'Laval', desc: { en: 'Suburban homes and businesses', fr: 'Maisons et commerces en banlieue', es: 'Casas y negocios suburbanos' } },
  { en: 'Longueuil', desc: { en: 'South Shore properties', fr: 'Propriétés de la Rive-Sud', es: 'Propiedades de la Costa Sur' } },
]

const BODY_TEXT = {
  en: {
    p1: "We work across Montréal and its surrounding neighbourhoods, from the tree-lined streets of Outremont to the converted lofts of Griffintown. If you're in the greater Montréal area, we'd be glad to discuss your project.",
    p2: "Whether your property is a century-old triplex on the Plateau, a new condo in Ville-Marie, a family home in Westmount, or a commercial space in the downtown core — we bring the same standard of craft and care to every address.",
  },
  fr: {
    p1: "Nous travaillons dans tout Montréal et ses quartiers environnants, des rues bordées d'arbres d'Outremont aux lofts reconvertis de Griffintown. Si vous êtes dans la grande région de Montréal, nous serions ravis de discuter de votre projet.",
    p2: "Que votre propriété soit un triplex centenaire sur le Plateau, un nouveau condo à Ville-Marie, une maison familiale à Westmount ou un espace commercial au centre-ville — nous apportons le même niveau d'artisanat et de soin à chaque adresse.",
  },
  es: {
    p1: "Trabajamos en todo Montreal y sus barrios circundantes, desde las calles arboladas de Outremont hasta los lofts reconvertidos de Griffintown. Si está en el área metropolitana de Montreal, estaremos encantados de hablar sobre su proyecto.",
    p2: "Ya sea que su propiedad sea un triplex centenario en el Plateau, un nuevo condo en Ville-Marie, una casa familiar en Westmount o un espacio comercial en el centro — traemos el mismo nivel de artesanía y cuidado a cada dirección.",
  },
}

export default function LocalAreas() {
  const lang = useLang()
  const t = HOMEPAGE[lang].areas
  const body = BODY_TEXT[lang]

  return (
    <section id="areas" className="bg-[#F8F7F4] py-20 lg:py-28 border-y border-[#E8E4DD]" aria-labelledby="areas-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="areas-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[17px] text-[#5F6368] leading-relaxed mb-6 text-balance">
              {body.p1}
            </p>

            <p className="text-[15px] text-[#5F6368] leading-relaxed mb-8">
              {body.p2}
            </p>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 text-[#102A43] text-[14px] font-semibold border-b-2 border-[#102A43]/20 hover:border-[#102A43] transition-colors duration-200 pb-0.5"
            >
              {t.ctaText}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l3.5 3.5-3.5 3.5" />
              </svg>
            </a>
          </div>

          {/* Right: Neighbourhood grid */}
          <div>
            <div className="grid grid-cols-2 gap-3" role="list" aria-label="Service neighbourhoods">
              {NEIGHBOURHOODS.map((n) => (
                <div
                  key={n.en}
                  className="bg-white border border-[#E8E4DD] rounded-xl px-4 py-3.5 hover:border-[#102A43]/30 hover:shadow-sm transition-all duration-200"
                  role="listitem"
                >
                  <p className="text-[13px] font-semibold text-[#111111] mb-0.5">{n.en}</p>
                  <p className="text-[11px] text-[#5F6368]">{n.desc[lang]}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[12px] text-[#5F6368] text-center">
              {t.notListed}{' '}
              <a href="#estimate" className="text-[#102A43] font-medium hover:underline">
                {t.contactLink}
              </a>{' '}
              {lang === 'fr' ? '— nous desservons probablement votre quartier.' : lang === 'es' ? '— probablemente servimos su barrio.' : '— we likely serve your neighbourhood.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
