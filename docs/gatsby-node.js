/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  // const componentTemplate = path.resolve(`./src/templates/component-template.js`);

  const result = await graphql(
    `
      {
        contentStrategy: allFile(filter: { sourceInstanceName: { eq: "content-strategy" } }) {
          edges {
            node {
              id
              name
              childMdx {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
        components: allFile(filter: { sourceInstanceName: { eq: "components" } }) {
          edges {
            node {
              id
              name
              childMdx {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  category
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const contentStrategyPosts = result.data.contentStrategy.edges;

  contentStrategyPosts.forEach(post => {
    if (post.node.childMdx) {
      createPage({
        path: `content-strategy${post.node.childMdx.fields.slug}`,
        component: blogPost,
        context: {
          postId: post.node.childMdx.id
        }
      });
    }
  });

  // const componentPosts = result.data.components.edges;

  // componentPosts.forEach(post => {
  //   if (post.node.childMdx) {
  //     createPage({
  //       path: `components${post.node.childMdx.fields.slug}`,
  //       component: componentTemplate,
  //       context: {
  //         postId: post.node.childMdx.id
  //       }
  //     });
  //   }
  // });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, trailingSlash: false });

    createNodeField({
      name: `slug`,
      node,
      value
    });

    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        name: `sourceInstanceName`,
        node,
        value: parent.sourceInstanceName
      });
    }
  }
};
