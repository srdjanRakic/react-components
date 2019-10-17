/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql } from 'gatsby';

export default props => {
  return <div {...props} />;
};

export const query = graphql`
  fragment ComponentProps on File {
    childrenComponentMetadata {
      displayName
      description {
        text
      }
      props {
        name
        defaultValue {
          value
        }
        description {
          text
        }
        type {
          name
          value
        }
      }
    }
  }
`;
