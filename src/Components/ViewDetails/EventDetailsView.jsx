import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase_setup/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./styles.css";
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-body">{content}</p>
        <button className="modal-close" onClick={onClose}>
          &times; Close
        </button>
      </div>
    </div>
  );
};

const EventDetailsView = () => {
  const { id } = useParams();
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
        const eventsRef = collection(db, "BeMyGuest-RealData");
        const q = query(eventsRef, where("id", "==", Number(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setEvent(doc.data());
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
      <div className="event-card-content">
        <h1 className="event-title">{event.eventTitleEn || "No title available"}</h1>
    <div className="image-description">
        <img className="event-image"
          src={event.eventImage || "/default-image.png"}
          alt={event.eventTitleEn || "Event Image"}
          style={event.eventImgStyle || {}}
        />
        <div className="event-description-block">
          <p>
            <strong>Description: </strong>
            {event.eventDescriptionEn || "Description not available"}
          </p>
        </div>
   </div>

    <div className="newone">
        <div className="event-info-block">
          <p>
            <strong><MdDateRange className="icon" />Date: </strong> {event.eventDate || "Date not available"}
          </p>
          <p>
            <strong><FaLocationDot className="icon" />Location: </strong> {event.eventPlaceEn || "Location not available"}
          </p>
          <p>
            <strong><IoIosTime className="icon" />Time: </strong> {event.eventHour || "Time not available"}
          </p>
        </div>

       

        <div className="event-details-actions">
          <button
            className="btn btn-primary"
            onClick={() =>
              openModal(
                "What Should I Wear for This Event?",
                event.eventGiftEn 
              )
            }
          >
            What Should I Wear for This Event?
          </button>
          <button
            className="btn btn-success"
            onClick={() =>
              openModal(
                "What is the Best Gift for This Event?",
                event.eventClothesEn
              )
            }
          >
            What is the Best Gift for This Event?
          </button>
          <button className="btn btn-highlight">Join Event</button>
        </div>
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
