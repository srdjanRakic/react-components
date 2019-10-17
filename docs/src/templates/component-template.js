/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
import { XXXL } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

// import { getColor } from '@zendeskgarden/react-theming';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MdxProvider from '../components/mdx/MdxProvider';

/**
 * TODO
 */
function ComponentTemplate(props) {
  return (
    <Layout location={props.location} title={props.pageContext.frontmatter.title}>
      <SEO
        title={props.pageContext.frontmatter.title}
        description={props.pageContext.frontmatter.description}
      />
      <article>
        <Grid fluid={false}>
          <Row>
            <Col md={3}>Test</Col>
            <Col
              css={`
                && {
                  padding: ${p => p.theme.space.md} ${p => p.theme.space.xl};
                }
              `}
            >
              <header>
                <XXXL tag="h1">{props.pageContext.frontmatter.title}</XXXL>
              </header>
              <MdxProvider>{props.children}</MdxProvider>
            </Col>
          </Row>
        </Grid>
      </article>
    </Layout>
  );
}

// class ComponentTemplate extends React.Component {
//   render() {
//     // console.log(this.props);
//     // const siteTitle = this.props.data.site.siteMetadata.title;
//     // const timeToReadMinutes = this.props.data.mdx.timeToRead;
//     // const { postId } = this.props.pageContext;

//     // const sideBar = (
//     //   <UnorderedList type="disc">
//     //     {this.props.data.componentGroups.group.map(({ fieldValue, edges: components }) => {
//     //       // const isActivePage = page.id === postId;

//     //       return (
//     //         <UnorderedList.Item key={fieldValue}>
//     //           <Link to={`components${components[0].node.fields.slug}`}>{fieldValue}</Link>
//     //           <UnorderedList>
//     //             {components.map(({ node: component }) => (
//     //               <UnorderedList.Item key={component.id}>
//     //                 <Link to={`components${component.fields.slug}`}>
//     //                   {component.frontmatter.title}
//     //                 </Link>
//     //               </UnorderedList.Item>
//     //             ))}
//     //           </UnorderedList>
//     //         </UnorderedList.Item>
//     //       );

//     //       // return (
//     //       //   <UnorderedList.Item key={page.id}>
//     //       //     <Link to={`content-strategy${page.fields.slug}`}>{page.frontmatter.title}</Link>
//     //       //     {isActivePage && (
//     //       //       <UnorderedList type="circle">
//     //       //         {page.tableOfContents.items.map(heading => (
//     //       //           <UnorderedList.Item key={heading.url}>
//     //       //             <a href={heading.url}>{heading.title}</a>
//     //       //           </UnorderedList.Item>
//     //       //         ))}
//     //       //       </UnorderedList>
//     //       //     )}
//     //       //   </UnorderedList.Item>
//     //       // );
//     //     })}
//     //   </UnorderedList>
//     // );

//     const components = {
//       h1: props => <XXXL tag="h1" {...props} />,
//       h2: StyledH2,
//       h3: props => <XL tag="h3" {...props} />,
//       h4: props => <LG tag="h4" {...props} />,
//       h5: props => <LG tag="h5" {...props} />,
//       h6: props => <LG tag="h6" {...props} />,
//       p: props => <MD tag="p" {...props} />,
//       inlineCode: Code,
//       ul: UnorderedList,
//       ol: OrderedList,
//       li: UnorderedList.Item,
//       a: Anchor,
//       hr: StyledHr,
//       Do,
//       Dont,
//       Grid,
//       Row,
//       Col,
//       CodeExample
//     };

//     console.log(this.props);

//     return (
//       <Layout location={this.props.location} title="TEST">
//         <HeaderAnchorStyling />
//         {/* <SEO
//           title={this.props.pageContext.frontmatter.title}
//           description={this.props.pageContext.frontmatter.description}
//         /> */}
//         <article>
//           <Grid fluid={false}>
//             <Row>
//               <Col md={3}>Sidebar</Col>
//               <Col
//                 css={`
//                   && {
//                     padding: ${props => props.theme.space.md} ${props => props.theme.space.xl};
//                   }
//                 `}
//               >
//                 <header>
//                   <XXXL tag="h1">{this.props.pageContext.frontmatter.title}</XXXL>
//                   {/* <p>
//                     {post.frontmatter.date} | {timeToReadMinutes} minutes
//                   </p> */}
//                 </header>
//                 <MDXProvider components={components}>
//                   <MDXRenderer>{this.props.children}</MDXRenderer>
//                 </MDXProvider>
//               </Col>
//             </Row>
//           </Grid>
//         </article>
//       </Layout>
//     );
//   }
// }

export default ComponentTemplate;

// export const pageQuery = graphql`
//   query ComponentById {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     componentGroups: allMdx(
//       filter: { fields: { sourceInstanceName: { eq: "components" } } }
//       sort: { fields: frontmatter___category, order: ASC }
//     ) {
//       group(field: frontmatter___category) {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               description
//             }
//             fields {
//               slug
//             }
//             rawBody
//           }
//         }
//         fieldValue
//       }
//     }
//   }
// `;
