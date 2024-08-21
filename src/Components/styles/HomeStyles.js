import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const AppContainer = styled.div`
  min-width: 100%;
  height: 89.5vh;
  overflow: scroll;
  border: solid 2px red;
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
  width: 50vw;
  height: 25vh;
  border: solid 2px Orange;
  padding:2rem 0;
  margin:2rem auto;
   background-image: url('/public/heroSectionImg/BBQ\ Cheers.jpg');

 
  h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 2rem;
    text-align: center;
  }
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 4rem;
      text-align: center;
    
`
export const StyledSwiper = styled(Swiper)`
  width: 50%;
  height: 25%;
  border: solid 2px yellow;
  top: 5rem;
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

  padding: 2rem 0;
  margin: 35rem auto 0;
  h4 {
    height: 25vh;
    padding-top: 3.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    text-align: center;
    border: 2px solid black;

    border-right-color: transparent;
    border-left-color: transparent;
  }
`
export const ThirdSection = styled.section`
  width: 100%;
  height: 25vh;

  padding: 3rem 0;
  margin: 0 auto;

  font-size: 1.5rem;
  text-align: center;
  border: 2px solid green;

  border-right-color: transparent;
  border-left-color: transparent;
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 4rem;
    text-align: center;
  }
  h6 {
  }
`
export const Button = styled.section`
  width: 5vw;
  height: 2vh;
  border: solid 2px blue;
  padding: 2rem 0;
  margin: 2rem auto;
`
export const HeroSectionEventCardContainer = styled.section`
  width: 50vw;
  height: 25vh;
  border: solid 2px pink;
  padding: 2rem 0;
  margin: 2rem auto;
`
