import React from 'react';
//import { useTranslation } from 'react-i18next';

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


import '../styles/SwiperSlider.css';

//import required modules
import { EffectFade, Navigation, Pagination } from 'swiper';

export default function SwiperSlider() {
  //const { t, i18n } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={40}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/617GrzNYlgL._AC_UF1000,1000_QL80_.jpg" />

        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
