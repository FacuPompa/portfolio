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

export function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h2 className={cn("text-3xl font-headline font-bold text-center mb-12 md:text-4xl", className)}>
            {children}
        </h2>
    );
}
