import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselHeroSectionEventCard from "../../Components/CarouselHeroSectionEventCard/CarouselHeroSectionEventCard.jsx";
import {
  AppContainer,
  GlobalStyle,
  HeroSection,
  MidSection,
  ThirdSection,
  HeroSectionEventCardContainer,
  StyledSwiper,
  Button,
} from "../../Components/styles/HomeStyles.js";

export default function Home() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection>
        <h2>Be My Guest Events App</h2>
        <h1>June 27th - July 4th</h1>

        <StyledSwiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
        </StyledSwiper>
      </HeroSection>

      <MidSection>
        <h4>
          A social meeting platform <br />
          Designed to help people get to know each other <br />
          By hosting and creating an event or joining a social gathering that
          already exists in the App.
        </h4>
      </MidSection>

      <ThirdSection>
        <h1>Featured Upcoming Events</h1>
        <h6>
          You are free to choose from the Event list
          <br /> The event that draws you in to discover, explore, and engage.
        </h6>
        <HeroSectionEventCardContainer>
          <CarouselHeroSectionEventCard />
          <CarouselHeroSectionEventCard />
          <CarouselHeroSectionEventCard />
          <CarouselHeroSectionEventCard />
          <CarouselHeroSectionEventCard />
        </HeroSectionEventCardContainer>
      </ThirdSection>
      <Button>View More Events</Button>
    </AppContainer>
  );
}
