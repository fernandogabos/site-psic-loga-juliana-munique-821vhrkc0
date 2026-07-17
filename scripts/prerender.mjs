#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', process.argv[2] || 'dist')

const routes = [
  {
    path: '/',
    title: 'Psicanalista em Jundiaí | Juliana Munique',
    description: 'Juliana Munique, psicanalista em Jundiaí com mais de 13 anos de experiência. Atendimento para adultos e adolescentes. Agende sua conversa.',
    canonical: 'https://www.julianamunique.com.br/'
  },
  {
    path: '/sobre',
    title: 'Sobre Juliana Munique | Psicanalista CRP 06/106345',
    description: 'Conheça Juliana Munique, psicanalista com CRP 06/106345, membro da SBPCamp e mais de uma década dedicada à escuta psicanalítica em Jundiaí.',
    canonical: 'https://www.julianamunique.com.br/sobre'
  },
  {
    path: '/adultos',
    title: 'Psicoterapia para Adultos em Jundiaí | Juliana Munique',
    description: 'Psicoterapia psicanalítica para adultos em Jundiaí. Tratamento de ansiedade, depressão, angústia e questões relacionais. Agende sua consulta.',
    canonical: 'https://www.julianamunique.com.br/adultos'
  },
  {
    path: '/adolescentes',
    title: 'Psicoterapia para Adolescentes | Juliana Munique',
    description: 'Psicoterapia especializada para adolescentes em Jundiaí. Ambiente seguro para explorar emoções e desafios da adolescência com Juliana Munique.',
    canonical: 'https://www.julianamunique.com.br/adolescentes'
  },
  {
    path: '/como-funciona',
    title: 'Como Funciona a Psicanálise | Juliana Munique',
    description: 'Entenda como funciona o processo psicanalítico com Juliana Munique. Consultas presenciais e online. Primeira conversa sem compromisso.',
    canonical: 'https://www.julianamunique.com.br/como-funciona'
  },
  {
    path: '/contato',
    title: 'Agende sua Consulta | Juliana Munique Jundiaí',
    description: 'Entre em contato com Juliana Munique. Consultório na Vila Arens, Jundiaí. Telefone: (11) 99570-3646. Seg–Sex 8h–20h, Sáb 8h–12h.',
    canonical: 'https://www.julianamunique.com.br/contato'
  },
  {
    path: '/blog',
    title: 'Blog sobre Saúde Mental | Juliana Munique',
    description: 'Artigos sobre saúde mental, psicanálise e autoconhecimento por Juliana Munique, psicanalista em Jundiaí.',
    canonical: 'https://www.julianamunique.com.br/blog'
  },
  {
    path: '/blog/o-que-e-psicoterapia-psicanalitica',
    title: 'O que é Psicoterapia Psicanalítica | Juliana Munique',
    description: 'Entenda o que é psicoterapia psicanalítica, sua origem freudiana e como o processo terapêutico funciona na prática.',
    canonical: 'https://www.julianamunique.com.br/blog/o-que-e-psicoterapia-psicanalitica'
  },
  {
    path: '/blog/como-lidar-com-ansiedade-no-trabalho',
    title: 'Ansiedade no Trabalho: Como Lidar | Juliana Munique',
    description: 'Causas da ansiedade no trabalho, sintomas, estratégias de manejo e como a psicanálise pode ajudar.',
    canonical: 'https://www.julianamunique.com.br/blog/como-lidar-com-ansiedade-no-trabalho'
  },
  {
    path: '/blog/importancia-do-vinculo-terapeutico',
    title: 'Vínculo Terapêutico: Por que Importa | Juliana Munique',
    description: 'O vínculo terapêutico é fundamental para o processo de cura. Entenda como se desenvolve e por que escolher bem seu terapeuta.',
    canonical: 'https://www.julianamunique.com.br/blog/importancia-do-vinculo-terapeutico'
  },
  {
    path: '/blog/carencia-afetiva',
    title: 'Carência Afetiva: Raízes Emocionais | Juliana Munique',
    description: 'Entenda carência afetiva, suas origens na infância e como se manifesta em relacionamentos adultos.',
    canonical: 'https://www.julianamunique.com.br/blog/carencia-afetiva'
  },
  {
    path: '/blog/bloqueios-emocionais',
    title: 'Bloqueios Emocionais: Como Superar | Juliana Munique',
    description: 'O que são bloqueios emocionais, como o inconsciente os cria e como a psicoterapia psicanalítica trabalha para dissolvê-los.',
    canonical: 'https://www.julianamunique.com.br/blog/bloqueios-emocionais'
  },
  {
    path: '/blog/educacao-infantil',
    title: 'Psicanálise e Educação Infantil | Juliana Munique',
    description: 'A importância dos primeiros anos para o desenvolvimento emocional e o que os pais precisam saber sobre psicanálise infantil.',
    canonical: 'https://www.julianamunique.com.br/blog/educacao-infantil'
  }
]

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function setMetaContent(html, attr, attrValue, content) {
  const escapedValue = escapeRegExp(attrValue)
  const re1 = new RegExp(
    `(<meta[^>]*${attr}="${escapedValue}"[^>]*content=")([^"]*)("[^>]*>)`,
    'i'
  )
  let result = html.replace(re1, `$1${content}$3`)
  if (result !== html) return result

  const re2 = new RegExp(
    `(<meta[^>]*content=")([^"]*)("[^>]*${attr}="${escapedValue}"[^>]*>)`,
    'i'
  )
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
  html = setCanonical(html, route.canonical)
  html = setMetaContent(html, 'property', 'og:title', route.title)
  html = setMetaContent(html, 'property', 'og:description', route.description)
  html = setMetaContent(html, 'property', 'og:url', route.canonical)

  const outputPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path, 'index.html')

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, html)
  count++
}

console.log(`Prerendered ${count} static HTML files`)
