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
import { TestimonialsSection } from '@/components/Testimonials'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Psicanalista em Jundiaí | Juliana Munique"
        description="Juliana Munique, psicanalista em Jundiaí com mais de 13 anos de experience. Atendimento para adultos e adolescentes. Agende sua conversa."
        canonicalUrl="/"
        schema={[baseLocalBusinessSchema, basePersonSchema]}
      />

      <section className="relative overflow-hidden" style={{ backgroundColor: '#8a674e' }}>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 hidden lg:block pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#F7F3EF] blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[600px] lg:min-h-[700px]">
            <div className="max-w-2xl animate-fade-in-up flex flex-col justify-center py-16 lg:py-24">
              <span className="inline-block py-1 px-3 rounded-full bg-[#3E322B] text-[#F7F3EF] text-sm font-semibold tracking-wide mb-6">
                Atendimento Presencial em Jundiaí e Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFFFF] leading-tight mb-6">
                Um espaço seguro para compreender sua história e construir novos caminhos.
              </h1>
              <p className="text-lg md:text-xl text-[#F7F3EF] mb-8 max-w-lg leading-relaxed opacity-90">
                Psicoterapia psicanalítica para adolescentes e adultos. Um espaço ético de escuta
                para a elaboração de conflitos e a construção de novos saberes sobre si mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-base min-h-[56px] h-14 px-8 bg-[#3E322B] text-[#FFFFFF] hover:bg-[#3E322B]/90 shadow-md transition-transform hover:-translate-y-1 focus-visible:ring-offset-[#8a674e] border-none"
                >
                  <Link to="/contato">Agendar Conversa</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base min-h-[56px] h-14 px-8 border-[#F7F3EF] text-[#FFFFFF] hover:bg-[#F7F3EF]/10 transition-colors focus-visible:ring-offset-[#8a674e] bg-transparent"
                >
                  <Link to="/sobre">Conheça Meu Trabalho</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in lg:ml-auto w-full h-full pb-16 lg:pb-0">
              <img
                src="/visual-edits/espa-o-lume-juliana-munique-psicologa-psicanalista-jundiai-coworking-consultorio-01-9caf7256.png"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src =
                    'https://img.usecurling.com/ppl/large?gender=female&seed=juliana'
                }}
                alt="Foto profissional de Juliana Munique"
                className="object-cover w-full h-full object-center shadow-2xl aspect-square lg:aspect-auto max-h-[400px] lg:max-h-none max-w-[400px] lg:max-w-[500px] mx-auto lg:ml-auto lg:mr-0"
              />
              <div className="absolute bottom-8 left-4 lg:bottom-24 lg:-left-8 bg-[#F7F3EF] p-6 rounded-2xl shadow-xl max-w-xs animate-float hidden md:flex items-center gap-4 z-20">
                <div className="bg-[#D7C2AE] p-3 rounded-full text-[#3E322B]" aria-hidden="true">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-[#3E322B]">Experiência</p>
                  <p className="text-sm text-[#6D5647]">Na clínica desde 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
            A Psicanálise como Guia
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Acredito que o sofrimento emocional não deve ser apenas aliviado, mas compreendido em
            sua singularidade. Meu trabalho consiste em oferecer um espaço de escuta ética e
            acolhedora, onde seja possível reconhecer os processos inconscientes que influenciam a
            forma como você vive, sente e se relaciona. A partir dessa compreensão, torna-se
            possível construir novas maneiras de lidar com os desafios da vida de forma mais
            autêntica, leve e consciente.
          </p>
          <Link
            to="/sobre"
            className="inline-flex items-center text-primary font-bold hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors uppercase tracking-wider text-sm min-h-[44px] p-2 rounded-md"
          >
            Ler mais sobre minha trajetória{' '}
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
              Áreas de Atuação
            </h2>
            <p className="text-foreground max-w-2xl mx-auto">
              Atendimento especializado focado no desenvolvimento humano em suas diferentes fases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div
                className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              >
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Para Adolescentes</h3>
              <p className="text-foreground mb-8 leading-relaxed">
                Um espaço livre de julgamentos para lidar com ansiedade, questões de identidade,
                conflitos familiares e escolhas profissionais em uma fase de intensas
                transformações.
              </p>
              <Link
                to="/adolescentes"
                className="inline-flex items-center text-primary font-semibold hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors min-h-[44px] p-2 -ml-2 rounded-md"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="group rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div
                className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              >
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Para Adultos</h3>
              <p className="text-foreground mb-8 leading-relaxed">
                Acolhimento para angústias, depressão, desafios nos relacionamentos e na carreira.
                Uma jornada de autoconhecimento para uma vida com mais sentido.
              </p>
              <Link
                to="/adultos"
                className="inline-flex items-center text-primary font-semibold hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors min-h-[44px] p-2 -ml-2 rounded-md"
              >
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection className="bg-muted" />

      <section className="py-24 bg-primary text-primary-foreground rounded-t-[3rem]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-primary-foreground/90">
              Esclareça suas dúvidas sobre o início do processo terapêutico.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6 focus-within:ring-2 focus-within:ring-white"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6 focus-visible:outline-none">
                Quando procurar terapia?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground text-base leading-relaxed pb-6">
                Você pode procurar a terapia quando sentir angústias recorrentes, ansiedade,
                tristeza profunda, ou quando perceber que padrões repetitivos estão prejudicando
                suas relações ou seu trabalho. Não é necessário estar em uma "crise aguda" — o
                desejo de se conhecer melhor já é um excelente motivo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6 focus-within:ring-2 focus-within:ring-white"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6 focus-visible:outline-none">
                Como funciona a psicoterapia online?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground text-base leading-relaxed pb-6">
                A psicoterapia online tem a mesma eficácia e ética do formato presencial. As sessões
                ocorrem por videochamada em horário agendado, com a mesma duração (50 minutos). O
                essencial é que você esteja em um ambiente privativo, onde sinta conforto para falar
                livremente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-none bg-primary-foreground/10 rounded-2xl px-6 focus-within:ring-2 focus-within:ring-white"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-xl hover:no-underline py-6 focus-visible:outline-none">
                Qual é a diferença da abordagem psicanalítica?
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground text-base leading-relaxed pb-6">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider uppercase text-xs mb-4">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Localização Privilegiada
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Psicóloga em Jundiaí (Vila Arens)
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed text-lg">
                <p>
                  Meu consultório está localizado na <strong>Vila Arens</strong>, um bairro de fácil
                  acesso em <strong>Jundiaí - SP</strong>, oferecendo um ambiente seguro, acolhedor
                  e sigiloso para os atendimentos presenciais.
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
                <Button
                  asChild
                  className="rounded-full min-h-[44px] bg-primary hover:bg-primary/90 h-12 px-8 focus-visible:ring-offset-2"
                >
                  <Link to="/contato">Agendar Horário</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px] w-full bg-secondary">
              <img
                src="/visual-edits/espa-o-lume-juliana-munique-psicologa-psicanalista-jundiai-coworking-consultorio-02-7c63aa80.png"
                alt="Interior acolhedor do consultório de psicologia na Vila Arens, Jundiaí"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
