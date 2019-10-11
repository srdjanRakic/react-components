/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
  XXXL,
  XXL,
  XL,
  LG,
  MD,
  OrderedList,
  UnorderedList,
  Code
} from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { getColor } from '@zendeskgarden/react-theming';

const HeaderAnchorStyling = createGlobalStyle`
  .remark-autolink {
    float: left;
    margin-left: -20px;
    padding-right: 4px;
    line-height: 1;
  }

  .remark-autolink-svg {
    display: inline-block;
    visibility: hidden;
    vertical-align: middle;
  }

  h2:hover .remark-autolink-svg {
    visibility: visible;
  }

  h3:hover .remark-autolink-svg {
    visibility: visible;
  }

  h4:hover .remark-autolink-svg {
    visibility: visible;
  }

  h5:hover .remark-autolink-svg {
    visibility: visible;
  }

  h6:hover .remark-autolink-svg {
    visibility: visible;
  }
`;

const StyledH2 = styled(XXL).attrs({ tag: 'h2' })`
  margin-bottom: ${props => props.theme.space.sm};
`;

const StyledHr = styled.hr`
  margin: ${props => props.theme.space.sm} 0;
`;

const StyledDo = styled.div`
  background-color: ${props => getColor('successHue', 300, props.theme, 0.4)};
  padding: ${props => props.theme.space.md};
  color: ${props => getColor('successHue', 800, props.theme)};
`;

const StyledDont = styled.div`
  background-color: ${props => getColor('dangerHue', 300, props.theme, 0.4)};
  padding: ${props => props.theme.space.md};
  color: ${props => getColor('dangerHue', 800, props.theme)};
`;

const Do = ({ children }) => {
  return (
    <StyledDo>
      <XL
        css={`
          margin-bottom: ${props => props.theme.space.xs};
        `}
      >
        Do
      </XL>
      <UnorderedList>{children}</UnorderedList>
    </StyledDo>
  );
};

const Dont = ({ children }) => {
  return (
    <StyledDont>
      <XL
        css={`
          margin-bottom: ${props => props.theme.space.xs};
        `}
      >
        Don&apos;t
      </XL>
      <UnorderedList>{children}</UnorderedList>
    </StyledDont>
  );
};

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

    const components = {
      h1: props => <XXXL tag="h1" {...props} />,
      h2: StyledH2,
      h3: props => <XL tag="h3" {...props} />,
      h4: props => <LG tag="h4" {...props} />,
      h5: props => <LG tag="h5" {...props} />,
      h6: props => <LG tag="h6" {...props} />,
      p: props => <MD tag="p" {...props} />,
      inlineCode: Code,
      ul: UnorderedList,
      ol: OrderedList,
      li: UnorderedList.Item,
      a: Anchor,
      hr: StyledHr,
      Do,
      Dont,
      Grid,
      Row,
      Col
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <HeaderAnchorStyling />
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
                <MDXProvider components={components}>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </MDXProvider>
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
