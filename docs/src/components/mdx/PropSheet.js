/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Table, Head, HeaderRow, HeaderCell, Body, Row, Cell } from '@zendeskgarden/react-tables';
import { XL, MD, Code } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

/**
 * TODO
 */
function PropSheet({ component: { displayName, description, props: componentProps } }) {
  const formatDefaultValue = prop => {
    if (prop.defaultValue === null) {
      return '-';
    }

    if (prop.defaultValue.value) {
      return prop.defaultValue.value;
    }

    return '-';
  };

  const formatEnumValues = prop => {
    if (prop.type.name === 'enum') {
      const enumValues = prop.type.value
        .map(propValue => (
          <MD tag="span" monospace key={propValue.value}>
            {propValue.value}
          </MD>
        ))
        .reduce((prev, curr) => [prev, ', ', curr]);

      return (
        <span>
          One of:{` `}
          {enumValues}
        </span>
      );
    }

    return prop.description.text;
  };

  return (
    <Table
      size="small"
      css={`
        margin-bottom: ${p => p.theme.space.lg};
      `}
    >
      <XL
        css={`
          margin-bottom: ${p => p.theme.space.sm};
        `}
      >
        <Code size="large">{displayName}</Code> Props
      </XL>
      <MD>{description.text}</MD>
      <Head>
        <HeaderRow>
          <HeaderCell width="20%">Prop name</HeaderCell>
          <HeaderCell width="20%">Type</HeaderCell>
          <HeaderCell width="20%">Default</HeaderCell>
          <HeaderCell width="40%">Description</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        {componentProps.map((prop, index) => (
          <Row key={index}>
            <Cell width="20%">
              <MD
                monospace
                css={`
                  color: ${p => getColor('kale', 400, p.theme)};
                `}
              >
                {prop.name}
              </MD>
            </Cell>
            <Cell width="20%">
              <MD
                monospace
                css={`
                  color: ${p => getColor('dangerHue', 600, p.theme)};
                `}
              >
                {prop.type.name}
              </MD>
            </Cell>
            <Cell width="20%">
              <MD monospace>{formatDefaultValue(prop)}</MD>
            </Cell>
            <Cell width="40%">
              <div>{formatEnumValues(prop)}</div>
              <p>{prop.description.text}</p>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
}

PropSheet.propTypes = {
  component: PropTypes.object.isRequired
};

export default PropSheet;
