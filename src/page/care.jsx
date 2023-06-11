import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Care = () => {
   const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);
  return (
    <main>
      <div>
        <div className="intro intro-care">
          <button
            className="btn-back"
            type="button"
            onClick={handleBackClick}
          >
            <i className="fa fa-arrow-left-long mr-2"></i>
          </button>
        </div>
        <Container>
           <h2>{t('Care.title')}</h2>
          <h4>{t('Care.description')}</h4>
          <ul>
            {t('Care.sections', { returnObjects: true }).map((section, i) => (
                  <li key={`${section}-${i}`}><h5 className="mt-4">{section.title}</h5>
                    <p>{section.content}</p></li>
                      ))}
          </ul>
        </Container>
      </div>
    </main>
  );
};

export default Care;
