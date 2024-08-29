


import { useEffect, useState } from "react";
import { auth, db } from "../../firebase_setup/firebase";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";
// import { toast } from "react-toastify";

// Styled-components

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 40%;
  border-radius: 50%;
`;

const WelcomeMessage = styled.h3`
  margin: 20px 0;
  font-size: 1.5em;
  color: #333;
`;

const InfoContainer = styled.div`
  margin: 10px 0;
`;

const InfoText = styled.p`
  font-size: 1em;
  color: #555;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <Container>
      {userDetails ? (
        <>
          <ProfileImageContainer>
            <ProfileImage
              src={userDetails.photo}
              alt="User Profile"
            />
          </ProfileImageContainer>
          <WelcomeMessage>Welcome {userDetails.firstName} 🙏🙏</WelcomeMessage>
          <InfoContainer>
            <InfoText>Email: {userDetails.email}</InfoText>
            <InfoText>First Name: {userDetails.firstName}</InfoText>
            {/* <InfoText>Last Name: {userDetails.lastName}</InfoText> */}
          </InfoContainer>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Profile;

