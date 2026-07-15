import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/Testimonials'

export default function Adultos() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terapia para Adultos Jundiaí | Psicoterapia e Psicanálise"
        description="Terapia para adultos Jundiaí focada em autoconhecimento, depressão, estresse e ansiedade. Psicoterapia em Jundiaí na Vila Arens ou formato online."
        canonicalUrl="/adultos"
        schema={baseLocalBusinessSchema}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8 max-w-4xl text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Área de Atuação
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Psicoterapia para Adultos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <div>
              Um processo de investigação de si, voltado à compreensão dos conflitos inconscientes,
              à elaboração do sofrimento e à descoberta de novas possibilidades de viver.
            </div>
            <div>As responsabilidades da vida adulta</div>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <img
          src="https://img.usecurling.com/p/1200/500?q=adult%20thinking&color=brown"
          alt="Pessoa adulta em momento de reflexão profunda"
          className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-lg mb-16"
        />

        <div className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary max-w-none text-foreground mb-16">
          <h2>As Angústias da Vida Adulta</h2>
          <p>
            <div>
              A maturidade traz consigo o peso de constantes exigências profissionais, familiares e
              relacionais. Na tentativa de responder a todas essas demandas, muitas vezes o sujeito
              anula seu próprio desejo e passa a operar de forma mecânica, recalcando afetos e
              silenciando dores. No entanto, o que não é elaborado pela via do pensamento retorna
              através do corpo e do adoecimento. A crise de ansiedade, o vazio persistente ou a
              doença psicossomática são os freios de emergência do psiquismo — sintomas que nos
              obrigam a interromper a repetição e iniciar um verdadeiro trabalho de investigação
              sobre nós mesmos.
            </div>
          </p>

          <h3>Por que buscar a psicanálise?</h3>
          <p>
            <div>
              Porque o sofrimento não se resolve eliminando apenas os sintomas. Frequentemente
              repetimos padrões, vivenciamos conflitos nos relacionamentos ou sentimos uma angústia
              que não conseguimos explicar.&nbsp;&nbsp;
            </div>
            <div>
              <br />
            </div>
            <div>
              A psicanálise proporciona um espaço de escuta profunda para compreender as origens do
              sofrimento, reconhecer o que atua de forma inconsciente e descobrir novas maneiras de
              existir, possibilitando mudanças que fazem sentido para história de cada pessoa.&nbsp;
            </div>
          </p>
          <ul>
            <li>Ansiedade generalizada, fobias e ataques de pânico.</li>
            <li>Quadros depressivos, apatia ou sensação de vazio crônico.</li>
            <li>Repetição de padrões destrutivos em relacionamentos amorosos ou profissionais.</li>
            <li>Lutos complicados, separações difíceis ou perdas significativas.</li>
            <li>Crises existenciais, falta de sentido e transições de carreira.</li>
          </ul>

          <h2>O Caminho do Autoconhecimento</h2>
          <p>
            <div>
              Na psicanálise, você é convidado a falar livremente sobre o que vier à mente, sem se
              preocupar em organizar ou filtrar os pensamentos. Esse é o ponto de partida do
              processo: um espaço seguro, sem julgamentos, onde sentimentos, lembranças e questões
              que muitas vezes ficam guardados encontram espaço para aparecer.
            </div>
            <div>
              <br />
            </div>
            <div>
              Aos poucos, esses conteúdos ganham forma e sentido. Como psicóloga, meu papel é te
              oferecer uma escuta atenta e cuidadosa, ajudando a enxergar aspectos da sua história
              que, de dentro do próprio sofrimento, costumam ser difíceis de perceber sozinho.
            </div>
            <div>
              <br />
            </div>
            <div>
              Esse caminho ajuda a entender a origem de certos conflitos, a romper padrões que se
              repetem e a construir novas formas de se relacionar consigo mesmo, com as outras
              pessoas e com a própria vida.
            </div>
          </p>
          <p>
            Meu papel como analista é escutar pontuar aquilo que você, imerso na própria dor, não
            consegue ouvir sobre si mesmo. Esse processo permite desamarrar os nós que paralisam a
            vida, abrindo espaço para escolhas mais autênticas e conscientes.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary">
            Experiências de quem já iniciou a terapia
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
          <h3 className="text-3xl font-serif font-bold mb-6">Pronto para dar o primeiro passo?</h3>
          <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Agende uma sessão para conversarmos. O início da terapia é o começo do compromisso mais
            importante que você pode assumir: o compromisso consigo mesmo.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-foreground font-bold rounded-full min-h-[56px] h-14 px-10 text-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Link to="/contato">Agendar Minha Sessão</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
