import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Calendar, MessageSquare, Heart, Clock } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Primeiro Contato',
    description:
      'Você me envia uma mensagem e agendamos uma entrevista inicial, onde conversaremos sobre o que te motivou a buscar terapia.',
  },
  {
    icon: MessageSquare,
    title: 'Entrevista Inicial',
    description:
      'Na primeira sessão, conheceremos um pouco sobre sua história e suas demandas. É um momento de acolhimento e alinhamento de expectativas.',
  },
  {
    icon: Heart,
    title: 'Início do Processo',
    description:
      'Definidos os pontos de partida, iniciamos o trabalho terapêutico com sessões semanais, construindo um espaço de confiança e escuta.',
  },
  {
    icon: Clock,
    title: 'Continuidade',
    description:
      'O processo terapêutico se desenvolve no seu ritmo. Cada sessão é um espaço para elaboração, descoberta e construção de novos caminhos.',
  },
]

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Como Funciona a Psicanálise | Juliana Munique"
        description="Entenda como funciona o processo psicanalítico com Juliana Munique. Consultas presenciais e online. Primeira conversa sem compromisso."
        canonicalUrl="/como-funciona"
        schema={baseLocalBusinessSchema}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 text-center max-w-3xl">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            O Processo Terapêutico
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Como Funciona
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Conheça cada etapa do caminho terapêutico, desde o primeiro contato até o
            desenvolvimento contínuo do seu processo de autoconhecimento.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-5xl">
        <img
          src="/visual-edits/juliana-munique-psicanalista-jundiai-terapia-379cc64a.png"
          alt="Ambiente acolhedor de consultório psicológico"
          className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-lg mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                Etapa {index + 1}
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h2>
              <p className="text-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            Detalhes Práticos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-serif font-bold text-lg text-primary mb-3">Duração da Sessão</h3>
              <p className="text-foreground">
                Cada sessão tem duração de aproximadamente 50 minutos, tempo necessário para uma
                escuta profunda e significativa.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-primary mb-3">Frequência</h3>
              <p className="text-foreground">
                As sessões ocorrem semanalmente, no mesmo horário, garantindo regularidade e
                continuidade ao processo terapêutico.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-primary mb-3">Formato</h3>
              <p className="text-foreground">
                Atendimento presencial em Jundiaí (Vila Arens) ou online por videochamada, com a
                mesma qualidade e sigilo.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-primary mb-3">Investimento</h3>
              <p className="text-foreground">
                Os valores são informados no primeiro contato. Possibilidade de reembolso parcial
                por planos de saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-10 md:p-14 rounded-[3rem] text-center shadow-xl">
          <h3 className="text-3xl font-serif font-bold mb-6">Pronto para começar?</h3>
          <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            O primeiro passo é o mais importante. Entre em contato e agende sua entrevista inicial.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-bold rounded-full min-h-[56px] h-14 px-10 text-lg transition-transform hover:scale-105"
          >
            <Link to="/contato">Agendar Primeira Sessão</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
