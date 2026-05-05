import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

const ICONS = [
  <svg key="shield" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2L3 6v6c0 4 3.5 6.5 7 7.5C13.5 18.5 17 16 17 12V6L10 2z" />
    <path d="M7 10l2 2 4-4" />
  </svg>,
  <svg key="clean" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l2-7h10l2 7H3z" />
    <path d="M8 10V7a2 2 0 114 0v3" />
    <path d="M10 13v1" />
  </svg>,
  <svg key="clock" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 6v4l2.5 2.5" />
  </svg>,
  <svg key="doc" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6h12M4 10h8M4 14h10" />
    <rect x="2" y="3" width="16" height="14" rx="2" />
  </svg>,
  <svg key="pin" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2C6 2 3 5 3 9c0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z" />
    <circle cx="10" cy="9" r="2" />
  </svg>,
]

export default function TrustBar() {
  const lang = useLang()
  const labels = HOMEPAGE[lang].trustBar

  return (
    <section
      className="bg-[#F8F7F4] border-y border-[#E8E4DD]"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-12">
          {labels.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-[#5F6368]"
            >
              <span className="text-[#102A43] flex-shrink-0">{ICONS[i]}</span>
              <span className="text-[13px] font-medium whitespace-nowrap">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
