import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'gallery')

const API_KEY = 'AIzaSyCL4fffE8k7xPA2CJvxG5pdSBZDq3bOT3M'
const MODEL = 'gemini-3-pro-image-preview'

const IMAGES = [
  {
    filename: 'condo-interior.jpg',
    prompt: 'Realistic professional interior photography of a freshly painted modern Montreal condo living room. Crisp white walls with warm greige trim, large windows with natural light streaming in, clean sharp edges where wall meets ceiling, smooth flawless paint finish. Contemporary minimalist decor, hardwood floors, no people. Magazine-quality real estate photography, sharp focus.',
  },
  {
    filename: 'heritage-home-interior.jpg',
    prompt: 'Realistic professional interior photography of a beautifully repainted heritage home in Westmount Montreal. Elegant sage green walls, crisp white crown molding and baseboards with perfectly cut-in edges, original plaster walls with smooth paint finish. Classic architecture, high ceilings, period light fixtures, hardwood floors. Warm natural light, no people. High-end real estate photography.',
  },
  {
    filename: 'commercial-office.jpg',
    prompt: 'Realistic professional interior photography of a freshly painted modern office space in downtown Montreal. Clean neutral light grey walls with perfect coverage, crisp white ceiling, sharp paint lines along trim and ceiling edges. Open plan workspace, polished concrete floor, modern lighting. Professional corporate environment, no people. Architectural photography, sharp and clean.',
  },
  {
    filename: 'exterior-outremont.jpg',
    prompt: 'Realistic professional exterior photography of a classic Montreal stone duplex house facade in Outremont. Freshly painted dark navy blue shutters, white trim, and a glossy black front door with bright brass hardware. Original grey stone facade untouched, painted iron railings on exterior staircases. Beautiful curb appeal, sunny day, green trees, no people. Architectural real estate photography.',
  },
  {
    filename: 'kitchen-cabinets.jpg',
    prompt: 'Realistic professional interior photography of a beautifully painted kitchen in a Montreal home. Cabinet doors freshly painted in warm white with smooth factory-like finish, clean sharp edges, matte finish on walls. Modern hardware, marble countertops, subway tile backsplash. Natural light from window, no people. High-end real estate interior photography.',
  },
  {
    filename: 'bedroom-interior.jpg',
    prompt: 'Realistic professional interior photography of a freshly painted master bedroom in a Montreal condo. Soft warm greige walls with crisp white ceiling and baseboards, perfectly smooth paint finish with no brush marks. King bed, linen bedding, natural wood furniture. Calm and premium atmosphere, warm morning light, no people. Magazine interior photography.',
  },
  {
    filename: 'exterior-triplex.jpg',
    prompt: 'Realistic professional exterior photography of a freshly painted Montreal triplex on a tree-lined street. Classic Quebec architecture, newly painted dark green exterior wood elements, white trim and window frames, painted iron exterior staircases. Clean urban streetscape, autumn trees, parked cars, sunny day. No people visible. Architectural photography.',
  },
  {
    filename: 'commercial-restaurant.jpg',
    prompt: 'Realistic professional interior photography of a freshly painted upscale restaurant dining room in Montreal. Deep charcoal grey walls with crisp white ceiling, perfectly applied paint with smooth finish. Modern bistro chairs, marble tables, pendant lighting, brick accent wall. Warm ambient lighting, no people. High-end restaurant interior photography.',
  },
]

async function generateImage(prompt, filename) {
  console.log(`\nGenerating: ${filename}`)
  console.log(`Prompt: ${prompt.slice(0, 80)}...`)

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseModalities: ['IMAGE', 'TEXT'],
      temperature: 1,
    },
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`API error ${res.status}: ${err}`)
  }

  const data = await res.json()

  const part = data?.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.mimeType?.startsWith('image/'))
  if (!part?.inlineData?.data) {
    console.error('Response:', JSON.stringify(data, null, 2))
    throw new Error(`No image data returned for ${filename}`)
  }

  const buffer = Buffer.from(part.inlineData.data, 'base64')
  const outPath = join(OUT_DIR, filename)
  writeFileSync(outPath, buffer)
  console.log(`✓ Saved ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`)
  return filename
}

async function main() {
  console.log('Generating gallery images with Gemini...')
  console.log(`Output: ${OUT_DIR}\n`)

  const results = []
  for (const img of IMAGES) {
    try {
      await generateImage(img.prompt, img.filename)
      results.push({ filename: img.filename, ok: true })
    } catch (err) {
      console.error(`✗ Failed ${img.filename}:`, err.message)
      results.push({ filename: img.filename, ok: false, error: err.message })
    }
    // Small delay between requests
    await new Promise(r => setTimeout(r, 1500))
  }

  console.log('\n--- Summary ---')
  results.forEach(r => {
    console.log(`${r.ok ? '✓' : '✗'} ${r.filename}${r.ok ? '' : ` — ${r.error}`}`)
  })
  const ok = results.filter(r => r.ok).length
  console.log(`\n${ok}/${results.length} images generated successfully`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
