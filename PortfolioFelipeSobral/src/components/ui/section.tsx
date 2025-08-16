import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Componente de seção reutilizável
 * Usado para criar seções com espaçamento consistente em todo o portfólio
 */
export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24", // Espaçamento vertical responsivo
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
};