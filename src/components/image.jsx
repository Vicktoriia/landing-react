import React, { useState } from "react";
import { Modal } from 'react-bootstrap';

export const Image = ({ title, largeImage, smallImage }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    closeModal();
  };

  const handleModalClick = e => {
    if (e.target.tagName !== 'IMG') {
      closeModal();
    }
  };
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {' '}
        <a
          href={largeImage}
          title={title}
          data-toggle="modal"
          data-gallery="gallery"
          onClick={e => {
            e.preventDefault();
            openModal();
          }}
        >
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive img-fluid"
            alt={title}
          />{' '}
        </a>{' '}
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          onClick={handleModalClick}
        >
          <Modal.Body>
            <img src={largeImage} alt="" className="img-fluid" />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};
