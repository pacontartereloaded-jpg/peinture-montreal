import { useState } from 'react'

interface Props {
  lang: 'en' | 'fr' | 'es'
}

const CONTENT = {
  en: {
    heading: 'Get your free estimate',
    subheading: 'Fill in your details and we\'ll be in touch within one business day.',
    fields: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      projectType: 'Project type',
      location: 'Neighbourhood / area',
      message: 'Tell us about your project',
      submit: 'Send my request',
    },
    projectTypes: [
      'Interior painting',
      'Exterior painting',
      'Condo / apartment',
      'Cabinet painting',
      'Commercial painting',
      'Drywall repair & painting',
      'Full home repaint',
      'Other',
    ],
    success: 'Thank you — we\'ll be in touch soon.',
  },
  fr: {
    heading: 'Obtenez votre soumission gratuite',
    subheading: 'Remplissez vos coordonnées et nous vous contacterons dans un délai d\'un jour ouvrable.',
    fields: {
      name: 'Nom complet',
      email: 'Adresse courriel',
      phone: 'Numéro de téléphone',
      projectType: 'Type de projet',
      location: 'Quartier / secteur',
      message: 'Décrivez votre projet',
      submit: 'Envoyer ma demande',
    },
    projectTypes: [
      'Peinture intérieure',
      'Peinture extérieure',
      'Condo / appartement',
      'Peinture d\'armoires',
      'Peinture commerciale',
      'Réparation gypse et peinture',
      'Repeinture complète',
      'Autre',
    ],
    success: 'Merci — nous vous contacterons bientôt.',
  },
  es: {
    heading: 'Obtenga su presupuesto gratuito',
    subheading: 'Complete sus datos y nos comunicaremos con usted dentro de un día hábil.',
    fields: {
      name: 'Nombre completo',
      email: 'Dirección de correo electrónico',
      phone: 'Número de teléfono',
      projectType: 'Tipo de proyecto',
      location: 'Barrio / área',
      message: 'Cuéntenos sobre su proyecto',
      submit: 'Enviar mi solicitud',
    },
    projectTypes: [
      'Pintura interior',
      'Pintura exterior',
      'Condo / apartamento',
      'Pintura de gabinetes',
      'Pintura comercial',
      'Reparación de drywall y pintura',
      'Repintura completa',
      'Otro',
    ],
    success: 'Gracias — nos pondremos en contacto pronto.',
  },
}

export default function SEOEstimateForm({ lang }: Props) {
  const c = CONTENT[lang]
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-[#F8F7F4] border-t border-[#E8E4DD] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-2">{c.heading}</h2>
          <p className="text-[15px] text-[#5F6368] mb-8">{c.subheading}</p>

          {sent ? (
            <div className="bg-white border border-[#E8E4DD] rounded-xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#102A43]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#102A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 10l5 5 9-9" />
                </svg>
              </div>
              <p className="text-[16px] font-medium text-[#111111]">{c.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#E8E4DD] rounded-xl p-6 sm:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="seo-name" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.name} *</label>
                  <input
                    id="seo-name" type="text" required autoComplete="name"
                    className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#102A43] transition-colors"
                    placeholder="Jean Tremblay"
                  />
                </div>
                <div>
                  <label htmlFor="seo-email" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.email} *</label>
                  <input
                    id="seo-email" type="email" required autoComplete="email"
                    className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#102A43] transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="seo-phone" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.phone}</label>
                  <input
                    id="seo-phone" type="tel" autoComplete="tel"
                    className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#102A43] transition-colors"
                    placeholder="450 914-7861"
                  />
                </div>
                <div>
                  <label htmlFor="seo-location" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.location}</label>
                  <input
                    id="seo-location" type="text"
                    className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#102A43] transition-colors"
                    placeholder="ex. Plateau, NDG, Laval…"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="seo-project" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.projectType} *</label>
                <select
                  id="seo-project" required
                  className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] focus:outline-none focus:border-[#102A43] transition-colors bg-white"
                >
                  <option value="">—</option>
                  {c.projectTypes.map((pt) => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="seo-message" className="block text-[12px] font-semibold text-[#111111] mb-1.5">{c.fields.message}</label>
                <textarea
                  id="seo-message" rows={4}
                  className="w-full border border-[#E8E4DD] rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#102A43] transition-colors resize-none"
                  placeholder="…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#102A43] text-white text-[14px] font-semibold py-3.5 rounded-lg hover:bg-[#1a3a58] active:scale-[0.99] transition-all duration-200"
              >
                {c.fields.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
