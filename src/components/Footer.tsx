const FOOTER_SERVICES_EN = [
  { label: 'Interior Painting', href: '/en/interior-painting-montreal' },
  { label: 'Exterior Painting', href: '/en/exterior-painting-montreal' },
  { label: 'Residential Painting', href: '/en/residential-painting-montreal' },
  { label: 'Commercial Painting', href: '/en/commercial-painting-montreal' },
  { label: 'Condo & Apartment Painting', href: '/en/condo-painting-montreal' },
  { label: 'Cabinet Painting', href: '/en/cabinet-painting-montreal' },
  { label: 'Drywall Repair & Painting', href: '/en/drywall-repair-painting-montreal' },
  { label: 'Free Estimate', href: '/en/painting-estimate-montreal' },
]

const FOOTER_SERVICES_FR = [
  { label: 'Peinture intérieure', href: '/fr/peinture-interieure-montreal' },
  { label: 'Peinture extérieure', href: '/fr/peinture-exterieure-montreal' },
  { label: 'Peinture résidentielle', href: '/fr/peinture-residentielle-montreal' },
  { label: 'Peinture commerciale', href: '/fr/peinture-commerciale-montreal' },
  { label: 'Peinture condo', href: '/fr/peinture-condo-montreal' },
  { label: 'Soumission gratuite', href: '/fr/soumission-peinture-montreal' },
]

const FOOTER_AREAS = [
  { label: 'Plateau-Mont-Royal', href: '/en/painters-plateau-mont-royal' },
  { label: 'Mile End', href: '/en/painters-mile-end' },
  { label: 'Westmount', href: '/en/painters-westmount' },
  { label: 'Outremont', href: '/en/painters-outremont' },
  { label: 'Griffintown', href: '/en/painters-griffintown' },
  { label: 'Ville-Marie', href: '/en/painters-ville-marie' },
  { label: 'NDG', href: '/en/painters-ndg' },
  { label: 'Rosemont', href: '/en/painters-rosemont' },
  { label: 'Verdun', href: '/en/painters-verdun' },
  { label: 'Old Montréal', href: '/en/painters-old-montreal' },
  { label: 'Laval', href: '/en/painters-laval' },
  { label: 'Longueuil', href: '/en/painters-longueuil' },
]

const COMPANY_LINKS = [
  { label: 'Our Process', href: '/#process' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Project Gallery', href: '/#gallery' },
  { label: 'Client Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Painters Near Me', href: '/en/painters-near-me-montreal' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E4DD]" role="contentinfo">

      {/* Final CTA banner */}
      <div className="bg-[#F8F7F4] border-b border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-[18px] font-bold text-[#111111] mb-1">Start with a free estimate.</p>
            <p className="text-[14px] text-[#5F6368]">No commitment. Just a clear conversation about your project.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/en/painting-estimate-montreal"
              className="inline-flex items-center gap-2 bg-[#102A43] text-white text-[14px] font-semibold px-6 py-3.5 rounded hover:bg-[#1a3a58] transition-colors duration-200 whitespace-nowrap"
            >
              Request a Free Estimate
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
            <a
              href="/fr/soumission-peinture-montreal"
              className="inline-flex items-center gap-2 border border-[#E8E4DD] bg-white text-[#111111] text-[14px] font-medium px-5 py-3.5 rounded hover:border-[#102A43] transition-colors duration-200 whitespace-nowrap"
            >
              Soumission gratuite
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4" aria-label="Peinture MTL home">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#102A43]">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.95" />
                  <rect x="8" y="1" width="5" height="9" rx="1.5" fill="white" fillOpacity="0.45" />
                </svg>
              </span>
              <span className="font-bold text-[14px] tracking-tight text-[#111111]">
                PEINTURE <span className="text-[#102A43]">MTL</span>
              </span>
            </a>
            <p className="text-[13px] text-[#5F6368] leading-relaxed mb-5 max-w-[220px]">
              Professional painting services for homes, condos, and businesses across Montréal and surrounding areas.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@peinturemtl.ca"
                className="flex items-center gap-2 text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="2.5" width="11" height="8" rx="1" />
                  <path d="M1 4l5.5 3.5L12 4" />
                </svg>
                info@peinturemtl.ca
              </a>
              <a
                href="tel:+14509147861"
                className="flex items-center gap-2 text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1.5 2.5a1 1 0 011-1H5l.8 2.8-1.2.8a7 7 0 003.6 3.6l.8-1.2L11.5 8v2.5a1 1 0 01-1 1C5 11.5 1.5 8 1.5 3.5v-1z" />
                </svg>
                450 914-7861
              </a>
              <div className="flex items-center gap-2 text-[13px] text-[#5F6368]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6.5 1.5C4 1.5 2 3.5 2 6c0 3.5 4.5 7.5 4.5 7.5S11 9.5 11 6c0-2.5-2-4.5-4.5-4.5z" />
                  <circle cx="6.5" cy="6" r="1.5" />
                </svg>
                Montréal, Québec, Canada
              </div>
            </div>
          </div>

          {/* EN Services column */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#111111] mb-4">Services (EN)</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_SERVICES_EN.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors duration-150">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FR Services column */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#111111] mb-4">Services (FR)</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_SERVICES_FR.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors duration-150">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#111111] mb-4">Service Areas</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_AREAS.map((area) => (
                <li key={area.label}>
                  <a href={area.href} className="text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors duration-150">
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#111111] mb-4">Company</h3>
            <ul className="space-y-2.5 mb-8" role="list">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-[#5F6368] hover:text-[#102A43] transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#E8E4DD]">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5F6368] mb-2">Hours</p>
              <p className="text-[12px] text-[#2C2C2C] font-medium">Mon – Fri: 8:00 – 18:00</p>
              <p className="text-[12px] text-[#2C2C2C] font-medium">Saturday: 9:00 – 15:00</p>
              <p className="text-[12px] text-[#5F6368] mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5F6368] text-center sm:text-left">
            © {new Date().getFullYear()} Peinture MTL. Professional painting services in Montréal, Québec and surrounding areas.
          </p>
          <div className="flex items-center gap-4">
            <a href="/en/painting-services-montreal" className="text-[12px] text-[#5F6368] hover:text-[#102A43] transition-colors">EN</a>
            <span className="text-[#E8E4DD]">|</span>
            <a href="/fr/peinture-montreal" className="text-[12px] text-[#5F6368] hover:text-[#102A43] transition-colors">FR</a>
            <span className="text-[#E8E4DD]">|</span>
            <a href="/es/pintores-en-montreal" className="text-[12px] text-[#5F6368] hover:text-[#102A43] transition-colors">ES</a>
            <span className="text-[#E8E4DD]">|</span>
            <a href="/" className="text-[12px] text-[#5F6368] hover:text-[#102A43] transition-colors">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
