import * as React from "react";
import { cn } from "@/lib/utils";

interface CTABannerProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  variant?: "default" | "primary" | "accent";
  animated?: boolean;
}

const CTABanner = React.forwardRef<HTMLDivElement, CTABannerProps>(
  ({ className, text = "Quero Assinar Agora", variant = "primary", animated = true, ...props }, ref) => {
    const baseClasses = "text-center py-4 px-6 rounded-2xl font-bold text-lg md:text-xl lg:text-2xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer select-none";
    
    const variantClasses = {
      default: "bg-background text-foreground border-2 border-border",
      primary: "bg-primary text-primary-foreground shadow-primary/25",
      accent: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow"
    };

    const animationClasses = animated ? "animate-pulse hover:animate-none" : "";

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          animationClasses,
          "animate-fade-up",
          className
        )}
        style={{ animationDelay: '0.15s' }}
        {...props}
      >
        {text}
      </div>
    );
  }
);
CTABanner.displayName = "CTABanner";

export { CTABanner };