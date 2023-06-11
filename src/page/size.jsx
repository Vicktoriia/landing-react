import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Size = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
      <div>
        <div className="intro intro-size">
          <button className="btn-back" type="button" onClick={handleBackClick}>
            <i className="fa fa-arrow-left-long mr-2"></i>
          </button>
        </div>
        <Container>
          <h2 className="text-center">{t('Size.title')}</h2>
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>{t('Size.columns.0')}</th>
                  <th>{t('Size.columns.1')}</th>
                  <th>{t('Size.columns.2')}</th>
                  <th>{t('Size.columns.3')}</th>
                  <th>{t('Size.columns.4')}</th>
                </tr>
              </thead>
              <tbody>
                {t('Size.rows', { returnObjects: true }).map((row, i) => (
                  <tr key={i}>
                    <td>{row.size}</td>
                    <td>{row.chest}</td>
                    <td>{row.waist}</td>
                    <td>{row.hips}</td>
                    <td>{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Size;
