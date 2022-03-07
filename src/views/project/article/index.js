import React from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@components";
import { Container } from "@styles";
import {
  ArticleWrap,
  ContentWrap,
  ArticleText,
  ArticleLink,
  SubHeading,
  LinkWrapper,
  ImagesWrap,
  ImageWrapper,
  SplitWrapper,
} from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Article = ({ data }) => {
  return (
    <ArticleWrap>
      <Container>
        <ContentWrap>
          <LinkWrapper>
            {data.links.map((slice, index) => (
              <Button href={slice.link} key={index}>
                {slice.text}
              </Button>
            ))}
          </LinkWrapper>
          <div>
            <SubHeading>{data.subheading.text}</SubHeading>
            <ReactMarkdown
              components={{
                p: ArticleText,
                a: ({ node, ...props }) => (
                  <ArticleLink target="_blank" rel="noopener noreferrer" {...props} />
                )
              }}>
              {data.text.text}
            </ReactMarkdown>
          </div>
        </ContentWrap>
        <ImagesWrap>
          {data.images.map((row, index) => {
            if (row.images.length === 1) {
              return (
                <ImageWrapper key={index}>
                  <GatsbyImage
                    image={row.images[0].localFile.childImageSharp.gatsbyImageData}
                    alt={
                      row.images[0].alternativeText !== undefined && row.images[0].alternativeText
                    }
                  />
                </ImageWrapper>
              );
            } else {
              return (
                <SplitWrapper uneven={row.split} key={index}>
                  {row.images.map((image, i) => {
                    return (
                      <GatsbyImage
                        key={i}
                        image={image.localFile.childImageSharp.gatsbyImageData}
                        alt={image.alternativeText !== undefined && image.alternativeText}
                      />
                    );
                  })}
                </SplitWrapper>
              );
            }
          })}
        </ImagesWrap>
      </Container>
    </ArticleWrap>
  );
};

export default Article;
