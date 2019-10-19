/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

const DefaultExample = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <Grid>
      <Row>
        <Col md>
          <IconButton
            rotated={isRotated}
            onClick={() => setIsRotated(!isRotated)}
            aria-label="Settings Action"
          >
            <SettingsIcon />
          </IconButton>
        </Col>
      </Row>
    </Grid>
  );
};

export default DefaultExample;
