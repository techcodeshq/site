import React from "react";
import { Container, Label, NormalText } from "@styles";
import { UnderlineLink } from "@components";
import { AboutSection, GridContainer, LeftCol, RightCol, AboutText, LinksWrapper } from "./style";
import ReactMarkdown from "react-markdown";

const About = ({ data }) => {
  return (
    <AboutSection>
      <Container>
        <GridContainer>
          <LeftCol>
            <Label>The Rundown</Label>
          </LeftCol>
          <RightCol>
            <AboutText>
              We believe in <span className="orange">diversifying</span> computer science education
              through unique opportunities
            </AboutText>
            <ReactMarkdown components={{ p: NormalText }}>{data.about_description}</ReactMarkdown>
            <LinksWrapper>
              <UnderlineLink to="/initiatives">Our initiatives</UnderlineLink>
              <UnderlineLink to="/about">More about us</UnderlineLink>
              <UnderlineLink to="/contact">Get in contact</UnderlineLink>
            </LinksWrapper>
          </RightCol>
        </GridContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
