import React from "react";
import { Button } from "@components";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { TransitionWrapper, OverLay, ButtonWrapper, ImageWrap } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Transition = ({ data }) => {
  return (
    <TransitionWrapper>
      <ButtonWrapper>
        <Button to="/about">Explore our events</Button>
      </ButtonWrapper>
      <ThemeToggler>{({ theme }) => <OverLay colorMode={theme} />}</ThemeToggler>
      <ImageWrap>
        <div data-scroll data-scroll-speed={-1}>
          <GatsbyImage
            image={data.transition_image.localFile.childImageSharp.gatsbyImageData}
            alt={
              data.transition_image.alternativeText !== undefined &&
              data.transition_image.alternativeText
            }
          />
        </div>
      </ImageWrap>
    </TransitionWrapper>
  );
};

export default Transition;
