import { useState, useEffect } from "react";
import { auth, db } from "../../firebase_setup/firebase";
import { doc, getDoc } from "firebase/firestore";
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
} from "../../Components/styles/Profile";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUser({
              email: currentUser.email,
              name: userDoc.data().name || "Anonymous",
              createdAt: userDoc.data().createdAt || "Not Available",
            });
          } else {
            // setError("User data not found.");
            toast.error("User data not found.", {
              position: "bottom-center",
            });
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to load user data. Please try again later.");
          toast.error("Failed to load user data.", {
            position: "bottom-center",
          });
        }
      } else {
        toast.error("No user logged in.", {
          position: "bottom-center",
        });
        navigate("/Profile");
      }

      setLoading(false);
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully", {
        position: "top-center",
      });
      navigate("/loginPage");
    } catch (err) {
      console.error("Error during logout:", err);
      toast.error("Failed to log out. Please try again.", {
        position: "top-center",
      });
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
    </Container>
  );
}

export default Profile;