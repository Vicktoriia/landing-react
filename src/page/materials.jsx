import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
import Contact from 'components/contact';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Material = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
    <div>
     <div className="intro intro-material">
      <button className="btn-back" type="button" onClick={handleBackClick}>
        <i className="fa fa-arrow-left-long mr-2"></i>
      </button>
      </div>
    <div className="container">
      <div>
        <p>{t('Materials.description')}</p>

        <h4>{t('Materials.qualitiesTitle')}</h4>
        <ul>
          {t('Materials.qualities', { returnObjects: true }).map((q, i) => ( <li key={`${q}-${i}`}>{q}</li>))}
        </ul>

        <h4>{t('Materials.advantagesTitle')}</h4>
        <ul>
          {t('Materials.advantages', { returnObjects: true }).map((a, i) => ( <li key={`${a}-${i}`}>{a}</li>))}
        </ul>
      </div>
        </div>
        <Contact/>
    </div>
    </main>
  );
};

export default Material;
