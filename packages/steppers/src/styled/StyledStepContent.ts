/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'step.content';

export const StyledStepContent = styled.div.attrs<any>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<any>`
  margin-left: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStepContent.defaultProps = {
  theme: DEFAULT_THEME
};
