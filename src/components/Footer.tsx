import { Link } from 'react-router-dom'
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-accent">
              Juliana Munique
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Psicoterapia psicanalítica para adolescentes e adultos. Um espaço seguro para
              compreender sua história e construir novos caminhos com ética e acolhimento.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-accent">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/sobre" className="hover:text-accent transition-colors">
                  Minha Trajetória
                </Link>
              </li>
              <li>
                <Link to="/adolescentes" className="hover:text-accent transition-colors">
                  Terapia para Adolescentes
                </Link>
              </li>
              <li>
                <Link to="/adultos" className="hover:text-accent transition-colors">
                  Terapia para Adultos
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="hover:text-accent transition-colors">
                  Como Funciona o Processo
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-accent">Contato</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span>
                  Vila Arens, Jundiaí - SP
                  <br />
                  (Atendimento Presencial e Online)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span>contato@julianamunique.com.br</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-accent">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-accent text-accent hover:bg-accent hover:text-primary h-10 px-4 py-2 w-full"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Juliana Munique - Psicóloga. Todos os direitos reservados.
          </p>
          <p>CRP 06/000000</p>
        </div>
      </div>
    </footer>
  )
}
