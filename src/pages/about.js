import React from "react";
import { graphql } from "gatsby";
import { Hero, Info, Team, Bottom } from "@views/about";

const About = ({ data }) => {
  const doc = data.allStrapiAbout.edges.slice(0, 1).pop();

  return (
    <>
      <Hero data={doc.node} />
      <Info data={doc.node} />
      <Team data={doc.node} />
      <Bottom data={doc.node} />
    </>
  );
};

export default About;

export const query = graphql`
  {
    allStrapiAbout {
      edges {
        node {
          top_image_1 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          top_image_2 {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          title
          subtitle
          description
          do_text
          approach_text
          team {
            headshot {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            is_director
            name
            position
            description
          }
          footer {
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
`;
