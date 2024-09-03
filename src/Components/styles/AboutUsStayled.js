import styled, { createGlobalStyle } from "styled-components";

// Global Styles
export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Nunito, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

// Styled Components
export const ResponsiveContainerBlock = styled.div`
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;

  &.bigContainer {
    padding: 10px 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.Container {
    margin: 80px auto 50px;
    /* justify-content: center; */
    align-items: center;
    max-width: 1320px;
    padding: 10px;
  }

  &.Container.bottomContainer {
    flex-direction: row-reverse;
    position: static;
    padding-top: 110px;
  }
`;

export const UltimateImg = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -70px;
  }
`;

export const PurpleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 430px;
  background-color: rgb(176, 98, 255);
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: -35px;
  left: -8%;

  @media (max-width: 1024px) {
    bottom: 10%;
    left: -10%;
    top: 70%;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 0;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    position: static;
  }
`;

export const PurpleText = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Stars = styled.img`
  width: 40%;

  @media (max-width: 500px) {
    width: 55%;
  }
`;

export const AllText = styled.div`
  padding: 0;
  width: 40%;
  margin-top: 0;

  &.aboveText {
    margin-left: 40px;

    @media (max-width: 768px) {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &.bottomText {
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 15px;

    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
      align-items: flex-start;
    }

    @media (max-width: 500px) {
      margin-top: 75px;
      padding: 0;
    }
  }

  @media (max-width: 1024px) {
    width: 40%;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const HeadingText = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(176, 98, 255);
  margin-bottom: 5px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SubHeadingText = styled.p`
  font-size: 26px;
  line-height: 32px;
  font-weight: 700;
  color: rgb(102, 102, 102);
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: rgb(102, 102, 102);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

export const ExploreLink = styled.a`
  font-size: 16px;
  line-height: 28px;
  color: rgb(102, 102, 102);
  border: 2px solid rgb(102, 102, 102);
  cursor: pointer;
  background-color: white;
  padding: 8px 40px;
  text-align: center;

  &:hover {
    background-color: rgb(176, 98, 255);
    color: white;
    border: none;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    padding: 6px 35px;
  }
`;
