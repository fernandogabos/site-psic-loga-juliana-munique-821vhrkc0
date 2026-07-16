export const AUTHOR_PORTRAIT_URL =
  '/visual-edits/espa-o-lume-juliana-munique-psicologa-psicanalista-jundiai-coworking-consultorio-03-dcaf73cb.png'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  dateIso: string
  imageUrl: string
  category: string
  faqs?: { question: string; answer: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'quais-sao-suas-carencias',
    title: 'Quais são suas carências?',
    excerpt:
      'Entenda a origem da carência afetiva, como ela se manifesta nos seus relacionamentos e por que a psicoterapia é o caminho para a autonomia emocional.',
    date: '10 de Junho, 2026',
    dateIso: '2026-06-10T08:00:00Z',
    category: 'Relacionamentos',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=lonely%20couple&color=brown',
    faqs: [
      {
        question: 'Qual a diferença entre amar e ser emocionalmente dependente?',
        answer:
          'O amor saudável é baseado na escolha livre e no desejo. A dependência é baseada na necessidade urgente e no medo. O dependente sente que não consegue sobreviver psiquicamente sem o outro.',
      },
      {
        question: 'A carência afetiva tem cura?',
        answer:
          'Na psicanálise, o processo terapêutico ajuda o indivíduo a reposicionar-se diante da própria história, desenvolver autonomia emocional e criar relacionamentos mais autênticos e recíprocos.',
      },
      {
        question: 'Pessoas carentes atraem parceiros abusivos?',
        answer:
          'Frequentemente sim. Pessoas com alta carência afetiva tendem a tolerar atitudes desrespeitosas por medo da solidão, tornando-se vulneráveis a relacionamentos abusivos.',
      },
    ],
    content: `
      <p>A <strong>carência afetiva</strong> faz com que o indivíduo valorize mais o outro do que a si mesmo por medo de ficar sozinho e outras inseguranças. A pessoa acaba se submetendo ao outro e se vitimiza. A carência revela uma fragilidade humana. A forma que o indivíduo recebeu carinho na infância irá impactar na vida adulta e interferir em como a pessoa dá e recebe afeto. O afeto contribui para a <strong>constituição psíquica</strong> desde o nascimento, sendo fundamental na sua estruturação. Casos graves de privação afetiva podem levar a delinquência ou à psicose. Nos primeiros anos de vida o bebê depende totalmente de sua mãe e, sem ela, não tem a possibilidade de se identificar com um bom cuidado, tornando-se na vida adulta uma pessoa com graves problemas em termos de segurança afetiva.</p>

      <p><strong>Sintomas de carência afetiva</strong>: dependência, ciúmes, controle excessivo, medo de ficar sozinho, nos relacionamentos acaba sufocando o outro, vitimização, submissão, entre outros. Sair da carência exigirá muito esforço, foco e comprometimento. Em terapia, o paciente poderá compreender o que é um relacionamento saudável e analisar quais mudanças de comportamento precisa realizar.</p>

      <p>A <strong>relação de confiança</strong> entre a dupla paciente e terapeuta será necessária, pois como não teve essa relação de cuidado, a pessoa tende a romper o processo por medo de reviver o momento traumático da infância. Em especial, a <strong>raiva reprimida</strong> e o abafamento das frustrações na tentativa de agradar os outros precisam ser identificados e expressos de forma adequada para retomar o equilíbrio nas relações.</p>
    `,
  },
  {
    slug: 'bloqueios-emocionais-como-identifica-los',
    title: 'Bloqueios Emocionais? Como identificá-los?',
    excerpt:
      'Aprenda a reconhecer os bloqueios emocionais, defesas silenciosas do inconsciente que sabotam suas escolhas, e descubra como a terapia auxilia no desbloqueio.',
    date: '22 de Maio, 2026',
    dateIso: '2026-05-22T08:00:00Z',
    category: 'Saúde Mental',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=blocked%20mind&color=brown',
    faqs: [
      {
        question: 'É possível ter bloqueios emocionais e não saber o porquê?',
        answer:
          'Sim, é extremamente comum. Como os bloqueios são defesas de origem inconsciente, eles escondem o evento gerador da dor primária. A pessoa sente o travamento, mas dificilmente tem acesso à memória que originou o bloqueio.',
      },
      {
        question: 'Bloqueios emocionais podem causar sintomas físicos?',
        answer:
          'Certamente. Emoções bloqueadas frequentemente somatizam através de dores de cabeça tensionais, gastrite nervosa, dores musculares crônicas e episódios de ansiedade e pânico.',
      },
      {
        question: 'Quanto tempo leva para destravar um bloqueio profundo?',
        answer:
          'Isso é particular de cada paciente. O tempo da psique não corresponde ao tempo do relógio. Dependerá da intensidade do trauma, das resistências psíquicas e da constância no processo de análise.',
      },
    ],
    content: `
      <div style="text-align: center;">
      <p>Muitos pacientes relatam que se sentem paralisados, não conseguem progredir, sempre acontece algo de errado em suas vidas, os relacionamentos não dão certo e não compreendem o porquê. Cada indivíduo tem uma história que foi sendo construída desde o nascimento. O ambiente que esteve inserido e as condições que foram criados influenciam na sua forma de se relacionar com o mundo. Aquilo que nos causa medo, dor, ansiedade, tendemos a evitar a qualquer custo. Desta forma, surgem os <strong>bloqueios emocionais</strong> que nos impedem de enfrentar as situações difíceis. Esses bloqueios, são <strong>mecanismos de defesa</strong> do nosso <strong>inconsciente</strong> para nos "proteger do sofrimento". No entanto, os <strong>bloqueios emocionais</strong> colaboram para o adoecimento. Quando o ser humano adoece, há uma impossibilidade de transformação.</p>

      <p><strong>Principais sinais de bloqueios emocionais</strong>: Não conseguir conversar sobre determinados assuntos, insegurança perante situações novas, falta de confiança no outro, medo da rejeição, dificuldade em aceitar a opinião do outro, pensamentos negativos frequentes, arrumar desculpas para justificar a situação que se encontra, entre outros.</p>

      <p><strong>Como tratar?</strong> Primeiramente, é fundamental ter coragem para reconhecer que necessita de ajuda e buscar um profissional adequado. As travas criadas na infância são sempre dificuldades de relacionamento com a família, por isso buscar ajuda pode ser tão difícil, pois significa em nosso <strong>inconsciente</strong> ter de enfrentar novamente dores e sentimentos que não foram bem acolhidos na ocasião. O esforço consciente e contínuo na <strong>psicoterapia</strong> é necessário para reestabelecer a confiança que foi perdida e, assim, poder recuperar a espontaneidade de uma vida livre de bloqueios através de um <strong>autoenfrentamento honesto</strong> de quem realmente somos.</p>
      </div>
    `,
  },
  {
    slug: 'por-que-educar-e-dificil',
    title: 'Por que Educar é Difícil?',
    excerpt:
      'Reflexões sobre os desafios da parentalidade moderna, a repetição inconsciente de padrões herdados e os cinco pilares essenciais para o desenvolvimento infantil.',
    date: '05 de Abril, 2026',
    dateIso: '2026-04-05T08:00:00Z',
    category: 'Parentalidade',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=family%20education&color=brown',
    faqs: [
      {
        question: 'Dizer "não" pode traumatizar meu filho?',
        answer:
          'Absolutamente pelo contrário. A ausência de limites gera insegurança. O limite dito com calma, clareza e afeto estrutura e protege a psique da criança, sem qualquer traço de humilhação ou agressão.',
      },
      {
        question: 'Por que perco a paciência tão facilmente com meus filhos?',
        answer:
          'Na maioria das vezes, o comportamento que nos tira do sério está cutucando feridas antigas mal curadas de nossa própria infância. Buscar psicoterapia ajuda a entender e curar esses gatilhos.',
      },
      {
        question: 'É possível criar sem repetir os erros dos meus pais?',
        answer:
          'Totalmente possível, mas exige trabalho emocional. O primeiro passo é refletir sobre a sua própria história como filho(a) e construir ativamente um modelo de parentalidade mais consciente.',
      },
    ],
    content: `
      <p>Independente se os pais são <strong>biológicos ou não</strong>, <strong>educar</strong> é uma tarefa que exige muita <strong>disponibilidade e responsabilidade</strong>. O responsável pela educação consegue transmitir somente aquilo que teve como referência em sua vida. Sendo assim, os pais acabam educando seus filhos da mesma forma que foram educados (<strong>educação muito severa, permissiva ou com alguma negligência</strong>).</p>

      <p>Para educar é necessário promover um <strong>ambiente afetivo, seguro e com disciplina</strong>. Educar envolve questões que são importantes para a criança que está se desenvolvendo. Segue cinco pontos para prestar atenção:</p>

      <p><strong>1 - Relação afetiva</strong> - demonstrar carinho faz com que a criança e/ou adolescente se sinta seguro para ser espontâneo. Ter pais que realmente participam do dia a dia, se preocupem com o que estão fazendo e descobrindo, colabora para o <strong>desenvolvimento da autoconfiança e autoestima</strong>.</p>

      <p><strong>2 - Desenvolvimento</strong> - prestar atenção nas habilidades que estão sendo adquiridas, mas não comparar os filhos e nem comparar a criança com outros colegas. Cada criança deve ser <strong>respeitada em sua individualidade</strong>.</p>

      <p><strong>3 - A importância do NÃO</strong> - uma dose de frustação é necessária, pois não se pode ter tudo no momento que se deseja. É importante explicar o porquê das decisões para ser compreensivo para a criança. <strong>Regras claras</strong> são necessárias para o desenvolvimento.</p>

      <p><strong>4 - Autoconhecimento</strong> - é importante que os pais compreendam as suas próprias dificuldades e se prontifiquem a se desenvolverem. <strong>Assumir os próprios erros, pedir desculpas, rever prioridades, buscar conhecimento</strong>, são atitudes que contribuem para o aprendizado da criança.</p>

      <p><strong>5 - Comunicação</strong> - ter um bom diálogo em casa é importante não só para a criança, mas para todos que vivem neste ambiente. Conseguir <strong>falar abertamente das emoções e com respeito</strong>, facilita a comunicação de todos. Respeitar a opinião e explicar as dúvidas com tranquilidade facilita o aprendizado.</p>

      <p>O essencial para educar é promover um <strong>ambiente facilitador e saudável</strong>, pois é no <strong>ambiente familiar</strong> que começamos nossas experiências para expandir as <strong>relações interpessoais</strong> posteriormente.</p>
    `,
  },
  {
    slug: 'funcao-materna-e-a-clinica',
    title: 'Função Materna e a Clínica',
    excerpt:
      'Compreenda como o psicólogo exerce uma função materna na clínica, acolhendo o paciente sem julgamento e oferecendo um espaço seguro para a transformação.',
    date: '15 de Março, 2026',
    dateIso: '2026-03-15T08:00:00Z',
    category: 'Psicanálise',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=therapy%20session&color=brown',
    faqs: [
      {
        question: 'O que significa "função materna" na psicoterapia?',
        answer:
          'Não tem relação com o gênero do terapeuta. Refere-se à função psicológica de acolher, escutar sem julgamento e oferecer um ambiente seguro onde o paciente pode-se manifestar livremente, assim como uma boa figura materna faz na primeira infância.',
      },
      {
        question: 'O terapeuta substitui a mãe do paciente?',
        answer:
          'De forma alguma. O terapeuta exerce uma função temporária e ética de acolhimento. O objetivo é que o paciente, através dessa experiência relacional segura, desenvolva sua própria capacidade de se acolher e se cuidar de forma autônoma.',
      },
      {
        question: 'Por que o acolhimento sem julgamento é tão importante?',
        answer:
          'Porque grande parte do sofrimento psíquico vem do medo de ser julgado ou rejeitado. Quando o paciente percebe que pode falar qualquer coisa sem ser condenado, surgem as condições para que conteúdos reprimidos possam ser elaborados.',
      },
    ],
    content: `
      <div style="text-align: center;">
      <p>Muitas mulheres sonham em ser mães, mas esse desejo quando concretizado também traz muito <strong>medo e ansiedade</strong>. Seria muito importante ter uma preparação antes da maternidade, mas sabemos que não é a realidade de muitas mães. O corpo da mulher sofre muitas mudanças e ela adquire mais um papel na sociedade: o de mãe e responsável pelo cuidado do bebê. Com isso, vem as frustrações, dificuldades de lidar com a expectativa que criou de seu bebê e a necessidade de aceitar o bebê do jeito que ele é. A mãe se torna capaz dia após dia de fazer a leitura do que o bebê precisa em cada momento. Conforme o bebê vai recebendo um bom cuidado, vai adquirindo confiança para desenvolver sua autoestima, pensamento crítico e sua criatividade. A mãe é fundamental para a <strong>estruturação psíquica do bebê</strong>. No contexto clínico, o psicólogo também realiza uma <strong>função materna</strong>, pois <strong>acolhe o paciente de forma integral</strong>, <strong>ouvindo suas dores sem julgamento</strong>, compreendendo suas necessidades e contribuindo para que se torne autoconfiante, espontâneo e tenha relacionamentos interpessoais mais harmônicos.</p>
      </div>
    `,
  },
  {
    slug: 'fobia-social',
    title: 'Fobia Social',
    excerpt:
      'Conheça os sintomas da fobia social, saiba diferenciar da timidez comum e entenda como a psicoterapia pode ajudar a superar o medo paralisante do julgamento.',
    date: '28 de Fevereiro, 2026',
    dateIso: '2026-02-28T08:00:00Z',
    category: 'Saúde Mental',
    imageUrl: 'https://img.usecurling.com/p/800/600?q=social%20anxiety&color=brown',
    faqs: [
      {
        question: 'Qual a diferença entre fobia social e timidez?',
        answer:
          'A timidez é um traço de personalidade que não impede a pessoa de viver sua vida. A fobia social é um transtorno de ansiedade que causa sofrimento intenso e incapacitante, levando a pessoa a evitar situações sociais por medo do julgamento.',
      },
      {
        question: 'A fobia social tem cura?',
        answer:
          'Com o tratamento adequado, que inclui psicoterapia e, quando necessário, medicação, a pessoa com fobia social pode aprender a gerenciar a ansiedade e recuperar sua vida social de forma significativa.',
      },
      {
        question: 'É normal sentir taquicardia antes de apresentações?',
        answer:
          'Uma ansiedade leve antes de situações de exposição é comum. Porém, quando os sintomas físicos são intensos, recorrentes e levam à esquiva total da situação, pode ser um sinal de fobia social que merece atenção profissional.',
      },
    ],
    content: `
      <p>Na <strong>fobia social</strong> ou <strong>timidez patológica</strong>, existe uma <strong>ansiedade excessiva</strong> diante de situações em que não há perigo real. O indivíduo sente um <strong>medo intenso</strong> de vivenciar situações que possam envolver a avaliação do outro. Frequentemente sofrem por antecipação, evitam situações sociais ou se esforçam para conseguir suportá-las, apresentam <strong>sintomas físicos</strong> como taquicardia, sudorese, cefaleia, tremor, diarreia entre outros. Existe uma fantasia de que está sendo observado o tempo todo. Sentem desconforto em comer em público, interagir com pessoas que não são familiares, medo de ofender alguém devido a sua fala ou comportamento. A busca por auxílio de um profissional pode ocorrer muito tarde ou quando tem a vida social muito prejudicada. A <strong>fobia social</strong> necessita de <strong>tratamento medicamentoso e terapêutico</strong> para que o indivíduo consiga lidar e elaborar seu sofrimento. <strong>Timidez</strong> é um comportamento não patológico. O indivíduo tímido precisa se sentir seguro para se expor, mas o relacionamento interpessoal tende a ser restrito, no sentido que não será a primeira pessoa que iniciará uma conversa ou compartilhará experiências vividas.</p>
    `,
  },
]
