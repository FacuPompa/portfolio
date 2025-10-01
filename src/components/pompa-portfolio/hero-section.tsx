"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/data";

export function HeroSection() {
    const avatarImage = PlaceHolderImages.find(p => p.id === 'hero-avatar');
    const { language } = useContext(LanguageContext);
    const t = translations[language].hero;

  return (
    <section id="home" className="relative w-full h-[calc(100dvh-4rem)] min-h-[500px] flex items-center justify-center text-center -mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="flex justify-center">
                {avatarImage && (
                    <Image 
                        src={avatarImage.imageUrl} 
                        alt={avatarImage.description} 
                        width={400} 
                        height={400} 
                        className="rounded-full object-cover aspect-square border transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
                        data-ai-hint={avatarImage.imageHint}
                        priority
                    />
                )}
            </div>
            <div className="max-w-3xl space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase tracking-widest text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]">
                {t.greeting}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
                {t.bio}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                <Link href="#contact">
                    {t.contactButton}
                    <ArrowRight className="ml-2" />
                </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                <Link href="#projects">{t.projectsButton}</Link>
                </Button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
