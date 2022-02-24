import React from "react";
import { graphql } from "gatsby";
import { Footer, Top } from "@views";
import { Info, Points } from "@views/volunteer";

const About = ({ data }) => {
  const doc = data.allStrapiVolunteer.edges.slice(0, 1).pop();
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <Top
        title={doc.node.top.title}
        description={doc.node.top.description}
        image={doc.node.top.image}
      />
      <Info data={doc.node} />
      <Points data={doc.node} />
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
    allStrapiVolunteer {
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
          info_section {
            title
            description
            link
          }
          volunteer_description
          volunteer_card {
            title
            description
          }
        }
      }
    }
  }
`;
