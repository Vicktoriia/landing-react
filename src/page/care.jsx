import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Care = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);
  return (
    <main>
      <Container>
        <Button type="button" onClick={handleBackClick}>
          Go back
        </Button>
        <Image
          src={require('../img/01.jpg')}
          className="img-responsive"
          alt=""
          fluid
        ></Image>
      </Container>
    </main>
  );
};

export default Care;
