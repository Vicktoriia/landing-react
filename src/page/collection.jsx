import React, { useState, useEffect } from 'react';
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll';
import Portfolio from '../components/portfolio';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Collection = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <Portfolio data={landingPageData.Portfolio} />
      </div>
    </main>
  );
};

export default Collection;
