import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, informe um email válido.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, escreva uma mensagem.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Sucesso!",
        description: "Mensagem enviada com sucesso! Retornarei em breve.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-muted/50">
      <div className="fade-in">
        <div className="text-center mb-16">
          <Heading size="xl" className="mb-4">
            Entre em Contato
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <Heading as="h3" size="md" className="mb-6">
                Informações de Contato
              </Heading>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a
                      href="mailto:felipeleitesobral@hotmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      felipeleitesobral@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Telefone</div>
                    <a
                      href="tel:+5579999079519"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 79 99907-9519
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Localização
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Aracaju,+SE"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      Aracaju, Brasil
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Github size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">GitHub</div>
                    <a
                      href="https://github.com/FelipeLeiteSobral"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      FelipeLeiteSobral
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/felipe-leite-sobral/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      felipe-leite-sobral
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <Heading as="h4" size="sm" className="mb-3">
                  Pronto para começar?
                </Heading>
                <p className="text-muted-foreground mb-4">
                  Estou sempre aberto a discutir novos projetos e oportunidades
                  interessantes.
                </p>
                <Button asChild>
                  <a href="mailto:felipeleitesobral@hotmail.com">
                    <Mail size={16} className="mr-2" />
                    Enviar Email Direto
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="card-shadow">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-me sobre seu projeto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};
