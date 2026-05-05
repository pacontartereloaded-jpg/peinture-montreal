interface Props {
  localMention?: string
  lang: 'en' | 'fr' | 'es'
}

const CONTENT = {
  en: {
    heading: 'Serving Montréal and surrounding areas',
    body: 'Peinture MTL is based in Montréal and has worked across the city\'s most distinctive neighbourhoods for years. We understand the local building stock, the climate demands, and the high standard that Montréal homeowners and businesses expect.',
    areas: ['Plateau-Mont-Royal', 'Mile End', 'Outremont', 'Westmount', 'Griffintown', 'Old Montréal', 'NDG', 'Rosemont', 'Verdun', 'Ville-Marie', 'Laval', 'Longueuil'],
  },
  fr: {
    heading: 'Desservant Montréal et les environs',
    body: 'Peinture MTL est basée à Montréal et a travaillé dans les quartiers les plus distinctifs de la ville depuis des années. Nous comprenons le parc immobilier local, les exigences climatiques et les normes élevées qu\'attendent les propriétaires et entreprises montréalais.',
    areas: ['Plateau-Mont-Royal', 'Mile End', 'Outremont', 'Westmount', 'Griffintown', 'Vieux-Montréal', 'NDG', 'Rosemont', 'Verdun', 'Ville-Marie', 'Laval', 'Longueuil'],
  },
  es: {
    heading: 'Sirviendo a Montreal y áreas circundantes',
    body: 'Peinture MTL está basada en Montreal y ha trabajado en los barrios más distintivos de la ciudad durante años. Entendemos el parque de edificios local, las demandas climáticas y el alto estándar que esperan los propietarios y negocios de Montreal.',
    areas: ['Plateau-Mont-Royal', 'Mile End', 'Outremont', 'Westmount', 'Griffintown', 'Viejo Montreal', 'NDG', 'Rosemont', 'Verdun', 'Ville-Marie', 'Laval', 'Longueuil'],
  },
}

export default function LocalAreaSection({ localMention, lang }: Props) {
  const { heading, body, areas } = CONTENT[lang]
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-4">{heading}</h2>
            <p className="text-[16px] text-[#5F6368] leading-relaxed mb-4">{body}</p>
            {localMention && (
              <p className="text-[14px] text-[#3C3C3C] leading-relaxed border-l-2 border-[#102A43] pl-4">
                {localMention}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-block bg-[#F8F7F4] border border-[#E8E4DD] rounded-full px-3.5 py-1.5 text-[12px] font-medium text-[#3C3C3C]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
