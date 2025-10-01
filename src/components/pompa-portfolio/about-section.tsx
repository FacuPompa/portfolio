"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills, translations } from "@/lib/data";
import { Section, SectionTitle } from "./section";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

export function AboutSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].about;

  return (
    <Section id="about" className="bg-card">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-4 text-lg text-foreground/80">
            <p>
                {t.p1}
            </p>
            <p>
                {t.p2}
            </p>
        </div>
        <div className="md:col-span-2">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-center">{t.skillsetTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-muted/50">
                                <skill.icon className="w-6 h-6 text-primary" />
                                <span className="font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </Section>
  );
}
