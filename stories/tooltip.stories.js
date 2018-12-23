import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Tooltip, Button } from '@wordpress/components';
import TooltipReadme from '@wordpress/components/src/tooltip/README.md'

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
  .addDecorator(withReadme(TooltipReadme))
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

