import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import HowItWorks from './HowItWorks';
import Projects from './Projects';
import CustomerReview from './CustomerReview';
import BuildSection from './BuildSection';
import ContactSection from './ContactSection';
import WhatsAppButton from './WhatsAppButton';

function Home() {
  return (
    <div className="home">
      {/* Hero section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Service section */}
      <section id="service">
        <ServiceSection />
      </section>

      {/* About Us section */}
      <section id="why-oojam">
        <AboutSection />
      </section>

      {/* How it Works section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Projects section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Customer Review section */}
      <section id="reviews">
        <CustomerReview />
      </section>

      {/* Build section */}
      <section id="build">
        <BuildSection />
      </section>

      {/* Contact section */}
      <section id="contact">
        <ContactSection />
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default Home;
