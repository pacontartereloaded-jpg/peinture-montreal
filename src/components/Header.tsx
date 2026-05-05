import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Interior', href: '#interior' },
  { label: 'Exterior', href: '#exterior' },
  { label: 'Our Work', href: '#avant-apres' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#estimate' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Top bar — language switcher + phone */}
      <div className="fixed top-0 inset-x-0 z-50 bg-[#102A43] border-b border-white/10 h-9">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center justify-between gap-4">
          {/* Language switcher — left */}
          <LanguageSwitcher />

          {/* Phone — right */}
          <a
            href="tel:+14509147861"
            className="flex items-center gap-1.5 text-[12px] text-white/75 hover:text-white transition-colors font-medium"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1.2 2a.8.8 0 01.8-.8H3.8l.7 2.5L3.3 4.5a5.6 5.6 0 002.8 2.8l.8-1.2 2.5.7v1.8a.8.8 0 01-.8.8C4.5 9.4 1.2 6.1 1.2 2z" />
            </svg>
            450 914-7861
          </a>
        </div>
      </div>

      {/* Main header — sits below the top bar (mt-9 = 36px) */}
      <header
        className={`fixed top-9 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-[#E8E4DD] shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-14 lg:h-[64px]">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Peinture MTL — retour à l'accueil"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#102A43] flex-shrink-0 transition-opacity group-hover:opacity-90">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.95" />
                  <rect x="8" y="1" width="5" height="9" rx="1.5" fill="white" fillOpacity="0.45" />
                </svg>
              </span>
              <span className="font-bold text-[14px] tracking-tight text-[#111111] leading-none">
                PEINTURE <span className="text-[#102A43]">MTL</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigation principale">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-[#5F6368] hover:text-[#111111] transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#estimate"
              className="hidden lg:inline-flex items-center gap-2 bg-[#102A43] text-white text-[13px] font-semibold px-5 py-2.5 rounded hover:bg-[#1a3a58] active:scale-[0.98] transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              Get a Free Estimate
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 -mr-1.5 rounded text-[#111111] hover:bg-[#F8F7F4] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l12 12M4 16L16 4" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          id="mobile-menu"
          className={`lg:hidden border-t border-[#E8E4DD] bg-white overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            menuOpen ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          <nav className="px-5 py-5 space-y-0.5" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-[15px] font-medium text-[#2C2C2C] hover:text-[#102A43] py-3 border-b border-[#F8F7F4] last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
            ))}
            <a
              href="#estimate"
              className="flex items-center justify-center bg-[#102A43] text-white text-[14px] font-semibold py-3.5 rounded mt-4 hover:bg-[#1a3a58] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get a Free Estimate
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
