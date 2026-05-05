export interface FAQ {
  q: string
  a: string
}

export interface Benefit {
  title: string
  description: string
}

export interface RelatedPage {
  label: string
  path: string
}

export interface HreflangAlternate {
  lang: string
  url: string
}

export interface SEOPage {
  lang: 'en' | 'fr' | 'es'
  slug: string
  path: string
  title: string
  metaDescription: string
  h1: string
  heroTagline: string
  intro: string
  serviceType: string
  areaServed: string[]
  benefits: Benefit[]
  bodySection?: {
    heading: string
    paragraphs: string[]
  }
  faqs: FAQ[]
  relatedPages: RelatedPage[]
  canonicalUrl: string
  hreflangAlternates: HreflangAlternate[]
  localMention?: string
}

export interface LocalAreaPage {
  lang: 'en' | 'fr' | 'es'
  slug: string
  path: string
  area: string
  areaFr: string
  areaEs: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  canonicalUrl: string
  hreflangAlternates: HreflangAlternate[]
  faqs: FAQ[]
  relatedPages: RelatedPage[]
}
