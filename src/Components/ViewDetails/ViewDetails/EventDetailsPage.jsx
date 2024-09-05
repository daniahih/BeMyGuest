import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../Context";

export default function EventDetailsPage() {
  const { eventId } = useParams(); // Get eventId from URL
  const { Events } = useGlobalContext();

  // Find the specific event by ID
  const event = Events.find((event) => event.id === eventId);

  // If the event is not found, show a message
  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h1>{event.eventTitleEn}</h1>
      <p>{event.eventDescriptionEn}</p>
      <div>
        <img src={event.eventImage} alt={event.eventTitleEn} />
      </div>
      <div>
        <p>Location: {event.eventPlaceEn}</p>
        <p>Date: {event.eventDate}</p>
        <p>Time: {event.eventHour}</p>
      </div>
    </div>
  );
}
