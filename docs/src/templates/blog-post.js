/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XXXL, UnorderedList } from '@zendeskgarden/react-typography';

import MdxProvider from '../components/mdx/MdxProvider';
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const timeToReadMinutes = this.props.data.mdx.timeToRead;
    const { postId } = this.props.pageContext;

    const sideBar = (
      <UnorderedList type="disc">
        {this.props.data.contentStrategyPages.edges.map(({ node: page }) => {
          const isActivePage = page.id === postId;

          return (
            <UnorderedList.Item key={page.id}>
              <Link to={`content-strategy${page.fields.slug}`}>{page.frontmatter.title}</Link>
              {isActivePage && (
                <UnorderedList type="circle">
                  {page.tableOfContents.items.map(heading => (
                    <UnorderedList.Item key={heading.url}>
                      <a href={heading.url}>{heading.title}</a>
                    </UnorderedList.Item>
                  ))}
                </UnorderedList>
              )}
            </UnorderedList.Item>
          );
        })}
      </UnorderedList>
    );

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article>
          <Grid fluid={false}>
            <Row>
              <Col md={3}>{sideBar}</Col>
              <Col
                css={`
                  && {
                    padding: ${props => props.theme.space.md} ${props => props.theme.space.xl};
                  }
                `}
              >
                <header>
                  <XXXL tag="h1">{post.frontmatter.title}</XXXL>
                  <p>
                    {post.frontmatter.date} | {timeToReadMinutes} minutes
                  </p>
                </header>
                <MdxProvider>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </MdxProvider>
              </Col>
            </Row>
          </Grid>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($postId: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $postId }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    contentStrategyPages: allMdx(
      filter: { fields: { sourceInstanceName: { eq: "content-strategy" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          tableOfContents(maxDepth: 3)
        }
      }
    }
  }
`;
