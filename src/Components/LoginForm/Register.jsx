import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase_setup/firebase";

import { toast } from "react-toastify";
import {
  Container,
  Form,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  ForgotPassword,
} from "../../Components/styles/Register";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password, name);
      const user = auth.currentUser;
      console.log(user);

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

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Title>Sign Up</Title>

        <FormGroup>
          <Label>First name</Label>
          <Input
            type="text"
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Last name</Label>
          <Input type="text" placeholder="Last name" />
        </FormGroup>

        <FormGroup>
          <Label>Email address</Label>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Sign Up</Button>
        </FormGroup>
        <ForgotPassword>
          Already registered? <a href="/loginPage">Login</a>
        </ForgotPassword>
      </Form>
    </Container>
  );
}

export default Register;
