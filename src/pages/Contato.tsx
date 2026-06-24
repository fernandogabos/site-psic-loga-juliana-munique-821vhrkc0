import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato | Agende com Psicóloga em Jundiaí"
        description="Agende sua sessão de terapia com psicóloga em Jundiaí na Vila Arens ou atendimento de psicóloga online. Entre em contato pelo WhatsApp (11) 99570-3646."
        canonicalUrl="/contato"
        schema={baseLocalBusinessSchema}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            Agende uma Conversa
          </h1>
          <p className="text-lg font-medium text-primary mb-6">
            Psicóloga Juliana Munique | CRP: 06/106345
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo. Entre em contato diretamente pelo WhatsApp para agendarmos nossa
            primeira entrevista.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-2 text-center">
            Informações de Contato
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center p-8 bg-secondary/40 rounded-[2rem] hover:bg-secondary/60 transition-colors">
            <div
              className="bg-secondary p-5 rounded-full flex items-center justify-center shrink-0 mb-6"
              aria-hidden="true"
            >
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl text-primary mb-3">Consultório Jundiaí</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Rua Moreira César, 319
              <br />
              Vila Arens II, Jundiaí, SP
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-secondary/40 rounded-[2rem] hover:bg-secondary/60 transition-colors">
            <div
              className="bg-secondary p-5 rounded-full flex items-center justify-center shrink-0 mb-6"
              aria-hidden="true"
            >
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl text-primary mb-3">WhatsApp / Telefone</h3>
            <p className="text-muted-foreground text-lg mb-4">(11) 99570-3646</p>
            <a
              href="https://wa.me/message/KCOHOGJC7PANP1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors inline-block"
            >
              Enviar mensagem agora →
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-secondary/40 rounded-[2rem] hover:bg-secondary/60 transition-colors">
            <div
              className="bg-secondary p-5 rounded-full flex items-center justify-center shrink-0 mb-6"
              aria-hidden="true"
            >
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl text-primary mb-3">Horário de Atendimento</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Atendimentos sob agendamento, consulte horários disponíveis pelo WhatsApp.
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-10 md:p-16 rounded-[2.5rem] shadow-xl text-center max-w-4xl mx-auto">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">
            Atendimento Online para todo Brasil
          </h3>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            As sessões online ocorrem por videochamada através de plataformas seguras, garantindo a
            mesma ética, conforto e qualidade do formato presencial, onde quer que você esteja.
          </p>
        </div>
      </div>
    </div>
  )
}
