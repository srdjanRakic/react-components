/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledStepContent } from './StyledStepContent';

const COMPONENT_ID = 'steppers.step';

export const StyledStep = styled.div.attrs<any>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<any>`
  &:not(:last-of-type) ${StyledStepContent} {
    border-left: 1px solid red;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStep.defaultProps = {
  theme: DEFAULT_THEME
};

// &:first-of-type:not(:last-of-type) ${StyledIcon} {
