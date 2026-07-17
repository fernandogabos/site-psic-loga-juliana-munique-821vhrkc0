import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema, basePersonSchema } from '@/components/SEO'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Agende sua Consulta | Juliana Munique Jundiaí"
        description="Entre em contato com Juliana Munique. Consultório na Vila Arens, Jundiaí. Telefone: (11) 99570-3646. Seg–Sex 8h–20h, Sáb 8h–12h."
        canonicalUrl="/contato"
        schema={[baseLocalBusinessSchema, basePersonSchema]}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Vamos Conversar
          </h1>
          <p className="text-lg text-muted-foreground">
            Agende sua primeira sessão ou tire suas dúvidas sobre o processo terapêutico.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              Informações de Contato
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Moreira César, 319, Jundiaí, SP
                    <br />
                    (Atendimento Presencial e Online)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5511995703646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (11) 99570-3646
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horários</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 20h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-primary mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/julianamunique"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
