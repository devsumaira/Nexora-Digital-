import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { GrowthFramework } from './components/GrowthFramework';
import { CaseStudies } from './components/CaseStudies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { IndustriesSection } from './components/IndustriesSection';
import { InsightsSection } from './components/InsightsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { LeadGenBanner } from './components/LeadGenBanner';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import {
  ServiceModal,
  CaseStudyModal,
  ArticleModal,
  StrategyCallModal
} from './components/Modals';
import { ServiceItem, CaseStudyItem, InsightArticle } from './types';

export default function App() {
  // Modal states
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyCallNote, setStrategyCallNote] = useState<string>('');

  const openStrategyModal = (note?: string) => {
    setStrategyCallNote(note || '');
    setIsStrategyModalOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForAudit = (estimatedGain: string) => {
    openStrategyModal(`Custom ROI Projection: +${estimatedGain}/year`);
  };

  const handleBookForService = (serviceName: string) => {
    openStrategyModal(`Service Exploration: ${serviceName}`);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      
      {/* Top Fixed Sticky Navigation Bar */}
      <Navbar onBookCallClick={() => openStrategyModal('Navigation Header Consultation')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section with Interactive Analytics Dashboard */}
        <Hero
          onBookCallClick={() => openStrategyModal('Hero Strategy Call')}
          onExploreServicesClick={scrollToServices}
        />

        {/* 2. Trust & Stats Section with Animated Counters */}
        <TrustStats />

        {/* 3. Specialized Services Section (8 cards) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Digital Growth System / 5-Step Methodology */}
        <GrowthFramework />

        {/* 5. Audited Case Studies (4 in-depth results) */}
        <CaseStudies onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* 6. Why Choose Us & The Closed-Loop Growth Diagram */}
        <WhyChooseUs />

        {/* 7. Interactive Growth & ROAS Calculator */}
        <RoiCalculator onApplyForAudit={handleApplyForAudit} />

        {/* 8. 6-Phase Onboarding Process */}
        <ProcessSection />

        {/* 9. Client Testimonials */}
        <TestimonialsSection />

        {/* 10. About Section: The 5 Elements Synthesis & Distributed Presence */}
        <AboutSection />

        {/* 11. Industries We Help (9 sectors) */}
        <IndustriesSection />

        {/* 12. Ideas for the Digital Economy (5 insights articles) */}
        <InsightsSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 13. High-Converting Lead Generation Banner */}
        <LeadGenBanner
          onBookCallClick={() => openStrategyModal('Lead Gen Banner CTA')}
          onSendInquiryClick={scrollToContact}
        />

        {/* 14. Contact Consultation Form & Instant Calendar Booking */}
        <ContactSection />

        {/* 15. Frequently Asked Questions Accordion */}
        <FaqSection />

      </main>

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      <BackToTop />

      {/* Interactive Modal Dialogs */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookForService={handleBookForService}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookCall={() => openStrategyModal(`Case Study: ${selectedCaseStudy?.title}`)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <StrategyCallModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        prefillNote={strategyCallNote}
      />

    </div>
  );
}
