import React, { useState, useEffect } from 'react';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import { Header } from '../components/header';
import { Features } from '../components/features';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Contact data={landingPageData.Contact} />
      </div>
    </main>
  );
};

export default Home;
