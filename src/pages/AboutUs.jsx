
import {
  GlobalStyles,
  TextBlock,
  ResponsiveContainerBlock,
  SocialIcon,
  SocialIconsContainer,
  SocialIconWrapper,
} from "../Components/styles/AboutUsStayled";

const AboutUs = () => {
  return (
    <>
      <GlobalStyles>
        <ResponsiveContainerBlock className="bigContainer">
          <ResponsiveContainerBlock className="Container">
            <TextBlock className="heading">About Us</TextBlock>
            <TextBlock className="subHeading">
              Arab culture stems from the Arabian Peninsula and Islam, while
              Jewish culture has ancient roots in Israel and Judaism.
            </TextBlock>
            <SocialIconsContainer>
              <SocialIconWrapper href="#">
                <SocialIcon
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
                  alt="Social Icon 1"
                />
              </SocialIconWrapper>
              <SocialIconWrapper href="#">
                <SocialIcon
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
                  alt="Social Icon 2"
                />
              </SocialIconWrapper>
              <SocialIconWrapper href="#">
                <SocialIcon
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
                  alt="Social Icon 3"
                />
              </SocialIconWrapper>
              <SocialIconWrapper href="#">
                <SocialIcon
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
                  alt="Social Icon 4"
                />
              </SocialIconWrapper>
            </SocialIconsContainer>
          </ResponsiveContainerBlock>
        </ResponsiveContainerBlock>
      </GlobalStyles>
    </>
  );
};

export default AboutUs;
