import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tooltip, Button } from '@wordpress/components';

const TooltipStyles = {
  width: '180px',
  margin: 'auto',
  marginTop: '10%'
};

const TooltipDecorator = (storyFn) => (
  <div style={TooltipStyles}>
      { storyFn() }
  </div>
);

storiesOf('Tooltip', module)
  .addDecorator( TooltipDecorator )
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

