import React from "react";

export const Image = ({ id, largeImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {' '}
        <a href={largeImage} data-lightbox-gallery="gallery1">
          <div className="hover-text">
          </div>
          <img src={largeImage} className="img-responsive" alt={id} />{' '}
        </a>{' '}
      </div>
    </div>
  );
};
