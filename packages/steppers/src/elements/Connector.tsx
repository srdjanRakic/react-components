/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export const Connector = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  // return props.orientation === 'horizontal' ? <>&nbsp;—&nbsp;</> : <>&nbsp;|&nbsp;</>;
  return (
    <div
      style={{
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        display: 'block',
        borderColor: '#d8dcde',
        width: '100%',
        margin: '0 12px'
      }}
    ></div>
  );
});

Connector.propTypes = {
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool
};
