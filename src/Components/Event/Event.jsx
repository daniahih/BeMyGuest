import dummyData from "../Data/dummyData"; // Ensure your dummyData is correctly imported
import './Event.css'
export default function Event() {
  return (
    <div className="event-cards-container">
      {dummyData.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-card-content">
            <h3 className="event-title">{event.eventTitleEn}</h3>
            <p className="event-category">{event.eventNameCategoryEn}</p>
            <p className="event-place">{event.eventPlaceEn}</p>
            <p className="event-hour">{event.eventHour}</p>
            <ul className="event-description">
              {event.eventDescriptionEn.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="event-image-container">
            <img
              src={event.eventImage}
              alt={event.eventTitleEn}
              style={event.eventImgStyle}
              className="event-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
