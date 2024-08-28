import styled, { createGlobalStyle } from 'styled-components'
import { Swiper } from 'swiper/react'
import { breakpoints } from '../../../src/Responsive/breakpoints'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const HeroSection = styled.section`
  min-width: 100%;
  height: 105vh;
  padding: 8rem 0;
  margin: 0 auto;

  background-image: url('/public/heroSectionImg/BBQ-Cheers-opacity2.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin-top: 3rem;
    color: white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
    margin-bottom: 4rem;
  }
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 6rem;
    font-weight: 500;
    text-align: center;
    color: white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.laptop}) {
    height: 100%; /* Adjusted height for laptops */

    h2 {
      font-size: 2.5rem;
    }
    h1 {
      font-size: 5rem;
    }
  }
`
export const MidSection = styled.section`
  text-align: center;
  padding: 20px;
  width: 100%;

  height: 25vh;
  margin: 0 auto;
  background-color: #ffff;

  h4 {
    color: rgba(1, 5, 1, 67);
    height: 24vh;
    padding-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    border: 2px solid black;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top: transparent;

    // text-shadow: 2px 2px 4px rgba(1, 5, 1, 67);
  }
`

export const ThirdSection = styled.section`
  text-align: center;
  padding: 20px;
  width: 100%;
  //height: auto; /* Changed from fixed height */
  min-height: 25vh;
  background-color: #e2e1e1;
  padding: 1rem 0;
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: center;
  // border: 2px solid black;
  border-right-color: transparent;
  border-left-color: transparent;

  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    color: white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
  }

  h6 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }
`

export const HeroSectionEventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`

///////////////////////////////////////////////

export const SlideContent = styled.div`
  display: flex;
  background-color: #ffff;

  align-items: center;
`

export const TextContent = styled.div`
  width: 60%; /* Adjust as needed */
`

export const ImageContent = styled.div`
  width: 35%; /* Adjust as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EventDetails = styled.div`
  display: flex;
  gap: 2rem;

  font-size: 14px;
  font-weight: 800;
  margin-left: 10rem;
  margin-bottom: 3rem;
  margin-top: -2.5rem;
  span {
    img {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5rem;
  margin-left: 7rem;
  margin-top: 1rem;
`

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; /* Optional for rounded corners */
`

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.3s ease-in-out;
  &.primary {
    background-color: #7b3f00; /* Example color */
    color: white;
    font-weight: 700;
  }
  &.secondary {
    background-color: #d3d3d3; /* Example color */
    color: black;
  }
  &.third {
    color: black;
    background-color: #d3d3d3;
    font-weight: 800;
    height: 5vh;
  }

  &:hover {
    transform: scale(1.2);
  }
`
////////////////////////////////////////////
export const StyledSwiper = styled(Swiper)`
  margin-top: 3.5rem;
  background-color: white;
  width: 100%;
  max-width: 70rem;
  height: 24rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 0 0 4rem 0;

  .swiper-slide {
    opacity: 0;
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    position: relative;

    transform: scale(0.9); /* Optional: adds a slight scale down effect */
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .swiper-slide-active {
    opacity: 1;
    z-index: 2;

    transform: scale(1); /* Return to normal scale */
  }

  .swiper-pagination-bullet {
    background: #000;
    height: 0.8rem;
    width: 0.8rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 2px solid #fff;
    margin-top: -2.7rem;
    height: 8vh;
    width: 4vw;
    border-radius: 100px;
    background-color: #fff;
    color: #000;
  }

  img {
    width: 100%;
    height: 25vh;
    margin-right: 6rem;
    margin-top: 3.5rem;
    object-fit: cover;
  }

  span {
    margin-top: -3rem;
  }

  h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
    color: black;
    text-shadow: 3px 5px 5px rgba(225, 225, 225, 1);
  }

  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5rem;
    font-weight: 800;
    text-align: center;
    color: black;
  }

  h3 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    margin-top: 2rem;
    color: black;
    text-shadow: 3px 5px 8px rgba(225, 225, 225, 1);
     
  //   @media (max-width: ${breakpoints.desktop}) {
  //   height: 100%; /* Adjusted height for laptops */
   
  //   width: 100%;
  // }
  // @media (max-width: ${breakpoints.laptop}) {
  //   height: 30rem; /* Adjusted height for laptops */
   
  //   width: 100%;
  // }

  // @media (max-width: ${breakpoints.tablet}) {
  //   height: 20rem; /* Adjust height for tablets */
  //   width: 80%; /* Adjust width for tablets */
  // }

  // @media (max-width: ${breakpoints.mobile}) {
  //   height: 15rem; /* Adjust height for mobile devices */
  //   width: 90%; /* Adjust width for mobile devices */
  // }
`

export const UpcomingEvent = styled.div`
  // height: auto; /* Ensures the height adjusts to content */
  // padding: 1rem;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  background-color: white;
  width: 100%;
  height: 250px; /* Set a fixed height for all cards */
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 60%;
  padding-right: 1rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 1rem;
    color: #555;
    display: flex;
    align-items: center;

    img {
      margin-right: 0.5rem;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
  .event-description {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #777;
    line-height: 1.4;
    height: 4rem; /* Adjust height as needed */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .view-details-button {
    position: absolute;
    margin-left: 26rem;
    margin-top: -2rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    background-color: #7b3f00; /* Example color */
    width: 120px;
    height: auto;
    text-align: center;
  }

  .view-details-button:hover {
    background-color: #5a2e00;
  }
`

export const EventImage = styled.div`
  width: 35%;
  img {
    width: 100%;
    height: 100%; /* Ensure image fills the height */
    object-fit: cover; /* Maintains aspect ratio */
    border-radius: 8px;
  }
`

export const UpcomingEventsContainers = styled.div`
  display: flex;
  flex-direction: column; /* Ensures that the events are stacked vertically */
  gap: 2rem; /* Adds space between the events */
  width: 100%;
  max-width: 62.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the cards horizontally */
  justify-content: center; /* Centers the cards vertically (if necessary) */
  width: 100%;
  max-width: 62.5rem;
  padding: 1rem;
  gap: 2rem; /* Adds space between the cards */
  margin: 0 auto;
`
