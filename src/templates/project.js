import React from "react";
import { Helmet } from "react-helmet";
import { Hero, Article } from "@views/project";
import { Footer } from "@views";

const Project = ({ pageContext }) => {
  const { project, footer } = pageContext;

  return (
    <>
      <Helmet title={project.seo.title}>
        <meta name="description" content={project.seo.description} />
        <meta property="og:description" content={project.seo.description} />
        <meta name="twitter:description" content={project.seo.description} />
      </Helmet>

      <Hero data={project} />
      <Article data={project} />
      <Footer data={footer} />
    </>
  );
};

export default Project;
