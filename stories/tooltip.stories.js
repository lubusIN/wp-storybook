/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Tooltip, Button } from '@wordpress/components';
import TooltipReadme from '@wordpress/components/src/tooltip/README.md';

/**
 * Stories
 */
storiesOf('Components|Tooltip', module)
  .addDecorator(withReadme(TooltipReadme))
  .add('Basic', () => (
    <Tooltip text="More information">
      <Button isDefault>
          Hover for more information
      </Button>
    </Tooltip>
  ));

storiesOf('Components|Tooltip/Position', module)
  .addDecorator(withReadme(TooltipReadme))
  .add('Top Left', () => (
    <Tooltip text="More information" position="top left">
      <Button isDefault>
          Top Left
      </Button>
    </Tooltip>
  ))
  .add('Top Center', () => (
    <Tooltip text="More information" position="top center">
      <Button isDefault>
          Top Center
      </Button>
    </Tooltip>
  ))
  .add('Top Right', () => (
    <Tooltip text="More information" position="top right">
      <Button isDefault>
          Top Right
      </Button>
    </Tooltip>
  ))
  .add('Bottom Left', () => (
    <Tooltip text="More information" position="bottom left">
      <Button isDefault>
          Bottom Left
      </Button>
    </Tooltip>
  ))
  .add('Bottom Center', () => (
    <Tooltip text="More information" position="bottom center">
      <Button isDefault>
          Bottom Center
      </Button>
    </Tooltip>
  ))
  .add('Bottom Right', () => (
    <Tooltip text="More information" position="bottom right">
      <Button isDefault>
          Bottom Right
      </Button>
    </Tooltip>
  ));