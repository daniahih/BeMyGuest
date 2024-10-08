import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { useGlobalContext } from "/src/Context.jsx"; // Correct import
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

// Keyframe animations for the effects
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(4em, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(-40px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container styling
export const Container = styled.div`
  width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.card};
`;

// Event cards container styling
const EventCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding-top: 6rem;
  z-index: -1;
`;

// Individual event card styling
const EventCard = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: calc(50% - 10px);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  /* Add animations */
  animation: ${popIn} 0.7s cubic-bezier(0.26, 0.53, 0.74, 1.48) backwards;

  .event-card-content {
    flex: 1;
    padding-right: 10px;
    animation: ${slideIn} 0.7s cubic-bezier(0.26, 0.53, 0.74, 1.48) backwards;
  }

  .event-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.textPrimary};
    animation: ${slideLeft} 0.7s cubic-bezier(0.26, 0.53, 0.74, 1.48) backwards;
  }

  .event-category,
  .event-place,
  .event-hour,
  .event-date {
    font-size: 0.9rem;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    display: flex;
    align-items: center;
    animation: ${slideUp} 0.7s cubic-bezier(0.26, 0.53, 0.74, 1.48) backwards;
  }

  .event-category img,
  .event-place img,
  .event-hour img,
  .event-date img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  .event-description {
    list-style-type: disc;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 0.85rem;
    animation: ${slideIn} 0.7s cubic-bezier(0.26, 0.53, 0.74, 1.48) backwards;
  }

  .button {
    margin-top: 10px;
    width: 150px;
    color: ${({ theme }) => theme.colors.card};
    background-color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Updated Event image styling with larger size
const EventImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px; // Increased width
  height: 200px; // Set height to maintain a bigger size and aspect ratio
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 8px 8px 0;
    object-fit: cover; // Ensures the image fills the container while keeping the aspect ratio
    margin: 0;
    transition: transform 0.3s ease-in-out;
  }

  ${EventCard}:hover & img {
    transform: scale(1.05); // Keep the hover effect for zooming in
  }
`;

const Theme = {
  colors: {
    card: "#fff",
    primary: "#007bff",
    secondary: "#343a40",
    light: "#f8f9fa",
    dark: "#212529",
    textPrimary: "#343a40",
    textSecondary: "#6c757d",
    textLight: "#f8f9fa",
    textDark: "#212529",
  },
};

export default function Event() {
  const { Events, isLoading, error } = useGlobalContext(); // Fetching events from context
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error: {error.message}</div>;

  const handleViewDetails = (eventId) => {
    navigate(`/event-details/${eventId}`); // Navigate to event details page with event ID
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <EventCardsContainer>
          {Events.map((event) => (
            <EventCard key={event.id}>
              <div className="event-card-content">
                <h3 className="event-title">{event.eventTitleEn}</h3>
                <p className="event-category">{event.eventNameCategoryEn}</p>
                <p className="event-place">
                  <img src="/eventImages/gps.png" alt="" />
                  {event.eventPlaceEn}
                </p>
                <p className="event-hour">
                  <img src="/eventImages/time-left.png" alt="" />
                  {event.eventHour}
                </p>
                <p className="event-date">
                  <img src="/eventImages/calendar.png" alt="" />
                  {event.eventDate}
                </p>
                <ul className="event-description">
                  {event.eventDescriptionEn.map((desc, index) => (
                    <p key={index} style={{ margin: 0 }}>
                      {desc}
                    </p>
                  ))}
                </ul>
                <button
                  className="button"
                  onClick={() => handleViewDetails(event.id)} // Call handleViewDetails with event ID
                >
                  View details
                </button>
              </div>
              <EventImageContainer>
                <img
                  src={event.eventImage}
                  alt={event.eventTitleEn}
                  className="event-image"
                />
              </EventImageContainer>
            </EventCard>
          ))}
        </EventCardsContainer>
      </Container>
    </ThemeProvider>
  );
}
