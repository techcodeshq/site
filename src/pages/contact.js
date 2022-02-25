import React from "react";
import { graphql } from "gatsby";
import { CTA, Footer, ContactForm } from "@views";

const Contact = ({ data }) => {
  const doc = data.allStrapiHomepage.edges.slice(0, 1).pop();
  const footerDoc = data.allStrapiGlobal.edges.slice(0, 1).pop();

  return (
    <>
      <ContactForm />
      {doc.node.CTA && <CTA data={doc.node} />}
      <Footer data={footerDoc.node} />
    </>
  );
};

export default Contact;

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
