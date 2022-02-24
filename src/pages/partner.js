import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Footer, Top } from "@views";
import { TitleText } from "@styles";

const Wrapper = styled.div`
  text-align: center;
`;

const About = ({ data }) => {
  const doc = data.allStrapiPartner.edges.slice(0, 1).pop();
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <Top
        title={doc.node.top.title}
        description={doc.node.top.description}
        image={doc.node.top.image}
        link={doc.node.prospectus.localFile.url}
        linkText="Download our prospectus"
      />
      <Wrapper>
        <TitleText>Coming soon</TitleText>
      </Wrapper>
      <Footer data={footerDoc.node} />
    </>
  );
};

export default About;

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
    allStrapiPartner {
      edges {
        node {
          top {
            title
            description
            image {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          prospectus {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`;
