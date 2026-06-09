import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO } from '@/components/SEO'
import { Calendar, MessageSquare, Clock, Laptop } from 'lucide-react'

export default function ComoFunciona() {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: '1. O Primeiro Contato',
      desc: 'Tudo começa com uma mensagem. Nós marcaremos um horário para a nossa primeira entrevista (sessão preliminar), onde nos conheceremos.',
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: '2. Entrevistas Iniciais',
      desc: 'As primeiras sessões servem para avaliação. Você me conta os motivos que o trouxeram e combinamos o enquadre: honorários, frequência e horários.',
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: '3. O Processo (Setting)',
      desc: 'As sessões ocorrem com frequência regular (1 a 2 vezes por semana) e duram 50 minutos. A regularidade é essencial para o fluxo inconsciente.',
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: '4. Modalidade',
      desc: 'Você escolhe: presencial no meu consultório na Vila Arens em Jundiaí, ou online, desde que garanta um ambiente seguro e privativo para a videochamada.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Como Funciona a Terapia Psicanalítica"
        description="Entenda o passo a passo de como iniciar a psicoterapia, duração, sessões e formato online ou presencial em Jundiaí."
      />

      <div className="bg-muted/30 pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Como Funciona o Processo
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Dar o primeiro passo pode parecer desafiador. Aqui explico de forma clara como iniciamos
            o nosso percurso terapêutico.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-card border border-border p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-8 bg-secondary/30 w-20 h-20 rounded-2xl flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Embedded for AEO */}
        <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Dúvidas Comuns
          </h2>
          <div className="space-y-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-accent">
                Quanto tempo dura uma psicoterapia?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                A psicanálise não possui um prazo de validade predefinido. O tempo de duração varia
                de acordo com as necessidades, o ritmo de elaboração e os objetivos de cada
                paciente. É um processo artesanal, focado na estrutura profunda do indivíduo, não
                apenas na supressão imediata de sintomas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-accent">
                A terapia online tem o mesmo resultado?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                Sim. A eficácia da psicanálise baseia-se na fala e na escuta, o que se sustenta
                perfeitamente no ambiente virtual. O fundamental é que, no momento da sessão, você
                esteja em um lugar onde se sinta à vontade para falar sem interrupções ou receio de
                ser ouvido por terceiros.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-accent">
                Atende convênios médicos?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                Meus atendimentos são exclusivamente particulares, visando garantir a total
                privacidade, qualidade de tempo e personalização que a clínica psicanalítica exige.
                No entanto, forneço recibos para que você solicite o reembolso integral ou parcial
                junto ao seu plano de saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            to="/contato"
            className="text-accent font-bold hover:text-primary transition-colors text-xl inline-flex items-center group"
          >
            Pronto para começar? Entre em contato{' '}
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
