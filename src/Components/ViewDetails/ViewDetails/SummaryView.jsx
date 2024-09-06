import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import EventCard from "./EventCard"; // Import your EventCard component
import dummyData from "./Data/dummyData.js"; // Replace this with your actual Firebase data if necessary

const SummaryView = () => {
  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

  // Handle "View Details" button click
  const handleViewDetails = (eventId) => {
    // Navigate to event details page with the event ID
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div className="summary-view-container">
      <div className="event-summary-list">
        {dummyData.map((event) => (
          <div key={event.id} className="event-summary-item">
            <h3>{event.eventTitleEn}</h3>
            <button
              className="button button-view-details"
              onClick={() => handleViewDetails(event.id)} // Pass event.id to handleViewDetails
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryView;
