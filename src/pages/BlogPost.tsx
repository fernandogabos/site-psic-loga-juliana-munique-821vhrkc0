import { useParams, Navigate, Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, basePersonSchema } from '@/components/SEO'
import { blogPosts, AUTHOR_PORTRAIT_URL } from '@/lib/blog-data'
import { ArrowLeft } from 'lucide-react'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const articleSchema = {
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    author: basePersonSchema,
    datePublished: post.dateIso,
  }

  const faqSchema = post.faqs?.length
    ? {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  const schemas = faqSchema ? [articleSchema, faqSchema] : [articleSchema]

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.imageUrl}
        ogType="article"
        schema={schemas}
      />

      <div className="pt-8 pb-8 bg-muted">
        <Breadcrumbs />
      </div>

      <article className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-bold text-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors uppercase tracking-widest mb-12 min-h-[44px] p-2 -ml-2 rounded-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Voltar para o Blog
        </Link>

        <div className="text-center mb-16">
          <div className="text-primary font-bold uppercase tracking-widest text-sm mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="text-muted-foreground text-sm font-medium">Publicado em {post.date}</div>
        </div>

        <img
          src={post.imageUrl}
          alt={`Imagem ilustrativa para o artigo: ${post.title}`}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-[2rem] shadow-xl mb-16"
        />

        <div
          className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary prose-a:text-primary hover:prose-a:text-foreground prose-a:focus-visible:outline-none prose-a:focus-visible:ring-2 prose-a:focus-visible:ring-ring prose-p:text-foreground prose-p:leading-relaxed prose-li:text-foreground max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 pt-10 border-t border-border flex items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
            <img
              src={AUTHOR_PORTRAIT_URL}
              alt="Retrato da Psicóloga Juliana Munique"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-primary">
              Escrito por Juliana Munique
            </h4>
            <p className="text-sm text-muted-foreground">
              Psicóloga Clínica especialista em Psicanálise.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
