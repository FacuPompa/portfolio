"use client";

import { projects, translations } from "@/lib/data";
import { Section, SectionTitle } from "./section";
import { ProjectCard } from "./project-card";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].projects;
    const currentProjects = projects(language);

  const projectCount = currentProjects.length;

  return (
    <Section id="projects">
      <SectionTitle>{t.title}</SectionTitle>
      <div className={cn(
        "grid gap-8",
        "md:grid-cols-2 lg:grid-cols-3",
        {
          "[&>*:last-child]:md:col-start-2 [&>*:last-child]:lg:col-start-2": projectCount === 4,
          "[&>*:nth-last-child(2)]:md:col-start-1 [&>*:nth-last-child(2)]:lg:col-start-1 [&>*:last-child]:md:col-start-2 [&>*:last-child]:lg:col-start-3": projectCount === 5,
        }
      )}>
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
