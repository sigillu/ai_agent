import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <h2 className="heading text-center mb-8 fade-in">About Us</h2>
        
        <div className="fade-in stagger-1">
          <p className="body-text text-center mb-6">
            We're not some faceless tech company. We're real people building real systems — automations that save time, reduce chaos, and give business owners their lives back.
          </p>
          <p className="body-text text-center">
            Whether you're drowning in manual work or scaling faster than your team can handle, we create systems that scale with you.
          </p>
        </div>
        
        <div className="mt-12 bg-card rounded-lg p-8 border border-border fade-in stagger-2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98C3 3.34 4.34 2.01 6 2.01H18C19.66 2.01 21 3.34 21 4.98V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51C7.5 8.12 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12 16.5 9.51C16.5 12.66 13.58 14.51 12.28 14.96Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary-foreground">
                To give businesses back their most valuable resource: time. Through intelligent automation, we eliminate repetitive tasks and create systems that work for you, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
