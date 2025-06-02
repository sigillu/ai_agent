import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0"></div>
      
      <div className="container relative z-10 text-center px-4">
        <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
          We Automate What Slows You Down.
        </h1>
        <p className="subheading max-w-3xl mx-auto fade-in stagger-1">
          Done-for-you AI systems that eliminate bottlenecks, follow up with leads, and free up your time.
        </p>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator fade-in stagger-3">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
