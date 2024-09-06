import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp");
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(132, 250, 176, 0.5),
      rgba(143, 211, 244, 0.5)
    );
  }
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: rgba(51, 51, 51, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

// export const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
//   color: white;
// `;

// export const Checkbox = styled.input`
//   margin-right: 0.5rem;
// `;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: linear-gradient(to right, #84fab0, #8fd3f4);
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 1rem;
`;

export const Link = styled.a`
  color: #84fab0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
