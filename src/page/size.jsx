import React, { useEffect, useState } from 'react';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import Table from '../components/table';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Size = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <main>
      <div>
        <Table data={landingPageData.Size} />
      </div>
    </main>
  );
};

export default Size;
