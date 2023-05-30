import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Gallery = props => {
  return (
    <div id="gellery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Галерея</h2>
        </div>
        <div className="row">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="portfolio-items">
                {props.data
                  ? props.data.map((d, i) => (
                      <div key={d.id} className="col-sm-6 col-md-4 col-lg-4">
                        <img
                          alt=""
                          className="portfolio-img"
                          src={d.largeImage}
                          width="100"
                          height="50"
                        />{' '}
                      </div>
                    ))
                  : 'Loading...'}
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};


export default Gallery;
