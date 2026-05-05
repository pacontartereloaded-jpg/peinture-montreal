import { useState, useRef, useEffect } from 'react'
import CompareSlider from './CompareSlider'
import { BEFORE_AFTER_PROJECTS, type Project } from '../data/beforeAfterProjects'

const CARDS_PER_PAGE = 6

/* ─── Mini hover-reveal card ─────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered]   = useState(false)
  const [beforeOk, setBeforeOk] = useState(true)
  const [afterOk, setAfterOk]   = useState(true)

  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
      style={{ aspectRatio: '4 / 3', background: `linear-gradient(145deg, #1a3a58, #102A43)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="img"
      aria-label={`${project.title} — avant et après`}
    >
      {/* BEFORE — always in DOM, fades out on hover */}
      {beforeOk ? (
        <img
          src={project.before}
          alt={`Avant — ${project.title}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: hovered ? 0 : 1 }}
          onLoad={() => setBeforeOk(true)}
          onError={() => setBeforeOk(false)}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-700"
          style={{ background: `linear-gradient(145deg, #F0EDE8, ${project.accentColor}50)`, opacity: hovered ? 0 : 1 }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#8A7E72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
            <rect x="2" y="5" width="24" height="18" rx="2" /><circle cx="10" cy="12" r="2.5" /><path d="M2 19l7-6 5 5 4-4 10 7" />
          </svg>
          <span className="text-[11px] font-semibold text-[#8A7E72]/70 tracking-wide">Avant</span>
        </div>
      )}

      {/* AFTER — only mounted while hovered, fades in via animation */}
      {hovered && (
        afterOk ? (
          <img
            src={project.after}
            alt={`Après — ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            onLoad={() => setAfterOk(true)}
            onError={() => setAfterOk(false)}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 animate-fade-in"
            style={{ background: `linear-gradient(145deg, #1a3a58, ${project.accentColor}80)` }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M5 25V11l9-8 9 8v14" /><rect x="10" y="16" width="8" height="9" rx="1" />
            </svg>
            <span className="text-[11px] font-semibold text-white/50 tracking-wide">Après</span>
          </div>
        )
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" aria-hidden="true" />

      {/* State badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none" aria-hidden="true">
        <span
          className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm transition-all duration-500"
          style={{
            background: hovered ? 'rgba(16,42,67,0.85)' : 'rgba(0,0,0,0.5)',
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'white',
          }}
        >
          {hovered ? 'Après ✦' : 'Avant'}
        </span>
      </div>

      {/* Hover reveal hint — only shows before first hover */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#111111] text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg">
            Survolez
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-white text-[13px] font-semibold leading-tight mb-0.5">{project.title}</p>
        <p className="text-white/60 text-[11px]">{project.location}</p>
        <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mt-1.5" style={{ color: project.accentColor }}>
          {project.type}
        </p>
      </div>
    </article>
  )
}

/* ─── Stats row ─────────────────────────────────────────── */
const STATS = [
  { value: '200+', label: 'Projets réalisés' },
  { value: '8 ans', label: "D'expérience" },
  { value: '100%', label: 'Préparation incluse' },
  { value: '2–7j', label: 'Délai typique' },
]

/* ─── Main section ──────────────────────────────────────── */
export default function BeforeAfter() {
  const featured  = BEFORE_AFTER_PROJECTS.find(p => p.featured) ?? BEFORE_AFTER_PROJECTS[0]
  const cards     = BEFORE_AFTER_PROJECTS.filter(p => p !== featured)
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE)
  const visible_cards = cards.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE)

  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="avant-apres"
      ref={sectionRef}
      className="relative bg-[#0D2237] py-20 lg:py-32 overflow-hidden"
      aria-labelledby="beforeafter-heading"
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />
      {/* Warm glow */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(216,199,178,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#D8C7B2]/40" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D8C7B2]">Transformations</span>
            <span className="w-10 h-px bg-[#D8C7B2]/40" aria-hidden="true" />
          </div>
          <h2
            id="beforeafter-heading"
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5 text-balance"
          >
            Avant <span className="text-[#D8C7B2]">&amp;</span> Après
          </h2>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-xl mx-auto text-balance">
            Glissez le curseur pour voir la transformation. Chaque projet commence par une préparation méticuleuse et se termine par une finition irréprochable.
          </p>
        </div>

        {/* ── Featured slider ── */}
        <div className={`mb-5 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#D8C7B2]/60 mb-1 block">Projet vedette</span>
              <h3 className="text-[18px] font-bold text-white">{featured.title}</h3>
              <p className="text-[13px] text-white/45">{featured.location}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#A8B8A0] animate-pulse" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white/65">{featured.type}</span>
            </div>
          </div>
          <CompareSlider
            before={featured.before}
            after={featured.after}
            beforeAlt={`Avant peinture — ${featured.title}`}
            afterAlt={`Après peinture — ${featured.title}`}
            initialPosition={42}
          />
        </div>

        {/* ── Stats ── */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/10 mb-12 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {STATS.map(s => (
            <div key={s.label} className="bg-white/[0.03] px-6 py-4 text-center">
              <p className="text-2xl font-bold text-white mb-0.5">{s.value}</p>
              <p className="text-[12px] text-white/40 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Cards grid ── */}
        {cards.length > 0 && (
          <>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {visible_cards.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mb-12">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Page précédente"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3L5 7l4 4" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-9 h-9 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      page === i
                        ? 'bg-white text-[#102A43] shadow-lg'
                        : 'border border-white/15 text-white/50 hover:text-white hover:border-white/40'
                    }`}
                    aria-label={`Page ${i + 1}`}
                    aria-current={page === i ? 'page' : undefined}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Page suivante"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3l4 4-4 4" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* ── CTA ── */}
        <div className={`text-center transition-all duration-700 delay-[400ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-[15px] text-white/45 mb-5">Prêt à transformer votre espace? Commençons par une estimation gratuite.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 bg-white text-[#102A43] text-[14px] font-bold px-7 py-3.5 rounded hover:bg-[#F8F7F4] active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              Obtenir une estimation gratuite
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white/65 text-[14px] font-semibold px-6 py-3.5 rounded border border-white/15 hover:border-white/35 hover:text-white transition-all duration-200"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
