import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Material = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <div>
     <div className="intro intro-material">
      <button className="btn-back" type="button" onClick={handleBackClick}>
        <i className="fa fa-arrow-left-long mr-2"></i>
      </button>
      </div>
    <div className="container">
      <div>
        <p>{props.data ? props.data.description : 'Loading'}</p>

        <h4>{props.data ? props.data.qualitiesTitle : 'Loading'}</h4>
        <ul>
          {props.data && props.data.qualities
            ? props.data.qualities.map((q, i) => <li key={`${q}-${i}`}>{q}</li>)
            : 'Loading'}
        </ul>

        <h4>{props.data ? props.data.advantagesTitle : 'Loading'}</h4>
        <ul>
          {props.data && props.data.advantages
            ? props.data.advantages.map((a, i) => (
                <li key={`${a}-${i}`}>{a}</li>
              ))
            : 'Loading'}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Material;
