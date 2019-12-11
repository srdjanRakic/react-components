/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.overflow_button';

export interface IStyledOverflowButtonProps {
  isHovered?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
}

export const StyledOverflowButton = styled.button.attrs<IStyledOverflowButtonProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: classNames(TableStyles['c-table__row__cell__overflow'], {
    [TableStyles['is-hovered']]: props.isHovered,
    [TableStyles['is-active']]: props.isActive,
    [TableStyles['is-focused']]: props.isFocused
  })
}))<IStyledOverflowButtonProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
