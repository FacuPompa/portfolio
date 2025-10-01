"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/data";

export function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].footer;

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm font-style: italic text-muted-foreground">
          {t.copyright} 
        </p>
      </div>
    </footer>
  );
}
