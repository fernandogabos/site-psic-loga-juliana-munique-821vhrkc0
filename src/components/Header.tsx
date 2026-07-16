import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/adolescentes', label: 'Adolescentes' },
  { to: '/adultos', label: 'Adultos' },
  { to: '/como-funciona', label: 'Como Funciona' },
  { to: '/blog', label: 'Blog' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex flex-col" onClick={() => setOpen(false)}>
            <span className="font-serif font-bold text-xl text-primary leading-tight">
              Juliana Munique
            </span>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              Psicóloga Clínica
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors min-h-[44px] inline-flex items-center',
                  location.pathname === item.to
                    ? 'text-primary bg-secondary'
                    : 'text-foreground hover:text-primary hover:bg-secondary/50',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-full min-h-[44px] px-6">
              <Link to="/contato">Agendar Consulta</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden min-h-[44px] min-w-[44px]"
                aria-label="Abrir menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-2 mt-8">
                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium rounded-md hover:bg-secondary min-h-[44px] flex items-center"
                  onClick={() => setOpen(false)}
                >
                  Início
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-4 py-3 text-base font-medium rounded-md hover:bg-secondary min-h-[44px] flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="rounded-full mt-4 min-h-[44px]">
                  <Link to="/contato" onClick={() => setOpen(false)}>
                    Agendar Consulta
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
