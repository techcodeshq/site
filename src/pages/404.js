import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Footer } from "@views";
import { Container, Link, media } from "@styles";
import { Button } from "@components";

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2vw;
  padding-top: 20vmin;
  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `};
`;
const Title = styled.h1`
  font-size: 22vw;
  line-height: 80%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--text);
  ${media.tablet`font-size: 28vw;`};
`;
const DescriptionWrapper = styled.div`
  font-size: 6vw;
  font-weight: 500;
  text-transform: uppercase;
`;
const Description = styled.p`
  font-size: 6vw;
  line-height: 98%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  color: var(--text);
`;
const LinkWrapper = styled.div`
  padding-top: 6vw;
`;

const NotFoundPage = ({ data }) => {
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <Helmet title="Page Not Found" />

      <SectionWrapper>
        <Container>
          <ContentWrapper>
            <Title>404</Title>
            <DescriptionWrapper>
              <Description>Uh-oh. We couldn’t find that page!</Description>
              <LinkWrapper>
                <Button to="/">Home</Button>
              </LinkWrapper>
            </DescriptionWrapper>
          </ContentWrapper>
        </Container>
      </SectionWrapper>

      <Footer data={footerDoc.node} />
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  {
    allStrapiGlobal {
      edges {
        node {
          footer {
            small_text
            press_release {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  }
`;
