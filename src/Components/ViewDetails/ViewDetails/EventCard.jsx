import React, { useState } from "react";
import "./styles.css"; // Your main CSS file for styling

import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Modal } from "@mui/material";

const EventCard = ({ event, onClose }) => {
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    setModalInfo({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  return (
    <div className="event-card">
      <button className="button button-close" onClick={onClose}>
        &times; Close
      </button>
      <div className="flex flex-col items-center">
        <img
          src={event.image}
          alt={event.title}
          style={event.eventImgStyle} // Add image styling if needed
        />
        <div className="event-details">
          <p>
            <MdDateRange /> {event.date}
          </p>
          <p>
            <FaLocationDot /> {event.location}
          </p>
          <p>
            <IoIosTime /> {event.time}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-description">{event.description}</p>

        <div className="button-container">
          <button
            className="button button-blue"
            onClick={() =>
              openModal(
                "What Should I Wear for This Event?",
                "Appropriate clothing suggestions go here."
              )
            }
          >
            What Should I Wear for This Event?
          </button>
          <button
            className="button button-green"
            onClick={() =>
              openModal(
                "What is the Best Gift for This Event?",
                "Gift suggestions go here."
              )
            }
          >
            What is the Best Gift for This Event?
          </button>
          <button className="button button-join">Join Event</button>
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

export default EventCard;
