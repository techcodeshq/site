import React from "react";
import { graphql } from "gatsby";
import { CTA, Footer } from "@views";
import { Hero, About, Transition, Info, Support } from "@views/home";

const HomePage = ({ data }) => {
  const doc = data.allStrapiHomepage.edges.slice(0, 1).pop();
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <Hero data={doc.node} />
      <About data={doc.node} />
      <Transition data={doc.node} />
      <Info data={doc.node} />
      <Support data={doc.node} />
      {doc.node.CTA && <CTA data={doc.node} />}
      <Footer data={footerDoc.node} />
    </>
  );
};

export default HomePage;

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
    allStrapiHomepage {
      edges {
        node {
          hero_title
          hero_image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          about_description
          transition_image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          info_description
          info_cards {
            info_title
            info_description
          }
          support_description
          support_cards {
            support_title
            support_description
          }
          CTA {
            logos {
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
