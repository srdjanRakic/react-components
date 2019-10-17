---
title: Button
category: Buttons
description: "Buttons allow users to easily take action or submit data with a single click. They make actions visible and clear."
---

Buttons allow users to easily take action or submit data with a single click. They make actions visible and clear. Garden supports nine kinds of buttons, each with distinctive use cases.

## Best practices

* Each view should contain only one primary action, so that users know which action is the most important.
* Pair a primary button with a basic button for the cancel action.
* Put buttons in predictable places within the interface.
* Buttons should only be used to invoke actions—never to simply link to another page.
* Use the default button size for most items—these provide the optimal hit area. Small buttons should only be used if there are many buttons or repetitive buttons. Large buttons should be used for primary actions only on specialized screens like on-boarding or purchasing.
* Buttons should not be used for things like “OK” or “Done.”
* Buttons that appear next to each other should have 20px gutters between each button.
* Button widths are determined by the content within them by default; designers can specify minimum widths if desired.

## Content guidelines

## Accessibility guidelines

* Avoid showing disabled buttons whenever possible. See [this other page on disabled UI and why it’s bad]
* All icon buttons should include a text label that appears on hover as well as focus.
* Buttons use browser defaults for keyboard interactions:
  * Buttons receive focus via tab (or shift + tab) according to tab order
  * Enter/return or the space key activates the button

## Related content

## Primary Buttons

Primary buttons should be used in the default size for the most important action on a page. There should only be one primary button in any given view.

### Example

import Example from '../../../examples/buttons/default';
import ExampleCode from '!!raw-loader!../../../examples/buttons/default';

<CodeExample code={ExampleCode}>
  <Example />
</CodeExample>

<PropSheet component={props.data.button.childrenComponentMetadata[0]} />
<PropSheet component={props.data.iconButton.childrenComponentMetadata[0]} />

export const pageQuery = graphql`
  query {
    button: file(sourceInstanceName: {eq: "packages"}, relativePath: {eq: "buttons/src/components/Button.tsx"}) {
      ...ComponentProps
    }
    iconButton: file(sourceInstanceName: {eq: "packages"}, relativePath: {eq: "buttons/src/components/IconButton.tsx"}) {
      ...ComponentProps
    }
  }
`
