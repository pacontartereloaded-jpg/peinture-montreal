import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useLang } from '../contexts/LangContext'
import { HOMEPAGE } from '../data/homepageContent'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  location: string
  message: string
}

const PROJECT_TYPES = {
  en: [
    'Interior painting — residential',
    'Interior painting — condo/apartment',
    'Exterior painting',
    'Commercial painting',
    'Cabinet painting',
    'Drywall repair & surface preparation',
    'Colour consultation',
    'Other / Multiple services',
  ],
  fr: [
    'Peinture intérieure — résidentielle',
    'Peinture intérieure — condo/appartement',
    'Peinture extérieure',
    'Peinture commerciale',
    'Peinture d\'armoires',
    'Réparation de gypse et préparation',
    'Consultation couleur',
    'Autre / Plusieurs services',
  ],
  es: [
    'Pintura interior — residencial',
    'Pintura interior — condo/apartamento',
    'Pintura exterior',
    'Pintura comercial',
    'Pintura de gabinetes',
    'Reparación de drywall y preparación',
    'Consulta de colores',
    'Otro / Múltiples servicios',
  ],
}

const FORM_LABELS = {
  en: {
    formTitle: 'Request an Estimate',
    name: 'Full name', phone: 'Phone number', email: 'Email address',
    projectType: 'Project type', area: 'Neighbourhood or area', details: 'Project details',
    selectService: 'Select a service...',
    areaPlaceholder: 'e.g. Plateau-Mont-Royal, Westmount, Laval...',
    messagePlaceholder: 'Describe your space, any specific requirements, timeline, or questions...',
    submitBtn: 'Request Estimate',
    responseNote: 'We typically respond within one business day. No commitment required.',
    errorName: 'Please enter your name.',
    errorEmail: 'Please enter a valid email address.',
    errorProject: 'Please select a project type.',
    successTitle: "We've received your request",
    successMessage: "Thank you for reaching out. We'll be in touch within one business day to schedule your estimate.",
    submitAnother: 'Submit another request',
  },
  fr: {
    formTitle: 'Demander une soumission',
    name: 'Nom complet', phone: 'Numéro de téléphone', email: 'Adresse courriel',
    projectType: 'Type de projet', area: 'Quartier ou secteur', details: 'Détails du projet',
    selectService: 'Choisir un service...',
    areaPlaceholder: 'ex. Plateau-Mont-Royal, Westmount, Laval...',
    messagePlaceholder: 'Décrivez votre espace, vos exigences particulières, l\'échéancier ou vos questions...',
    submitBtn: 'Demander la soumission',
    responseNote: 'Nous répondons généralement dans un jour ouvrable. Aucun engagement requis.',
    errorName: 'Veuillez entrer votre nom.',
    errorEmail: 'Veuillez entrer une adresse courriel valide.',
    errorProject: 'Veuillez sélectionner un type de projet.',
    successTitle: 'Votre demande a bien été reçue',
    successMessage: 'Merci de nous avoir contactés. Nous vous répondrons dans un jour ouvrable pour planifier votre soumission.',
    submitAnother: 'Soumettre une autre demande',
  },
  es: {
    formTitle: 'Solicitar presupuesto',
    name: 'Nombre completo', phone: 'Número de teléfono', email: 'Correo electrónico',
    projectType: 'Tipo de proyecto', area: 'Barrio o área', details: 'Detalles del proyecto',
    selectService: 'Seleccionar un servicio...',
    areaPlaceholder: 'ej. Plateau-Mont-Royal, Westmount, Laval...',
    messagePlaceholder: 'Describa su espacio, requisitos específicos, plazos o preguntas...',
    submitBtn: 'Solicitar presupuesto',
    responseNote: 'Generalmente respondemos en un día hábil. Sin compromiso requerido.',
    errorName: 'Por favor ingrese su nombre.',
    errorEmail: 'Por favor ingrese una dirección de correo válida.',
    errorProject: 'Por favor seleccione un tipo de proyecto.',
    successTitle: 'Hemos recibido su solicitud',
    successMessage: 'Gracias por contactarnos. Nos comunicaremos en un día hábil para programar su presupuesto.',
    submitAnother: 'Enviar otra solicitud',
  },
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
}

export default function EstimateForm() {
  const lang = useLang()
  const t = HOMEPAGE[lang].estimate
  const labels = FORM_LABELS[lang]

  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = labels.errorName
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = labels.errorEmail
    if (!form.projectType) newErrors.projectType = labels.errorProject
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="estimate" className="bg-[#102A43] py-20 lg:py-28" aria-labelledby="estimate-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: CTA content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-7 h-px bg-[#D8C7B2]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#D8C7B2]">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="estimate-heading"
              className="text-3xl sm:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-5 text-balance"
            >
              {t.h2}
            </h2>

            <p className="text-[17px] text-white/75 leading-relaxed mb-8 max-w-[440px] text-balance">
              {t.subtitle}
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-8">
              {t.processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[12px] font-bold text-white/60 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px] text-white/80 font-medium">{step}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="border-t border-white/10 pt-8 space-y-3">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" aria-hidden="true">
                  <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
                  <path d="M2 7h12" />
                  <path d="M8 2v5" />
                </svg>
                <a href="mailto:info@peinturemtl.ca" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  info@peinturemtl.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.5l1 3.5-1.5 1a9 9 0 004.5 4.5l1-1.5L14 10.5V13a1 1 0 01-1 1C5.8 14 2 10.2 2 6V3z" />
                </svg>
                <a href="tel:+14509147861" className="text-[14px] text-white/70 hover:text-white transition-colors">
                  450 914-7861
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" aria-hidden="true">
                  <path d="M8 2C5 2 3 4.5 3 7c0 4.5 5 9 5 9s5-4.5 5-9c0-2.5-2-5-5-5z" />
                  <circle cx="8" cy="7" r="2" />
                </svg>
                <span className="text-[14px] text-white/70">Montréal, Québec</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-14 h-14 rounded-full bg-[#EEF2EE] flex items-center justify-center mb-5" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8B8A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#111111] mb-3">{labels.successTitle}</h3>
                <p className="text-[15px] text-[#5F6368] leading-relaxed max-w-xs">
                  {labels.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[13px] font-semibold text-[#102A43] hover:underline"
                >
                  {labels.submitAnother}
                </button>
              </div>
            ) : (
              <form
                className="bg-white rounded-2xl p-7 lg:p-8 shadow-[0_8px_48px_rgba(0,0,0,0.12)]"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Estimate request form"
              >
                <h3 className="text-[18px] font-bold text-[#111111] mb-6">{labels.formTitle}</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                      {labels.name} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className={`w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border rounded-lg placeholder-[#ABABAB] outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all ${
                        errors.name ? 'border-red-400' : 'border-[#E8E4DD]'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                      {labels.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border border-[#E8E4DD] rounded-lg placeholder-[#ABABAB] outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                    {labels.email} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border rounded-lg placeholder-[#ABABAB] outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all ${
                      errors.email ? 'border-red-400' : 'border-[#E8E4DD]'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Project type */}
                <div className="mb-4">
                  <label htmlFor="projectType" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                    {labels.projectType} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border rounded-lg outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all appearance-none cursor-pointer ${
                      errors.projectType ? 'border-red-400' : 'border-[#E8E4DD]'
                    } ${!form.projectType ? 'text-[#ABABAB]' : ''}`}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? 'project-error' : undefined}
                  >
                    <option value="" disabled>{labels.selectService}</option>
                    {PROJECT_TYPES[lang].map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="project-error" className="mt-1 text-[11px] text-red-500">{errors.projectType}</p>
                  )}
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label htmlFor="location" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                    {labels.area}
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder={labels.areaPlaceholder}
                    className="w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border border-[#E8E4DD] rounded-lg placeholder-[#ABABAB] outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[12px] font-semibold text-[#2C2C2C] mb-1.5">
                    {labels.details}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={labels.messagePlaceholder}
                    className="w-full px-4 py-2.5 text-[14px] text-[#111111] bg-[#F8F7F4] border border-[#E8E4DD] rounded-lg placeholder-[#ABABAB] outline-none focus:ring-2 focus:ring-[#102A43]/20 focus:border-[#102A43] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#102A43] text-white text-[15px] font-semibold py-3.5 rounded-lg hover:bg-[#1a3a58] active:scale-[0.99] transition-all duration-200 shadow-sm"
                >
                  {labels.submitBtn}
                </button>

                <p className="mt-4 text-[11px] text-[#5F6368] text-center">
                  {labels.responseNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
