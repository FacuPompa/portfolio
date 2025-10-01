"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { LanguageContext } from "@/context/language-context";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const currentNavLinks = navLinks(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const sections = currentNavLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    return () => {
        window.removeEventListener("scroll", handleScroll);
        sections.forEach(section => {
            if (section) observer.unobserve(section);
        });
    };
  }, [currentNavLinks]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header
      className={cn(
        "sticky top-4 z-50 w-full transition-all duration-300",
        isScrolled ? " " : ""
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-xl font-bold hover:text-accent">{`{Fp}`}</span>
        </Link>
        
        <nav className="hidden items-center space-x-2 rounded-full border border-border/40 bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:flex mx-auto">
          {currentNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-active={activeSection === link.href.substring(1)}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full" onClick={toggleLanguage}>
              <Globe className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Change language</span>
            </Button>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center space-x-2 pb-4 border-b">
                    <span className="font-headline text-lg font-bold">Pompa Portfolio</span>
                  </Link>
                  {currentNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
