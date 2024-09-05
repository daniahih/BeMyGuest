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
              src="https://img.freepik.com/free-photo/people-celebrating-ramadan-together_23-2151404378.jpg?t=st=1725366607~exp=1725370207~hmac=d49bd3b0c0c04cc58c1a323f153b304843987fa5459ac85f30baa8ebdaeb1618&w=1380"
              alt="Main Image"
            />
            <PurpleBox>
              <PurpleText>
                Both cultures place a high value on hospitality, family, and
                education. Whether its the Jewish tradition of welcoming guests
                with open arms or the Arab custom of offering food and drink to
                visitors
              </PurpleText>
              <Stars
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
                alt="Stars"
              />
            </PurpleBox>
          </UltimateImg>
          <AllText className="bottomText">
            <HeadingText>About Us</HeadingText>
            <SubHeadingText>
              Information about Arab and Jewish culture
            </SubHeadingText>
            <Description>
              Our community is enriched by the vibrant and diverse cultures of
              both Jewish and Arab traditions. These two cultures, while
              distinct, share deep roots in the Middle East and have contributed
              significantly to the tapestry of our shared history.
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
