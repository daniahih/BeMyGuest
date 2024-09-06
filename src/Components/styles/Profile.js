import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh; /* Use min-height for better responsiveness */
  background-color: #9de2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* Adding padding for smaller devices */
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px; /* Keep the max width */
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 1rem; /* Add margin for better spacing */

  @media (max-width: 600px) {
    padding: 1rem; /* Reduce padding for small devices */
  }
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column; /* Stack items vertically on small screens */
  color: black;

  @media (min-width: 601px) {
    flex-direction: row; /* Horizontal layout for larger screens */
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* Use percentage to allow for fluid width */
  max-width: 180px; /* Ensure the maximum width */
  height: 180px; /* Fixed height */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto; /* Center the image on smaller devices */

  &:hover .hover-overlay {
    opacity: 1;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container while maintaining aspect ratio */
  border-radius: 10px;
`;

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  color: white;
  font-size: 1rem;
`;

export const FileInput = styled.input`
  display: none;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  margin-left: 1rem;

  @media (max-width: 600px) {
    margin-left: 0; /* Remove margin on small devices */
    margin-top: 1rem; /* Add margin on top for spacing */
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.3rem; /* Adjust title size for smaller screens */
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 0.9rem; /* Adjust text size for smaller screens */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack buttons vertically on smaller screens */
  gap: 10px;

  @media (min-width: 601px) {
    flex-direction: row; /* Horizontal layout for larger screens */
  }
`;

export const Button = styled.button`
  flex-grow: 1;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.outline ? "transparent" : "#007bff")};
  color: ${(props) => (props.outline ? "#007bff" : "white")};
  border: ${(props) => (props.outline ? "2px solid #007bff" : "none")};

  @media (max-width: 600px) {
    padding: 8px; /* Adjust padding for smaller devices */
  }
`;
