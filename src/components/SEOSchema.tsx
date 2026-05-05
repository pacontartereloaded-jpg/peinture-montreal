const DOMAIN = 'https://peinturemtl.ca'

export default function SEOSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${DOMAIN}/#business`,
    name: 'Peinture MTL',
    url: DOMAIN,
    telephone: '+1-450-914-7861',
    email: 'info@peinturemtl.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Montréal',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      postalCode: 'H1A 1A1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5017,
      longitude: -73.5673,
    },
    areaServed: [
      { '@type': 'City', name: 'Montréal' },
      { '@type': 'City', name: 'Laval' },
      { '@type': 'City', name: 'Longueuil' },
      { '@type': 'Neighborhood', name: 'Westmount' },
      { '@type': 'Neighborhood', name: 'Outremont' },
      { '@type': 'Neighborhood', name: 'Plateau-Mont-Royal' },
      { '@type': 'Neighborhood', name: 'Griffintown' },
      { '@type': 'Neighborhood', name: 'Verdun' },
      { '@type': 'Neighborhood', name: 'NDG' },
      { '@type': 'Neighborhood', name: 'Rosemont' },
      { '@type': 'Neighborhood', name: 'Ville-Marie' },
      { '@type': 'Neighborhood', name: 'Mile End' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Painting Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Painting', description: 'Professional interior painting for walls, ceilings, trim, and doors in homes and condos across Montreal.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Painting', description: 'Weather-resistant exterior painting for siding, brick, balconies, railings, and trim in Montreal.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Condo & Apartment Painting', description: 'Specialized painting services for condominiums and apartment units in Montreal.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Painting', description: 'Professional commercial painting services for offices, retail spaces, and businesses in Montreal.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Painting', description: 'Precision cabinet refinishing and painting for kitchens and bathrooms.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drywall Repair & Surface Preparation', description: 'Complete surface preparation including drywall repair, sanding, priming, and patching.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Colour Consultation', description: 'Expert colour selection guidance for your home or commercial space.' } },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    image: `${DOMAIN}/og-image.jpg`,
    sameAs: [DOMAIN],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does professional painting cost in Montreal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The cost of professional painting in Montreal depends on the size of the space, surface condition, number of coats, and scope of work. A standard bedroom typically starts from a few hundred dollars, while full-home or commercial projects are priced after a detailed on-site estimate. We provide clear, itemized quotes with no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer both interior and exterior painting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in both interior and exterior painting for homes, condos, and commercial properties across Montreal. Interior work includes walls, ceilings, trim, and doors. Exterior work covers siding, brick, balconies, railings, and trim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with colour selection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We offer colour consultation as part of our service, helping you choose shades that work with your lighting, architecture, and overall vision. Whether you have a palette in mind or are starting from scratch, we are glad to guide you through the process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you paint condos and apartments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, condo and apartment painting is one of our specialties. We understand the unique requirements of condo buildings — shared spaces, building access rules, and noise restrictions — and we plan our work to minimize disruption to your building and neighbours.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical painting project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Duration depends on the size and complexity of the project. A single room can often be completed in one to two days. Full apartment or house repaints typically take three to seven days. Commercial projects vary depending on scope. We will give you a realistic timeline during the estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas around Montreal do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve Montreal and its surrounding areas including Laval, Longueuil, Westmount, Outremont, Plateau-Mont-Royal, Griffintown, Mile End, NDG, Rosemont, Verdun, Ville-Marie, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you prepare walls before painting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surface preparation is the most critical step in any quality painting project. We fill holes and cracks, sand imperfections, prime where needed, and carefully protect floors, furniture, and fixtures before any paint goes on. A lasting finish starts with meticulous preparation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you work around business hours for commercial projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. For commercial painting projects, we can schedule work during evenings, weekends, or off-peak hours to minimize disruption to your business operations. We coordinate a schedule that works best for your team.',
        },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DOMAIN}/#website`,
    url: DOMAIN,
    name: 'Peinture MTL',
    description: 'Professional painting services in Montreal for homes, condos, apartments, and commercial spaces.',
    inLanguage: ['fr-CA', 'en-CA'],
    publisher: { '@id': `${DOMAIN}/#business` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema, null, 0) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema, null, 0) }}
      />
    </>
  )
}
