import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { Calendar, MessageSquare, Clock, Laptop, ArrowRight } from 'lucide-react'

export default function ComoFunciona() {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: '1. O Primeiro Contato',
      desc: 'A partir do seu contato via whatsapp, agendaremos um horário exclusivo para a nossa primeira entrevista.',
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: '2. Entrevistas Iniciais',
      desc: 'É fundamental essa primeira conversa para compreender a demanda de cada indivíduo, quais as expectativas e juntos, alinhamos a frequência das sessões, os horários e o valor dos honorários.',
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: '3. O Processo (Setting)',
      desc: 'As sessões possuem a duração de 45 à 50 minutos e ocorrem com uma frequência regular, de uma, duas ou mais sessões semanais, de acordo com a necessidade de cada caso.',
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: '4. Modalidade',
      desc: 'Você escolhe: presencial no meu consultório na Vila Arens em Jundiaí, ou online, desde que garanta um ambiente seguro e privativo para a videochamada. Para as sessões online é necessário ter um espaço privado para que não seja interrompido, possuir equipamento com câmera e microfone e conexão estável de internet, pois as sessões são realizadas através de plataforma de vídeo chamada (google meet ou whatsapp) e utilizar fones de ouvido para ter ainda mais privacidade.',
    },
  ]

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto tempo dura uma psicoterapia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A psicanálise não possui um prazo de validade predefinido. O tempo de duração varia de acordo com as necessidades, o ritmo de elaboração e os objetivos de cada paciente. É um processo artesanal, focado na estrutura profunda do indivíduo, não apenas na supressão imediata de sintomas.',
        },
      },
      {
        '@type': 'Question',
        name: 'A terapia online tem o mesmo resultado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. A eficácia da psicanálise baseia-se na fala e na escuta, o que se sustenta perfeitamente no ambiente virtual. O fundamental é que, no momento da sessão, você esteja em um lugar onde se sinta à vontade para falar sem interrupções ou receio de ser ouvido por terceiros.',
        },
      },
      {
        '@type': 'Question',
        name: 'Atende convênios médicos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meus atendimentos são exclusivamente particulares, visando garantir a total privacidade, qualidade de tempo e personalização que a clínica psicanalítica exige. No entanto, forneço recibos para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Como Funciona a Terapia | Psicóloga em Jundiaí e Online"
        description="Entenda como funciona a psicoterapia presencial com psicóloga em Jundiaí ou no formato psicóloga online. Duração, modalidade e primeiras sessões."
        canonicalUrl="/como-funciona"
        schema={[baseLocalBusinessSchema, faqSchema]}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Como Funciona o Processo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Reconhecer que necessita de ajuda profissional é um ato de coragem.
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
              <div
                className="text-primary mb-8 bg-secondary w-20 h-20 rounded-2xl flex items-center justify-center"
                aria-hidden="true"
              >
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
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
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-foreground">
                Quanto tempo dura uma psicoterapia?
              </h3>
              <p className="text-primary-foreground leading-relaxed text-lg">
                Não existe uma resposta exata. Alguns pacientes permanecem por um longo período em
                terapia, pois levam mais tempo para ressignificar algumas questões. Outros, quando
                tocam em assuntos mais delicados, decidem por interromper o processo e, outros,
                recebem alta, mas quando se deparam com alguma situação que sentem dificuldade de
                lidar, retornam. Um assunto que para uma pessoa é tranquilo, para outra pode causar
                sofrimento. As dores que atravessam o ser humano são diversas e precisam ser
                compreendidas e elaboradas individualmente. Mesmo para alguém com muitos anos de
                psicoterapia não existe uma contraindicação, pois sempre podemos elaborar melhor
                nossas dificuldades por meio do olhar de um profissional. O tempo não deve ser algo
                que lhe preocupe, a pressa, a necessidade de respostas e soluções rápidas também são
                sintomas de ansiedade que necessitamos resolver.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-foreground">
                A terapia online tem o mesmo resultado?
              </h3>
              <p className="text-primary-foreground leading-relaxed text-lg">
                Sim. A eficácia da psicanálise baseia-se na fala e na escuta, o que se sustenta
                perfeitamente no ambiente virtual. O fundamental é que, no momento da sessão, você
                esteja em um lugar onde se sinta à vontade para falar sem interrupções ou receio de
                ser ouvido por terceiros.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-foreground">
                Atende convênios médicos?
              </h3>
              <p className="text-primary-foreground leading-relaxed text-lg">
                Meus atendimentos são exclusivamente particulares, visando garantir a total
                privacidade, qualidade de tempo e personalização que a clínica psicanalítica exige.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            to="/contato"
            className="text-primary font-bold hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors text-xl inline-flex items-center group p-3 rounded-xl min-h-[44px]"
          >
            Pronto para começar? Entre em contato{' '}
            <ArrowRight
              className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
