import styled from "styled-components";
import dummyData from "../../Data/dummyData";
import { ThemeProvider } from "styled-components";

// Container styling
export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
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

  .event-card-content {
    flex: 1;
    padding-right: 10px;
  }

  .event-title {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .event-category,
  .event-place,
  .event-hour,
  .event-date {
    font-size: 0.9rem;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    display: flex;
    align-items: center; /* Align icon and text in the same line */
  }

  .event-category img,
  .event-place img,
  .event-hour img,
  .event-date img {
    margin-right: 8px; /* Space between the icon and the text */
    width: 20px;
    height: 20px;
  }

  .event-description {
    list-style-type: disc;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 0.85rem;
  }

  .button {
    margin-top: 10px;
    width: 150px;
    color: ${({ theme }) => theme.colors.card};
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

// Event image styling
const EventImageContainer = styled.div`
  flex-shrink: 0;
  width: 120px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 8px 8px 0;
    object-fit: cover;
    margin: 0;
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
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <EventCardsContainer>
          {dummyData.map((event) => (
            <EventCard key={event.id}>
              <div className="event-card-content">
                <h3 className="event-title">{event.eventTitleEn}</h3>
                <p className="event-category">
                  {event.eventNameCategoryEn}
                </p>
                <p className="event-place">
                  <img src="../../../public/eventImages/gps.png" alt="" />
                  {event.eventPlaceEn}
                </p>
                <p className="event-hour">
                  <img src="../../../public/eventImages/time-left.png" alt="" />
                  {event.eventHour}
                </p>
                <p className="event-date">
                  <img src="../../../public/eventImages/calendar.png" alt="" />
                  {event.eventDate}
                </p>
                <ul className="event-description">
                  {event.eventDescriptionEn.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
                <button className="button">View details</button>
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
