import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase_setup/firebase'; // Import your firebase config
import { collection, getDocs } from 'firebase/firestore';
import './styles.css'; // Add your own styling

const EventListView = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsList);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/event/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="summary-view-container">
      <div className="event-summary-list">
        {events.map((event) => (
          <div key={event.id} className="event-summary-item">
            <h3>{event.eventTitleEn}</h3>
            <button
              className="btn btn-view-details"
              onClick={() => handleViewDetails(event.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListView;
