import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Felipe Sobral</h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                Desenvolvedor motivado a proporcionar soluções inteligentes e
                funcionais, unindo React, TypeScript e boas práticas de
                engenharia para gerar impacto real.
              </p>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-foreground hover:bg-background/10"
                  asChild
                >
                  <a
                    href="https://github.com/FelipeLeiteSobral"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-foreground hover:bg-background/10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/felipe-leite-sobral/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:text-foreground hover:bg-background/10"
                  asChild
                >
                  <a
                    href="mailto:felipeleitesobral@hotmail.com"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <nav className="space-y-3">
                <a
                  href="#home"
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Início
                </a>
                <a
                  href="#about"
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#projects"
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Projetos
                </a>
                <a
                  href="#contact"
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Contato
                </a>
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Vamos Trabalhar Juntos?
              </h4>
              <p className="text-background/80 mb-4">
                Estou sempre aberto a novos projetos e colaborações
                interessantes.
              </p>
              <Button variant="secondary" asChild>
                <a href="#contact">Entrar em Contato</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20"></div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/80 text-sm">
            © {new Date().getFullYear()} Felipe Sobral. Todos os direitos
            reservados.
          </p>

          <p className="text-background/60 text-sm flex items-center gap-1">
            Feito em React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
