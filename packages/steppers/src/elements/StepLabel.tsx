/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export const StepLabel = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return <span style={{ fontWeight: props.isActive ? 800 : undefined }}>{props.children}</span>;
});

StepLabel.propTypes = {
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool
};
