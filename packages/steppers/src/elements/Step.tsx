/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledStep } from '../styled';
import CheckCircleStrokeIcon from '@zendeskgarden/svg-icons/src/16/check-sm-stroke.svg';

const IconContainer = ({ hasIcon, isActive, orientation, children }: any) => {
  let background = isActive ? '#68737d' : '#e9ebed';
  if (hasIcon && !isActive) {
    background = '#fff';
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background,
        color: isActive ? '#fff' : '#2F3941',
        borderRadius: '100%',
        width: '24px',
        fontSize: '12px',
        height: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        marginRight: orientation === 'vertical' ? '12px' : undefined
      }}
    >
      {children}
    </div>
  );
};

export const Step = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const numericStep = props.index + 1;

  console.log(props.icon, '<-- Icon', React.isValidElement(props.icon));

  const Icon = props.icon;

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
        <span
          style={{
            height: '24px',
            // marginRight: props.orientation === 'vertical' ? '12px' : undefined,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {props.isCompleted ? (
            <IconContainer orientation={props.orientation}>
              <CheckCircleStrokeIcon />
            </IconContainer>
          ) : (
            <IconContainer hasIcon={Icon} orientation={props.orientation} isActive={props.isActive}>
              {props.icon ? <Icon /> : numericStep}
            </IconContainer>
          )}
          {props.orientation === 'vertical' && (
            <span
              style={{
                fontWeight: props.isActive ? 600 : undefined,
                color: props.isActive ? '#2F3945' : '#68737d',
                fontSize: '14px'
              }}
            >
              {props.label}
            </span>
          )}
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
