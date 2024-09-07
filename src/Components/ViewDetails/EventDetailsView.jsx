import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase_setup/firebase";
import { collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore querying methods
import "./styles.css";

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-body">{content}</p>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const EventDetailsView = () => {
  const { id } = useParams(); // Get the event ID from the URL (e.g., '13')
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventsRef = collection(db, "BeMyGuest-RealData"); // Replace with your collection name
        const q = query(eventsRef, where("id", "==", Number(id))); // Query by the 'id' field in Firestore
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setEvent(doc.data()); // Set the event data
          });
        } else {
          setError("No such event!");
          console.error("No such event with ID:", id);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const openModal = (title, content) => {
    setModalInfo({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!event) return <div>No event data available.</div>;

  return (
    <div className="event-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &lt; Back to Events
      </button>
      <div className="event-details">
        <h1>{event.eventTitleEn || "No title available"}</h1>
        <img
          src={event.eventImage || "/default-image.png"}
          alt={event.eventTitleEn || "Event Image"}
          style={event.eventImgStyle || {}}
        />
        <p>
          <strong>Date:</strong> {event.eventDate || "Date not available"}
        </p>
        <p>
          <strong>Location:</strong>{" "}
          {event.eventPlaceEn || "Location not available"}
        </p>
        <p>
          <strong>Time:</strong> {event.eventHour || "Time not available"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {event.eventDescriptionEn || "Description not available"}
        </p>

        <div className="event-details-actions">
          <button
            className="button button-blue"
            onClick={() =>
              openModal(
                "What Should I Bring to This Event?",
                event.eventWhatToBringEn || "No information available"
              )
            }
          >
            What Should I Bring to This Event?
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        content={modalInfo.content}
      />
    </div>
  );
};

export default EventDetailsView;
