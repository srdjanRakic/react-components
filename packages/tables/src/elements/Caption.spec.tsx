/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Caption } from './Caption';

describe('Caption', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableCaptionElement>();
    const { getByTestId } = render(
      <Table>
        <Caption data-test-id="caption" ref={ref} />
      </Table>
    );

    expect(getByTestId('caption')).toBe(ref.current);
  });

  it('renders default styling', () => {
    const { getByTestId } = render(
      <Table>
        <Caption data-test-id="caption" />
      </Table>
    );

    expect(getByTestId('caption')).toHaveClass('c-table__caption');
  });
});
