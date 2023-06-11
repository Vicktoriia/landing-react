import React from 'react';
import { Navigation, Scrollbar, Autoplay, Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from './image';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
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
            modules={[FreeMode, Navigation, Thumbs, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <div className="portfolio-items">
              {t('Gallery', { returnObjects: true }).map((d, i) => (
                <SwiperSlide key={`${d.title}-${i}`}>
                  <div>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
