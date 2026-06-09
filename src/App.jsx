import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-accent-gold/30 selection:text-slate-900">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Persistent Floating Widget */}
      <WhatsAppButton />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
