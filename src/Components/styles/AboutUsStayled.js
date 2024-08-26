import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    font-family: Nunito, sans-serif;
  }
`;

export const TextBlock = styled.p`
  margin: 0;
  padding: 0;
  line-height: 25px;

  &.heading {
    font-size: 36px;
    line-height: 45px;
    font-weight: 800;
    margin-bottom: 30px;
    color: #f7c50f;
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.4);
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 20px;
    }

    @media (max-width: 500px) {
      font-size: 26px;
      line-height: 30px;
    }
  }

  &.subHeading {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 30px;
    }
  }
`;

export const ResponsiveContainerBlock = styled.div`
  min-height: 75px;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;

  &.bigContainer {
    padding: 30px 30px;
    background-image: url("https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb29.png");
    background-size: cover;
    background-size: fullscreen;
    background-repeat: no-repeat;

    @media (max-width: 500px) {
      padding: 10px 20px;
    }
  }

  &.Container {
    max-width: 800px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 120px;
    margin: 150px auto;
    background-color: white;
    border-radius: 15px;
    background-color: #e9eaec;
    height: 50vh;
  }
`;

export const SocialIcon = styled.img`
  width: 33px;
  height: 33px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialIconWrapper = styled.a`
  margin: 0 50px;
  color: blue;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 0 25px;
  }

  @media (max-width: 500px) {
    margin: 0 20px;
  }
`;
