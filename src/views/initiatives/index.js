import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "@styles";
import { Button } from "@components";
import { ProjectsWrapper, ListWrapper, ImageWrapper, SectionTitle, HoverWrapper } from "./style";

const Initiatives = ({ data }) => {
  return (
    <ProjectsWrapper>
      <Container>
        <SectionTitle>Initiatives</SectionTitle>
        <ListWrapper>
          {data.map((content, index) => (
            <ImageWrapper to={`/${content.slug}`} key={index}>
              <HoverWrapper>
                <Button to={`/${content.slug}`}>View event</Button>
              </HoverWrapper>
              <GatsbyImage
                image={content.thumbnail.localFile.childImageSharp.gatsbyImageData}
                alt={
                  content.thumbnail.alternativeText !== undefined &&
                  content.thumbnail.alternativeText
                }
              />
            </ImageWrapper>
          ))}
        </ListWrapper>
      </Container>
    </ProjectsWrapper>
  );
};

export default Initiatives;
