import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display" | "display-sm" | "xl" | "lg" | "md" | "sm";
  className?: string;
}

/**
 * Componente de título reutilizável com variações de tamanho
 * Mantém consistência tipográfica em todo o portfólio
 */
export const Heading = ({ 
  children, 
  as: Component = "h2", 
  size = "lg",
  className 
}: HeadingProps) => {
  const sizeClasses = {
    display: "text-display font-bold",
    "display-sm": "text-display-sm font-bold",
    xl: "text-4xl font-bold",
    lg: "text-3xl font-semibold",
    md: "text-2xl font-semibold",
    sm: "text-xl font-medium"
  };

  return (
    <Component 
      className={cn(
        sizeClasses[size],
        "text-foreground leading-tight",
        className
      )}
    >
      {children}
    </Component>
  );
};