import { useState } from 'react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { toast } from 'sonner'

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Mensagem enviada com sucesso! Em breve entrarei em contato para agendarmos.')
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato | Agende sua Consulta"
        description="Entre em contato para agendar sua consulta de psicoterapia em Jundiaí ou Online. Preencha o formulário ou chame no WhatsApp."
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Agende uma Conversa
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo. Preencha o formulário abaixo ou envie uma mensagem diretamente pelo
            WhatsApp para agendarmos nossa primeira entrevista.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10">
              Informações de Contato
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-4 rounded-2xl h-16 w-16 flex items-center justify-center shrink-0">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Consultório Jundiaí</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Bairro Vila Arens
                    <br />
                    Jundiaí - SP
                    <br />
                    <span className="text-sm text-muted-foreground mt-1 block">
                      (Endereço completo fornecido após confirmação)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-4 rounded-2xl h-16 w-16 flex items-center justify-center shrink-0">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">WhatsApp / Telefone</h3>
                  <p className="text-muted-foreground text-lg mb-2">(11) 99999-9999</p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:text-primary transition-colors inline-block"
                  >
                    Enviar mensagem agora →
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-4 rounded-2xl h-16 w-16 flex items-center justify-center shrink-0">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">E-mail</h3>
                  <p className="text-muted-foreground text-lg">contato@julianamunique.com.br</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-4 rounded-2xl h-16 w-16 flex items-center justify-center shrink-0">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Segunda a Sexta: 08h às 20h
                    <br />
                    Atendimentos somente com hora marcada.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg">
              <h3 className="font-serif font-bold text-2xl mb-4">
                Atendimento Online para todo Brasil
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                As sessões online ocorrem por videochamada através de plataformas seguras, com a
                mesma ética e qualidade do formato presencial.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-[2.5rem] shadow-xl h-fit">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Digite seu nome"
                  className="bg-background h-12 text-base rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="bg-background h-12 text-base rounded-xl"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base">
                    WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(11) 90000-0000"
                    className="bg-background h-12 text-base rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="modality" className="text-base">
                  Preferência de Atendimento
                </Label>
                <select
                  id="modality"
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma opção...
                  </option>
                  <option value="presencial">Presencial (Vila Arens, Jundiaí - SP)</option>
                  <option value="online">Online (Videochamada)</option>
                  <option value="indeciso">Ainda não sei / Quero saber mais detalhes</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-base">
                  Sua Mensagem
                </Label>
                <Textarea
                  id="message"
                  placeholder="Fique à vontade para falar brevemente sobre o que o motiva a buscar terapia ou qual sua disponibilidade de horários."
                  className="min-h-[150px] bg-background text-base rounded-xl resize-y"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold rounded-full mt-4 bg-primary hover:bg-primary/90 transition-transform hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando sua mensagem...' : 'Enviar Mensagem'}
              </Button>
              <p className="text-sm text-center text-muted-foreground mt-6 font-medium">
                Seus dados estão seguros e serão tratados com absoluto sigilo profissional.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
