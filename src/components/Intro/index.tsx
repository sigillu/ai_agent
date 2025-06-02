import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h2 className="heading text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="body-text">
              We're a next-gen automation agency that helps teams save time, close more deals, and run smoother than ever — powered by tools like ChatGPT, Zapier, Make, and GoHighLevel.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center items-center fade-in stagger-1">
            {/* Platform logos */}
            <div className="col-span-1">
              <img src="/src/assets/logos/zapier.svg" alt="Zapier" className="platform-logo" />
            </div>
            <div className="col-span-1">
              <img src="/src/assets/logos/make.svg" alt="Make" className="platform-logo" />
            </div>
            <div className="col-span-1">
              <img src="/src/assets/logos/gohighlevel.svg" alt="GoHighLevel" className="platform-logo" />
            </div>
            <div className="col-span-1">
              <img src="/src/assets/logos/airtable.svg" alt="Airtable" className="platform-logo" />
            </div>
            <div className="col-span-1">
              <img src="/src/assets/logos/chatgpt.svg" alt="ChatGPT" className="platform-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
