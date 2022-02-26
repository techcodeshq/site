import React from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@components";
import { Container } from "@styles";
import { useLocation } from "@reach/router";
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

const Article = ({ data }) => {
  console.log(data);
  const location = useLocation();

  return (
    <ArticleWrap>
      <Container>
        <ContentWrap>
          <LinkWrapper>
            {data.article.map((slice, index) => {
              const typename = slice.strapi_component;

              switch (typename) {
                case "article.article-link":
                  return (
                    <Button href={slice.link} key={index}>
                      {slice.text}
                    </Button>
                  );
                default:
                  return null;
              }
            })}
          </LinkWrapper>
          <div>
            {data.article.map((slice, index) => {
              const typename = slice.strapi_component;

              switch (typename) {
                case "article.subheading":
                  return <SubHeading key={index}>{slice.text}</SubHeading>;
                case "article.text":
                  return (
                    <ReactMarkdown components={{ p: ArticleText, a: ArticleLink }}>
                      {slice.text}
                    </ReactMarkdown>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </ContentWrap>
        {/* <ImagesWrap>
          {data.article.map((slice, index) => {
            const typename = slice.strapi_component;

            switch (typename) {
              case "article.full-image":
                return (
                  <ImageWrapper key={index}>
                    {console.log(`https://cms.techcodes.org${slice.image.url}`)}
                    <img
                      url={`https://cms.techcodes.org${slice.image.url}`}
                      alt={slice.image.alternativeText !== undefined && slice.image.alternativeText}
                    />
                  </ImageWrapper>
                );
              case "article.split-image":
                return (
                  <SplitWrapper uneven={slice.uneven_split} key={index}>
                    <img
                      url={slice.left_image.localFile.childImageSharp.gatsbyImageData}
                      alt={
                        slice.left_image.alternativeText !== undefined &&
                        slice.left_image.alternativeText
                      }
                    />
                    <img
                      url={slice.right_image.localFile.childImageSharp.gatsbyImageData}
                      alt={
                        slice.right_image.alternativeText !== undefined &&
                        slice.right_image.alternativeText
                      }
                    />
                  </SplitWrapper>
                );
              default:
                return null;
            }
          })}
        </ImagesWrap> */}
      </Container>
    </ArticleWrap>
  );
};

export default Article;
