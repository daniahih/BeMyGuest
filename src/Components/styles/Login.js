// Existing styled components...

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
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
    margin: -3rem, auto, 0;
  }
`;

export const Form = styled.form`
  background-color: #2c314f;
  padding: 50px;
  width: 500px; // Specify a fixed width for better centering
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
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
  z-index: 2px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #424769; // Added background color to input for better visibility
  color: white; // Change text color to black for readability
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: #f7b079; // Changed to orange
  border: none;
  color: #fff;
  text-align: center;
  font-size: 20px; // Reduced font size
  padding: 8px; // Reduced padding
  width: 150px; // Reduced width
  transition: all 0.5s;
  cursor: pointer;
  margin: 12px auto; // Centered the button using auto margins
  box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.7);
  display: inline-block;
  position: relative;

  &:hover {
    padding-right: 12px; // Adjusted padding on hover
    padding-left: 6px;
  }

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 8px; // Adjusted position for smaller button
    right: -10px; // Adjusted position for smaller button
    transition: 0.5s;
  }

  &:hover:after {
    opacity: 1;
    right: 5px; // Adjusted position for smaller button
  }
`;

export const ForgotPassword = styled.div`
  margin-top: 10px;
  color: #ffffff;
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  /* background-image: url("https://www.gingerray.co.uk/static/cms/media/Mobile-Banner%20-%20Pink%20Mix.jpg"); */
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
  height: 486px; // Adjust height as needed
  z-index: 3px;
  background-image: url("https://media.glamour.com/photos/60e34243d76bf51021a1f289/master/w_1920,c_limit/01-summer-party-ideas-getty.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  /* margin-bottom: 20px; */
`;
