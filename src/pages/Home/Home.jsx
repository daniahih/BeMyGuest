import { SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummyData from "../../Data/dummyData.js";

import {
  AppContainer,
  GlobalStyle,
  HeroSection,
  MidSection,
  ThirdSection,
  UpcomingEventsContainers,
  UpcomingEvent,
  StyledSwiper,
  SlideContent,
  TextContent,
  ImageContent,
  EventDetails,
  ButtonGroup,
  StyledImg,
  StyledButton,
  EventInfo,
  EventImage,
} from "../../Components/styles/HomeStyles.js";

export default function Home() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection>
        <h2>Be My Guest Events App</h2>
        <h1>June 27th - July 4th</h1>

        <StyledSwiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          effect="fade"
          navigation={true}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {dummyData.map((event) => (
            <>
              <SwiperSlide>
                <SlideContent>
                  <TextContent>
                    <h3>{event.eventNameCategoryEn}</h3>
                    <h2>{event.eventTitleEn}</h2>
                    <EventDetails>
                      <span>
                        <img
                          src="../../../public/eventImages/gps.png"
                          alt="icon-Place"
                        />
                        {event.eventPlaceEn}
                      </span>
                      <span>
                        <img
                          src="../../../public/eventImages/calendar.png"
                          alt="icon-Date"
                        />
                        {event.eventDate}
                      </span>
                      <span>
                        <img
                          src="../../../public/eventImages/time-left.png"
                          alt="icon-time"
                        />
                        {event.eventHour}
                      </span>
                    </EventDetails>
                    <ButtonGroup>
                      <StyledButton className="primary">
                        Join Event
                      </StyledButton>
                      <StyledButton className="secondary">
                        More details
                      </StyledButton>
                    </ButtonGroup>
                  </TextContent>
                  <ImageContent>
                    <StyledImg
                      src={event.eventImage}
                      alt={event.eventTitleEn}
                      style={event.eventImgStyle}
                    />
                  </ImageContent>
                </SlideContent>
              </SwiperSlide>
            </>
          ))}
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
        <UpcomingEventsContainers>
          {dummyData.map((event) => (
            <UpcomingEvent key={event.id}>
              <EventInfo>
                <h3>{event.eventTitleEn}</h3>
                <p>
                  <img
                    src="../../../public/eventImages/gps.png"
                    alt="icon-Place"
                  />
                  {event.eventPlaceEn}
                </p>
                <p>
                  <img
                    src="../../../public/eventImages/calendar.png"
                    alt="icon-Date"
                  />
                  {event.eventDate}
                </p>
                <p>
                  <img
                    src="../../../public/eventImages/time-left.png"
                    alt="icon-time"
                  />
                  {event.eventHour}
                </p>
                <div className="event-description">
                  {event.eventDescriptionEn}
                </div>
                <button className="view-details-button">View Details</button>
              </EventInfo>
              <EventImage>
                <img
                  src={event.eventImage}
                  alt={event.eventTitleEn}
                  style={event.eventImgStyle}
                />
              </EventImage>
            </UpcomingEvent>
          ))}
        </UpcomingEventsContainers>
      </ThirdSection>
      <StyledButton className="third">View More Events</StyledButton>
    </AppContainer>
  );
}
