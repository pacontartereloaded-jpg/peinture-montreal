import { useEffect, useRef, useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

export default function Hero() {
  const lang = useLang()
  const t = HOMEPAGE[lang].hero

  const bgRef   = useRef<HTMLDivElement>(null)
  const [brushed, setBrushed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setBrushed(true), 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative h-[100svh] overflow-hidden flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ top: '-25%', left: 0, right: 0, height: '150%' }}
        aria-hidden="true"
      >
        <img
          src="/despues/16.jpeg"
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(108deg, rgba(10,26,46,0.92) 0%, rgba(10,26,46,0.70) 50%, rgba(10,26,46,0.30) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-16">
        <div className="max-w-[640px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-[#D8C7B2]/50" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#D8C7B2]">
              {t.eyebrow}
            </span>
          </div>

          {/* Headline + animated brush stroke */}
          <div className="relative mb-7">
            <h1
              id="hero-heading"
              className="relative z-10 text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.08] tracking-[-0.02em] text-balance"
            >
              {t.h1Line1}<br />
              {t.h1Line2}{' '}
              <span className="text-[#D8C7B2]">{t.h1Highlight}</span>
            </h1>

            {/* Brush stroke SVG */}
            <svg
              viewBox="0 0 1000 280"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              aria-hidden="true"
            >
              <path
                d="M -80,140 C 80,110 240,170 420,136 C 590,102 730,162 920,128 C 960,120 990,132 1080,126"
                fill="none"
                stroke="#D8C7B2"
                strokeWidth="235"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.11"
                pathLength="1000"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: brushed ? 0 : 1000,
                  transition: brushed
                    ? 'stroke-dashoffset 1.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
                    : 'none',
                }}
              />
              <path
                d="M -80,158 C 140,130 320,180 540,148 C 710,118 860,170 1080,140"
                fill="none"
                stroke="#D8C7B2"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.15"
                pathLength="1000"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: brushed ? 0 : 1000,
                  transition: brushed
                    ? 'stroke-dashoffset 2.1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
                    : 'none',
                }}
              />
            </svg>
          </div>

          <p className="text-[17px] lg:text-[18px] text-white/60 leading-[1.72] mb-9 max-w-[480px]">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-white text-[#102A43] text-[14px] font-bold px-7 py-3.5 rounded hover:bg-[#F8F7F4] active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              {t.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#avant-apres"
              className="inline-flex items-center gap-2 text-white text-[14px] font-semibold px-6 py-3.5 rounded border border-white/20 hover:border-white/45 hover:bg-white/10 transition-all duration-200"
            >
              {t.cta2}
            </a>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {t.trustPoints.map((pt) => (
              <div key={pt} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8B8A0] flex-shrink-0" aria-hidden="true" />
                <span className="text-[13px] text-white/55 font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stats — lg+ only */}
      <div className="hidden lg:flex absolute bottom-16 right-10 flex-col gap-3 z-10">
        <div className="bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 px-5 py-4 text-white min-w-[164px]">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-1">{t.statsLabel}</p>
          <p className="text-[26px] font-bold leading-none mb-0.5">{t.statsValue}</p>
          <p className="text-[11px] text-white/40">{t.statsDesc}</p>
        </div>
        <div className="bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 px-5 py-4 text-white">
          <div className="flex gap-0.5 mb-1.5" aria-label="5 stars">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} width="11" height="11" viewBox="0 0 13 13" fill="#D8C7B2" aria-hidden="true">
                <path d="M6.5 1L8.13 4.63H12L9.04 6.96L10.15 10.87L6.5 8.33L2.85 10.87L3.96 6.96L1 4.63H4.87L6.5 1Z" />
              </svg>
            ))}
          </div>
          <p className="text-[13px] font-semibold">{t.starsLabel}</p>
          <p className="text-[11px] text-white/40">{t.starsDesc}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{t.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
