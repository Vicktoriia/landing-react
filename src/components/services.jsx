import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-6 col-md-4 service-item"
                >
                  {' '}
                  <a href={d.link}>
                    <i className={d.icon}></i>
                  </a>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
