/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLProps } from 'react';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'dropdowns.media_figure';

export const StyledMediaFigure: React.FunctionComponent<HTMLProps<HTMLDivElement>> = ({
  children
}) => {
  return React.cloneElement(Children.only(children as any), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    className: MenuStyles['c-menu__item--media__figure']
  });
};
