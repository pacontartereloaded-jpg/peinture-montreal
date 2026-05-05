export type { SEOPage, LocalAreaPage, FAQ, Benefit, RelatedPage, HreflangAlternate } from './seoTypes'
export { EN_PAGES } from './seoPages.en'
export { FR_PAGES } from './seoPages.fr'
export { ES_PAGES } from './seoPages.es'
export { LOCAL_AREA_PAGES } from './localPages'

import { EN_PAGES } from './seoPages.en'
import { FR_PAGES } from './seoPages.fr'
import { ES_PAGES } from './seoPages.es'
import { LOCAL_AREA_PAGES } from './localPages'
import type { SEOPage, LocalAreaPage } from './seoTypes'

export const ALL_SERVICE_PAGES: SEOPage[] = [...EN_PAGES, ...FR_PAGES, ...ES_PAGES]
export const ALL_PAGES: (SEOPage | LocalAreaPage)[] = [...ALL_SERVICE_PAGES, ...LOCAL_AREA_PAGES]

export function findServicePage(lang: string, slug: string): SEOPage | undefined {
  return ALL_SERVICE_PAGES.find(p => p.lang === lang && p.slug === slug)
}

export function findLocalPage(lang: string, slug: string): LocalAreaPage | undefined {
  return LOCAL_AREA_PAGES.find(p => p.lang === lang && p.slug === slug)
}

export function findPage(lang: string, slug: string): SEOPage | LocalAreaPage | undefined {
  return findServicePage(lang, slug) ?? findLocalPage(lang, slug)
}
