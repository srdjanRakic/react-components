/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
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
import { getColor } from '@zendeskgarden/react-theming';

import CodeExample from '../CodeExample';
import PropSheet from './PropSheet';

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
  Col,
  CodeExample,
  PropSheet
};

/**
 * TODO
 */
export default function MdxProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
