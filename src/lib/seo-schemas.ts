import type { BlogPost } from '@/lib/blog-data'

export function BlogPostSchema(post: BlogPost, url: string, imageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      '@type': 'Person',
      name: 'Juliana Munique',
      url: 'https://site-psicologa-juliana-munique-7810e.goskip.app/sobre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Juliana Munique - Psicóloga',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: imageUrl,
  }
}
