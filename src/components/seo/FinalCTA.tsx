interface Props {
  lang: 'en' | 'fr' | 'es'
}

const CONTENT = {
  en: {
    heading: 'Ready to refresh your space?',
    body: 'Request a clear painting estimate in Montréal. We\'ll visit, assess, and provide a written quote — no obligation, no pressure.',
    cta: 'Request a Free Estimate',
    tel: 'Or call us directly',
  },
  fr: {
    heading: 'Prêt à rafraîchir votre espace?',
    body: 'Demandez une soumission de peinture claire à Montréal. Nous visitons, évaluons et remettons un devis écrit — sans engagement.',
    cta: 'Demander une soumission gratuite',
    tel: 'Ou appelez-nous directement',
  },
  es: {
    heading: '¿Listo para renovar su espacio?',
    body: 'Solicite una cotización de pintura clara en Montreal. Visitamos, evaluamos y proporcionamos un presupuesto escrito — sin compromiso ni presión.',
    cta: 'Solicitar presupuesto gratuito',
    tel: 'O llámenos directamente',
  },
}

const ESTIMATE_PATH = {
  en: '/en/painting-estimate-montreal',
  fr: '/fr/soumission-peinture-montreal',
  es: '/es/cotizacion-pintura-montreal',
}

export default function FinalCTA({ lang }: Props) {
  const { heading, body, cta, tel } = CONTENT[lang]
  return (
    <section className="bg-[#102A43] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">{heading}</h2>
        <p className="text-[17px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">{body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ESTIMATE_PATH[lang]}
            className="inline-flex items-center gap-2 bg-white text-[#102A43] text-[15px] font-semibold px-7 py-4 rounded hover:bg-[#F8F7F4] active:scale-[0.98] transition-all duration-200"
          >
            {cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
          <a
            href="tel:+14509147861"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-[14px] font-medium px-6 py-4 rounded hover:border-white/60 transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1.5 2.5a1 1 0 011-1H5l.8 2.8-1.2.8a7 7 0 003.6 3.6l.8-1.2L11.5 8v2.5a1 1 0 01-1 1C5 11.5 1.5 8 1.5 3.5v-1z" />
            </svg>
            {tel}
          </a>
        </div>
      </div>
    </section>
  )
}
