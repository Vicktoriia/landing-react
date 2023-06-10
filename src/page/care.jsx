import React, { useEffect, useState } from 'react';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import CareItem from '../components/careItem';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Care = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <CareItem data={landingPageData.Care} />
      </div>
    </main>
  );
};

export default Care;
