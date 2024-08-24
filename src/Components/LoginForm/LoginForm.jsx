import { signInWithEmailAndPassword } from "firebase/auth";
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
} from "../../Components/styles/Login";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <FormGroup>
          <Label>Email address</Label>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Submit</Button>
        </FormGroup>
        <ForgotPassword>
          New user? <a href="/register">Register Here</a>
        </ForgotPassword>
      </Form>
    </Container>
  );
}

export default LoginForm;
