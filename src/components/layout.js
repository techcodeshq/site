import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Head, ThemeProvider, Nav, SmoothScroll } from "@components";
import { GlobalStyle } from "@styles";

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
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
        return (
          <>
            <Head metadata={site.site.siteMetadata} />
            <SmoothScroll callbacks={location} />

            <ThemeProvider>
              <GlobalStyle />
              <div id="___sticky">
                <Nav />
                <main>{children}</main>
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
