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

/**
 * TODO
 */
function PropSheet({ component: { displayName, description, props: componentProps } }) {
  // TODO add enum showing
  const formatDefaultValue = ({ defaultValue }) => {
    if (defaultValue === null) {
      return '-';
    }

    if (defaultValue.value) {
      return defaultValue.value;
    }

    return '-';
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
            <Cell width="20%">{prop.name}</Cell>
            <Cell width="20%">{prop.type.name}</Cell>
            <Cell width="20%">{formatDefaultValue(prop)}</Cell>
            <Cell width="40%">{prop.description.text}</Cell>
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
