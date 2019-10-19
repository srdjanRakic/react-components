/* eslint-disable react/prop-types */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ThemeProvider, DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Well } from '@zendeskgarden/react-notifications';
import PrismCode from 'react-prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ReactComponent as CopyIcon } from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';
import { ReactComponent as TranslationExistsIconStroke } from '@zendeskgarden/svg-icons/src/16/translation-exists-stroke.svg';
import { ReactComponent as TranslationExistsIconFill } from '@zendeskgarden/svg-icons/src/16/translation-exists-fill.svg';
import { ReactComponent as CodeIconStroke } from '@zendeskgarden/svg-icons/src/16/multiline-stroke.svg';
import { ReactComponent as CodeIconFill } from '@zendeskgarden/svg-icons/src/16/multiline-fill.svg';
import { ReactComponent as LightbulbStroke } from '@zendeskgarden/svg-icons/src/16/lightbulb-stroke.svg';
import { ReactComponent as LightbulbFill } from '@zendeskgarden/svg-icons/src/16/lightbulb-fill.svg';

const CodeExample = ({ children, code }) => {
  const [isDark, setIsDark] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [showCode, setShowCode] = useState(false);

  let coloredTheme = { ...DEFAULT_THEME };

  if (isDark) {
    coloredTheme = {
      ...DEFAULT_THEME,
      colors: {
        ...DEFAULT_THEME.colors,
        foreground: '#f3f0ee',
        background: PALETTE.kale[700]
      },
      palette: {
        ...DEFAULT_THEME.palette,
        blue: {
          100: '#0f3554',
          200: '#144a75',
          300: '#1f73b7',
          400: '#337fbd',
          500: '#5293c7',
          600: '#adcce4',
          700: '#cee2f2',
          800: '#edf7ff'
        }
      }
    };
  }

  return (
    <ThemeProvider theme={{ ...coloredTheme }}>
      <Well
        floating
        css={`
          margin: ${p => p.theme.space.md} 0;
          padding: 0px !important;
        `}
      >
        <div
          css={`
            position: relative;
          `}
        >
          <ThemeProvider theme={{ ...coloredTheme, rtl: isRtl }}>
            <div
              css={`
                direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
                background-color: ${p => p.theme.colors.background};
                color: ${p => p.theme.colors.foreground};
                padding: 20px 20px 60px 40px;
              `}
            >
              {children}
            </div>
          </ThemeProvider>
          <div
            css={`
              position: absolute;
              bottom: ${p => p.theme.space.xs};
              left: ${p => p.theme.space.xs};
              right: ${p => p.theme.space.xs};
              display: flex;
              justify-content: flex-end;
            `}
          >
            <IconButton onClick={() => setIsDark(!isDark)} title="Toggle Dark Theme">
              {isDark ? <LightbulbFill /> : <LightbulbStroke />}
            </IconButton>
            <IconButton onClick={() => setIsRtl(!isRtl)} title="Toggle RTL locale">
              {isRtl ? <TranslationExistsIconFill /> : <TranslationExistsIconStroke />}
            </IconButton>
            <IconButton onClick={() => setShowCode(!showCode)} title="Show code">
              {showCode ? <CodeIconFill /> : <CodeIconStroke />}
            </IconButton>
          </div>
        </div>
        {showCode && (
          <div
            css={`
              display: relative;

              pre[class*='language-'] {
                margin: 0;
              }
            `}
          >
            <PrismCode component="pre" className="language-javascript">
              {code}
            </PrismCode>
            <CopyToClipboard text={code}>
              <IconButton
                css={`
                  position: absolute;
                  bottom: ${props => props.theme.space.sm};
                  right: ${props => props.theme.space.sm};
                `}
                title="Copy code"
              >
                <CopyIcon />
              </IconButton>
            </CopyToClipboard>
          </div>
        )}
      </Well>
    </ThemeProvider>
  );
};

export default CodeExample;
