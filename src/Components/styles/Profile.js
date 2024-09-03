import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #e2e8f0);
  padding: 20px;
`;

export const ProfileContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 450px;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

export const InfoGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Label = styled.span`
  font-weight: 600;
  color: #4a5568;
  font-size: 1rem;
`;

export const Value = styled.span`
  display: block;
  margin-top: 5px;
  color: #2d3748;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #007bff);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
