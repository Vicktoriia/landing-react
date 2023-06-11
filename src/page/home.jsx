import React from 'react';
import SmoothScroll from 'smooth-scroll';
import Header from '../components/header';
import About from '../components/about';
import Services from '../components/services';
import Gallery from '../components/gellery';
import Contact from '../components/contact';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  return (
    <main>
      <div>
        <Header />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
