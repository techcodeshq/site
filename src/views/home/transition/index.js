import React from "react";
import { Button } from "@components";
import { TransitionWrapper, OverLay, ButtonWrapper, ImageWrap } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Transition = ({ data }) => {
  return (
    <TransitionWrapper>
      <ButtonWrapper>
        <Button to="/about">Explore our events</Button>
      </ButtonWrapper>
      <OverLay />
      <ImageWrap>
        <div data-scroll data-scroll-speed={-1}>
          <GatsbyImage
            image={data.transition_image.localFile.childImageSharp.gatsbyImageData}
            alt="TechCodes hero event"
          />
        </div>
      </ImageWrap>
    </TransitionWrapper>
  );
};

export default Transition;