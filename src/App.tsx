import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ZipDownloadModal } from './components/ZipDownloadModal';

export default function App() {
  const [zipModalOpen, setZipModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080B18] text-[#F8FAFC] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] transition-colors duration-300">
      {/* Desktop Custom Animated Cyber Cursor */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenZipModal={() => setZipModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section with 3D Centerpiece */}
        <Hero onOpenZipModal={() => setZipModalOpen(true)} />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Core Skills & Interactive Tech Stack */}
        <Skills />

        {/* Services & Specialized Capabilities */}
        <Services />

        {/* About Me & Creative Evolution */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenZipModal={() => setZipModalOpen(true)} />

      {/* Downloadable Project Source ZIP Modal */}
      <ZipDownloadModal
        isOpen={zipModalOpen}
        onClose={() => setZipModalOpen(false)}
      />
    </div>
  );
}
