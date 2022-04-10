import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Head, Nav, SmoothScroll } from "@components";
import { GlobalStyle } from "@styles";

const Layout = ({ children, location }) => {
  // we need to do this because for some reason it calculates the wrong height
  // initially (probably because of the dynamic height of the FAQ section)
  setTimeout(() => {
    if (window !== "undefined") {
      window.scroll.scroll.update();
    }
  }, 2000);

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

            <GlobalStyle />
            <div id="___sticky">
              <Nav location={location} />
              <main>{children}</main>
            </div>
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
