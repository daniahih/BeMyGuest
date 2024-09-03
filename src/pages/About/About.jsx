
import {
  GlobalStyles,
  ResponsiveContainerBlock,
  UltimateImg,
  MainImg,
  PurpleBox,
  PurpleText,
  Stars,
  AllText,
  HeadingText,
  SubHeadingText,
  Description,
  ExploreLink,
} from "../../Components/styles/AboutUsStayled"; // Adjust the import path as necessary
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AboutMe = () => {
  return (
    <>
      <GlobalStyles />
      <ResponsiveContainerBlock className="bigContainer">
        <ResponsiveContainerBlock className="Container bottomContainer">
          <UltimateImg>
            <MainImg
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg"
              alt="Main Image"
            />
            <PurpleBox>
              <PurpleText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                purus lectus viverra in semper nec pretium mus.
              </PurpleText>
              <Stars
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
                alt="Stars"
              />
            </PurpleBox>
          </UltimateImg>
          <AllText className="bottomText">
            <HeadingText>About Me</HeadingText>
            <SubHeadingText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubHeadingText>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo
              in ullamcorper quis vestibulum ligula elementum ut.
            </Description>
            <ExploreLink as={Link} to="/all-events">
              View Events
            </ExploreLink>
          </AllText>
        </ResponsiveContainerBlock>
      </ResponsiveContainerBlock>
    </>
  );
};

export default AboutMe;
