import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../firebase_setup/firebase"; // Ensure db is imported from your firebase setup
import { setDoc, doc } from "firebase/firestore"; // Import Firestore methods
import { toast } from "react-toastify";
import {
  Section,
  FormCard,
  Title,
  Input,
  Button,
  Text,
  Link,
} from "../../Components/styles/Register"; // Import styled-components
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore
      await saveUserData(user, firstName, lastName);

      toast.success("User registered successfully!!", {
        position: "top-center",
      });
      console.log("User registered successfully");
      navigate("/loginPage"); // Navigate to the login page after registration
    } catch (error) {
      console.log(error.message);
      console.log("User registration failed");
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const saveUserData = async (user, firstName, lastName) => {
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      firstName: firstName || "Anonymous",
      lastName: lastName || "",
      email: user.email,
      createdAt: new Date(), // Store the creation time
    });
  };

  return (
    <Section>
      <FormCard>
        <Title>Sign Up</Title>
        <form onSubmit={handleRegister}>
          <div>
            {/* <Label>First name</Label> */}
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            {/* <Label>Last name</Label> */}
            <Input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            {/* <Label>Email address</Label> */}
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            {/* <Label>Password</Label> */}
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit">Sign Up</Button>
        </form>
        <Text>
          Already registered? <Link href="/loginPage">Login</Link>
        </Text>
      </FormCard>
    </Section>
  );
}

export default Register;
