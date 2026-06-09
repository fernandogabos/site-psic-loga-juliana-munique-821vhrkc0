import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  schema?: Record<string, any>
}

export function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    const finalTitle = `${title} | Juliana Munique - Psicóloga`
    document.title = finalTitle

    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    let scriptElement: HTMLScriptElement | null = null
    if (schema) {
      scriptElement = document.createElement('script')
      scriptElement.setAttribute('type', 'application/ld+json')
      scriptElement.setAttribute('id', 'page-schema')
      scriptElement.textContent = JSON.stringify(schema)

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
  }, [title, description, schema])

  return null
}
