import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LernButton from "components/button"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <Container>
            <Row>
              <Col className="g-col col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <LernButton />{' '}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
};
