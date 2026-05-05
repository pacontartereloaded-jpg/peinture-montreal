import { useParams } from 'react-router-dom'
import { findServicePage, findLocalPage } from '../data/seoPages'
import SEOPageTemplate from '../components/seo/SEOPageTemplate'
import LocalAreaPageTemplate from '../components/seo/LocalAreaPageTemplate'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SEOPage() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>()

  if (!lang || !slug || !['en', 'fr', 'es'].includes(lang)) {
    return <NotFound />
  }

  const typedLang = lang as 'en' | 'fr' | 'es'

  const servicePage = findServicePage(typedLang, slug)
  if (servicePage) {
    return (
      <>
        <Header />
        <main id="main-content">
          <SEOPageTemplate page={servicePage} />
        </main>
        <Footer />
      </>
    )
  }

  const localPage = findLocalPage(typedLang, slug)
  if (localPage) {
    return (
      <>
        <Header />
        <main id="main-content">
          <LocalAreaPageTemplate page={localPage} />
        </main>
        <Footer />
      </>
    )
  }

  return <NotFound />
}

function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <p className="text-[80px] font-bold text-[#E8E4DD] leading-none mb-4" aria-hidden="true">404</p>
          <h1 className="text-2xl font-bold text-[#111111] mb-3">Page not found</h1>
          <p className="text-[15px] text-[#5F6368] mb-6">The page you are looking for doesn't exist or has moved.</p>
          <a href="/" className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3 rounded hover:bg-[#1a3a58] transition-colors">
            Return home
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
