/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { XXL, MD, LG } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Content Strategy" />
        <Row>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;

            return (
              <Col md={4} sm={6}>
                <article key={node.fields.slug}>
                  <header>
                    <XXL tag="h3">
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`content-strategy${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </XXL>
                    <MD>
                      {node.frontmatter.date} | {node.timeToRead} minutes
                    </MD>
                  </header>
                  <section>
                    <LG
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt
                      }}
                    />
                  </section>
                </article>
              </Col>
            );
          })}
        </Row>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/content-strategy/**" } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
