/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledStep } from '../styled';

export const Step = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <StyledStep>
      <div
        data-comp="<Step>"
        style={
          {
            // display: 'flex'
          }
        }
      >
        <span style={{ color: props.isActive ? '' : 'gray' }}>
          {props.isCompleted ? '✔️' : '⌛'}
        </span>

        {props.orientation === 'vertical'
          ? React.Children.map(props.children, (child, index) => {
              return React.cloneElement(child, {
                isActive: props.isActive
              });
            })
          : null}
      </div>
    </StyledStep>
  );
});

Step.propTypes = {
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool
};
