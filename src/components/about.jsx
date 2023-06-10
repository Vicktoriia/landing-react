import React from "react";
import Image from 'react-bootstrap/Image';
import imag from '../intro-bg.jpg'

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {' '}
            <Image
              src={imag}
              className="img-responsive"
              alt=""
              fluid
            />{' '}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{props.data ? props.data.title : 'loading...'}</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>про нас</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>{props.data ? props.data.Why : 'loading...'}</ul>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>{props.data ? props.data.Why2 : 'loading...'}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
