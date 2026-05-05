import { useState, useRef, useCallback, useEffect } from 'react'

interface CompareSliderProps {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  initialPosition?: number
}

const PLACEHOLDER_BEFORE = 'linear-gradient(145deg, #F0EDE8 0%, #DDD8D0 50%, #C8C0B4 100%)'
const PLACEHOLDER_AFTER  = 'linear-gradient(145deg, #E8EDF0 0%, #C5D2DC 40%, #102A43 100%)'

export default function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  initialPosition = 42,
}: CompareSliderProps) {
  const [pct, setPct]           = useState(initialPosition)
  const [dragging, setDragging] = useState(false)
  const [status, setStatus]     = useState({ before: 'loading', after: 'loading' } as
                                    { before: 'loading' | 'ok' | 'err'; after: 'loading' | 'ok' | 'err' })
  const containerRef = useRef<HTMLDivElement>(null)

  const ready = status.before !== 'loading' && status.after !== 'loading'

  const clamp = (v: number) => Math.max(2, Math.min(98, v))

  const updateFromClient = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPct(clamp(((clientX - rect.left) / rect.width) * 100))
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
    updateFromClient(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    updateFromClient(e.clientX)
  }
  const onPointerUp = () => setDragging(false)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft')  setPct(p => clamp(p - 5))
    if (e.key === 'ArrowRight') setPct(p => clamp(p + 5))
  }

  useEffect(() => {
    const timer = setTimeout(() => setPct(initialPosition), 120)
    return () => clearTimeout(timer)
  }, [initialPosition])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none outline-none"
      style={{ aspectRatio: '16 / 9', cursor: 'col-resize' }}
      role="slider"
      aria-label="Comparison slider"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
    >
      {/* ── Loading spinner — hides the moment both images settle (ok OR err) ── */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center bg-[#0D2237] transition-opacity duration-500"
        style={{ opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto' }}
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-white/60 animate-spin" />
      </div>

      {/* ── BEFORE layer ── */}
      {status.before === 'err' ? (
        /* Gradient placeholder when image missing */
        <div
          className="absolute inset-0"
          style={{ background: PLACEHOLDER_BEFORE }}
          aria-label={beforeAlt}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#8A7E72]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <rect x="4" y="8" width="32" height="24" rx="3" />
              <circle cx="14" cy="17" r="3" />
              <path d="M4 28l8-8 6 6 5-5 13 9" />
            </svg>
            <span className="text-[12px] font-semibold tracking-wide opacity-70">Avant</span>
            <span className="text-[11px] opacity-50 text-center px-6">Ajoutez vos photos dans<br /><code className="font-mono">public/antes/</code></span>
          </div>
        </div>
      ) : (
        <img
          src={before}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setStatus(s => ({ ...s, before: 'ok' }))}
          onError={() => setStatus(s => ({ ...s, before: 'err' }))}
        />
      )}

      {/* ── AFTER layer — clipped from right ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        aria-hidden="true"
      >
        {status.after === 'err' ? (
          <div
            className="absolute inset-0"
            style={{ background: PLACEHOLDER_AFTER, width: '100vw', minWidth: '100%' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/50">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                <path d="M8 32V14l12-10 12 10v18" />
                <rect x="14" y="20" width="12" height="12" rx="1" />
                <path d="M8 32h24" />
              </svg>
              <span className="text-[12px] font-semibold tracking-wide">Après</span>
              <span className="text-[11px] opacity-60 text-center px-6">Lancez <code className="font-mono">npm run generate</code></span>
            </div>
          </div>
        ) : (
          <img
            src={after}
            alt={afterAlt}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: '100%' }}
            onLoad={() => setStatus(s => ({ ...s, after: 'ok' }))}
            onError={() => setStatus(s => ({ ...s, after: 'err' }))}
          />
        )}
      </div>

      {/* ── Gradient vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.2) 100%)' }}
        aria-hidden="true"
      />

      {/* ── AVANT label ── */}
      <div
        className="absolute bottom-5 left-5 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: pct > 12 ? 1 : 0 }}
        aria-hidden="true"
      >
        <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8C7B2]" />
          Avant
        </span>
      </div>

      {/* ── APRÈS label ── */}
      <div
        className="absolute bottom-5 right-5 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: pct < 88 ? 1 : 0 }}
        aria-hidden="true"
      >
        <span className="flex items-center gap-1.5 bg-[#102A43]/80 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8B8A0]" />
          Après
        </span>
      </div>

      {/* ── Divider line + handle ── */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-auto transition-transform duration-150 ${
            dragging ? 'scale-110' : 'scale-100 hover:scale-105'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L3 10l4 5M3 10h14M13 5l4 5-4 5" stroke="#102A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ── Drag hint ── */}
      {!dragging && pct === initialPosition && ready && (
        <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none z-10" aria-hidden="true">
          <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/15 animate-pulse">
            Glissez pour révéler
          </span>
        </div>
      )}
    </div>
  )
}
