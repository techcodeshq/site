import React from "react";
import { Container, NormalText } from "@styles";
import { SectionWrapper, GridWrapper, LeftCol, RightCol, LargeTitle, Subtitle } from "./style";

const Hero = ({ data }) => {
  return (
    <SectionWrapper>
      <Container>
        <GridWrapper>
          <LeftCol></LeftCol>
          <RightCol>
            <LargeTitle>Addressing equity and equality issues in STEM at the source.</LargeTitle>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Subtitle>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </RightCol>
        </GridWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;
