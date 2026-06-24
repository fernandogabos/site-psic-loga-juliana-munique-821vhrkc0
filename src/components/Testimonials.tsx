import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const testimonialsData = [
  {
    name: 'Fernando Gabos',
    rating: 5,
    text: 'Excelente psicóloga! A Juliana Munique conduz os atendimentos com muita empatia, profissionalismo e sensibilidade. Faz toda a diferença contar com uma profissional tão comprometida com o bem-estar e a evolução de seus pacientes. Recomendo com total confiança.',
  },
  {
    name: 'André Rossi',
    rating: 5,
    text: 'Juliana é uma profissional muito competente, dedicada e atenciosa, além de muito simpática. Super recomendada!',
  },
]

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  compact?: boolean
}

export function TestimonialCard({ name, rating, text, compact = false }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        'bg-card border-border shadow-sm h-full hover:shadow-md transition-shadow',
        compact ? 'p-5 rounded-2xl' : 'p-6 md:p-8 rounded-3xl',
      )}
    >
      <CardContent className="p-0 flex flex-col gap-4 h-full justify-between">
        <div>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className={cn('fill-amber-400 text-amber-400', compact ? 'w-4 h-4' : 'w-5 h-5')}
                aria-hidden="true"
              />
            ))}
          </div>
          <p
            className={cn(
              'text-foreground leading-relaxed',
              compact ? 'text-sm italic' : 'text-base md:text-lg italic',
            )}
          >
            "{text}"
          </p>
        </div>
        <p className={cn('font-bold text-primary', compact ? 'text-sm' : 'text-base')}>{name}</p>
      </CardContent>
    </Card>
  )
}

interface TestimonialsSectionProps {
  title?: string
  className?: string
}

export function TestimonialsSection({
  title = 'O que dizem os pacientes',
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn('py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
