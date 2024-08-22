import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const AppContainer = styled.div`
  min-width: 100%;
  height: 89.5vh;
  overflow: scroll;
  //border: solid 2px red;
  display: flex,
    flexDirection: column,
`

export const GlobalStyle = styled.div`
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
`
export const HeroSection = styled.section`
 min-width: 100%;
  height: 89.5vh;
  //border: solid 2px Orange;
  padding:6rem 0;
  margin:0 auto;
   background-image: url('/public/heroSectionImg/BBQ-Cheers-opacity2.png');
   background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
 
  h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 3rem;
     font-weight:500;
    text-align: center;
    margin-bottom:2rem;
    color:white;
    text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
     // text-shadow: 2px 2px 5px rgba(255, 255, 255, 1);
  }
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 5rem;
     font-weight:500;
      text-align: center;
      color:white;
     text-shadow: 3px 5px 8px rgba(1, 5, 1, 67);
    //  text-shadow: 2px 2px 3px rgba(255, 255, 255, 1);
    
`
export const StyledSwiper = styled(Swiper)`
  width: 50%;
  height: 45%;
  //border: solid 2px white;
  border: solid 2px white;
  top: 8rem;
  margin: 2rem auto;
`
export const HeroSectionEventCard = styled.div`
  width: 40%;
  height: 30vh;

  border: solid 2px grey;
  top: 8rem;
  margin: 2rem auto;
`

export const SwiperSlideContainer = styled.div`
  background-position: center;
  background-size: cover;
  width: 40vw;
  height: 30vh;
  margin: 2rem auto;

  img {
    display: block;
    width: 10vw;
    height: 20vh;
  }
`
export const MidSection = styled.section`
  width: 100%;
  height: 25vh;

  // padding: 2rem 0;
  margin: 0 auto;
  h4 {
    height: 24vh;
    padding-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    text-align: center;
    border: 2px solid black;

    border-right-color: transparent;
    border-left-color: transparent;
  }
`
export const ThirdSection = styled.section`
  width: 100%;
  height: 25vh;

  padding: 1rem 0;
  margin: 0 auto;

  font-size: 1.5rem;
  text-align: center;
  // border: 2px solid green;

  border-right-color: transparent;
  border-left-color: transparent;
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 4rem;
    text-align: center;
  }
  h6 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }
`
export const HeroSectionEventCardContainer = styled.section`
  width: 100%;
  height: 180vh;
  //border: solid 2px pink;
  padding: 2rem 0;
  margin: 2rem auto;
`
export const Button = styled.section`
  width: 8vw;
  height: 4vh;
  border-radius: 1rem;
  border: solid 2px grey;
  padding-top: 0.4rem;
  margin: 100rem auto 0;
  font-size: 1rem;
  text-align: center;
`
