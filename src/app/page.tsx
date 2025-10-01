import { Header } from '@/components/pompa-portfolio/header';
import { HeroSection } from '@/components/pompa-portfolio/hero-section';
import { AboutSection } from '@/components/pompa-portfolio/about-section';
import { ProjectsSection } from '@/components/pompa-portfolio/projects-section';
import { ContactSection } from '@/components/pompa-portfolio/contact-section';
import { Footer } from '@/components/pompa-portfolio/footer';
import { LanguageProvider } from '@/context/language-context';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-dvh bg-background">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
