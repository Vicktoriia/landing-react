import React, { useEffect, useState } from 'react';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import Navigate from '../components/navigate';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Navigation = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <Navigate data={landingPageData.Navigation} />
      </div>
    </main>
  );
};

export default Navigation;
