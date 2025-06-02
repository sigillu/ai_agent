import { useEffect } from 'react';
import './App.css';

// Import components for each section
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import MainCTA from './components/MainCTA';
import StickyCTA from './components/StickyCTA';
import About from './components/About';
import Footer from './components/Footer';

// Import custom hooks
import { useScrollAnimation, useParallax, useStickyCTA } from './hooks/useAnimations';

function App() {
  // Initialize animation hooks
  useScrollAnimation();
  useParallax();
  const { visible: showStickyCTA, setVisible: setShowStickyCTA } = useStickyCTA(6000);

  // Add scroll-reveal class to elements when component mounts
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('scroll-reveal');
    });
    
    // Convert static fade-in elements to scroll-reveal for better performance
    const fadeElements = document.querySelectorAll('.fade-in:not(.stagger-1):not(.stagger-2):not(.stagger-3)');
    fadeElements.forEach(element => {
      element.classList.add('scroll-reveal');
      element.classList.remove('fade-in');
    });
  }, []);

  return (
    <div className="app">
      <Hero />
      <Intro />
      <Services />
      <SocialProof />
      <MainCTA />
      <About />
      <Footer />
      <StickyCTA visible={showStickyCTA} onClose={() => setShowStickyCTA(false)} />
    </div>
  );
}

export default App;
