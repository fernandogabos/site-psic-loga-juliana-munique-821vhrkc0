import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO } from '@/components/SEO'
import { blogPosts } from '@/lib/blog-data'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog sobre Psicologia e Psicanálise"
        description="Artigos sobre saúde mental, psicanálise, ansiedade, depressão e autoconhecimento, escritos pela psicóloga Juliana Munique."
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Blog & Artigos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Reflexões sobre psicanálise, saúde mental e os desafios da vida contemporânea.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block aspect-[3/2] overflow-hidden relative"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-bold uppercase tracking-widest">
                  <span className="text-accent">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest flex items-center"
                  >
                    Ler artigo <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
