/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledExample } from '../styled';
import { Connector } from './Connector';

interface IExampleProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply compact styling */
  orientation: string;
  activeStep: number;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Stepper = React.forwardRef<HTMLDivElement, IExampleProps>((props, ref) => {
  // return <StyledExample ref={ref} {...props} />;

  return (
    <div
      style={{
        margin: '12px 0px',
        display: 'flex',
        flexDirection: props.orientation === 'vertical' ? 'column' : 'row',
        alignItems: props.orientation === 'horizontal' ? 'center' : undefined
      }}
    >
      {React.Children.map(props.children, (child, index) => {
        return [
          index > 0 && props.orientation === 'horizontal' ? (
            <Connector orientation={props.orientation} />
          ) : null,
          React.cloneElement(child as any, {
            index,
            isActive: index === props.activeStep,
            orientation: props.orientation
          })
        ];
      })}
    </div>
  );
});

// Stepper.propTypes = {
//   orientation: PropTypes.string,
//   activeStep: PropTypes.number
// };

// export const Stepper = React.forwardRef<HTMLDivElement, any>((props, ref) => (
// ));

//
