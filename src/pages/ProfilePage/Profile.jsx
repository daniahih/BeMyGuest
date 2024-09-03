import { useState, useEffect } from "react";
import { auth, db } from "../../firebase_setup/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
            const userData = userDoc.data();
            setUser({
              email: currentUser.email,
              name: `${userData.firstName || "Anonymous"} ${
                userData.lastName || ""
              }`.trim(),
              createdAt: userData.createdAt
                ? userData.createdAt.toDate().toLocaleDateString()
                : "Not Available",
            });
          } else {
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
        navigate("/loginPage");
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

  const createUserDocument = async (user) => {
    if (!user) return;

    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      name: user.name || "Anonymous",
      email: user.email,
      createdAt: new Date(), // Alternatively, use Firebase's server timestamp
    });
  };

  // Call this function after the user signs up or logs in
  createUserDocument(auth.currentUser);

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
        {/* <InfoGroup>
          <Label>Joined on:</Label>
          <Value>{user?.createdAt || "N/A"}</Value>
        </InfoGroup> */}
        <Button onClick={handleLogout}>Logout</Button>
      </ProfileContainer>
    </Container>
  );
}

export default Profile;
