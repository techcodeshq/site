import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "@styles";
import { HeroSection, SectionTitle, ArticleDate, ImageWrapper } from "./style";

const Hero = ({ data }) => {
  return (
    <HeroSection>
      <Container>
        <SectionTitle>{data.title}</SectionTitle>
        <ArticleDate>{data.date}</ArticleDate>
        <ImageWrapper>
          <GatsbyImage
            image={data.thumbnail.localFile.childImageSharp.gatsbyImageData}
            alt={data.thumbnail.alternativeText !== undefined && data.thumbnail.alternativeText}
          />
        </ImageWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
