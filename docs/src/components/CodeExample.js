/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import PrismCode from 'react-prism';

const CodeExample = ({ children, code }) => {
  const [isRtl, setIsRtl] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <ThemeProvider theme={{ ...DefaultTheme, rtl: isRtl }}>
      <div
        css={`
          padding: ${p => p.theme.space.lg};
          direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
        `}
      >
        {children}
      </div>
      <Button onClick={() => setIsRtl(!isRtl)}>Toggle RTL</Button>
      <Button onClick={() => setShowCode(!showCode)}>Show Code</Button>
      {showCode && (
        <PrismCode component="pre" className="language-javascript">
          {code}
        </PrismCode>
      )}
    </ThemeProvider>
  );
};

export default CodeExample;
