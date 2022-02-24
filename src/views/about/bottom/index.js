import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "@styles";
import { ImageWrapper } from "./style";

const Bottom = ({ data }) => {
  return (
    <Container>
      <ImageWrapper>
        <div data-scroll data-scroll-speed={-1}>
          <GatsbyImage
            image={data.footer.localFile.childImageSharp.gatsbyImageData}
            alt={data.footer.alternativeText && data.footer.alternativeText}
          />
        </div>
      </ImageWrapper>
    </Container>
  );
};

export default Bottom;
