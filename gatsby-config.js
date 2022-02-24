require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `TechCodes`,
    description: `TechCodes is a student-led nonprofit organization dedicated to fostering computer science education to students of all backgrounds.`,
    siteUrl: `https://techcodes.org`,
    image: "/og.png",
    twitterUsername: "@techcodeshq",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:400,400i,500,500i,600,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        singleTypes: ["homepage", "about", "global", "volunteer"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FDFDFD`,
        theme_color: `#5552E6`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
