import "./MyEvents.css"

const RegisteredEvents = ({ events, deleteEvent }) => {
  return (
    <section className="registered">
      <h2>Registered Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <button
              onMouseOver={() => console.log(`Showing info for ${event.name}`)}
            >
              {event.name}
              
            </button>
            <span> Status: {event.status === "accepted" ? "✔" : "✘"}</span>
            <button onClick={() => deleteEvent(event.id)} className="delete-event-btn">Delete Event</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RegisteredEvents;