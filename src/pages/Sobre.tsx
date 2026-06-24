import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SEO, basePersonSchema } from '@/components/SEO'
import { AUTHOR_PORTRAIT_URL } from '@/lib/blog-data'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre Mim | Psicóloga Jundiaí | Psicanálise"
        description="Juliana Munique (CRP 06/106345), Psicóloga Jundiaí especializada em psicanálise. Conheça a trajetória e abordagem no cuidado em saúde mental."
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
            <h2 className="text-3xl font-serif font-bold text-primary">A escuta como ofício</h2>
            <p>
              Sou psicóloga clínica, graduada desde 2011, e ao longo de mais de uma década tenho me
              dedicado intensamente à escuta e ao cuidado da saúde mental de adolescentes e adultos.
            </p>
            <p>
              Minha paixão pela complexidade da mente humana me levou à especialização através da{' '}
              <strong>SBPCamp (Sociedade Brasileira de Psicanálise de Campinas)</strong>. A
              psicanálise não é apenas uma teoria para mim, é uma lente profunda através da qual
              busco compreender o sofrimento, as angústias e as potencialidades de cada indivíduo
              que cruza a porta do meu consultório.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-4">
              A Abordagem Psicanalítica
            </h3>
            <p>
              Acredito que nossos sintomas — sejam eles ansiedades, medos, ou dores emocionais — são
              mensagens codificadas do nosso inconsciente. O trabalho terapêutico que proponho é o
              de desvendar essas mensagens junto com você.
            </p>
            <p>
              Não ofereço conselhos prontos ou fórmulas mágicas. Ofereço um ambiente ético, sigiloso
              e extremamente acolhedor para que você possa falar livremente. É através dessa fala e
              da minha escuta qualificada que conseguimos encontrar novos contornos para velhas
              dores, permitindo que você retome as rédeas da sua própria vida com mais autonomia e
              autoconhecimento.
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
          </div>
        </div>
      </div>
    </div>
  )
}
