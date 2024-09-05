import React, { useState } from 'react';
import EventCard from './EventCard'; // Import your EventCard component
import dummyData from './Data/dummyData.js'; // Adjust path as needed

const SummaryView = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="summary-view-container">
      {!selectedEvent ? (
        <div className="event-summary-list">
          {dummyData.map((event) => (
            <div key={event.id} className="event-summary-item">
              <h3>{event.eventTitleEn}</h3>
              <button
                className="button button-view-details"
                onClick={() =>
                  handleViewDetails({
                    image: event.eventImage,
                    date: event.eventDate,
                    location: event.eventPlaceEn,
                    time: event.eventHour,
                    title: event.eventTitleEn,
                    description: event.eventDescriptionEn.join(" "),
                  })
                }
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <EventCard
          event={selectedEvent}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default SummaryView;
