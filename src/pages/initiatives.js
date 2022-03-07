import React from "react";
import { Helmet } from "react-helmet";
import { Initiatives, Footer } from "@views";
import { graphql } from "gatsby";

const InitiativesPage = ({ data }) => {
  const doc = data.allStrapiInitiatives.edges.slice(0, 1).pop();
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <Helmet title="Initiatives" />
      <Initiatives data={doc.node.article} />
      <Footer data={footerDoc.node} />
    </>
  );
};

export default InitiativesPage;

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
    allStrapiInitiatives(sort: { fields: strapiId, order: DESC }) {
      edges {
        node {
          article {
            slug
            title
            thumbnail {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
