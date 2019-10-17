/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

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

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    // const { location, title, children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    // let header;

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1>
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   );
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   );
    // }

    return (
      <ThemeProvider>
        <HeaderAnchorStyling />
        <header
          css={`
            background-color: ${props => getColor('neutralHue', 200, props.theme)};
          `}
        >
          <Grid
            fluid={false}
            css={`
              padding-top: ${props => props.theme.space.md};
              padding-bottom: ${props => props.theme.space.md};
            `}
          >
            <Row>
              <Col>
                <Link to="/">Zendesk Garden</Link>
              </Col>
              <Col>
                <div
                  css={`
                    display: flex;
                    justify-content: flex-end;
                  `}
                >
                  <Link to="components">Components</Link>
                  <Link to="content-strategy">Content Strategy</Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </header>
        <Grid fluid={false}>
          <main>{children}</main>
          <Row>
            <Col
              css={`
                text-align: center;
              `}
            >
              <footer>© {new Date().getFullYear()} Zendesk Garden</footer>
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Layout;
