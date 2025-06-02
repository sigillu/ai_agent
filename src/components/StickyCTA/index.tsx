import React from 'react';

const StickyCTA: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <button 
        className="absolute top-2 right-2 text-secondary-foreground hover:text-primary"
        onClick={onClose}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className="mb-3">
        <h4 className="text-lg font-semibold mb-2">Want to see what we'd automate first?</h4>
        <p className="text-sm text-secondary-foreground">
          Grab a free consultation — we'll show you what's possible in 15 minutes.
        </p>
      </div>
      
      <a 
        href="#" 
        className="btn btn-primary w-full text-center"
        onClick={(e) => {
          e.preventDefault();
          window.open('https://calendly.com', '_blank');
        }}
      >
        Book My Free Call
      </a>
    </div>
  );
};

export default StickyCTA;
