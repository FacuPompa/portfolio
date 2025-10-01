"use client";

import { contactLinks, translations } from "@/lib/data";
import { Button } from "../ui/button";
import { Section, SectionTitle } from "./section";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

export function ContactSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].contact;

  return (
    <Section id="contact">
        <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>{t.title}</SectionTitle>
            <p className="mt-4 text-lg text-muted-foreground mb-8">
                {t.description}
            </p>
            <div className="flex justify-center gap-4">
                {contactLinks.map((link) => (
                    <Button key={link.name} asChild variant="outline" size="icon" className="w-14 h-14 rounded-full">
                        <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                            <link.icon className="w-6 h-6" />
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    </Section>
  );
}
