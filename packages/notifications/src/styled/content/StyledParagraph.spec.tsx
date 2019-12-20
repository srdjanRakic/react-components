/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledParagraph } from './StyledParagraph';

describe('StyledParagraph', () => {
  it('renders paragraph styling', () => {
    const { container } = render(<StyledParagraph />);

    expect(container.firstChild).toHaveClass('c-callout__paragraph');
  });
});