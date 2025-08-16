import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const About = () => {
  return (
    <Section id="about" className="bg-muted/50">
      <div className="fade-in">
        <div className="text-center mb-16">
          <Heading size="xl" className="mb-4">
            Sobre Mim
          </Heading>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              Sou um desenvolvedor que realizou transição de carreira para a
              área de tecnologia, com formação em Engenharia de Software e foco
              em desenvolvimento moderno, responsivo e integrado, sempre
              buscando unir inovação e boas práticas para criar soluções de
              impacto.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              Tenho expertise em React, TypeScript, Next.js e outras tecnologias
              modernas. Sempre busco escrever código limpo, performático e de
              fácil manutenção.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              Acredito que a tecnologia deve ser acessível e focada na
              experiência do usuário, sempre priorizando soluções elegantes e
              funcionais.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  React
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Tailwind CSS
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  JavaScript
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Express
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  MongoDB
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ferramentas
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Git
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  n8n
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Figma
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Cursor
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  AWS
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <Card className="text-center card-shadow scale-hover">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                0
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Anos de Experiência
              </div>
            </CardContent>
          </Card>
          <Card className="text-center card-shadow scale-hover">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Projetos Concluídos
              </div>
            </CardContent>
          </Card>
          <Card className="text-center card-shadow scale-hover">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                14
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Cursos Concluídos
              </div>
            </CardContent>
          </Card>
          <Card className="text-center card-shadow scale-hover">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Dedicação
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};
