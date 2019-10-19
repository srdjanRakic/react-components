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
import { XXXL, XXL, XL, MD } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';

class ComponentsIndex extends React.Component {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Components" />
        <Row>
          <Col>
            <XXXL tag="h1">Components</XXXL>
          </Col>
        </Row>
        {data.componentGroups.group.map(group => (
          <div key={group.fieldValue}>
            <XXL tag="h2">{group.fieldValue}</XXL>
            <Row>
              {group.edges.map(({ node }) => (
                <Col key={node.id} md={4}>
                  <XL>
                    <Link to={`/components/${node.fields.slug}`}>{node.frontmatter.title}</Link>
                  </XL>
                  <MD>{node.frontmatter.description}</MD>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Layout>
    );
  }
}

export default ComponentsIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
              description
            }
            excerpt
          }
        }
      }
    }
  }
`;
