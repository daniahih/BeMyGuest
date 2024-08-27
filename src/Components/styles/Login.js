import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

export const Form = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;

  &:focus {
    border-color: #7f56d9;
    outline: none;
    box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 15px;
  background-color: #7f56d9;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6843b4;
  }
`;

export const ForgotPassword = styled.p`
  margin-top: 15px;
  color: #555;

  a {
    color: #7f56d9;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #6843b4;
    }
  }
`;
