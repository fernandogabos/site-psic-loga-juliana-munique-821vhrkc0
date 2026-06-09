export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  imageUrl: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-que-e-psicoterapia-psicanalitica',
    title: 'O que é Psicoterapia Psicanalítica e como ela pode ajudar?',
    excerpt:
      'Entenda os princípios básicos da psicanálise e por que ela é tão eficaz para o autoconhecimento e tratamento de angústias profundas.',
    date: '10 de Junho, 2026',
    category: 'Psicanálise',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=books&color=brown',
    content: `
      <p>A psicoterapia psicanalítica é muito mais do que um simples "desabafo". É um método rigoroso de investigação do inconsciente, criado por Sigmund Freud e desenvolvido por diversos teóricos (como Lacan, Winnicott, Klein) até os dias atuais.</p>
      <h2>A Força do Inconsciente</h2>
      <p>Muitas das nossas escolhas amorosas, medos e repetições de padrão destrutivo não são ditadas pela nossa razão consciente, mas pelo nosso inconsciente. A psicanálise nos ajuda a jogar luz sobre esses conteúdos obscuros, permitindo que o paciente compreenda de fato por que age de determinada maneira e por que sofre.</p>
      <h2>O Papel da Associação Livre</h2>
      <p>Nas sessões, o paciente é convidado a falar livremente, sem censura prévia. É nas "falhas" do discurso, nos lapsos de memória, nos sonhos e naquilo que parece "não ter importância alguma" que encontramos as maiores e mais libertadoras verdades sobre o sujeito.</p>
      <h2>Uma Transformação Estrutural</h2>
      <p>Ao invés de apenas focar em eliminar rapidamente o sintoma (que invariavelmente retornará de outra forma se a causa não for tratada), a psicanálise atua na estrutura do sujeito, promovendo mudanças sólidas e duradouras para a vida inteira.</p>
    `,
  },
  {
    slug: 'como-lidar-com-ansiedade-no-trabalho',
    title: 'Como lidar com a ansiedade no ambiente de trabalho',
    excerpt:
      'O burnout e a ansiedade generalizada estão cada vez mais presentes. Saiba como identificar os sinais e a importância de buscar ajuda.',
    date: '22 de Maio, 2026',
    category: 'Saúde Mental',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=office&color=brown',
    content: `
      <p>O ambiente corporativo contemporâneo muitas vezes exige de nós uma performance ininterrupta, o que é humanamente impossível. A longo prazo, a conta dessa exigência irreal chega na forma de ansiedade crônica e esgotamento profissional (conhecido como Burnout).</p>
      <h2>Sinais de Alerta</h2>
      <p>Insônia recorrente, taquicardia aos domingos à noite (a famosa "síndrome do fantástico"), irritabilidade extrema com colegas e a sensação constante de que o trabalho invadiu toda a sua vida pessoal são alertas vermelhos que não devem ser ignorados.</p>
      <h2>Colocando Limites e se Conhecendo</h2>
      <p>Na terapia psicanalítica, trabalhamos para ir além das técnicas paliativas de relaxamento. Nós investigamos: por que é tão difícil dizer não? Qual o lugar que o trabalho e a aprovação dos superiores ocupa na sua identidade e na sua autoestima? É ao responder essas perguntas difíceis que a verdadeira mudança e o alívio acontecem.</p>
    `,
  },
  {
    slug: 'importancia-do-vinculo-terapeutico',
    title: 'A importância do vínculo terapêutico',
    excerpt:
      'Por que a relação entre analista e paciente é o principal motor da transformação e da cura na terapia psicanalítica.',
    date: '05 de Abril, 2026',
    category: 'Psicoterapia',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=conversation&color=brown',
    content: `
      <p>Nenhuma técnica teórica funciona se não houver um bom e sólido vínculo entre paciente e terapeuta. Na psicanálise, chamamos a dinâmica desse vínculo tão particular de "transferência".</p>
      <h2>O que é Transferência?</h2>
      <p>A transferência é o fenômeno clínico onde o paciente projeta (transfere) no analista afetos, sentimentos e expectativas de figuras importantes do seu passado (pais, autoridades, amores). É através do manejo cuidadoso e ético dessas projeções que antigos conflitos inconscientes podem ser atualizados, reeditados e curados ali mesmo, na relação terapêutica.</p>
      <h2>A Confiança é a Base</h2>
      <p>Sem confiança absoluta e sem a garantia de um sigilo rigoroso, o paciente não se sentirá livre o suficiente para revelar suas partes mais íntimas e vulneráveis. Por isso, a escolha de um bom profissional, com quem você sinta empatia inicial, é o passo mais fundamental para o sucesso do processo.</p>
    `,
  },
]
