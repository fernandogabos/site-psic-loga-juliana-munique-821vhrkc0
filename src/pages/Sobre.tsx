import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, basePersonSchema } from '@/components/SEO'
import { AUTHOR_PORTRAIT_URL } from '@/lib/blog-data'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre Juliana Munique | Psicanalista CRP 06/106345"
        description="Conheça Juliana Munique, psicanalista com CRP 06/106345, membro da SBPCamp e mais de uma década dedicada à escuta psicanalítica em Jundiaí."
        canonicalUrl="/sobre"
        schema={{
          ...basePersonSchema,
          alumniOf: 'SBPCamp - Sociedade Brasileira de Psicanálise de Campinas',
        }}
      />

      <div className="bg-muted pt-8 pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-center md:text-left">
            Minha Trajetória
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-5 relative">
            <div className="sticky top-32">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                <img
                  src={AUTHOR_PORTRAIT_URL}
                  alt="Retrato da Psicóloga Juliana Munique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary text-muted-foreground max-w-none">
            <h2 className="text-3xl font-serif font-bold text-primary">A escuta clínica</h2>
            <p>
              Sou psicóloga clínica, graduada desde 2011, e ao longo de mais de uma década tenho me
              dedicado intensamente à escuta e ao cuidado da saúde mental de adolescentes e adultos.
            </p>
            <p>
              Minha paixão pela complexidade da mente humana me levou à especialização através da{' '}
              <strong>SBPCamp (Sociedade Brasileira de Psicanálise de Campinas)</strong>. A
              psicanálise não é apenas uma teoria para mim, é uma lente profunda através da qual
              busco compreender o sofrimento, as angústias e as potencialidades de cada indivíduo.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">
              A Abordagem Psicanalítica
            </h3>
            <p>
              Me encantei pela Psicanálise ainda na faculdade, pois pude compreender diferentes
              questões da minha vida através desta abordagem. A Psicanálise nos dá um grande
              respaldo para compreender o ser humano e a forma que ele foi se constituindo desde o
              seu nascimento. Por exemplo, o inconsciente influencia em nossa forma de se comportar
              e muitas vezes não compreendemos o porquê agimos daquela maneira. Isso acontece,
              porque o inconsciente guarda informações que não estão disponíveis para a nossa
              consciência.
            </p>
            <p>
              <div>
                Sozinho é muito difícil e as vezes até impossível compreender a forma que fomos nos
                constituindo, mas com o auxílio de um profissional podemos reviver experiências
                angustiantes e traumáticas de nossa vida que serão possíveis de serem
                ressignificados, trazendo mais tranquilidade, compreensão e aceitação.&nbsp;
              </div>
              <div>
                <br />
              </div>
              <div>
                As nossas dificuldades emocionais, quando não tratadas adequadamente, deterioram a
                nossa vida e das pessoas a nossa volta. Pense em quanto tempo, experiências,
                dinheiro, pessoas e oportunidades já não foram perdidas em função de suas emoções e
                não por uma decisão consciente com bom senso?
              </div>
              <div>
                <br />
              </div>
            </p>

            <div className="bg-secondary p-8 rounded-3xl border border-border mt-12">
              <h4 className="font-serif font-bold text-primary text-2xl mb-4">
                Formação e Qualificações
              </h4>
              <ul className="list-disc list-inside space-y-3 mt-4 marker:text-accent font-medium text-muted-foreground">
                <li>Graduação em Psicologia (2011)</li>
                <li>Especialização Clínica em Psicanálise - SBPCamp</li>
                <li>Supervisão Psicanalítica Contínua</li>
                <li>Membro de grupos de estudos em Psicanálise Contemporânea</li>
              </ul>
            </div>

            <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">
              Minha Formação e Trajetória
            </h3>
            <p>
              Sou graduada em Psicologia e me especializei em Psicanálise pela Sociedade Brasileira
              de Psicanálise de Campinas (SBPCamp), instituição filiada à International
              Psychoanalytical Association (IPA). Meu registro profissional é CRP 06/106345. Desde
              2011, acompanho adultos e adolescentes em processos de análise que buscam compreender
              o sofrimento emocional em sua dimensão mais profunda — aquela que não aparece em
              exames, mas que determina nossas escolhas, nossas relações e nossa qualidade de vida.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">
              Minha Abordagem
            </h3>
            <p>
              Acredito que cada pessoa traz uma história única, e que o sofrimento nunca é genérico.
              Na minha prática clínica, trabalho com escuta atenta, sem pressa e sem julgamentos. A
              psicanálise não oferece fórmulas prontas — ela abre espaço para que você descubra, no
              seu próprio tempo, o que está na raiz do que te incomoda. Atendo presencialmente no
              meu consultório na Vila Arens, em Jundiaí, e também online para quem prefere a
              comodidade do atendimento à distância.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">
              Por que buscar análise?
            </h3>
            <p>
              Muitas pessoas chegam à análise quando já estão exaustas de tentar resolver sozinhas
              algo que não conseguem entender. Outras chegam movidas pela curiosidade de se conhecer
              melhor. Não há momento certo para começar — há apenas o momento em que você decide que
              quer algo diferente para a sua vida. Se você sente que algo está te impedindo de ser
              quem você quer ser, esse é um bom motivo para uma primeira conversa.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground mt-12">
              Sou membro ativa da SBPCamp e participo regularmente de grupos de supervisão clínica e
              seminários de formação continuada, garantindo que minha prática esteja sempre alinhada
              aos mais altos padrões da psicanálise contemporânea.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
