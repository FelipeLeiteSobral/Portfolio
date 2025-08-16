import fotoPerfil from "@/assets/fotoPerfil.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center pt-20 hero-gradient"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left fade-in">
            <Heading
              as="h1"
              size="display"
              className="mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
            >
              Olá, eu sou
              <br />
              Felipe Sobral
            </Heading>

            <Heading
              as="h2"
              size="display-sm"
              className="text-muted-foreground mb-6"
            >
              Engenheiro/Desenvolvedor de Software
            </Heading>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Motivado a desenvolver soluções inteligentes e funcionais, unindo
              React, TypeScript e boas práticas de engenharia para gerar impacto
              real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-8"
                asChild
              >
                <a href="#projects">Ver Projetos</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-medium px-8"
                asChild
              >
                <a
                  href="src/assets/Programador_Felipe_Leite_Sobral_Curriculum.pdf"
                  download
                >
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/FelipeLeiteSobral"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/felipe-leite-sobral/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:felipeleitesobral@hotmail.com"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden card-shadow-hover border-4 border-background">
                <img
                  src={fotoPerfil}
                  alt="Felipe Sobral - Desenvolvedor Front-end"
                  className="w-full h-full object-cover scale-hover"
                />
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Role para baixo</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};
