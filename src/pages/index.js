import React from "react";
import { graphql } from "gatsby";
import { Hero, About, Transition, Info, Support } from "@views/home";

const HomePage = ({ data }) => {
  const doc = data.allStrapiHomepage.edges.slice(0, 1).pop();

  return (
    <>
      <Hero data={doc.node} />
      <About data={doc.node} />
      <Transition data={doc.node} />
      <Info data={doc.node} />
      <Support data={doc.node} />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    allStrapiHomepage {
      edges {
        node {
          hero_title
          hero_image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          about_description
          transition_image {
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
        }
      }
    }
  }
`;
