import React from 'react';
import { Navigation, Scrollbar, Autoplay, Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

const Gallery = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div id="gellery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Галерея</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <Swiper
              style={{
                '--swiper-navigation-color': '#5c5d64',
                '--swiper-pagination-color': '#5c5d64',
              }}
              spaceBetween={10}
              loop={true}
              slidesPerGroup={1}
              slidesPerView={1}
              autoHeight={true}
              autoplay={true}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Scrollbar, Autoplay]}
              scrollbar={{ draggable: true }}
              onSwiper={swiper => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/01.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/02.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/03.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/04.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/05.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/06.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/07.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/08.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/09.jpg')}
                />
              </SwiperSlide>
            </Swiper>
            {/* <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/01.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/02.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/03.jpg')}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt=""
                  className="portfolio-img"
                  src={require('../img/04.jpg')}
                />
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
