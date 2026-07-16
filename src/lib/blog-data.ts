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
      <p>A chegada de um filho inaugura uma das fases mais intensas e transformadoras na vida de qualquer adulto. De repente, somos responsáveis pelo cuidado físico e pelo delicado desenvolvimento emocional de um novo ser humano. E, sejamos honestos: <strong>educar dá um trabalho brutal</strong>, cansa e provoca ondas de insegurança e medo constante de falhar.</p>

      <p>Não existe um "manual infalível da criança perfeita". A dificuldade na educação moderna mora no fato de que educar não é um ato unilateral de adestramento. A educação é, acima de tudo, um encontro complexo entre duas subjetividades: a dos pais, que carregam sua bagagem e traumas; e a da criança, que está descobrindo o mundo.</p>

      <h2>A Repetição dos Modelos Herdados</h2>

      <p>Muitas vezes, a exaustão dos pais está atrelada à repetição automática de padrões de criação que viveram em sua própria infância. Inconscientemente, tendemos a reproduzir com nossos filhos o mesmo modelo educacional que recebemos — seja autoritário e punitivo, ou negligente e distante.</p>

      <p>O outro extremo igualmente comum é a tentativa desesperada de fazer "exatamente o oposto" de tudo o que os pais fizeram, caindo na permissividade total pelo pânico de repetir os erros do passado. Encontrar o caminho saudável do meio é o grande desafio da maturidade adulta.</p>

      <h2>Os 5 Pontos Essenciais Para Pais</h2>

      <ul>
        <li><strong>1. Relação afetiva:</strong> O primeiro e mais essencial passo é garantir que a criança sinta-se incondicionalmente amada e segura na relação familiar. É a certeza desse amor seguro que dá vigor psicológico para que a criança possa enfrentar, mais adiante, as frustrações do mundo.</li>
        <li><strong>2. Desenvolvimento:</strong> Todo filho é único e traz consigo uma temporalidade que exige ser respeitada. A criança tem o seu próprio ritmo motor, afetivo e cognitivo. Evitar comparações cruéis com irmãos ou crianças alheias é abrir espaço amoroso para que construa uma autoestima baseada no que de fato é, e não no que os adultos projetam nela.</li>
        <li><strong>3. A importância do NÃO:</strong> Frustrar coerentemente os desejos onipotentes da criança e saber dizer "não" não é falta de amor. Muito pelo contrário: o limite é o contorno vital para a proteção. Crianças precisam de referências sólidas e regras claras, sustentadas com firmeza e muito afeto, para se sentirem internamente contidas e protegidas de seus próprios impulsos excessivos.</li>
        <li><strong>4. Autoconhecimento:</strong> Nossos filhos atuam como espelhos emocionais que expõem diariamente todas as nossas questões não resolvidas. Fazer a sua própria psicoterapia é fundamental. Pais que têm a coragem de conhecer e tratar suas próprias feridas ganham cada vez menos chance de projetar irracionalmente suas frustrações na vida da criança.</li>
        <li><strong>5. Comunicação:</strong> A criança não é um "adulto em miniatura". Ela é alguém em formação que compreende o ambiente através das emoções sinceras e do afeto. Nomeie os sentimentos, abaixe-se para escutar genuinamente os medos e crie um espaço seguro de conversa dentro de casa, onde a palavra tenha seu lugar eterno — no lugar do silêncio hostil ou das ameaças punitivas.</li>
      </ul>

      <hr/>
      <h2>Perguntas Frequentes (FAQ)</h2>

      <h3>Dizer "não" pode traumatizar meu filho?</h3>
      <p>Absolutamente pelo contrário. A ausência de limites gera insegurança. O limite dito com calma, clareza e afeto estrutura e protege a psique da criança, sem qualquer traço de humilhação ou agressão.</p>

      <h3>Por que perco a paciência tão facilmente com meus filhos?</h3>
      <p>Na maioria das vezes, o comportamento que nos tira do sério está cutucando feridas antigas mal curadas de nossa própria infância. Buscar psicoterapia ajuda a entender e curar esses gatilhos.</p>

      <h3>É possível criar sem repetir os erros dos meus pais?</h3>
      <p>Totalmente possível, mas exige trabalho emocional. O primeiro passo é refletir sobre a sua própria história como filho(a) e construir ativamente um modelo de parentalidade mais consciente.</p>
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
      <p>A <strong>fobia social</strong>, também conhecida como transtorno de ansiedade social, é muito mais do que simples timidez. É um medo persistente e intenso de situações sociais nas quais a pessoa sente que pode ser observada, julgada ou avaliada negativamente por outros. Esse medo é tão paralisante que interfere significativamente na vida pessoal, profissional e afetiva do indivíduo.</p>

      <p>É fundamental compreender a <strong>distinção entre fobia social e timidez não patológica</strong>. A timidez é um traço de personalidade: a pessoa pode se sentir desconfortável em certas situações, mas consegue enfrentá-las e levar sua vida normalmente. A <strong>fobia social</strong>, por outro lado, é um transtorno que gera sofrimento intenso e leva à esquiva — a pessoa foge sistematicamente de qualquer situação que possa expô-la ao julgamento alheio.</p>

      <h2>Sintomas Físicos da Fobia Social</h2>

      <p>O corpo reage de forma intensa diante das situações temidas. Os <strong>sintomas físicos</strong> da fobia social são reais e angustiantes, frequentemente confundidos com problemas cardíacos ou outras condições médicas. Os principais incluem:</p>

      <ul>
        <li><strong>Taquicardia</strong>: o coração acelerado e palpitações intensas que surgem antes ou durante situações sociais.</li>
        <li><strong>Sudorese</strong>: transpiração excessiva, especialmente nas mãos, axilas e rosto, que gera ainda mais vergonha.</li>
        <li><strong>Tremores</strong>: tremor das mãos, da voz ou do corpo inteiro ao se sentir observado.</li>
        <li><strong>Rubor facial</strong>: o rosto fica vermelho de forma incontrolável, aumentando o constrangimento.</li>
        <li><strong>Dificuldade para respirar</strong>: sensação de sufocamento ou falta de ar diante de situações de exposição.</li>
        <li><strong>Boca seca</strong>: dificuldade para falar ou engolir devido à resposta de ansiedade.</li>
        <li><strong>Náusea e desconforto abdominal</strong>: o estômago reage à ansiedade antecipatória.</li>
      </ul>

      <p>Esses <strong>sintomas físicos</strong> — <strong>taquicardia</strong>, <strong>sudorese</strong>, tremores, rubor e dificuldade respiratória — não são fraquezas nem exageros. São respostas neurofisiológicas reais do organismo diante de uma ameaça percebida pelo cérebro como genuinamente perigosa.</p>

      <h2>A Distinção Entre Fobia Social e Timidez Não Patológica</h2>

      <p>Compreender a <strong>distinção entre fobia social e timidez não patológica</strong> é essencial para buscar o tratamento adequado. A timidez não patológica se caracteriza por:</p>

      <ul>
        <li>Desconforto social que não impede a pessoa de participar de atividades importantes.</li>
        <li>Capacidade de relaxar após o momento inicial de tensão em uma situação social.</li>
        <li>Ausência de esquiva significativa ou de prejuízo funcional na vida cotidiana.</li>
      </ul>

      <p>Já a <strong>fobia social</strong> se diferencia pela intensidade do sofrimento e pelo impacto funcional:</p>

      <ul>
        <li>Medo intenso e persistente que dura meses ou anos.</li>
        <li>Esquiva ativa de situações sociais, podendo levar ao isolamento.</li>
        <li>Prejuízo significativo no trabalho, nos estudos e nos relacionamentos.</li>
        <li>Ansiedade antecipatória que começa dias ou semanas antes do evento temido.</li>
      </ul>

      <p>A <strong>distinção entre fobia social e timidez não patológica</strong> nem sempre é óbvia para quem sofre. Muitas pessoas convivem com o transtorno por anos, acreditando ser "apenas timidez", enquanto sua vida vai se restringindo progressivamente.</p>

      <h2>O Caminho do Tratamento</h2>

      <p>A boa notícia é que a <strong>fobia social</strong> tem tratamento. A psicoterapia de base psicanalítica ajuda o paciente a investigar as raízes inconscientes do medo do julgamento — frequentemente ligadas a experiências de humilhação na infância ou a relações primárias onde o olhar do outro foi vivido como ameaçador.</p>

      <p>Através do vínculo terapêutico seguro, o paciente pode gradually experimentar expor-se sem ser destruído, desconstruindo a crença profunda de que o julgamento alheio é fatal. Com tempo, coragem e o acompanhamento adequado, é possível recuperar a liberdade de existir socialmente sem o peso paralisante do medo.</p>

      <hr/>
      <h2>Perguntas Frequentes (FAQ)</h2>

      <h3>Qual a diferença entre fobia social e timidez?</h3>
      <p>A timidez é um traço de personalidade que não impede a pessoa de viver sua vida. A fobia social é um transtorno de ansiedade que causa sofrimento intenso e incapacitante, levando a pessoa a evitar situações sociais por medo do julgamento.</p>

      <h3>A fobia social tem cura?</h3>
      <p>Com o tratamento adequado, que inclui psicoterapia e, quando necessário, medicação, a pessoa com fobia social pode aprender a gerenciar a ansiedade e recuperar sua vida social de forma significativa.</p>

      <h3>É normal sentir taquicardia antes de apresentações?</h3>
      <p>Uma ansiedade leve antes de situações de exposição é comum. Porém, quando os sintomas físicos são intensos, recorrentes e levam à esquiva total da situação, pode ser um sinal de fobia social que merece atenção profissional.</p>
    `,
  },
]
