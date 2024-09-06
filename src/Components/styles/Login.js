import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    flex-direction: column;
    font-size: 3rem;
    font-weight: 400;
    color: white;
    text-align: center;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
    margin: -3rem auto 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
      margin-top: -1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
      margin-top: -1rem;
    }
  }
`;

export const Form = styled.form`
  background-color: #2c314f;
  padding: 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FormGroup = styled.div`
  margin: 10px 0;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #424769;
  color: white;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: #f7b079;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 20px;
  padding: 8px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 12px auto;
  box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.7);
  display: inline-block;
  position: relative;

  &:hover {
    padding-right: 12px;
    padding-left: 6px;
  }

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 8px;
    right: -10px;
    transition: 0.5s;
  }

  &:hover:after {
    opacity: 1;
    right: 5px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px;
    width: 120px;
  }
`;

export const ForgotPassword = styled.div`
  margin-top: 10px;
  color: #ffffff;
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #182644;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const RegisterLink = styled.a`
  color: #ffcc00;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 486px;
  z-index: 3;
  background-image: url("/public/Login-pic/login-pic.png");
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 40%;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: 400px;
  }
`;
