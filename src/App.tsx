import { Routes, Route } from 'react-router-dom'
import type { Lang } from './data/homepageContent'
import LangContext from './contexts/LangContext'
import SEOSchema from './components/SEOSchema'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import LocalAreas from './components/LocalAreas'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import InteriorPainting from './components/InteriorPainting'
import ExteriorPainting from './components/ExteriorPainting'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import EstimateForm from './components/EstimateForm'
import Footer from './components/Footer'
import SEOPage from './pages/SEOPage'

function HomePage({ lang = 'en' as Lang }) {
  return (
    <LangContext.Provider value={lang}>
      <SEOSchema />
      <Header />
      <main id="main-content">
        <Hero />
        <BeforeAfter />
        <TrustBar />
        <Services />
        <LocalAreas />
        <Process />
        <WhyChooseUs />
        <InteriorPainting />
        <ExteriorPainting />
        <Testimonials />
        <FAQ />
        <EstimateForm />
      </main>
      <Footer />
    </LangContext.Provider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage lang="en" />} />
      <Route path="/fr" element={<HomePage lang="fr" />} />
      <Route path="/es" element={<HomePage lang="es" />} />
      <Route path="/:lang/:slug" element={<SEOPage />} />
      <Route path="*" element={<SEOPage />} />
    </Routes>
  )
}

export default App
