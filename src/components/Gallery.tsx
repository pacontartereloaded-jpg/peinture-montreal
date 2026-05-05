import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

interface Project {
  titles: { en: string; fr: string; es: string }
  location: string
  category: string
  image: string
  imageAlt: string
}

const PROJECTS: Project[] = [
  {
    titles: { en: 'Modern Condo Refresh', fr: 'Condo moderne rafraîchi', es: 'Renovación de condo moderno' },
    location: 'Griffintown, Montréal',
    category: 'Interior · Condo',
    image: '/gallery/condo-interior.jpg',
    imageAlt: 'Freshly painted modern condo interior with white walls and warm trim in Griffintown Montreal',
  },
  {
    titles: { en: 'Heritage Home Interior', fr: 'Intérieur de maison patrimoniale', es: 'Interior de casa patrimonial' },
    location: 'Westmount, Montréal',
    category: 'Interior · Residential',
    image: '/gallery/heritage-home-interior.jpg',
    imageAlt: 'Elegant painted interior of a heritage home in Westmount with sage green walls and white crown molding',
  },
  {
    titles: { en: 'Commercial Office Repaint', fr: 'Repeinture de bureau commercial', es: 'Repintado de oficina comercial' },
    location: 'Ville-Marie, Montréal',
    category: 'Commercial · Office',
    image: '/gallery/commercial-office.jpg',
    imageAlt: 'Freshly painted modern office interior with neutral grey walls and clean professional finish',
  },
  {
    titles: { en: 'Exterior Trim & Doors', fr: 'Moulures et portes extérieures', es: 'Molduras y puertas exteriores' },
    location: 'Outremont, Montréal',
    category: 'Exterior · Residential',
    image: '/gallery/exterior-outremont.jpg',
    imageAlt: 'Classic Montreal stone duplex with freshly painted navy shutters, white trim and black front door',
  },
  {
    titles: { en: 'Kitchen Cabinet Refinish', fr: 'Refinition d\'armoires de cuisine', es: 'Refinición de gabinetes de cocina' },
    location: 'Plateau-Mont-Royal, Montréal',
    category: 'Interior · Cabinets',
    image: '/gallery/kitchen-cabinets.jpg',
    imageAlt: 'Beautifully painted kitchen cabinets in warm white with smooth finish and marble countertops',
  },
  {
    titles: { en: 'Master Bedroom Repaint', fr: 'Repeinture de chambre principale', es: 'Repintado de habitación principal' },
    location: 'NDG, Montréal',
    category: 'Interior · Residential',
    image: '/gallery/bedroom-interior.jpg',
    imageAlt: 'Freshly painted master bedroom with warm greige walls and crisp white trim in NDG Montreal',
  },
  {
    titles: { en: 'Triplex Exterior Repaint', fr: 'Repeinture extérieure de triplex', es: 'Repintado exterior de triplex' },
    location: 'Rosemont, Montréal',
    category: 'Exterior · Residential',
    image: '/gallery/exterior-triplex.jpg',
    imageAlt: 'Freshly painted Montreal triplex exterior with dark green elements and white trim on a tree-lined street',
  },
  {
    titles: { en: 'Restaurant Interior', fr: 'Intérieur de restaurant', es: 'Interior de restaurante' },
    location: 'Mile End, Montréal',
    category: 'Commercial · Restaurant',
    image: '/gallery/commercial-restaurant.jpg',
    imageAlt: 'Freshly painted restaurant interior with deep charcoal walls and clean white ceiling in Montreal',
  },
]

const ESTIMATE_PATHS = {
  en: '/en/painting-estimate-montreal',
  fr: '/fr/soumission-peinture-montreal',
  es: '/es/cotizacion-pintura-montreal',
}

export default function Gallery() {
  const lang = useLang()
  const t = HOMEPAGE[lang].gallery

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight text-balance"
            >
              {t.h2}
            </h2>
          </div>
          <a
            href={ESTIMATE_PATHS[lang]}
            className="inline-flex items-center gap-2 text-[#111111] text-[14px] font-semibold border-b-2 border-[#E8E4DD] hover:border-[#111111] transition-colors duration-200 pb-0.5 whitespace-nowrap flex-shrink-0"
          >
            {t.cta}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 6.5h9M7.5 3l3.5 3.5-3.5 3.5" />
            </svg>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((project) => (
            <article
              key={project.titles.en}
              className="group rounded-2xl border border-[#E8E4DD] overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-[#F8F7F4]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-3 left-3 inline-block bg-white/90 backdrop-blur-sm text-[10px] font-semibold tracking-[0.1em] uppercase text-[#5F6368] px-2.5 py-1 rounded-full border border-[#E8E4DD]/60">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-[#111111] mb-1 leading-snug">{project.titles[lang]}</h3>
                <p className="text-[12px] font-medium text-[#102A43]">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
