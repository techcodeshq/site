import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Head, ThemeProvider, Nav, SmoothScroll } from "@components";
import { Footer } from "@views";
import { GlobalStyle } from "@styles";

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
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
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => {
        const doc = site.allStrapiGlobal.edges.slice(0, 1).pop();

        return (
          <>
            <Head metadata={site.site.siteMetadata} />
            <SmoothScroll callbacks={location} />

            <ThemeProvider>
              <GlobalStyle />
              <div id="___sticky">
                <Nav />
                <main>{children}</main>
                <Footer data={doc.node} />
              </div>
            </ThemeProvider>
          </>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
