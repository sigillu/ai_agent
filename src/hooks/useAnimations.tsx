import { useEffect, useState } from 'react';

// Custom hook for scroll animations
export const useScrollAnimation = (): void => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el: Element, scrollOffset = 100): boolean => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
      );
    };
    
    const displayScrollElement = (element: Element): void => {
      element.classList.add('visible');
    };
    
    const hideScrollElement = (element: Element): void => {
      element.classList.remove('visible');
    };
    
    const handleScrollAnimation = (): void => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
    
    // Initialize
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
};

// Custom hook for parallax effect
export const useParallax = (): void => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    const handleParallax = (): void => {
      const scrollPosition = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = htmlElement.dataset.speed ? parseFloat(htmlElement.dataset.speed) : 0.5;
        htmlElement.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
};

// Custom hook for sticky CTA
export const useStickyCTA = (delay = 6000): { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> } => {
  const [visible, setVisible] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return { visible, setVisible };
};
