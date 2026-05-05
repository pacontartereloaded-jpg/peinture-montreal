import { useEffect } from 'react'
import type { SEOPage, LocalAreaPage } from '../../data/seoTypes'

type Page = SEOPage | LocalAreaPage

interface Props {
  page: Page
}

function isServicePage(p: Page): p is SEOPage {
  return 'serviceType' in p
}

export default function SEOHead({ page }: Props) {
  useEffect(() => {
    document.title = page.title

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      let el = document.querySelector(`link[rel="${rel}"][href="${href}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
      if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v))
    }

    setMeta('description', page.metaDescription)
    setMeta('robots', 'index, follow')

    // OG
    setMeta('og:title', page.title, true)
    setMeta('og:description', page.metaDescription, true)
    setMeta('og:url', page.canonicalUrl, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', 'Peinture MTL', true)
    setMeta('og:image', 'https://peinturemtl.ca/og-image.jpg', true)

    // Twitter
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', page.title)
    setMeta('twitter:description', page.metaDescription)

    // Canonical
    setLink('canonical', page.canonicalUrl)

    // Hreflang
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflang.forEach(el => el.remove())
    page.hreflangAlternates.forEach(alt => {
      setLink('alternate', alt.url, { hreflang: alt.lang })
    })
    setLink('alternate', 'https://peinturemtl.ca', { hreflang: 'x-default' })

    // JSON-LD schemas
    const removeSchemas = () => {
      document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove())
    }
    removeSchemas()

    const addSchema = (schema: object) => {
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo-schema', 'true')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    // LocalBusiness
    addSchema({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://peinturemtl.ca/#business',
      name: 'Peinture MTL',
      url: 'https://peinturemtl.ca',
      telephone: '+14509147861',
      email: 'info@peinturemtl.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Montréal',
        addressRegion: 'QC',
        addressCountry: 'CA',
      },
      areaServed: { '@type': 'City', name: 'Montréal' },
      priceRange: '$$',
      image: 'https://peinturemtl.ca/og-image.jpg',
    })

    // Service schema (only for service pages)
    if (isServicePage(page)) {
      addSchema({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.h1,
        description: page.metaDescription,
        provider: { '@id': 'https://peinturemtl.ca/#business' },
        areaServed: page.areaServed.map(a => ({ '@type': 'City', name: a })),
        url: page.canonicalUrl,
      })
    }

    // FAQ schema
    if (page.faqs.length > 0) {
      addSchema({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      })
    }

    // Breadcrumb
    addSchema({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://peinturemtl.ca' },
        { '@type': 'ListItem', position: 2, name: page.h1, item: page.canonicalUrl },
      ],
    })

    return removeSchemas
  }, [page])

  return null
}
