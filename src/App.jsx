import React, { useState, useEffect } from 'react';
import JsonData from './data/data.json';
import 'App.css';
import SmoothScroll from 'smooth-scroll';
import Navigation from 'components/navigation';
import { Header } from 'components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
    </div>
  );
};

export default App;
