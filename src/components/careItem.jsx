import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CareItem = (props) => {
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
           <h2>{props.data ? t(props.data.title) : 'Loading'}</h2>
          <h4>{props.data ? t(props.data.description) : 'Loading'}</h4>
          <ul>
            {props.data && props.data.sections
              ? props.data.sections.map((section, i) => (
                  <li key={`${section}-${i}`}><h5 className="mt-4">{t(section.title)}</h5>
                    <p>{t(section.content)}</p></li>
                ))
              : 'Loading'}
          </ul>
        </Container>
      </div>
    </main>
  );
};

export default CareItem;
