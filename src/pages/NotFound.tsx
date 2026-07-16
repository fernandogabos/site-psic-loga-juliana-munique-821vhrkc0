import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          A página que você procura pode ter sido movida ou não existe mais.
        </p>
        <Button asChild className="rounded-full min-h-[44px] px-8">
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  )
}
