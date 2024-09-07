import { useState } from "react";
import { useGlobalContext } from "../../Context.jsx";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AppContainer,
  GlobalStyle,
  HeaderHeroSection,
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
  SearchContainer,
  SearchInput,
  SelectDropdown,
} from "../../Components/styles/HomeStyles.js";

export default function Home() {
  const { Events, isLoading, error } = useGlobalContext();
  const [visibleEventsCount, setVisibleEventsCount] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const navigate = useNavigate(); // useNavigate hook

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!Events || Events.length === 0) {
    return <div>No events available</div>;
  }

  // Sort events by date
  const sortedEvents = [...Events].sort(
    (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
  );

  // Filter events based on search text, category, and title
  const filteredEvents = sortedEvents.filter((event) => {
    const matchesSearchText = event.eventTitleEn
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory
      ? event.eventNameCategoryEn === selectedCategory
      : true;
    const matchesTitle = selectedTitle
      ? event.eventTitleEn === selectedTitle
      : true;
    return matchesSearchText && matchesCategory && matchesTitle;
  });

  const uniqueCategories = [
    ...new Set(Events.map((event) => event.eventNameCategoryEn)),
  ];
  const uniqueTitles = [...new Set(Events.map((event) => event.eventTitleEn))];

  const handleLoadMore = () => {
    setVisibleEventsCount((prevCount) => prevCount + 5);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <HeroSection>
        <HeaderHeroSection>
          <h2 className="be-title">Be My Guest</h2>
          <h1 className="sep-title">Social Events Platform</h1>
        </HeaderHeroSection>
        <StyledSwiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const totalSlides = Math.min(
                sortedEvents.length,
                visibleEventsCount
              );
              const groupSize = 5;
              const startIndex = Math.floor(index / groupSize) * groupSize;
              const endIndex = Math.min(startIndex + groupSize, totalSlides);
              if (index >= startIndex && index < endIndex) {
                return `<span class="${className}">${index + 1}</span>`;
              }
              return "";
            },
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          effect="fade"
          navigation={true}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {sortedEvents.slice(0, visibleEventsCount).map((event, index) => (
            <SwiperSlide key={event.id}>
              <SlideContent>
                <TextContent>
                  <h3>{event.eventNameCategoryEn}</h3>
                  <h2>{event.eventTitleEn}</h2>
                  <EventDetails>
                    <span>
                      <img src="/eventImages/gps.png" alt="icon-Place" />
                      {event.eventPlaceEn}
                    </span>
                    <span>
                      <img src="/eventImages/calendar.png" alt="icon-Date" />
                      {event.eventDate}
                    </span>
                    <span>
                      <img src="/eventImages/time-left.png" alt="icon-time" />
                      {event.eventHour}
                    </span>
                  </EventDetails>
                  <ButtonGroup>
                    <StyledButton className="primary">Join Event</StyledButton>
                    <StyledButton
                      className="secondary"
                      onClick={() => {
                        console.log("Navigating to:", event.id); // Debugging event ID
                        navigate(`/event-details/${event.id}`);
                      }}
                    >
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

        {/* Search and filter functionality */}
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by event title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SelectDropdown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {[...uniqueCategories].sort().map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </SelectDropdown>
          <SelectDropdown
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
          >
            <option value="">All Titles</option>
            {[...uniqueTitles].sort().map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </SelectDropdown>
        </SearchContainer>

        <UpcomingEventsContainers>
          {filteredEvents.slice(0, visibleEventsCount).map((event) => (
            <UpcomingEvent key={event.id}>
              <EventInfo>
                <h3>{event.eventTitleEn}</h3>
                <div>
                  <p>
                    <img src="/eventImages/gps.png" alt="icon-Place" />
                    {event.eventPlaceEn}
                  </p>
                  <p>
                    <img src="/eventImages/calendar.png" alt="icon-Date" />
                    {event.eventDate}
                  </p>
                  <p>
                    <img src="/eventImages/time-left.png" alt="icon-time" />
                    {event.eventHour}
                  </p>
                </div>
                <div className="event-description">
                  {event.eventDescriptionEn}
                </div>
                <button
                  className="view-details-button"
                  onClick={() => {
                    console.log("Navigating to:", event.id); // Debugging event ID
                    navigate(`/event-details/${event.id}`);
                  }}
                >
                  View Details
                </button>
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

        {visibleEventsCount < filteredEvents.length && (
          <StyledButton className="third" onClick={handleLoadMore}>
            View More Events
          </StyledButton>
        )}
      </ThirdSection>
    </AppContainer>
  );
}
