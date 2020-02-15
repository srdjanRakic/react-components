/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledStepContent } from '../styled';

export const StepContent = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return <StyledStepContent>{props.isActive ? props.children : null}</StyledStepContent>;
});
// <div
//   style={{
//     borderLeft: '1px solid red',
//     marginLeft: '5px',
//     padding: '16px'
//   }}
//   data-comp="<StepContent>"
// >
//   {props.children}
// </div>

// export const Alert = React.forwardRef<HTMLDivElement, IAlertProps & HTMLAttributes<HTMLDivElement>>(
//   (props, ref) => {
//     const hue = validationHues[props.type];
//     const Icon = validationIcons[props.type] as any;

//     return (
//       <NotificationsContext.Provider value={hue as VALIDATION_HUE}>
//         <StyledAlert ref={ref} hue={hue} {...props}>
//           <StyledIcon hue={hue}>
//             <Icon />
//           </StyledIcon>
//           {props.children}
//         </StyledAlert>
//       </NotificationsContext.Provider>
//     );
//   }
// );

StepContent.propTypes = {};
