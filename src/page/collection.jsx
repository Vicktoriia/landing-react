import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const Collection = props => {
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

  return (
    <div className="container">
      <div className="row">
        {props &&
          props.map((d, i) => (
            <div className="col-md-4" key={`${d.title}-${i}`}>
              <Card>
                <Card.Img variant="top" src={d.smallImage} alt={d.title} />
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => openModal(d.largeImage)}
                  >
                    View Large Image
                  </Button>
                </Card.Body>
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
          <Modal.Body>
            <img src={selectedImage} alt="Full Image" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Collection;
