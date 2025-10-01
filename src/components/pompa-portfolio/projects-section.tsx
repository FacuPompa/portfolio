"use client";

import { projects, translations } from "@/lib/data";
import { Section, SectionTitle } from "./section";
import { ProjectCard } from "./project-card";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

export function ProjectsSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].projects;
    const currentProjects = projects(language);

  return (
    <Section id="projects">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
