import React from 'react'
import CarouselHeroSectionEventCard from '../../Components/CarouselHeroSectionEventCard/CarouselHeroSectionEventCard.jsx'
import HeroSectionEventCard from '../../Components/HeroSectionEventCard/HeroSectionEventCard.jsx'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import {
  AppContainer,
  GlobalStyle,
  HeroSection,
  MidSection,
  ThirdSection,
  HeroSectionEventCardContainer,
  StyledSwiper,
  SwiperSlideContainer,
  Button,
} from '../../Components/styles/HomeStyles.js'

export default function Home() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection>
        <h2>Be My Guest Events App</h2>
        <h1>June 27th - July 4th</h1>

        <StyledSwiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          <SwiperSlideContainer>
            <CarouselHeroSectionEventCard />
          </SwiperSlideContainer>
        </StyledSwiper>
      </HeroSection>

      <MidSection className="description-section">
        <h4>
          A social meeting platform <br />
          Designed to help people get to know each other <br />
          By hosting and creating an event or joining a social gathering that
          already exists in the App.
        </h4>
      </MidSection>

      <ThirdSection className="events-section">
        <h1>Featured Upcoming Events</h1>
        <h6>
          You are free to choose from the Event list
          <br /> The event that draws you in to discover, explore, and engage.
        </h6>
        <HeroSectionEventCardContainer>
          <HeroSectionEventCard />
          <HeroSectionEventCard />
          <HeroSectionEventCard />
          <HeroSectionEventCard />
          <HeroSectionEventCard />
        </HeroSectionEventCardContainer>
      </ThirdSection>
      <Button>View More Events</Button>
    </AppContainer>
  )
}
