---
title: Icon Button
category: Actions
description: "Icon button description goes here"
---

## Example

import Example from '../../../examples/buttons/icon-button';
import ExampleCode from '!!raw-loader!../../../examples/buttons/icon-button';

<CodeExample code={ExampleCode}>
  <Example />
</CodeExample>

<PropSheet component={props.data.iconButton.childrenComponentMetadata[0]} />

export const pageQuery = graphql`
  query {
    iconButton: file(sourceInstanceName: {eq: "packages"}, relativePath: {eq: "buttons/src/components/IconButton.tsx"}) {
      ...ComponentProps
    }
  }
`
