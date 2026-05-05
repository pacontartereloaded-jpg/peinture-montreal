import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: { en: FAQItem[]; fr: FAQItem[]; es: FAQItem[] } = {
  en: [
    { question: 'How much does professional painting cost in Montréal?', answer: "Cost depends on the size of the space, the current condition of the surfaces, and the scope of work. A single bedroom typically starts from a few hundred dollars; a full home or commercial project is priced after an on-site visit. We provide clear, itemised estimates in writing — no vague ranges, no hidden charges." },
    { question: 'Do you offer both interior and exterior painting?', answer: 'Yes. We handle both interior and exterior painting across Montréal and the surrounding area. Interior work covers walls, ceilings, trim, cabinets, and doors. Exterior work includes siding, brick, balconies, railings, exterior doors, and trim. Many clients have us handle both in a single project.' },
    { question: 'Do you help with colour selection?', answer: "Absolutely. Choosing the right colour is harder than it looks — undertones shift dramatically under different lighting conditions. We offer colour consultation as part of our service, helping you find shades that work with your architecture, furnishings, and natural light." },
    { question: 'Do you paint condos and apartments?', answer: 'Yes. Condo and apartment painting is one of our specialties. We understand the requirements of condo buildings: access hours, noise restrictions, shared corridors, elevator rules, and the need to work efficiently in occupied buildings.' },
    { question: 'How long does a typical painting project take?', answer: "A single room can often be completed in one to two days including preparation. A full apartment or condo repaint typically takes three to five days. A whole house or large commercial space may take longer depending on scope." },
    { question: 'What areas around Montréal do you serve?', answer: "We work throughout Montréal — Plateau-Mont-Royal, Mile End, Westmount, Outremont, NDG, Rosemont, Verdun, Griffintown, Old Montréal, Ville-Marie — and in the surrounding areas of Laval and Longueuil." },
    { question: 'Do you prepare the walls before painting?', answer: "Surface preparation is the most important part of the job. We fill holes and cracks, sand imperfections, apply primer where needed, and mask everything that shouldn't be painted. A quality finish is impossible without thorough preparation." },
    { question: 'Can you work around business hours for commercial projects?', answer: "Yes. For offices, retail spaces, and other commercial properties, we can schedule work outside of business hours — evenings, weekends, or overnight — to minimise disruption to your operations and staff." },
  ],
  fr: [
    { question: 'Combien coûte la peinture professionnelle à Montréal?', answer: "Le coût dépend de la taille de l'espace, de l'état actuel des surfaces et de l'étendue des travaux. Une chambre simple commence généralement à quelques centaines de dollars; un projet de maison complète ou commercial est évalué après une visite sur place. Nous fournissons des soumissions claires et détaillées par écrit." },
    { question: 'Offrez-vous la peinture intérieure et extérieure?', answer: "Oui. Nous réalisons la peinture intérieure et extérieure à Montréal et dans les environs. Les travaux intérieurs couvrent murs, plafonds, moulures, armoires et portes. Les travaux extérieurs incluent bardages, briques, balcons, rampes, portes extérieures et moulures." },
    { question: 'Aidez-vous au choix des couleurs?', answer: "Absolument. Choisir la bonne couleur est plus difficile qu'il n'y paraît — les sous-tons changent considérablement selon les conditions d'éclairage. Nous offrons une consultation couleur dans le cadre de notre service." },
    { question: 'Peignez-vous les condos et appartements?', answer: "Oui. La peinture de condos et d'appartements est l'une de nos spécialités. Nous comprenons les exigences des immeubles en copropriété: heures d'accès, restrictions de bruit, corridors communs et règles d'ascenseur." },
    { question: 'Combien de temps dure un projet de peinture typique?', answer: "Une seule pièce peut souvent être complétée en un à deux jours incluant la préparation. Une repeinture complète d'appartement ou de condo prend généralement trois à cinq jours. Une maison entière ou un grand espace commercial peut prendre plus de temps." },
    { question: 'Quels secteurs de Montréal desservez-vous?', answer: "Nous travaillons dans tout Montréal — Plateau-Mont-Royal, Mile End, Westmount, Outremont, NDG, Rosemont, Verdun, Griffintown, Vieux-Montréal, Ville-Marie — ainsi que dans les environs de Laval et Longueuil." },
    { question: 'Préparez-vous les murs avant de peindre?', answer: "La préparation des surfaces est la partie la plus importante du travail. Nous bouchons les trous et fissures, sablons les imperfections, appliquons l'apprêt selon les besoins et masquons tout ce qui ne doit pas être peint." },
    { question: 'Pouvez-vous travailler en dehors des heures d\'affaires pour les projets commerciaux?', answer: "Oui. Pour les bureaux, commerces de détail et autres propriétés commerciales, nous pouvons planifier les travaux en dehors des heures d'affaires — soirs, fins de semaine ou nuits — pour minimiser les perturbations." },
  ],
  es: [
    { question: '¿Cuánto cuesta la pintura profesional en Montreal?', answer: "El costo depende del tamaño del espacio, el estado actual de las superficies y el alcance del trabajo. Una habitación individual generalmente comienza desde unos pocos cientos de dólares; un proyecto de hogar completo o comercial se cotiza después de una visita en el sitio." },
    { question: '¿Ofrecen pintura interior y exterior?', answer: "Sí. Realizamos pintura interior y exterior en Montreal y sus alrededores. El trabajo interior cubre paredes, techos, molduras, gabinetes y puertas. El trabajo exterior incluye revestimientos, ladrillos, balcones, barandillas, puertas exteriores y molduras." },
    { question: '¿Ayudan con la selección de colores?', answer: "Absolutamente. Elegir el color correcto es más difícil de lo que parece — los subtonos cambian drásticamente bajo diferentes condiciones de iluminación. Ofrecemos consulta de colores como parte de nuestro servicio." },
    { question: '¿Pintan condos y apartamentos?', answer: "Sí. La pintura de condos y apartamentos es una de nuestras especialidades. Entendemos los requisitos de los edificios de condos: horarios de acceso, restricciones de ruido, pasillos compartidos y reglas de ascensor." },
    { question: '¿Cuánto tiempo tarda un proyecto típico?', answer: "Una habitación individual se puede completar en uno o dos días incluida la preparación. Una repintura completa de apartamento o condo típicamente toma tres a cinco días. Una casa entera o espacio comercial grande puede tomar más tiempo." },
    { question: '¿Qué áreas de Montreal sirven?', answer: "Trabajamos en todo Montreal — Plateau-Mont-Royal, Mile End, Westmount, Outremont, NDG, Rosemont, Verdun, Griffintown, Viejo Montreal, Ville-Marie — y en las áreas circundantes de Laval y Longueuil." },
    { question: '¿Preparan las paredes antes de pintar?', answer: "La preparación de superficies es la parte más importante del trabajo. Rellenamos agujeros y grietas, lijamos imperfecciones, aplicamos sellador donde sea necesario y enmascaramos todo lo que no debe pintarse." },
    { question: '¿Pueden trabajar fuera del horario comercial para proyectos comerciales?', answer: "Sí. Para oficinas, locales comerciales y otras propiedades comerciales, podemos programar trabajos fuera del horario comercial — tardes, fines de semana o noches — para minimizar las interrupciones." },
  ],
}

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E8E4DD] last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-[#111111] group-hover:text-[#102A43] transition-colors duration-200 leading-snug">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#E8E4DD] flex items-center justify-center transition-all duration-200 ${
            isOpen ? 'bg-[#102A43] border-[#102A43] rotate-45' : 'bg-white group-hover:border-[#102A43]/40'
          }`}
          aria-hidden="true"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            stroke={isOpen ? 'white' : '#5F6368'}
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <path d="M5.5 2v7M2 5.5h7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[14px] text-[#5F6368] leading-relaxed max-w-2xl">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const lang = useLang()
  const t = HOMEPAGE[lang].faq
  const items = FAQ_ITEMS[lang]

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[16px] text-[#5F6368] leading-relaxed mb-8 text-balance">
              {t.subtitle}
            </p>

            <a
              href="#estimate"
              className="inline-flex items-center gap-2 text-[#102A43] text-[14px] font-semibold border-b-2 border-[#102A43]/20 hover:border-[#102A43] transition-colors duration-200 pb-0.5"
            >
              {t.askDirectly}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l3.5 3.5-3.5 3.5" />
              </svg>
            </a>
          </div>

          {/* Right: accordion */}
          <div className="border-t border-[#E8E4DD]" role="list" aria-label="Frequently asked questions">
            {items.map((item, index) => (
              <div role="listitem" key={item.question}>
                <FAQItemComponent
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
