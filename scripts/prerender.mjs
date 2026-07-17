#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { routes, BASE_URL } from './route-data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', process.argv[2] || 'dist')

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function setMetaContent(html, attr, attrValue, content) {
  const escapedValue = escapeRegExp(attrValue)
  const re1 = new RegExp(`(<meta[^>]*${attr}="${escapedValue}"[^>]*content=")([^"]*)("[^>]*>)`, 'i')
  let result = html.replace(re1, `$1${content}$3`)
  if (result !== html) return result

  const re2 = new RegExp(`(<meta[^>]*content=")([^"]*)("[^>]*${attr}="${escapedValue}"[^>]*>)`, 'i')
  result = html.replace(re2, `$1${content}$3`)
  if (result !== html) return result

  const tag = `  <meta ${attr}="${attrValue}" content="${content}" />\n`
  return html.replace(/<\/head>/i, `${tag}</head>`)
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
}

function setCanonical(html, url) {
  const re1 = /(<link[^>]*rel="canonical"[^>]*href=")([^"]*)("[^>]*>)/i
  let result = html.replace(re1, `$1${url}$3`)
  if (result !== html) return result

  const re2 = /(<link[^>]*href=")([^"]*)("[^>]*rel="canonical"[^>]*>)/i
  result = html.replace(re2, `$1${url}$3`)
  if (result !== html) return result

  const tag = `  <link rel="canonical" href="${url}" />\n`
  return html.replace(/<\/head>/i, `${tag}</head>`)
}

const baseHtmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.')
  process.exit(1)
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8')

let count = 0
for (const route of routes) {
  let html = baseHtml
  html = setTitle(html, route.title)
  html = setMetaContent(html, 'name', 'description', route.description)
  html = setMetaContent(html, 'name', 'author', 'Juliana Munique')
  html = setMetaContent(
    html,
    'name',
    'robots',
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  )
  html = setCanonical(html, route.canonical)
  html = setMetaContent(html, 'property', 'og:title', route.title)
  html = setMetaContent(html, 'property', 'og:description', route.description)
  html = setMetaContent(html, 'property', 'og:url', route.canonical)
  html = setMetaContent(html, 'property', 'og:type', route.ogType || 'website')

  const outputPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path, 'index.html')

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, html)
  count++
}

console.log(`Prerendered ${count} static HTML files`)
