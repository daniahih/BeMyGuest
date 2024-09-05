import { useState } from "react";
import RegisteredEvents from "./RegisteredEvents";
import HostedEvents from "./HostedEvents";
import "./MyEvents.css";

const MyEvents = () => {
   const registeredEvents = [
     { id: 1, name: "Event 1", status: "accepted" },
     { id: 2, name: "Event 2", status: "not accepted" },
     { id: 3, name: "Event 3", status: "accepted" },
   ];

   const hostedEvents = [
     {
       id: 1,
       name: "Hosted Event 1",
       attendees: [
         { name: "John Doe", email: "john@example.com", status: "pending" },
         { name: "Jane Smith", email: "jane@example.com", status: "pending" },
       ],
     },
     {
       id: 2,
       name: "Hosted Event 2",
       attendees: [
         {
           name: "Alice Johnson",
           email: "alice@example.com",
           status: "pending",
         },
       ],
     },
   ];

   const [events, setEvents] = useState(registeredEvents);
   const [hosted, setHosted] = useState(hostedEvents);

   
   const deleteEvent = (id) => {
     setEvents(events.filter((event) => event.id !== id));
   };

   
   const updateAttendeeStatus = (eventId, attendeeEmail, status) => {
     const updatedHosted = hosted.map((event) => {
       if (event.id === eventId) {
         return {
           ...event,
           attendees: event.attendees.map((attendee) =>
             attendee.email === attendeeEmail
               ? { ...attendee, status }
               : attendee
           ),
         };
       }
       return event;
     });
     setHosted(updatedHosted);
   };

   return (
     <div className="my-events-container">
       <h1>My Events</h1>
       <main className="main-container">
         <RegisteredEvents events={events} deleteEvent={deleteEvent} />
         <HostedEvents
           hosted={hosted}
           updateAttendeeStatus={updateAttendeeStatus}
         />
       </main>
     </div>
   );
};
export default MyEvents;
