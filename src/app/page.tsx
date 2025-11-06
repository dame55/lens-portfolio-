import { HeroSection } from '@/components/hero-section';
import { PortfolioGallery } from '@/components/portfolio-gallery';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { ChatbotWidget } from '@/components/chatbot-widget';
import { ContactSection } from '@/components/contact-section';
import { AboutSection } from '@/components/about-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioGallery />
        <ContactSection />
      </main>
      <ChatbotWidget />
      <AppFooter />
    </div>
  );
}
