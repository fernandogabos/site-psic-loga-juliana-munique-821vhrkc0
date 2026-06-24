import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/Testimonials'

export default function Adolescentes() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Psicóloga para Adolescentes Jundiaí | Terapia para Ansiedade"
        description="Busca psicóloga para adolescentes Jundiaí? Terapia especializada para ansiedade, transição e conflitos através da psicanálise. Atendimento presencial e online."
        canonicalUrl="/adolescentes"
        schema={baseLocalBusinessSchema}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Área de Atuação
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Psicoterapia para Adolescentes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A adolescência é uma fase de transição intensa. A psicoterapia oferece um espaço de
            elaboração e suporte diante das angústias próprias deste período.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <img
          src="https://img.usecurling.com/p/1200/500?q=teenager%20studying&color=brown"
          alt="Adolescente estudando em ambiente tranquilo"
          className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-lg mb-16"
        />

        <div className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary max-w-none text-foreground mb-16">
          <h2>Os Desafios da Adolescência</h2>
          <p>
            A transição da infância para a vida adulta é marcada por lutos e descobertas. O
            adolescente passa por transformações físicas (o luto pelo corpo infantil), sociais (o
            luto pelos pais da infância) e de identidade. Em meio a tudo isso, a cobrança por
            decisões como a escolha profissional e a pressão estética e social podem gerar intensa
            ansiedade.
          </p>

          <h3>Quando a terapia é indicada?</h3>
          <ul>
            <li>Mudanças bruscas de comportamento, isolamento excessivo ou agressividade.</li>
            <li>Sinais de ansiedade grave, ataques de pânico ou sintomas depressivos.</li>
            <li>Dificuldades de socialização, bullying ou problemas escolares.</li>
            <li>Conflitos familiares intensos e dificuldade de comunicação em casa.</li>
            <li>Dúvidas paralisantes sobre sexualidade ou escolha de carreira.</li>
          </ul>

          <h2>Como funciona o atendimento?</h2>
          <p>
            O espaço terapêutico para o adolescente precisa ser construído sob um forte pilar de
            confiança. O sigilo absoluto é fundamental para que ele sinta que ali é um lugar seguro,
            onde pode falar sobre si mesmo sem o temor de ser julgado ou punido pelos adultos.
          </p>
          <p>
            O processo envolve, também, entrevistas pontuais com os pais ou responsáveis (quando
            necessário e sempre acordado previamente com o adolescente), visando o alinhamento e a
            compreensão da dinâmica familiar, mas preservando sempre a intimidade do paciente.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary">
            Relatos sobre o processo terapêutico
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Fernando Gabos"
              rating={5}
              text="Excelente psicóloga! A Juliana Munique conduz os atendimentos com muita empatia, profissionalismo e sensibilidade. Faz toda a diferença contar com uma profissional tão comprometida com o bem-estar e a evolução de seus pacientes. Recomendo com total confiança."
            />
            <TestimonialCard
              name="André Rossi"
              rating={5}
              text="Juliana é uma profissional muito competente, dedicada e atenciosa, além de muito simpática. Super recomendada!"
            />
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-10 md:p-14 rounded-[3rem] text-center shadow-xl">
          <h3 className="text-3xl font-serif font-bold mb-6">
            Gostaria de agendar uma primeira conversa?
          </h3>
          <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            O primeiro passo é marcar uma entrevista inicial. Nela, conversaremos sobre o que os
            motivou a buscar ajuda e explicarei os detalhes do processo, tanto para os pais quanto
            para o adolescente.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-bold rounded-full min-h-[56px] h-14 px-10 text-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Link to="/contato">Agendar Entrevista Inicial</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
