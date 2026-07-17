import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { routes, BASE_URL } from './route-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const dirArg = process.argv.find((a) => a.startsWith('--dir='))
const distDir = dirArg ? dirArg.split('=')[1] : 'dist'
const DIST_PATH = path.resolve(__dirname, '..', distDir)
const templatePath = path.join(DIST_PATH, 'index.html')

if (!fs.existsSync(templatePath)) {
  console.error(`[prerender] Template not found: ${templatePath}`)
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function setMeta(html, attr, name, content) {
  const escaped = escapeAttr(content)
  const newTag = `<meta ${attr}="${name}" content="${escaped}" />`
  const regex = new RegExp(`<meta\\s+${attr}="${name}"[^>]*>`, 'i')
  if (regex.test(html)) {
    return html.replace(regex, newTag)
  }
  return html.replace('</head>', `  ${newTag}\n</head>`)
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
}

function setCanonical(html, url) {
  const newTag = `<link rel="canonical" href="${escapeAttr(url)}" />`
  const regex = /<link\s+rel="canonical"[^>]*>/i
  if (regex.test(html)) {
    return html.replace(regex, newTag)
  }
  return html.replace('</head>', `  ${newTag}\n</head>`)
}

function generateHtml(route) {
  let html = template
  const url = `${BASE_URL}${route.path === '/' ? '/' : route.path}`
  const ogImage = `${BASE_URL}/og-image.jpeg`

  html = setTitle(html, route.title)
  html = setMeta(html, 'name', 'description', route.description)
  html = setMeta(html, 'name', 'author', 'Juliana Munique')
  html = setMeta(html, 'name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
  html = setCanonical(html, url)
  html = setMeta(html, 'property', 'og:title', route.title)
  html = setMeta(html, 'property', 'og:description', route.description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:type', route.ogType || 'website')
  html = setMeta(html, 'property', 'og:image', ogImage)
  html = setMeta(html, 'property', 'og:locale', 'pt_BR')
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image')
  html = setMeta(html, 'name', 'twitter:title', route.title)
  html = setMeta(html, 'name', 'twitter:description', route.description)
  html = setMeta(html, 'name', 'twitter:image', ogImage)

  return html
}

function writeRoute(route) {
  const html = generateHtml(route)
  const urlPath = route.path === '/' ? '' : route.path
  const dir = path.join(DIST_PATH, urlPath)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8')
  console.log(`[prerender] Generated: ${route.path}`)
}

console.log(`[prerender] Starting pre-rendering for ${routes.length} routes...`)
routes.forEach(writeRoute)
console.log(`[prerender] Done! ${routes.length} static HTML files generated in ${distDir}/.`)
