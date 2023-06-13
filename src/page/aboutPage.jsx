import React from 'react';
import SmoothScroll from 'smooth-scroll';
import Contact from 'components/contact';
import About from 'components/about';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const aboutPage = () => {
  return (
    <main>
      <div>
        <About/>
        <Contact/>
      </div>
    </main>
  );
};

export default aboutPage;
