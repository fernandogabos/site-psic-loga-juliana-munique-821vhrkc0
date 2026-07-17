import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, basePersonSchema } from '@/components/SEO'
import { blogPosts, getReadingTime } from '@/lib/blog-data'
import bloqueiosEmocionaisImg from '@/assets/JULIANA MUNIQUE_PSICANALISTA_JUNDIAI_BLOQUEIOS EMOCIONAIS.png'
import educarImg from '@/assets/JULIANA MUNIQUE_PSICANALISTA_JUNDIAI_EDUCAR E DIFICIL.png'
import { Clock } from 'lucide-react'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog sobre Saúde Mental | Juliana Munique"
        description="Artigos sobre saúde mental, psicanálise e autoconhecimento por Juliana Munique, psicanalista em Jundiaí. Leitura para quem quer se compreender."
        canonicalUrl="/blog"
        schema={basePersonSchema}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 text-center">
            Blog & Artigos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mx-auto">
            Reflexões sobre psicanálise, saúde mental e os desafios da vida contemporânea.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const imageUrl =
              post.slug === 'bloqueios-emocionais'
                ? bloqueiosEmocionaisImg
                : post.slug === 'por-que-educar-e-dificil'
                  ? educarImg
                  : post.imageUrl
            return (
              <article
                key={post.slug}
                className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block aspect-[3/2] overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-bold uppercase tracking-widest">
                    <span className="text-primary">{post.category}</span>
                    <span aria-hidden="true">•</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getReadingTime(post.content)} min
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-foreground transition-colors line-clamp-2 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-foreground text-base leading-relaxed mb-8 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-bold text-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors uppercase tracking-widest flex items-center min-h-[44px] p-2 -ml-2 rounded-md"
                    >
                      Ler artigo{' '}
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
