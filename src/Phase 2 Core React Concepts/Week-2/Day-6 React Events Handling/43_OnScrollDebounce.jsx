import React, { useEffect } from 'react';

const ScrollTracker = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        console.log('Sticky header activated');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', height: '150vh', padding: '20px' }}>
      <h2>Scroll down to see event activation in console</h2>
    </div>
  );
};

export default ScrollTracker;