import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const routeMap: Record<string, string> = {
  sobre: 'Sobre',
  adolescentes: 'Adolescentes',
  adultos: 'Adultos',
  'como-funciona': 'Como Funciona',
  blog: 'Blog',
  contato: 'Contato',
}

export function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length === 0) return null

  return (
    <nav className="flex px-4 py-3 text-sm text-muted-foreground" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 container mx-auto">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const name = routeMap[value] || value.replace(/-/g, ' ')

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
                {isLast ? (
                  <span className="text-foreground font-medium capitalize" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-primary transition-colors capitalize">
                    {name}
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
