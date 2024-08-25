import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

// Import your dummyData
import dummyDataEn from './path-to-your-dummyData-file'

const HeroSectionEventCardContainer = () => {
  return (
    <div className="hero-section-event-card-container">
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
        {dummyDataEn.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="event-card"
              style={{
                backgroundImage: `url(${event.backgroundImage})`,
                ...event.backgroundImgStyle,
              }}
            >
              <div className="event-content">
                <h2>{event.eventTitleEn}</h2>
                <p>{event.eventPlaceEn}</p>
                <p>
                  {event.eventDate} at {event.eventHour}
                </p>
                <ul>
                  {event.eventDescriptionEn.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSectionEventCardContainer
