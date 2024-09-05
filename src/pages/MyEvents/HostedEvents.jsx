const HostedEvents = ({ hosted, updateAttendeeStatus }) => {
  return (
    <section className="hosted">
      <h2>Hosted Events</h2>
      {hosted.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <ul>
            {event.attendees.map((attendee) => (
              <li key={attendee.email}>
                {attendee.name} -{" "}
                <a href={`mailto:${attendee.email}`}>{attendee.email}</a>
                <span> (Status: {attendee.status})</span>
                <button
                  onClick={() =>
                    updateAttendeeStatus(event.id, attendee.email, "accepted")
                  }
                >
                  ✔
                </button>
                <button
                  onClick={() =>
                    updateAttendeeStatus(
                      event.id,
                      attendee.email,
                      "not accepted"
                    )
                  }
                >
                  ✘
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default HostedEvents;
