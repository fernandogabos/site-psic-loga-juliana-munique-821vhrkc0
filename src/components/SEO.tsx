import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const BASE_URL = 'https://julianamunique.com.br'

export const basePersonSchema = {
  '@type': 'Person',
  name: 'Juliana Munique',
  jobTitle: 'Psicóloga clínica especialista em psicanálise em Jundiaí',
  url: BASE_URL,
  identifier: 'CRP 06/106345',
}

export const baseLocalBusinessSchema = {
  '@type': 'LocalBusiness',
  name: 'Juliana Munique - Psicóloga',
  image: 'https://img.usecurling.com/p/800/600?q=therapy&color=brown',
  url: BASE_URL,
  telephone: '+5511995703646',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Moreira César, 319, Vila Arens II',
    addressLocality: 'Jundiaí',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
}

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  schema?: Record<string, any> | Record<string, any>[]
}

export function SEO({
  title,
  description,
  schema,
  canonicalUrl,
  ogImage,
  ogType = 'website',
}: SEOProps) {
  const location = useLocation()

  useEffect(() => {
    const finalTitle = `${title} | Juliana Munique - Psicóloga`
    document.title = finalTitle

    const currentUrl = `${BASE_URL}${canonicalUrl || location.pathname}`
    const defaultImage = 'https://img.usecurling.com/p/800/600?q=therapy&color=brown'
    const finalImage = ogImage || defaultImage

    const metaTags: Record<string, string> = {
      description: description,
      'og:title': finalTitle,
      'og:description': description,
      'og:type': ogType,
      'og:url': currentUrl,
      'og:image': finalImage,
      'og:locale': 'pt_BR',
      'twitter:card': 'summary_large_image',
      'twitter:title': finalTitle,
      'twitter:description': description,
      'twitter:image': finalImage,
    }

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        if (name.startsWith('og:')) {
          element.setAttribute('property', name)
        } else {
          element.setAttribute('name', name)
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    })

    let canonicalElement = document.querySelector('link[rel="canonical"]')
    if (!canonicalElement) {
      canonicalElement = document.createElement('link')
      canonicalElement.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalElement)
    }
    canonicalElement.setAttribute('href', currentUrl)

    let scriptElement: HTMLScriptElement | null = null
    if (schema) {
      scriptElement = document.createElement('script')
      scriptElement.setAttribute('type', 'application/ld+json')
      scriptElement.setAttribute('id', 'page-schema')

      const schemaData = Array.isArray(schema)
        ? {
            '@context': 'https://schema.org',
            '@graph': schema.map((s) => {
              const { '@context': _, ...rest } = s
              return rest
            }),
          }
        : { '@context': 'https://schema.org', ...schema }

      scriptElement.textContent = JSON.stringify(schemaData)

      const existingScript = document.getElementById('page-schema')
      if (existingScript) {
        existingScript.remove()
      }
      document.head.appendChild(scriptElement)
    }

    return () => {
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [title, description, schema, canonicalUrl, location.pathname, ogImage, ogType])

  return null
}
