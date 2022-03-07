const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allStrapiInitiatives(sort: { fields: strapiId, order: DESC }) {
        edges {
          node {
            article {
              slug
              seo {
                title
                description
              }
              title
              thumbnail {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              date(formatString: "MM/DD/YY")
              links {
                link
                text
              }
              subheading {
                text
              }
              text {
                text
              }
              images {
                split
                images {
                  alternativeText
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
      }
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
    }
  `);

  const footerDoc = pages.data.allStrapiGlobal.edges.slice(0, 1).pop();
  const doc = pages.data.allStrapiInitiatives.edges.slice(0, 1).pop().node;

  doc.article.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(__dirname, "src/templates/project.js"),
      context: { project: node, footer: footerDoc.node },
    });
  });
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@views": path.resolve(__dirname, "src/views"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
  });

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
