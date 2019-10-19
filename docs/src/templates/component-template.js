/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { XXXL, XL, UnorderedList } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MdxProvider from '../components/mdx/MdxProvider';

/**
 * TODO
 */
function ComponentTemplate(props) {
  const data = useStaticQuery(graphql`
    query ComponentGroups {
      componentGroups: allMdx(filter: { fields: { sourceInstanceName: { eq: "components" } } }) {
        group(field: frontmatter___category) {
          fieldValue
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
    }
  `);

  let activeGroupFieldValue;
  let activePageId;

  for (const group of data.componentGroups.group) {
    for (const { node: page } of group.edges) {
      const isActive = props.path.endsWith(page.fields.slug);

      if (isActive) {
        activeGroupFieldValue = group.fieldValue;
        activePageId = page.id;
      }
    }
  }

  const sideBar = (
    <UnorderedList type="disc">
      {data.componentGroups.group.map(group => (
        <UnorderedList.Item key={group.fieldValue}>
          <Link to={`/components${group.edges[0].node.fields.slug}`}>{group.fieldValue}</Link>
          {activeGroupFieldValue === group.fieldValue && (
            <UnorderedList>
              {group.edges.map(({ node: componentPage }) => (
                <UnorderedList.Item key={componentPage.title}>
                  <Link to={`/components${componentPage.fields.slug}`}>
                    {componentPage.frontmatter.title}
                  </Link>
                  {activePageId === componentPage.id && (
                    <UnorderedList>
                      {componentPage.tableOfContents.items.map(section => (
                        <UnorderedList.Item key={section.url}>
                          <Link to={`/components${componentPage.fields.slug}${section.url}`}>
                            {section.title}
                          </Link>
                        </UnorderedList.Item>
                      ))}
                    </UnorderedList>
                  )}
                </UnorderedList.Item>
              ))}
            </UnorderedList>
          )}
        </UnorderedList.Item>
      ))}
    </UnorderedList>
  );

  return (
    <Layout location={props.location} title={props.pageContext.frontmatter.title}>
      <SEO
        title={props.pageContext.frontmatter.title}
        description={props.pageContext.frontmatter.description}
      />
      <article>
        <Grid fluid={false}>
          <Row>
            <Col md={3}>{sideBar}</Col>
            <Col>
              <header>
                <XXXL
                  tag="h1"
                  css={`
                    margin: ${p => p.theme.space.lg} 0;
                  `}
                >
                  {props.pageContext.frontmatter.title}
                </XXXL>
                <XL
                  css={`
                    margin-bottom: ${p => p.theme.space.lg};
                  `}
                >
                  {props.pageContext.frontmatter.description}
                </XL>
              </header>
              <MdxProvider>{props.children}</MdxProvider>
            </Col>
          </Row>
        </Grid>
      </article>
    </Layout>
  );
}

export default ComponentTemplate;
