import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("relative my-16 md:my-24", className)}>
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t-2 border-border" />
    </div>
    <div className="relative flex justify-center">
        <h2 className="font-headline bg-background px-6 text-center text-2xl md:text-3xl uppercase tracking-wider text-muted-foreground">
            {children}
        </h2>
    </div>
  </div>
);
