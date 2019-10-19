/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider, getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import Search from './Search';

/**
 * TODO
 */
function Layout({ children }) {
  return (
    <ThemeProvider>
      <header
        css={`
          background-color: ${p => getColor('neutralHue', 200, p.theme)};
        `}
      >
        <Grid
          fluid={false}
          css={`
            padding-top: ${p => p.theme.space.md};
            padding-bottom: ${p => p.theme.space.md};
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
                <Link
                  to="/components"
                  css={`
                    margin-left: ${p => p.theme.space.md};
                  `}
                >
                  Components
                </Link>
                <Link
                  to="/content-strategy"
                  css={`
                    margin-left: ${p => p.theme.space.md};
                  `}
                >
                  Content Strategy
                </Link>
                <Search
                  css={`
                    margin-left: ${p => p.theme.space.md};
                  `}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
      <Grid fluid={false}>
        <main>{children}</main>
        <Row
          css={`
            margin-top: ${p => p.theme.space.lg};
          `}
        >
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

export default Layout;
