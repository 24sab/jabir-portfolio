import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StandardsBanner } from './components/StandardsBanner';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { AuditHighlights } from './components/AuditHighlights';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-charcoal-900 selection:bg-forest-800 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Regulatory Standards Banner */}
        <StandardsBanner />

        {/* About / Executive Narrative */}
        <About onOpenResume={handleOpenResume} />

        {/* Experience Timeline */}
        <Experience />

        {/* Categorized Skills & Competencies */}
        <Skills />

        {/* Real-World Audit & QA Protocols */}
        <AuditHighlights />

        {/* Certifications & Accreditations */}
        <Certifications />

        {/* Academic Background */}
        <Education />

        {/* Contact Coordinates & Inquiries */}
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
};

export default App;
