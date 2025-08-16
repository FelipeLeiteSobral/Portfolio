import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS_CONFIG = {
  title: "Meus Projetos",
  subtitle: "Alguns dos trabalhos que desenvolvi recentemente",
  projects: [
    {
      id: 1,
      title: "Site Odontológico",
      description:
        "Site moderno para clínica odontológica com agendamento online, blog de saúde bucal e área de depoimentos.",
      image: "sitePatty.png",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://website-patricia-sobral.vercel.app/",
      githubUrl: "https://github.com/FelipeLeiteSobral/Website-Patricia-Sobral",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Bem Nerd",
      description:
        "Loja virtual moderna com carrinho de compras, design imersivo e navegação intuitiva.",
      image: "ecommerce_teste.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://projeto-de-e-commerce.vercel.app/",
      githubUrl:
        "https://github.com/FelipeLeiteSobral/Projeto-de-E-commerce/tree/master",
      featured: true,
    },
    {
      id: 3,
      title: "Contador Regressivo",
      description:
        "Contador regressivo real-time, ideal para eventos especiais.",
      image: "contador.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "404",
      githubUrl:
        "https://github.com/FelipeLeiteSobral/Desafios/tree/main/DesafioCountdown",
      featured: false,
    },
  ],
};

const ProjectCard = ({
  project,
}: {
  project: (typeof PROJECTS_CONFIG.projects)[0];
}) => {
  return (
    <Card className="group overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {project.featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Destaque
          </Badge>
        )}
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <Heading as="h3" size="md" className="mb-3">
          {project.title}
        </Heading>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank">
              <ExternalLink size={14} className="mr-2" />
              Ver Site
            </a>
          </Button>

          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank">
              <Github size={14} className="mr-2" />
              Código
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="fade-in">
        <div className="text-center mb-16">
          <Heading size="xl" className="mb-4">
            {PROJECTS_CONFIG.title}
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {PROJECTS_CONFIG.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_CONFIG.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais projetos?
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/FelipeLeiteSobral" target="_blank">
              <Github size={20} className="mr-2" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
