import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Portfolio = (props) => {
  const [selectedImage, setSelectedImage] = useState(false);

  const openModal = () => {
    setSelectedImage(true);
  };

  const closeModal = () => {
    setSelectedImage(false);
  };

  const handleModalClose = () => {
    closeModal();
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
    <div className="container">
      <button className="btn-back" type="button" onClick={handleBackClick}>
        <i className="fa fa-arrow-left-long mr-2"></i>
      </button>
      <div className="row">
        {props.data &&
          props.data.map((d, i) => (
            <div className="col-md-4" key={`${d.title}-${i}`}>
              <Card>
                <a
          href={d.largeImage}
          title={d.title}
          data-toggle="modal"
          onClick={e => {
            e.preventDefault();
            openModal();
          }}>
                <Card.Img
                  variant="top"
                  src={d.smallImage}
                  alt={d.title}
                />
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
          onHide={handleModalClose}
          onClick={handleModalClick}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedImage.largeImage} alt="" className="img-fluid" />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
