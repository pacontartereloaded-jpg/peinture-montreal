import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

interface Testimonial {
  quote: string
  name: string
  location: string
  projectType: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'From the estimate to the final walkthrough, everything was handled with care. They prepared every surface properly, and the finish on our walls is flawless. Our Plateau apartment looks like a completely different space.',
    name: 'Sophie L.',
    location: 'Plateau-Mont-Royal',
    projectType: 'Interior — Full apartment repaint',
    initials: 'SL',
  },
  {
    quote: "We've had painters in before who rushed through the prep and it showed within a year. This time was different. The trim lines are sharp, the ceilings are even, and the crew left everything spotless. Excellent work.",
    name: 'Marc D.',
    location: 'Westmount',
    projectType: 'Interior — Heritage home',
    initials: 'MD',
  },
  {
    quote: 'They painted our condo in Griffintown — they were efficient, respectful of the building rules, and the colour they helped us choose works beautifully with the light. Would absolutely recommend.',
    name: 'Amélie R.',
    location: 'Griffintown',
    projectType: 'Interior — Condo with colour consultation',
    initials: 'AR',
  },
]

export default function Testimonials() {
  const lang = useLang()
  const t = HOMEPAGE[lang].testimonials

  return (
    <section id="testimonials" className="bg-[#F8F7F4] py-20 lg:py-28 border-y border-[#E8E4DD]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#102A43]">
              {t.eyebrow}
            </span>
            <span className="w-7 h-px bg-[#102A43]" aria-hidden="true" />
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 text-balance"
          >
            {t.h2}
          </h2>
          <p className="text-[16px] text-[#5F6368] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="bg-white border border-[#E8E4DD] rounded-2xl p-7 flex flex-col hover:shadow-sm hover:border-[#102A43]/20 transition-all duration-200"
            >
              <div className="text-[56px] leading-none text-[#E8E4DD] font-serif mb-3 -mt-2 select-none" aria-hidden="true">
                "
              </div>

              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#D8C7B2" aria-hidden="true">
                    <path d="M6.5 1L8.13 4.63H12L9.04 6.96L10.15 10.87L6.5 8.33L2.85 10.87L3.96 6.96L1 4.63H4.87L6.5 1Z" />
                  </svg>
                ))}
              </div>

              <blockquote className="flex-1 text-[14px] text-[#2C2C2C] leading-relaxed mb-7 italic">
                {testimonial.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-[#E8E4DD]">
                <div
                  className="w-10 h-10 rounded-full bg-[#102A43] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#111111]">{testimonial.name}</p>
                  <p className="text-[12px] text-[#5F6368]">{testimonial.location}</p>
                  <p className="text-[11px] text-[#5F6368] mt-0.5 italic">{testimonial.projectType}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-[12px] text-[#5F6368]/70">
          {lang === 'fr'
            ? 'Les noms et emplacements sont des exemples illustratifs. Des références clients réelles sont disponibles sur demande.'
            : lang === 'es'
            ? 'Los nombres y ubicaciones son ejemplos ilustrativos. Referencias reales de clientes disponibles a pedido.'
            : 'Names and locations are illustrative examples. Real client references available upon request.'}
        </p>
      </div>
    </section>
  )
}
