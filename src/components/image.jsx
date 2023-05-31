import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {' '}
        <a
          href={largeImage}
          title={title}
          data-toggle="lightbox"
          data-gallery="example-gallery"
        >
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive img-fluid" alt={title} />{' '}
        </a>{' '}
      </div>
    </div>
  );
};
