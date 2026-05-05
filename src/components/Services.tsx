import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

interface ServiceDef {
  id: string
  titles: { en: string; fr: string; es: string }
  descriptions: { en: string; fr: string; es: string }
  hrefs: { en?: string; fr?: string; es?: string }
  icon: React.ReactNode
}

const SERVICES: ServiceDef[] = [
  {
    id: 'interior',
    titles: { en: 'Interior Painting', fr: 'Peinture intérieure', es: 'Pintura interior' },
    descriptions: {
      en: "Walls, ceilings, trim, and doors — painted with precision and care. We prepare every surface properly so the finish holds beautifully for years, whether it's a single room or an entire home.",
      fr: "Murs, plafonds, moulures et portes — peints avec précision et soin. Nous préparons chaque surface correctement pour un fini qui tient des années, d'une pièce à toute une maison.",
      es: "Paredes, techos, molduras y puertas — pintados con precisión y cuidado. Preparamos cada superficie correctamente para un acabado que dura años, ya sea una habitación o un hogar completo.",
    },
    hrefs: { en: '/en/interior-painting-montreal', fr: '/fr/peinture-interieure-montreal', es: '/es/pintura-interior-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="18" height="14" rx="2" />
        <path d="M2 7h18" />
        <path d="M8 3v4" />
      </svg>
    ),
  },
  {
    id: 'exterior',
    titles: { en: 'Exterior Painting', fr: 'Peinture extérieure', es: 'Pintura exterior' },
    descriptions: {
      en: "Siding, brick, balconies, railings, and trim — finished with weather-resistant coatings built to withstand Montréal's demanding seasons. Proper preparation ensures lasting results.",
      fr: "Bardages, briques, balcons, rampes et moulures — finis avec des revêtements résistants conçus pour les saisons rigoureuses de Montréal. Une bonne préparation garantit des résultats durables.",
      es: "Revestimientos, ladrillos, balcones, barandillas y molduras — terminados con recubrimientos resistentes diseñados para las exigentes estaciones de Montreal. La preparación adecuada garantiza resultados duraderos.",
    },
    hrefs: { en: '/en/exterior-painting-montreal', fr: '/fr/peinture-exterieure-montreal', es: '/es/pintura-exterior-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 19V9l8-7 8 7v10" />
        <rect x="8" y="12" width="6" height="7" rx="1" />
        <path d="M2 19h18" />
      </svg>
    ),
  },
  {
    id: 'condo',
    titles: { en: 'Condo & Apartment Painting', fr: 'Peinture de condo et appartement', es: 'Pintura de condo y apartamento' },
    descriptions: {
      en: "We understand condo buildings — their rules, shared spaces, and access restrictions. Our crews work efficiently and respectfully to refresh your unit with minimal disruption to neighbours.",
      fr: "Nous connaissons les immeubles en copropriété — leurs règles, espaces communs et restrictions d'accès. Nos équipes travaillent efficacement pour rafraîchir votre unité avec un minimum de perturbations.",
      es: "Entendemos los edificios de condos — sus reglas, espacios compartidos y restricciones de acceso. Nuestros equipos trabajan eficientemente para renovar su unidad con mínima interrupción.",
    },
    hrefs: { en: '/en/condo-painting-montreal', fr: '/fr/peinture-condo-montreal', es: '/es/pintura-condos-apartamentos-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="16" height="18" rx="1" />
        <path d="M3 8h16M3 13h16" />
        <path d="M9 8v13M15 8v13" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    titles: { en: 'Commercial Painting', fr: 'Peinture commerciale', es: 'Pintura comercial' },
    descriptions: {
      en: "Offices, retail spaces, restaurants, and lobbies across Montréal. We schedule around your business hours and deliver professional results with as little disruption to your operations as possible.",
      fr: "Bureaux, commerces de détail, restaurants et halls à travers Montréal. Nous planifions selon vos heures d'affaires et livrons des résultats professionnels avec un minimum de perturbations.",
      es: "Oficinas, locales comerciales, restaurantes y vestíbulos en Montreal. Programamos alrededor de su horario comercial y entregamos resultados profesionales con la mínima interrupción.",
    },
    hrefs: { en: '/en/commercial-painting-montreal', fr: '/fr/peinture-commerciale-montreal', es: '/es/pintura-comercial-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="18" height="14" rx="1" />
        <path d="M7 7V4a1 1 0 011-1h6a1 1 0 011 1v3" />
        <path d="M2 12h18" />
        <path d="M9 12v9M13 12v9" />
      </svg>
    ),
  },
  {
    id: 'cabinets',
    titles: { en: 'Cabinet Painting', fr: 'Peinture d\'armoires', es: 'Pintura de gabinetes' },
    descriptions: {
      en: "A cost-effective way to transform your kitchen or bathroom. We sand, prime, and apply smooth factory-like finishes to cabinets and doors that hold up beautifully with daily use.",
      fr: "Une façon économique de transformer votre cuisine ou salle de bain. Nous sablons, apprêtons et appliquons des finis lisses sur les armoires et portes qui résistent parfaitement à l'usage quotidien.",
      es: "Una forma rentable de transformar su cocina o baño. Lijamos, sellamos y aplicamos acabados lisos de fábrica en gabinetes y puertas que se mantienen hermosos con el uso diario.",
    },
    hrefs: { en: '/en/cabinet-painting-montreal', fr: '/fr/peinture-armoires-montreal', es: '/es/pintura-gabinetes-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="18" height="8" rx="1" />
        <rect x="2" y="12" width="18" height="8" rx="1" />
        <circle cx="11" cy="7" r="1" fill="currentColor" />
        <circle cx="11" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'drywall',
    titles: { en: 'Drywall Repair & Surface Prep', fr: 'Réparation de gypse et préparation', es: 'Reparación de drywall y preparación' },
    descriptions: {
      en: "Cracks, holes, water stains, and rough patches are fixed before a drop of paint goes on. Thorough surface preparation is what separates a lasting finish from a short-term one.",
      fr: "Fissures, trous, taches d'eau et zones rugueuses sont corrigés avant l'application de la peinture. Une préparation minutieuse distingue un fini durable d'un résultat temporaire.",
      es: "Grietas, agujeros, manchas de agua y parches rugosos se reparan antes de aplicar pintura. La preparación exhaustiva de superficies es lo que separa un acabado duradero de uno temporal.",
    },
    hrefs: { en: '/en/drywall-repair-painting-montreal', fr: '/fr/reparation-gypse-peinture-montreal', es: '/es/reparacion-drywall-pintura-montreal' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3l5 5-11 11H3v-5L14 3z" />
        <path d="M17 6l-1 1" />
      </svg>
    ),
  },
  {
    id: 'colour',
    titles: { en: 'Colour Consultation', fr: 'Consultation couleur', es: 'Consulta de colores' },
    descriptions: {
      en: "Choosing the right colour is harder than it looks. We help you navigate shades, undertones, and finishes to find combinations that work with your light, architecture, and furnishings.",
      fr: "Choisir la bonne couleur est plus difficile qu'il n'y paraît. Nous vous aidons à naviguer parmi les teintes, sous-tons et finis pour trouver des combinaisons qui s'harmonisent avec votre espace.",
      es: "Elegir el color correcto es más difícil de lo que parece. Le ayudamos a navegar tonos, subtonos y acabados para encontrar combinaciones que funcionen con su luz, arquitectura y mobiliario.",
    },
    hrefs: {},
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="9" />
        <circle cx="7.5" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="11" cy="15" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'trim',
    titles: { en: 'Trim, Doors & Ceilings', fr: 'Moulures, portes et plafonds', es: 'Molduras, puertas y techos' },
    descriptions: {
      en: "The details make all the difference. Sharp trim lines, smooth ceilings, and crisp door finishes elevate the entire room. We take these elements as seriously as we do the walls.",
      fr: "Les détails font toute la différence. Des lignes de moulures nettes, des plafonds lisses et des portes impeccables rehaussent l'ensemble de la pièce. Nous prenons ces éléments aussi au sérieux que les murs.",
      es: "Los detalles marcan toda la diferencia. Líneas de molduras nítidas, techos lisos y puertas impecables elevan toda la habitación. Nos tomamos estos elementos tan en serio como las paredes.",
    },
    hrefs: {},
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="12" height="19" rx="1" />
        <path d="M5 8h12" />
        <circle cx="14" cy="11" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const ESTIMATE_PATHS = {
  en: '/en/painting-estimate-montreal',
  fr: '/fr/soumission-peinture-montreal',
  es: '/es/cotizacion-pintura-montreal',
}

const ALL_SERVICES_PATHS = {
  en: '/en/painting-services-montreal',
  fr: '/fr/peinture-montreal',
  es: '/es/pintores-en-montreal',
}

export default function Services() {
  const lang = useLang()
  const t = HOMEPAGE[lang].services

  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
              {t.eyebrow}
            </span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 text-balance"
          >
            {t.h2}
          </h2>
          <p className="text-[17px] text-[#5F6368] leading-relaxed text-balance">
            {t.subtitle}
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E4DD] border border-[#E8E4DD] rounded-2xl overflow-hidden">
          {SERVICES.map((service) => {
            const href = service.hrefs[lang]
            const Tag = href ? 'a' : 'article'
            const extraProps = href ? { href } : {}
            return (
              <Tag
                key={service.id}
                {...(extraProps as Record<string, string>)}
                className="bg-white p-7 hover:bg-[#F8F7F4] transition-colors duration-200 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F8F7F4] flex items-center justify-center mb-5 text-[#102A43] transition-colors duration-200 group-hover:bg-[#102A43] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-[#111111] mb-2 leading-snug group-hover:text-[#102A43] transition-colors">
                  {service.titles[lang]}
                </h3>
                <p className="text-[13px] text-[#5F6368] leading-relaxed">
                  {service.descriptions[lang]}
                </p>
              </Tag>
            )
          })}
        </div>

        {/* CTA below grid */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={ESTIMATE_PATHS[lang]}
            className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-7 py-3.5 rounded hover:bg-[#1a3a58] transition-colors duration-200"
          >
            {t.ctaEstimate}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
          <a
            href={ALL_SERVICES_PATHS[lang]}
            className="inline-flex items-center gap-2 border border-[#E8E4DD] text-[#5F6368] text-[14px] font-medium px-5 py-3.5 rounded hover:border-[#102A43] hover:text-[#102A43] transition-colors duration-200"
          >
            {t.ctaAll}
          </a>
        </div>
      </div>
    </section>
  )
}
