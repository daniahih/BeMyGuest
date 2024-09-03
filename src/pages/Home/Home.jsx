import { useState } from "react";
import { useGlobalContext } from "../../Context.jsx";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const { Events, isLoading, error } = useGlobalContext();
  const [visibleEventsCount, setVisibleEventsCount] = useState(5); // Initial count

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error: {error.message}</div>;

  // Ensure events is an array before calling .map
  if (!Events || Events.length === 0) {
    return <div>No events available</div>;
  }

  // Function to handle "View More Events" click
  const handleLoadMore = () => {
    setVisibleEventsCount((prevCount) => prevCount + 5); // Increase the count by 5
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection>
        <h2>Be My Guest Events App</h2>
        <h1>June 27th - July 4th</h1>

        <StyledSwiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const totalSlides = Math.min(Events.length, visibleEventsCount);
              const groupSize = 5; // Number of bullets you want to show

              // Calculate start and end indices for the current group of bullets
              const startIndex = Math.floor(index / groupSize) * groupSize;
              const endIndex = Math.min(startIndex + groupSize, totalSlides);

              if (index >= startIndex && index < endIndex) {
                return `<span class="${className}">${index + 1}</span>`;
              }
              return "";
            },
            dynamicBullets: true, // Enable dynamic bullets
            dynamicMainBullets: 5, // Show 5 bullets at a time
          }}
          effect="fade"
          navigation={true}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {Events.slice(0, visibleEventsCount).map((event, index) => (
            <SwiperSlide key={event.id}>
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
                    <StyledButton className="primary">Join Event</StyledButton>
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
          You are free to choose from the Event list <br /> The event that draws
          you in to discover, explore, and engage.
        </h6>
        <UpcomingEventsContainers>
          {Events.slice(0, visibleEventsCount).map((event) => (
            <UpcomingEvent key={event.id}>
              <EventInfo>
                <h3>{event.eventTitleEn}</h3>
                <div>
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
                </div>
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
      {visibleEventsCount < Events.length && (
        <StyledButton className="third" onClick={handleLoadMore}>
          View More Events
        </StyledButton>
      )}
    </AppContainer>
  );
}
