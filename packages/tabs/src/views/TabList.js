/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import TabStyles from '@zendeskgarden/css-tabs';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';

/**
 * Accepts all `<div>` props
 */
const TabList = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: TabStyles['c-tab__list']
})`
  :focus {
    outline: none;
  }

  ${props => retrieveTheme('tabs.tab_list', props)};
`;

/** @component */
export default TabList;
