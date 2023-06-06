import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import imagesData from '../data/images.json';

const Collection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = image => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
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
        {imagesData &&
          imagesData.map((d, i) => (
            <div className="col-md-4" key={`${d.title}-${i}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={d.smallImage}
                  alt={d.title}
                  onClick={() => openModal(d.largeImage)}
                />
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>

      {selectedImage && (
        <Modal
          show={isModalOpen}
          onHide={closeModal}
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

export default Collection;
