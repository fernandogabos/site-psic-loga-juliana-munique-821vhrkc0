import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, baseLocalBusinessSchema } from '@/components/SEO'
import { Button } from '@/components/ui/button'

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
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
            Área de Atuação
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Psicoterapia para Adultos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Um mergulho profundo nas próprias questões para desatar nós e encontrar novas formas de
            existir no mundo.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <img
          src="https://img.usecurling.com/p/1200/500?q=adult%20thinking&color=brown"
          alt="Adulto em reflexão"
          className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-lg mb-16"
        />

        <div className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary max-w-none text-muted-foreground mb-16">
          <h2>As Angústias da Vida Adulta</h2>
          <p>
            A vida adulta exige constantes adaptações e traz consigo muitas responsabilidades,
            pressões profissionais, demandas familiares e crises nos relacionamentos. Muitas vezes,
            damos conta de tudo isso no modo "automático", engolindo emoções, até que um sintoma
            (uma crise de ansiedade, uma tristeza persistente, um adoecimento psicossomático) nos
            obriga a parar.
          </p>

          <h3>Por que buscar a psicanálise?</h3>
          <p>
            Procurar a psicanálise é decidir que não se quer mais apenas sobreviver aos sintomas,
            mas compreender de onde eles vêm. O processo é indicado para:
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
            Através da associação livre — a regra fundamental da psicanálise, onde o paciente é
            convidado a falar o que lhe vier à mente, sem julgamentos —, os conteúdos inconscientes
            começam a se revelar e a fazer sentido.
          </p>
          <p>
            Meu papel como analista é escutar pontuar aquilo que você, imerso na própria dor, não
            consegue ouvir sobre si mesmo. Esse processo permite desamarrar os nós que paralisam a
            vida, abrindo espaço para escolhas mais autênticas e conscientes.
          </p>
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
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold rounded-full h-14 px-10 text-lg transition-transform hover:scale-105"
          >
            <Link to="/contato">Agendar Minha Sessão</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
