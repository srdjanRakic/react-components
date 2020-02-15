# @zendeskgarden/react-steppers [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-steppers.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-steppers)

This package includes components related to steppers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-steppers

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Example } from '@zendeskgarden/react-steppers';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Example>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi...</Example>
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add steppers to root README table.
  * [ ] Add steppers to demo `index.html`.
  * [ ] Add steppers to `styleguide.base.config.js` webpack globals.
  * [ ] Delete this comment block.
-->
