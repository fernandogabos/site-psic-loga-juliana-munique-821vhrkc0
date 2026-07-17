import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, BASE_URL } from '@/components/SEO'
import { blogPosts, AUTHOR_PORTRAIT_URL, getReadingTime } from '@/lib/blog-data'
import { BlogPostSchema } from '@/lib/seo-schemas'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import educarImage from '@/assets/JULIANA MUNIQUE_PSICANALISTA_JUNDIAI_EDUCAR E DIFICIL.png'
import carenciaImage from '@/assets/JULIANA MUNIQUE_PSICANALISTA_JUNDIAI_CARENCIA.png'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-primary mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-primary hover:text-foreground transition-colors">
            Voltar para o blog
          </Link>
        </div>
      </div>
    )
  }

  const isEducarPost =
    post.title.toLowerCase().includes('educar') || post.slug.toLowerCase().includes('educar')
  const isCarenciaPost =
    post.title.toLowerCase().includes('carência') ||
    post.title.toLowerCase().includes('carencia') ||
    post.slug.toLowerCase().includes('carencia')
  const imageUrl = isEducarPost ? educarImage : isCarenciaPost ? carenciaImage : post.imageUrl
  const postUrl = `${BASE_URL}/blog/${post.slug}`
  const schema = BlogPostSchema(post, postUrl, imageUrl)

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.seoTitle || `${post.title} | Juliana Munique`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        schema={schema}
      />

      <div className="bg-muted pt-8 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs />
        </div>
      </div>

      <article className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground transition-colors uppercase tracking-widest mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o blog
        </Link>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            {post.category}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {getReadingTime(post.content)} min de leitura
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-12 shadow-lg">
          <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
          <img
            src={AUTHOR_PORTRAIT_URL}
            alt="Juliana Munique"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <p className="font-serif font-bold text-primary">Juliana Munique</p>
            <p className="text-sm text-muted-foreground">Psicóloga e Psicanalista</p>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq, index) => (
                <div key={index} className="bg-muted rounded-2xl p-6">
                  <h3 className="font-serif font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de ajuda com este ou outro assunto?
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Agendar uma conversa
          </Link>
        </div>
      </article>
    </div>
  )
}
