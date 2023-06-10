import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const CareItem = (props) => {
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
           <h2>{props.data ? props.data.title : 'Loading'}</h2>
          <h4>{props.data ? props.data.description : 'Loading'}</h4>
          <ul>
            {props.data && props.data.sections
              ? props.data.sections.map((section, i) => (
                  <li key={`${section}-${i}`}><h5 className="mt-4">{section.title}</h5>
                    <p>{section.content}</p></li>
                ))
              : 'Loading'}
          </ul>
        </Container>
      </div>
    </main>
  );
};

export default CareItem;
