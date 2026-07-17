import { useState, type FormEvent } from 'react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema, basePersonSchema } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, MapPin, Clock, Instagram, Linkedin } from 'lucide-react'
import { toast } from 'sonner'

export default function Contato() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.')
      e.currentTarget.reset()
    }, 1500)
  }

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
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
                <a
                  href="https://www.linkedin.com/in/julianamunique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" name="name" placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me brevemente o que te trouxe aqui..."
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full min-h-[48px] text-base"
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
