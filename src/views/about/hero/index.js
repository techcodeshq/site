import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, NormalText } from "@styles";
import {
  SectionWrapper,
  GridWrapper,
  LeftCol,
  RightCol,
  LargeTitle,
  Subtitle,
  ImageOne,
  ImageTwo,
} from "./style";
import ReactMarkdown from "react-markdown";

const Hero = ({ data }) => {
  return (
    <SectionWrapper>
      <Container>
        <GridWrapper>
          <LeftCol id="___stickwrap">
            <div
              data-scroll
              data-scroll-sticky
              data-scroll-target="#___stickwrap"
              style={{ paddingBottom: "10vw" }}>
              <ImageOne>
                <GatsbyImage
                  image={data.top_image_1.localFile.childImageSharp.gatsbyImageData}
                  alt="TechCodes"
                />
              </ImageOne>
              <ImageTwo>
                <GatsbyImage
                  image={data.top_image_2.localFile.childImageSharp.gatsbyImageData}
                  alt="TechCodes"
                />
              </ImageTwo>
            </div>
          </LeftCol>
          <RightCol>
            <LargeTitle>{data.title}</LargeTitle>
            <Subtitle>{data.subtitle}</Subtitle>
            <ReactMarkdown components={{ p: NormalText }}>{data.description}</ReactMarkdown>
          </RightCol>
        </GridWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;
