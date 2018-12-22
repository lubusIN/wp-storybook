import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tooltip, Button } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

storiesOf('Tooltip', module)
  .add('Basic', () => (
    <Tooltip text="More information">
      <Button isDefault>
          Hover for more information
      </Button>
    </Tooltip>
  ))
  .add('With Position', () => (
    <React.Fragment>
      <Tooltip text="More information" position="bottom right">
        <Button isDefault>
            Bottom Right
        </Button>
      </Tooltip>
    </React.Fragment>
  ));

