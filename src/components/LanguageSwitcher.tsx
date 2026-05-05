import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const LANGUAGES = [
  {
    code: 'fr',
    label: 'Français',
    shortLabel: 'FR',
    path: '/fr',
    flag: (
      // Canada flag
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true" role="img">
        <rect width="22" height="16" rx="2" fill="#fff"/>
        {/* Left red band */}
        <rect width="5.5" height="16" rx="0" fill="#D52B1E"/>
        {/* Right red band */}
        <rect x="16.5" width="5.5" height="16" fill="#D52B1E"/>
        {/* Maple leaf simplified */}
        <path d="M11 3L11.6 5.2H14L12.2 6.4L12.8 8.6L11 7.4L9.2 8.6L9.8 6.4L8 5.2H10.4L11 3Z" fill="#D52B1E"/>
        <rect x="10.5" y="8.2" width="1" height="2.8" fill="#D52B1E"/>
      </svg>
    ),
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    path: '/',
    flag: (
      // UK flag
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true" role="img">
        <rect width="22" height="16" rx="2" fill="#012169"/>
        {/* White diagonals */}
        <path d="M0 0L22 16M22 0L0 16" stroke="white" strokeWidth="3.2"/>
        {/* Red diagonals */}
        <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="2"/>
        {/* White cross */}
        <rect x="9" y="0" width="4" height="16" fill="white"/>
        <rect x="0" y="6" width="22" height="4" fill="white"/>
        {/* Red cross */}
        <rect x="9.8" y="0" width="2.4" height="16" fill="#C8102E"/>
        <rect x="0" y="6.8" width="22" height="2.4" fill="#C8102E"/>
      </svg>
    ),
  },
  {
    code: 'es',
    label: 'Español',
    shortLabel: 'ES',
    path: '/es',
    flag: (
      // Mexico flag
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true" role="img">
        <rect width="22" height="16" rx="2" fill="#fff"/>
        {/* Left green band */}
        <rect width="7.33" height="16" rx="0" fill="#006847"/>
        {/* Right red band */}
        <rect x="14.67" width="7.33" height="16" fill="#CE1126"/>
        {/* Center coat of arms - simplified brown circle */}
        <circle cx="11" cy="8" r="2.8" fill="#8B6914" opacity="0.7"/>
        <circle cx="11" cy="8" r="2" fill="#5C8A3C"/>
        <circle cx="11" cy="8" r="1" fill="#8B4513" opacity="0.8"/>
      </svg>
    ),
  },
]

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const currentLang = location.pathname.startsWith('/fr')
    ? 'fr'
    : location.pathname.startsWith('/es')
    ? 'es'
    : 'en'

  const active = LANGUAGES.find(l => l.code === currentLang) ?? LANGUAGES[1]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#E8E4DD] bg-white hover:border-[#102A43] hover:bg-[#F8F7F4] transition-all duration-150"
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="flex-shrink-0 rounded-sm overflow-hidden shadow-sm">{active.flag}</span>
        <span className="text-[11px] font-semibold text-[#111111] tracking-wide">{active.shortLabel}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full mt-1.5 left-0 bg-white border border-[#E8E4DD] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden z-50 w-36"
          role="listbox"
          aria-label="Select language"
        >
          {LANGUAGES.map((lang) => (
            <a
              key={lang.code}
              href={lang.path}
              role="option"
              aria-selected={lang.code === currentLang}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 hover:bg-[#F8F7F4] transition-colors duration-100 ${
                lang.code === currentLang ? 'bg-[#F8F7F4]' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="flex-shrink-0 rounded-sm overflow-hidden shadow-sm">{lang.flag}</span>
              <span className="text-[13px] font-medium text-[#111111]">{lang.label}</span>
              {lang.code === currentLang && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#102A43" strokeWidth="2" strokeLinecap="round" className="ml-auto" aria-hidden="true">
                  <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
