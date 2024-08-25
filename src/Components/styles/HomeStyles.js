import styled, { createGlobalStyle } from "styled-components";
import { Swiper } from "swiper/react";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

// export const HeroSection = styled.section`
//   // text-align: center;
//   // padding: 20px;
//   // width: 100%;
//   // max-width: 1200px;
//   // margin: 0 auto;
//   // background-image: url("https://www.moroccoworldnews.com/wp-content/uploads/2024/04/dutch-muslims-to-celebrate-eid-al-fitr-on-april-10-800x450.jpeg"); /* Replace with your image URL */
//   // background-size: cover;
//   // background-position: center;
//   // position: relative;
//   // height: 500px; /* Adjust this as needed */
//   // display: flex;
//   // flex-direction: column;
//   // justify-content: center;
//   // align-items: center;
//   // color: white; /* Adjust text color to contrast with the background */
//   background-image: url("/public/heroSectionImg/BBQ-Cheers-opacity2.png");
//   background-size: 100% 100%;
//   background-position: center;
//   background-repeat: no-repeat;
// `;
export const HeroSection = styled.section`
  min-width: 100%;
  height: 89.5vh;
  padding: 6rem 0;
  margin: 0 auto;
  background-image: url("/public/heroSectionImg/BBQ-Cheers-opacity2.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
  }
  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    color: white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
  }
`;
export const MidSection = styled.section`
  text-align: center;
  padding: 20px;
  width: 100%;
`;

export const ThirdSection = styled.section`
  text-align: center;
  padding: 20px;
  width: 100%;
`;

export const HeroSectionEventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1000px; /* Set max width for the Swiper */
  height: 300px; /* Adjust the height as needed */
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  .swiper-pagination-bullet {
    background: #000;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;
