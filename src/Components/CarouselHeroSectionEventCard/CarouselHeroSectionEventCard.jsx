// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import {
  CarouselHeroSectionEventCardWrapper,
  Img,
} from '../../Components/styles/CarouselHeroSectionEventCardStyles'

export default function CarouselHeroSectionEventCard() {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt="nature-1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          alt="nature-2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          alt="nature-3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          alt="nature-4"
        />
      </SwiperSlide>
    </Swiper>
  )
}
