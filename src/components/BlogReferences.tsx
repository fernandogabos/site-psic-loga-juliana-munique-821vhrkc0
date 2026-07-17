import { Link } from 'react-router-dom'

interface ReferenceLink {
  label: string
  href: string
  description?: string
}

const STANDARD_REFERENCES: ReferenceLink[] = [
  {
    label: 'Freud, S. (1900). A Interpretação dos Sonhos. Obras Completas — Companhia das Letras',
    href: 'https://www.companhiadasletras.com.br/',
  },
  {
    label: 'Conselho Federal de Psicologia (CFP)',
    href: 'https://cfp.org.br/',
    description: 'Código de Ética e normas para a prática psicológica no Brasil',
  },
  {
    label: 'SciELO — Biblioteca de Saúde Mental',
    href: 'https://www.scielo.br/j/prc/',
    description: 'Artigos científicos revisados por pares',
  },
]

const EXTRA_REFERENCES: Record<string, ReferenceLink[]> = {
  'importancia-do-vinculo-terapeutico': [
    {
      label: 'Sociedade Brasileira de Psicanálise de São Paulo',
      href: 'https://www.sbpsp.org.br/',
      description: 'Referência em psicanálise no Brasil',
    },
  ],
  'educacao-infantil': [
    {
      label: 'Associação Internacional de Psicanálise (IPA)',
      href: 'https://www.ipa.world/',
      description: 'Organização mundial de psicanálise',
    },
  ],
}

export function BlogReferences({ slug }: { slug: string }) {
  const extra = EXTRA_REFERENCES[slug] ?? []
  const references = [...STANDARD_REFERENCES, ...extra]

  return (
    <div className="mt-16">
      <hr className="border-border mb-8" />
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">Referências</h2>
      <ul className="space-y-4">
        {references.map((ref, index) => (
          <li key={index} className="text-foreground leading-relaxed">
            <a
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:text-foreground transition-colors underline decoration-primary/30 hover:decoration-foreground"
            >
              {ref.label}
            </a>
            {ref.description && <span className="text-muted-foreground"> — {ref.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
