interface Props {
  lang: 'en' | 'fr' | 'es'
}

const CONTENT = {
  en: {
    heading: 'How we work',
    steps: [
      { num: '01', title: 'Consultation', body: 'We visit your space, assess the surfaces, and discuss your goals, timeline, and colour preferences. You receive a written estimate with no obligation.' },
      { num: '02', title: 'Preparation', body: 'Before any paint is applied, surfaces are cleaned, repaired, primed, and protected. Preparation is the foundation of a lasting finish.' },
      { num: '03', title: 'Painting', body: 'We apply coatings methodically — the right number of coats, the right products, in the right sequence. Clean edges throughout.' },
      { num: '04', title: 'Final Walkthrough', body: 'Before we leave, we walk through the completed work with you. Touch-ups are done on the spot. The space is left clean and ready.' },
    ],
  },
  fr: {
    heading: 'Comment on travaille',
    steps: [
      { num: '01', title: 'Consultation', body: 'Nous visitons votre espace, évaluons les surfaces et discutons de vos objectifs, de votre calendrier et de vos préférences de couleurs. Vous recevez une soumission écrite sans engagement.' },
      { num: '02', title: 'Préparation', body: 'Avant d\'appliquer la moindre peinture, les surfaces sont nettoyées, réparées, apprêtées et protégées. La préparation est la base d\'un fini durable.' },
      { num: '03', title: 'Peinture', body: 'Nous appliquons les revêtements méthodiquement — le bon nombre de couches, les bons produits, dans le bon ordre. Des arêtes nettes tout au long du travail.' },
      { num: '04', title: 'Inspection finale', body: 'Avant de partir, nous visitons le travail terminé avec vous. Les retouches sont faites sur place. L\'espace est laissé propre et prêt.' },
    ],
  },
  es: {
    heading: 'Cómo trabajamos',
    steps: [
      { num: '01', title: 'Consulta', body: 'Visitamos su espacio, evaluamos las superficies y discutimos sus objetivos, cronograma y preferencias de color. Recibe un presupuesto escrito sin compromiso.' },
      { num: '02', title: 'Preparación', body: 'Antes de aplicar cualquier pintura, las superficies se limpian, reparan, sellan y protegen. La preparación es la base de un acabado duradero.' },
      { num: '03', title: 'Pintura', body: 'Aplicamos recubrimientos metódicamente — el número correcto de capas, los productos correctos, en la secuencia correcta. Bordes limpios en todo momento.' },
      { num: '04', title: 'Revisión final', body: 'Antes de irnos, revisamos el trabajo completado con usted. Los retoques se hacen en el momento. El espacio se deja limpio y listo.' },
    ],
  },
}

export default function ServiceProcess({ lang }: Props) {
  const { heading, steps } = CONTENT[lang]
  return (
    <section className="bg-[#F8F7F4] border-b border-[#E8E4DD] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-10">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-[48px] font-bold text-[#E8E4DD] leading-none mb-3 select-none" aria-hidden="true">
                {step.num}
              </div>
              <h3 className="text-[16px] font-semibold text-[#111111] mb-2">{step.title}</h3>
              <p className="text-[13px] text-[#5F6368] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
