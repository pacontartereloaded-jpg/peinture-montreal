/**
 * generate-after.mjs
 * Reads every image from public/antes/, sends it to Gemini image generation,
 * and saves the transformed "after" image to public/despues/
 *
 * Usage:  npm run generate
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const API_KEY = 'AIzaSyCL4fffE8k7xPA2CJvxG5pdSBZDq3bOT3M'
const MODEL   = 'gemini-3.1-flash-image-preview'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const ANTES_DIR  = join(__dirname, '..', 'public', 'antes')
const DESPUES_DIR = join(__dirname, '..', 'public', 'despues')

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

const PROMPT = `You are a professional architectural visualization artist creating a stunning "after" photo for a premium painting company's portfolio.

TASK: Transform this "before" renovation/painting photo into a beautiful, photorealistic "after" photo.

STRICT RULES — follow every one:
1. SAME ROOM: Keep the exact same room layout, camera angle, perspective, window positions, and architectural structure. Do not change the room shape or viewing angle.
2. REMOVE ALL CONSTRUCTION ELEMENTS: Eliminate every ladder, paint can, roller, tarp, plastic sheet, drop cloth, masking tape, tool, bucket, debris, or unfinished surface.
3. PROFESSIONAL PAINT JOB — walls and surfaces:
   - Main walls: warm, sophisticated off-white or soft greige (think Benjamin Moore "White Dove", "Chantilly Lace", or "Pale Oak"). Smooth, flawless finish.
   - Trim, baseboards, crown molding, window frames, door frames: crisp bright white, clean edges.
   - Ceiling: bright clean white, perfectly even.
   - If there are accent walls, paint them a deep navy (#102A43) or warm charcoal — only ONE wall.
4. FURNITURE: Add tasteful, high-end furniture appropriate to the room type:
   - Living room → modern sofa (light grey or cream), minimalist coffee table, area rug, abstract art on wall, indoor plant.
   - Bedroom → upholstered bed with white/linen bedding, matching nightstands, soft lamp.
   - Kitchen → clean marble or quartz countertops, minimal decor, bowl of fruit.
   - Bathroom → white towels folded neatly, minimal accessories.
   - Empty corridor → console table, mirror, small art piece.
5. LIGHTING: Warm, soft natural light streaming in through existing windows. The freshly painted walls should glow subtly. Add a soft ambient lamp glow if appropriate.
6. PHOTOREALISM: The result MUST look like a real photograph taken by a professional real-estate or interior design photographer — NOT AI-generated, NOT illustrated, NOT CGI-looking. Grain, real depth of field, authentic textures.
7. STYLE: Sophisticated Montréal home — modern, warm, elevated. Not sterile, not over-staged. Lived-in luxury.
8. COLOR PALETTE of furniture: neutrals — cream, linen, warm grey, natural wood, muted sage accents. No bright or saturated colors.

OUTPUT: A single photorealistic "after" photograph of the same room, completely transformed.`

function mimeType(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (ext === '.png')  return 'image/png'
  if (ext === '.webp') return 'image/webp'
  return 'image/jpeg'
}

async function generateAfter(inputPath, outputPath) {
  const imageData = await readFile(inputPath)
  const base64    = imageData.toString('base64')
  const mime      = mimeType(inputPath)

  const body = {
    contents: [
      {
        parts: [
          { inlineData: { mimeType: mime, data: base64 } },
          { text: PROMPT },
        ],
      },
    ],
    generationConfig: {
      responseModalities: ['IMAGE'],
    },
  }

  const res = await fetch(API_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`API error ${res.status}: ${err}`)
  }

  const json = await res.json()

  // Find the generated image part
  const parts    = json?.candidates?.[0]?.content?.parts ?? []
  const imgPart  = parts.find(p => p.inlineData?.data)

  if (!imgPart) {
    // Log full response for debugging
    console.error('Unexpected response:', JSON.stringify(json, null, 2))
    throw new Error('No image in response — check model name or API key.')
  }

  const buffer = Buffer.from(imgPart.inlineData.data, 'base64')
  await writeFile(outputPath, buffer)
}

async function main() {
  await mkdir(DESPUES_DIR, { recursive: true })

  let files
  try {
    files = await readdir(ANTES_DIR)
  } catch {
    console.error(`❌  Folder not found: ${ANTES_DIR}`)
    console.error('    Put your before images there and re-run.')
    process.exit(1)
  }

  const images = files.filter(f => IMAGE_EXTS.has(extname(f).toLowerCase()))

  if (images.length === 0) {
    console.log('No images found in public/antes/ — add your before photos and re-run.')
    return
  }

  console.log(`\n🎨  Found ${images.length} image(s) to transform\n`)

  for (let i = 0; i < images.length; i++) {
    const file   = images[i]
    const inPath  = join(ANTES_DIR, file)
    const outPath = join(DESPUES_DIR, file)

    process.stdout.write(`[${i + 1}/${images.length}]  Processing: ${file} ... `)

    try {
      await generateAfter(inPath, outPath)
      console.log('✅  done')
    } catch (err) {
      console.log('❌  failed')
      console.error('   ', err.message)
    }

    // Respect rate limits
    if (i < images.length - 1) {
      await new Promise(r => setTimeout(r, 3000))
    }
  }

  console.log('\n✨  All done — check public/despues/\n')
}

main()
