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
  const result = await graphql(
    `
      {
        allFile(filter: { sourceInstanceName: { eq: "content-strategy" } }) {
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
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allFile.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node.childMdx;
    const next = index === 0 ? null : posts[index - 1].node.childMdx;

    createPage({
      path: `content-strategy${post.node.childMdx.fields.slug}`,
      component: blogPost,
      context: {
        postId: post.node.childMdx.id,
        previous,
        next
      }
    });
  });
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
