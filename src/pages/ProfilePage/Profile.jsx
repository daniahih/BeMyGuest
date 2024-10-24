import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase_setup/firebase";
import { doc, getDoc, collection, query, where, getDocs, updateDoc, arrayRemove } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  ProfileContainer,
  Title,
  InfoGroup,
  Label,
  Value,
  Button,
  EventsContainer,
  EventItem,
  EventTitle,
  EventActions,
  NoEventsMessage
} from "../../Components/styles/Profile";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [eventsMap, setEventsMap] = useState(new Map());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              email: currentUser.email,
              name: `${userData.firstName || "Anonymous"} ${userData.lastName || ""}`.trim(),
              createdAt: userData.createdAt ? userData.createdAt.toDate().toLocaleDateString() : "Not Available",
            });
            const events = userData.joinedEvents || [];
            setJoinedEvents(events);
            console.log("Fetched Event IDs:", events); // Log event IDs
            fetchEventsDetails(events);
          } else {
            toast.error("User data not found.", { position: "bottom-center" });
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to load user data. Please try again later.");
          toast.error("Failed to load user data.", { position: "bottom-center" });
        }
      } else {
        toast.error("No user logged in.", { position: "bottom-center" });
        navigate("/loginPage");
      }
      setLoading(false);
    };

    const fetchEventsDetails = async (eventIds,) => {
      if (eventIds.length === 0) {
        console.log("No event IDs provided.");
        setEventsMap(new Map()); // Clear map if no event IDs
        return;
      }

      const eventsRef = collection(db, "BeMyGuest-RealData");
      const q = query(eventsRef, where("id", "in", eventIds));
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log("No matching documents.");
          setEventsMap(new Map()); // Clear map if no documents found
          return;
        }

        const events = new Map();
        querySnapshot.forEach((doc) => {
          events.set(doc.id, doc.data());
        });
        console.log("Events Map:", events); // Log the map to check contents
        setEventsMap(events);
      } catch (err) {
        console.error("Error fetching event details:", err);
        toast.error("Failed to load event details.", { position: "bottom-center" });
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully", { position: "top-center" });
      navigate("/loginPage");
    } catch (err) {
      console.error("Error during logout:", err);
      toast.error("Failed to log out. Please try again.", { position: "top-center" });
    }
  };

  const handleViewDetails = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  const handleRemoveEvent = async (eventId) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userDocRef, {
          joinedEvents: arrayRemove(eventId),
        });
        setJoinedEvents(prevEvents => prevEvents.filter(event => event !== eventId));
        setEventsMap(prevEventsMap => {
          const updatedMap = new Map(prevEventsMap);
          updatedMap.delete(eventId);
          return updatedMap;
        });
        toast.success("Event removed from your list.");
      } catch (err) {
        console.error("Error removing event:", err.message);
        toast.error("Failed to remove event.");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <ProfileContainer>
        <Title>Account Details</Title>
        <InfoGroup>
          <Label>Email:</Label>
          <Value>{user?.email || "N/A"}</Value>
        </InfoGroup>
        <InfoGroup>
          <Label>Name:</Label>
          <Value>{user?.name || "N/A"}</Value>
        </InfoGroup>
        <InfoGroup>
          <Label>Joined on:</Label>
          <Value>{user?.createdAt || "N/A"}</Value>
        </InfoGroup>
        <Button onClick={handleLogout}>Logout</Button>
      </ProfileContainer>

      <EventsContainer>
        <Title>Joined Events</Title>
        {joinedEvents.length > 0 ? (
          <ul>
            {joinedEvents.map(eventId => {
              const event = eventsMap.get(eventId);
              console.log("Rendering Event:", eventId, event); // Log each event being rendered
              return (
                <EventItem key={eventId}>
                  <EventTitle>{eventId + " : " + EventTitle}</EventTitle> {/* Ensure 'title' is the correct property */}
                  <EventActions>
                    <button className="btn btn-primary" onClick={() => handleViewDetails(eventId)}>More Details</button>
                    <button className="btn btn-danger" onClick={() => handleRemoveEvent(eventId)}>Remove</button>
                  </EventActions>
                </EventItem>
              );
            })}
          </ul>
        ) : (
          <NoEventsMessage>No events joined yet.</NoEventsMessage>
        )}
      </EventsContainer>
    </Container>
  );
}

export default Profile;
