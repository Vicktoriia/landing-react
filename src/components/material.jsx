import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Material = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
      <Container>
        <button className="btn-back" type="button" onClick={handleBackClick}>
          <i className="fa fa-arrow-left-long mr-2"></i>
        </button>
        <div>
          <h2>{props.data ? props.data.title : 'Loading'}</h2>
          <p>{props.data ? props.data.description : 'Loading'}</p>

          <h4>{props.data ? props.data.qualitiesTitle : 'Loading'}</h4>
          <ul>
            {props.data && props.data.qualities
              ? props.data.qualities.map((quality, index) => (
                  <li key={index}>{quality}</li>
                ))
              : 'Loading'}
          </ul>

          <h4>{props.data ? props.data.advantagesTitle : 'Loading'}</h4>
          <ul>
            {props.data && props.data.advantages
              ? props.data.advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))
              : 'Loading'}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default Material;
