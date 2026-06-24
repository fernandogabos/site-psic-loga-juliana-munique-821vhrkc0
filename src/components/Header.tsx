import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Adolescentes', path: '/adolescentes' },
  { name: 'Adultos', path: '/adultos' },
  { name: 'Como Funciona', path: '/como-funciona' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-primary tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1 -ml-1"
          aria-label="Página Inicial Juliana Munique"
        >
          Juliana Munique
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-2 rounded-md',
                      isActive ? 'text-primary font-bold' : 'text-muted-foreground',
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Button
            asChild
            className="rounded-full px-6 min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-md focus-visible:ring-offset-2"
          >
            <Link to="/contato">Agendar Conversa</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in-down max-h-[80vh] overflow-y-auto"
        >
          <nav className="flex flex-col p-6 space-y-2" aria-label="Navegação Mobile">
            {links.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'py-3 px-4 min-h-[44px] flex items-center rounded-xl text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    isActive ? 'text-primary bg-muted font-bold' : 'text-muted-foreground',
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-4">
              <Button
                asChild
                className="w-full rounded-full h-[44px] min-h-[44px] bg-primary text-primary-foreground text-base shadow-md focus-visible:ring-offset-2"
              >
                <Link to="/contato">Agendar Conversa</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
