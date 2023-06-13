import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
import Contact from 'components/contact';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Collection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = e => {
    if (e.target.tagName === 'IMG') {
      closeModal();
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
      <div>
        <div className="intro-portfolio">
          <button className="btn-back" type="button" onClick={handleBackClick}>
            <i className="fa fa-arrow-left-long mr-2"></i>
          </button>
        </div>
        <div className="container">
          <div className="row">
            {t('Portfolio', { returnObjects: true }).map((d, i) => (
              <div className="col-6 col-md-3" key={`${d.title}-${i}`}>
                <Card className="shadow">
                  <a
                    href={d.largeImage}
                    data-toggle="modal"
                    onClick={e => {
                      e.preventDefault();
                      openModal(d);
                    }}
                  >
                    <Card.Img variant="top" src={d.smallImage} alt="" />
                    <Card.Body>
                      <Card.Title>{d.title}</Card.Title>
                      <Card.Text>{d.price}</Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </div>
            ))}
          </div>

          {selectedImage && (
            <Modal
              show={!!selectedImage}
              onHide={closeModal}
              onClick={handleModalClick}
            >
              <Modal.Header style={{ height: '30px' }} closeButton>
                <Modal.Title>{selectedImage.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedImage.largeImage}
                  alt=""
                  className="img-fluid"
                />
              </Modal.Body>
            </Modal>
          )}
        </div>
        <Contact/>
      </div>
    </main>
  );
};

export default Collection;
