import React, { useRef, useEffect } from "react";
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
import { useWindowSize } from "@hooks";
import { gsap } from "gsap";
import ReactMarkdown from "react-markdown";

const Hero = ({ data }) => {
  let imageOne = useRef(null);
  let imageTwo = useRef(null);
  let textRef = useRef(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 600) {
      gsap
        .timeline()
        .from(imageTwo, {
          scale: 0,
          rotate: 0,
          delay: 0.5,
          ease: "Power3.easeOut",
          duration: 0.8,
        })
        .from(
          imageOne,
          {
            scale: 0,
            rotate: 0,
            ease: "Power3.easeOut",
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          imageOne,
          {
            left: "50%",
            ease: "Power3.easeInOut",
            duration: 1.4,
          },
          "+=0.2",
        )
        .from(
          imageTwo,
          {
            left: "50%",
            ease: "Power3.easeInOut",
            duration: 1.4,
          },
          "-=1",
        )
        .from(textRef, { opacity: 0 });
    }
  }, []);

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
              <ImageOne ref={el => (imageOne = el)}>
                <GatsbyImage
                  image={data.top_image_1.localFile.childImageSharp.gatsbyImageData}
                  alt={data.top_image_1.alternativeText && data.top_image_1.alternativeText}
                />
              </ImageOne>
              <ImageTwo ref={el => (imageTwo = el)}>
                <GatsbyImage
                  image={data.top_image_2.localFile.childImageSharp.gatsbyImageData}
                  alt={data.top_image_2.alternativeText && data.top_image_2.alternativeText}
                />
              </ImageTwo>
            </div>
          </LeftCol>
          <RightCol ref={el => (textRef = el)}>
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
