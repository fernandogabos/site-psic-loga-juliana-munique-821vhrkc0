import { Link } from 'react-router-dom'
import { Instagram, Linkedin, MapPin, Phone } from 'lucide-react'
import innovaLogo from '@/assets/innovalogobrancotransparente-dd874.png'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-primary-foreground">
              Juliana Munique
            </h3>
            <p className="text-primary-foreground text-sm leading-relaxed">
              Psicoterapia psicanalítica para adolescentes e adultos. Um espaço seguro para
              compreender sua história e construir novos caminhos com ética e acolhimento.
            </p>
          </div>

          <div className="space-y-4" aria-label="Navegação Rodapé">
            <h4 className="font-serif font-bold text-lg text-primary-foreground">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground">
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors p-1 -ml-1 rounded-sm min-h-[44px] inline-flex items-center"
                >
                  Minha Trajetória
                </Link>
              </li>
              <li>
                <Link
                  to="/adolescentes"
                  className="hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors p-1 -ml-1 rounded-sm min-h-[44px] inline-flex items-center"
                >
                  Terapia para Adolescentes
                </Link>
              </li>
              <li>
                <Link
                  to="/adultos"
                  className="hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors p-1 -ml-1 rounded-sm min-h-[44px] inline-flex items-center"
                >
                  Terapia para Adultos
                </Link>
              </li>
              <li>
                <Link
                  to="/como-funciona"
                  className="hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors p-1 -ml-1 rounded-sm min-h-[44px] inline-flex items-center"
                >
                  Como Funciona o Processo
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors p-1 -ml-1 rounded-sm min-h-[44px] inline-flex items-center"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-primary-foreground">Contato</h4>
            <ul className="space-y-4 text-sm text-primary-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 shrink-0 text-background" aria-hidden="true" />
                <span>
                  Rua Moreira César, 319, Jundiaí, SP
                  <br />
                  (Atendimento Presencial e Online)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-6 w-6 shrink-0 text-background" aria-hidden="true" />
                <span>(11) 99570-3646</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-primary-foreground">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/julianamunique"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[44px] w-[44px] rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/julianamunique"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[44px] w-[44px] rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="pt-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors border border-background text-background hover:bg-background hover:text-primary min-h-[44px] px-4 py-2 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/90">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-center lg:text-left">
            <a
              href="https://www.innovagrupo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm p-1"
            >
              <span className="text-[#ffffff] font-medium">Desenvolvido por:</span>
              <img
                src={innovaLogo}
                alt="Innova Soluções Empresariais"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p>
              © {new Date().getFullYear()} Juliana Munique - Psicóloga. Todos os direitos
              reservados.
            </p>
          </div>
          <p>CRP 06/106345</p>
        </div>
      </div>
    </footer>
  )
}
