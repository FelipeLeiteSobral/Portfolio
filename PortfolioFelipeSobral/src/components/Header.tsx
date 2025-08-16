import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border card-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
          >
            Portfólio: Felipe Sobral
          </a>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                onClick={handleNavClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Início
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Sobre
              </a>
              <a
                href="#projects"
                onClick={handleNavClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Projetos
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
