import React from 'react';

const MainCTA: React.FC = () => {
  return (
    <section className="section bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="heading mb-6 fade-in">Let's Build Your Automation Engine.</h2>
        <p className="subheading mb-10 fade-in stagger-1">
          Schedule a free consultation and let us show you what's possible — no pressure, no strings.
        </p>
        
        <a 
          href="#" 
          className="btn btn-primary btn-lg fade-in stagger-2"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://calendly.com', '_blank');
          }}
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default MainCTA;
