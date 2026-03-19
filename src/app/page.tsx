import React from "react";
import { cookies } from "next/headers";
import BentoNavbar from "@/components/Navbar";
import "./globals.css"
import TechStack from "@/components/TechStack";
import ProjectsGallery from "@/components/ProjectsGallery";
import AIIntegration from "@/components/AIIntegration";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Show from "@/components/Show";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getTranslations, Language } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "ar";
  const t = getTranslations(lang);

  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center min-h-[90vh]">
        <Show />
      </section>

      {/* About Section */}
      <section id="about" className="section w-full flex flex-col items-center">
        <AboutSection />
      </section>

      {/* Tech Stack Section */}
      <section className="section w-full flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 mb-12">
          <h2 className="text-headline text-center" style={{ color: 'var(--text-primary)' }}>
            {t('tech.headline')}
          </h2>
          <p className="text-center mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('tech.description')}
          </p>
        </div>
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section w-full flex flex-col items-center">
        <ProjectsGallery />
      </section>

      {/* AI Integration Section */}
      <section className="section w-full flex flex-col items-center">
        <AIIntegration />
      </section>

      {/* Footer */}
      <footer id="contact">
        <Footer />
      </footer>

      {/* Floating Navbar */}
      <BentoNavbar />
    </main>
  );
}
