import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {t('Services', { returnObjects: true }).map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-6 col-md-4 service-item"
                >
                  {d.name === "Замовити" ? (
                    <a href={d.link}>
                      <i className={d.icon}></i>
                    </a>
                  ) : (
                  <NavLink to={d.link}>
                    <i className={d.icon}></i>
                  </NavLink>
                    )}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
