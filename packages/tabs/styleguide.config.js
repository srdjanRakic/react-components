/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */
module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/tabs/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/tabs/src/elements/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/tabs/src/views/[A-Z]*.js'
    }
  ]
};
