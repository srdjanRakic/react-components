---
title: Button Group
category: Actions
description: "TODO button group stuff"
---

### Example

import Example from '../../../examples/buttons/button-group';
import ExampleCode from '!!raw-loader!../../../examples/buttons/button-group';

<CodeExample code={ExampleCode}>
  <Example />
</CodeExample>

<PropSheet component={props.data.buttonGroup.childrenComponentMetadata[0]} />

export const pageQuery = graphql`
  query {
    buttonGroup: file(sourceInstanceName: {eq: "packages"}, relativePath: {eq: "buttons/src/components/ButtonGroup.tsx"}) {
      ...ComponentProps
    }
  }
`
