import type { BlogPost } from '@/lib/blog-data'

export function BlogPostSchema(post: BlogPost, url: string, imageUrl: string) {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      '@type': 'Person',
      name: 'Juliana Munique',
      url: 'https://www.julianamunique.com.br/sobre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Juliana Munique Psicanalista',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: imageUrl,
  }
}

export function FAQPageSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quando devo procurar psicoterapia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Você deve procurar psicoterapia quando perceber que sentimentos como ansiedade, tristeza, raiva ou confusão estão interferindo na sua qualidade de vida, nos seus relacionamentos ou no seu trabalho. Também é recomendado buscar ajuda quando houver padrões repetitivos de comportamento que causam sofrimento, dificuldade de concentração, insônia, ou quando simplesmente deseja um espaço de autoconhecimento. Não é necessário estar em crise para iniciar terapia.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona a psicoterapia online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A psicoterapia online funciona da mesma forma que a presencial, com sessões realizadas por videoconferência em plataforma segura e sigilosa. A duração é a mesma (50 minutos), a frequência é semanal e a eficácia terapêutica é equivalente. O paciente precisa apenas de um ambiente privativo e silencioso, com boa conexão de internet. O atendimento online é ideal para quem reside longe do consultório ou prefere a comodidade de casa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual a diferença entre psicologia e psicanálise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A psicologia é um campo amplo com diversas abordagens terapêuticas. A psicanálise é uma dessas abordagens, criada por Sigmund Freud, que investiga os processos inconscientes que determinam nosso comportamento. Enquanto algumas abordagens psicológicas focam no alívio rápido de sintomas, a psicanálise busca compreender as raízes do sofrimento, promovendo transformações profundas e duradouras na personalidade e nas relações do sujeito.',
        },
      },
    ],
  }
}

export function BreadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function SpeakableSpecificationSchema() {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#faq'],
  }
}

export function HowToSchema() {
  return {
    '@type': 'HowTo',
    name: 'Como Funciona a Psicoterapia Psicanalítica com Juliana Munique',
    description:
      'Conheça cada etapa do processo terapêutico, desde o primeiro contato até o desenvolvimento contínuo do autoconhecimento.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Primeiro Contato',
        text: 'Entre em contato pelo WhatsApp ou formulário do site para agendar uma conversa inicial gratuita.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Sessão de Avaliação',
        text: 'Na primeira sessão, conversamos sobre sua história, queixas e expectativas para entender o que te trouxe à terapia.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Início do Processo',
        text: 'Definimos juntos a frequência das sessões e começamos o trabalho psicanalítico com escuta livre e sem julgamentos.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Evolução e Acompanhamento',
        text: 'Ao longo do processo, você vai desenvolvendo autoconhecimento, elaborando conflitos e encontrando novos caminhos para sua vida.',
      },
    ],
  }
}
