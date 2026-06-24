import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Heart, Sparkles, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SEO, baseLocalBusinessSchema, basePersonSchema } from '@/components/SEO'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Psicóloga em Jundiaí e Online | Psicoterapia Psicanalítica"
        description="Juliana Munique é Psicóloga em Jundiaí (Vila Arens) e oferece psicoterapia online. Psicanálise e terapia para adultos e adolescentes. Agende sua consulta."
        canonicalUrl="/"
        schema={[baseLocalBusinessSchema, basePersonSchema]}
      />

      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 hidden lg:block pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-secondary blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-muted text-primary text-sm font-semibold tracking-wide mb-6">
                Atendimento Presencial em Jundiaí e Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
                Um espaço seguro para compreender sua história e construir novos caminhos.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Psicoterapia psicanalítica especializada para adolescentes e adultos. Reconecte-se
                com sua essência e encontre sentido em meio aos desafios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 shadow-md transition-transform hover:-translate-y-1"
                >
                  <Link to="/contato">Agendar Conversa</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base h-14 px-8 border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  <Link to="/sobre">Conheça Meu Trabalho</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in lg:ml-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 border-4 border-white">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=female&seed=juliana"
                  alt="Juliana Munique - Psicóloga"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float hidden md:flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Experiência</p>
                  <p className="text-sm text-muted-foreground">Na clínica desde 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
            A Psicanálise como Bússola
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Acredito que o sofrimento emocional não é algo a ser apenas silenciado, mas
            compreendido. Meu trabalho é oferecer uma escuta atenta, ética e acolhedora, ajudando
            você a desvendar os padrões inconscientes que limitam sua vida e suas relações.
          </p>
          <Link
            to="/sobre"
            className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors uppercase tracking-wider text-sm"
          >
            Ler mais sobre minha trajetória <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atendimento especializado focado no desenvolvimento humano em suas diferentes fases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Para Adolescentes</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Um espaço livre de julgamentos para lidar com ansiedade, questões de identidade,
                conflitos familiares e escolhas profissionais em uma fase de intensas
                transformações.
              </p>
              <Link
                to="/adolescentes"
                className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="group rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Para Adultos</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Acolhimento para angústias, depressão, desafios nos relacionamentos e na carreira.
                Uma jornada de autoconhecimento para uma vida com mais sentido.
              </p>
              <Link
                to="/adultos"
                className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground rounded-t-[3rem]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-primary-foreground/80">
              Esclareça suas dúvidas sobre o início do processo terapêutico.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6">
                Quando procurar terapia?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/80 text-base leading-relaxed pb-6">
                Você pode procurar a terapia quando sentir angústias recorrentes, ansiedade,
                tristeza profunda, ou quando perceber que padrões repetitivos estão prejudicando
                suas relações ou seu trabalho. Não é necessário estar em uma "crise aguda" — o
                desejo de se conhecer melhor já é um excelente motivo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6">
                Como funciona a psicoterapia online?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/80 text-base leading-relaxed pb-6">
                A psicoterapia online tem a mesma eficácia e ética do formato presencial. As sessões
                ocorrem por videochamada em horário agendado, com a mesma duração (50 minutos). O
                essencial é que você esteja em um ambiente privativo, onde sinta conforto para falar
                livremente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6">
                Qual é a diferença da abordagem psicanalítica?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/80 text-base leading-relaxed pb-6">
                Diferente de abordagens que focam apenas no alívio rápido de sintomas, a psicanálise
                busca as raízes inconscientes do sofrimento. É um trabalho profundo de investigação
                da sua história, promovendo transformações estruturais e duradouras, em vez de
                apenas "apagar o incêndio".
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card rounded-[3rem] overflow-hidden shadow-lg border border-border">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase text-xs mb-4">
                  <MapPin className="h-4 w-4" />
                  Localização Privilegiada
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Psicóloga em Jundiaí (Vila Arens)
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Meu consultório está localizado na <strong>Vila Arens</strong>, um bairro de
                    fácil acesso em <strong>Jundiaí - SP</strong>, oferecendo um ambiente seguro,
                    acolhedor e sigiloso para os atendimentos presenciais.
                  </p>
                  <p>
                    A sala foi cuidadosamente planejada para proporcionar tranquilidade, longe do
                    ruído da cidade, favorecendo o trabalho de escuta analítica e a entrega do
                    paciente.
                  </p>
                  <p>
                    Para quem não reside na região ou prefere a comodidade de casa, ofereço também o
                    formato de <strong>atendimento online</strong> para todo o Brasil.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild className="rounded-full bg-primary hover:bg-primary/90 h-12 px-8">
                    <Link to="/contato">Agendar Horário</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-secondary relative min-h-[400px] lg:min-h-full">
                <img
                  src="https://img.usecurling.com/p/800/800?q=therapy%20office&color=brown"
                  alt="Consultório de Psicologia em Jundiaí"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
