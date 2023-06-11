import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LernButton from "components/button"
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header id="header">
      <div className="intro intro-hero">
        <div className="overlay">
          <Container>
            <Row>
              <Col className="g-col col-md-offset-2 intro-text">
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                <LernButton/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
