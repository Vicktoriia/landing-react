import React from "react";
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import imag from '../intro-bg.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Image
              src={imag}
              className="img-responsive"
              alt=""
              fluid
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t('About.title')}</h2>
              <p>{t('About.paragraph')}</p>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>{t('About.Why')}</ul>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>{t('About.Why2')}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
