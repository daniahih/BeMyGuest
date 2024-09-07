import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase_setup/firebase";
import {
  Button,
  ButtonContainer,
  Card,
  CardBody,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  Container,
  FileInput,
  HoverOverlay,
  ImageContainer,
} from "../../Components/styles/Profile";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const generateDefaultProfileImage = () => {
    return `https://api.dicebear.com/9.x/bottts/png`;
  };

  const fetchUserData = async (currentUser) => {
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const profileImageFromDB = userData.profileImage || null;
          const defaultProfileImage = generateDefaultProfileImage(
            currentUser.uid
          );
          setProfileImage(profileImageFromDB || defaultProfileImage);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      fetchUserData(currentUser);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully", { position: "top-center" });
      navigate("/loginPage");
    } catch (err) {
      console.error("Error during logout:", err);
      toast.error("Failed to log out. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const desiredWidth = 180;
          const desiredHeight = 180;

          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);

          const resizedImage = canvas.toDataURL();
          setProfileImage(resizedImage);
        };
      };
      reader.readAsDataURL(file);
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
      <Card>
        <CardBody>
          <label>
            <ImageContainer>
              <CardImage src={profileImage} alt="Profile" />
              <HoverOverlay className="hover-overlay">
                <p>Change Picture</p>
              </HoverOverlay>
              <FileInput
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImageContainer>
          </label>
          <CardContent>
            <CardTitle>{user.name}</CardTitle>
            <CardText>{user.email}</CardText>
            <CardText>Member since: {user.createdAt}</CardText>

            <ButtonContainer>
              <Button outline onClick={handleLogout}>
                Logout
              </Button>
            </ButtonContainer>
          </CardContent>
        </CardBody>
      </Card>
    </Container>
  );
}
