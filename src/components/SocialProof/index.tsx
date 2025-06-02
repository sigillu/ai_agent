import React, { useState } from 'react';

const SocialProof: React.FC = () => {
  const [showStats, setShowStats] = useState(true);
  
  const stats = [
    { value: '10,000+', label: 'hours saved' },
    { value: '460%', label: 'average ROI' },
    { value: '25+', label: 'businesses automated' }
  ];
  
  const quotes = [
    { text: "They automated what we didn't even know could be automated — we got 40 hours a month back.", author: "Marketing Director" },
    { text: "It's like I hired a full-time employee, without the payroll.", author: "Agency Owner" }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md overflow-hidden">
            <button 
              className={`px-6 py-2 text-sm font-medium ${showStats ? 'bg-primary text-white' : 'bg-muted text-secondary-foreground'}`}
              onClick={() => setShowStats(true)}
            >
              Stats
            </button>
            <button 
              className={`px-6 py-2 text-sm font-medium ${!showStats ? 'bg-primary text-white' : 'bg-muted text-secondary-foreground'}`}
              onClick={() => setShowStats(false)}
            >
              Testimonials
            </button>
          </div>
        </div>
        
        {showStats ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stats-item fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="stats-number">{stat.value}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="quote-card fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v6c0 3.314-2.686 6-6 6H4v4h4c5.523 0 10-4.477 10-10V8h-8zm18 0v6c0 3.314-2.686 6-6 6h-0v4h4c5.523 0 10-4.477 10-10V8h-8z"/>
                </svg>
                <p className="text-lg mb-4">{quote.text}</p>
                <p className="text-sm text-secondary-foreground">— {quote.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialProof;
