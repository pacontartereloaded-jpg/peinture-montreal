import SEOHead from './SEOHead'
import ServiceProcess from './ServiceProcess'
import ServiceFAQ from './ServiceFAQ'
import RelatedServices from './RelatedServices'
import FinalCTA from './FinalCTA'
import SEOEstimateForm from './SEOEstimateForm'
import type { LocalAreaPage } from '../../data/seoTypes'

interface Props {
  page: LocalAreaPage
}

const BENEFITS_EN = [
  { title: 'Local knowledge', description: 'We know the neighbourhood, the building types, and the conditions specific to this area.' },
  { title: 'Interior painting', description: 'Walls, ceilings, trim, and doors finished with care and clean edges.' },
  { title: 'Exterior painting', description: 'Weather-resistant coatings applied with proper preparation for Montréal\'s climate.' },
  { title: 'Condo & apartment painting', description: 'Efficient, respectful work that complies with building rules and minimises disruption.' },
  { title: 'Free estimates', description: 'We provide clear written estimates at no charge for all residential and commercial projects.' },
  { title: 'Clean job sites', description: 'Your space is protected throughout and left clean when we are done.' },
]

const BENEFITS_FR = [
  { title: 'Connaissance locale', description: 'Nous connaissons le quartier, les types de bâtiments et les conditions spécifiques à ce secteur.' },
  { title: 'Peinture intérieure', description: 'Murs, plafonds, moulures et portes finis avec soin et arêtes nettes.' },
  { title: 'Peinture extérieure', description: 'Revêtements résistants aux intempéries appliqués avec une préparation appropriée pour le climat montréalais.' },
  { title: 'Peinture de condo et appartement', description: 'Travail efficace et respectueux qui respecte les règlements de l\'immeuble.' },
  { title: 'Soumissions gratuites', description: 'Nous fournissons des soumissions écrites claires sans frais pour tous les projets.' },
  { title: 'Chantiers propres', description: 'Votre espace est protégé tout au long et laissé propre à notre départ.' },
]

const BENEFITS_ES = [
  { title: 'Conocimiento local', description: 'Conocemos el barrio, los tipos de edificios y las condiciones específicas de esta área.' },
  { title: 'Pintura interior', description: 'Paredes, techos, molduras y puertas terminados con cuidado y bordes limpios.' },
  { title: 'Pintura exterior', description: 'Recubrimientos resistentes al clima aplicados con preparación adecuada para el clima de Montreal.' },
  { title: 'Pintura de condo y apartamento', description: 'Trabajo eficiente y respetuoso que cumple con las reglas del edificio.' },
  { title: 'Presupuestos gratuitos', description: 'Proporcionamos presupuestos escritos claros sin cargo para todos los proyectos.' },
  { title: 'Sitios de trabajo limpios', description: 'Su espacio está protegido durante todo el trabajo y se deja limpio al terminar.' },
]

const SECTION_HEADINGS = {
  en: 'Painting services in',
  fr: 'Services de peinture à',
  es: 'Servicios de pintura en',
}

export default function LocalAreaPageTemplate({ page }: Props) {
  const benefits = page.lang === 'fr' ? BENEFITS_FR : page.lang === 'es' ? BENEFITS_ES : BENEFITS_EN

  return (
    <>
      <SEOHead page={page} />

      {/* Hero */}
      <section className="bg-[#F8F7F4] border-b border-[#E8E4DD] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                Peinture MTL — {page.area}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-5 text-balance">
              {page.h1}
            </h1>
            <p className="text-[17px] text-[#3C3C3C] leading-relaxed mb-8 max-w-2xl">{page.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={page.lang === 'fr' ? '/fr/soumission-peinture-montreal' : page.lang === 'es' ? '/es/cotizacion-pintura-montreal' : '/en/painting-estimate-montreal'}
                className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] transition-all duration-200"
              >
                {page.lang === 'fr' ? 'Obtenir une soumission gratuite' : page.lang === 'es' ? 'Obtener presupuesto gratuito' : 'Get a Free Estimate'}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-2">
            {SECTION_HEADINGS[page.lang]} {page.area}
          </h2>
          <p className="text-[15px] text-[#5F6368] mb-10 max-w-xl">
            {page.lang === 'fr'
              ? 'Les mêmes standards de préparation, de qualité et de soin — dans votre quartier.'
              : page.lang === 'es'
              ? 'Los mismos estándares de preparación, calidad y cuidado — en su barrio.'
              : 'The same standard of preparation, quality, and care — in your neighbourhood.'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 border border-[#E8E4DD] rounded-xl bg-[#F8F7F4]">
                <div className="w-2 h-2 rounded-full bg-[#102A43] mb-4" aria-hidden="true" />
                <h3 className="text-[15px] font-semibold text-[#111111] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#5F6368] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess lang={page.lang} />
      <RelatedServices pages={page.relatedPages} lang={page.lang} />
      <ServiceFAQ faqs={page.faqs} lang={page.lang} />
      <SEOEstimateForm lang={page.lang} />
      <FinalCTA lang={page.lang} />
    </>
  )
}
