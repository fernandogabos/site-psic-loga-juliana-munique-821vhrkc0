import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BreadcrumbListSchema } from '@/lib/seo-schemas'
import { BASE_URL } from '@/components/SEO'
import { blogPosts } from '@/lib/blog-data'

const seoRouteLabels: Record<string, string> = {
  sobre: 'Sobre',
  adolescentes: 'Psicoterapia para Adolescentes',
  adultos: 'Psicoterapia para Adultos',
  'como-funciona': 'Como Funciona',
  blog: 'Blog',
  contato: 'Contato',
}

export function useBreadcrumbSchema() {
  const location = useLocation()

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x)
    const items: { name: string; url: string }[] = [{ name: 'Home', url: BASE_URL }]

    if (pathnames.length > 0) {
      if (pathnames[0] === 'blog' && pathnames.length > 1) {
        items.push({ name: 'Blog', url: `${BASE_URL}/blog` })
        const post = blogPosts.find((p) => p.slug === pathnames[1])
        items.push({
          name: post?.title || pathnames[1].replace(/-/g, ' '),
          url: `${BASE_URL}/blog/${pathnames[1]}`,
        })
      } else {
        pathnames.forEach((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const label = seoRouteLabels[value] || value.replace(/-/g, ' ')
          items.push({ name: label, url: `${BASE_URL}${to}` })
        })
      }
    }

    const schema = BreadcrumbListSchema(items)
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('id', 'breadcrumb-schema')
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', ...schema })

    const existing = document.getElementById('breadcrumb-schema')
    if (existing) existing.remove()
    document.head.appendChild(script)

    return () => {
      const el = document.getElementById('breadcrumb-schema')
      if (el) el.remove()
    }
  }, [location.pathname])
}
