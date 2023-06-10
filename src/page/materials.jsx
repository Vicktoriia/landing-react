import React, { useEffect, useState } from 'react';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import Material from '../components/material';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Materials = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <Material data={landingPageData.Materials} />
      </div>
    </main>
  );
};

export default Materials;
