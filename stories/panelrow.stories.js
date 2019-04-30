/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { PanelRow, Button} from '@wordpress/components';
import PanelRowReadme from '@wordpress/components/src/panel/README.md';

/**
 * Stories
 */
storiesOf('Components|PanelRow', module)
  .addDecorator(withReadme(PanelRowReadme))
  .add('Basic', () => (
    <PanelRow>
      <Button isDefault onClick={action('clicked')}>Default</Button>
      <Button isLarge onClick={action('clicked')}>Large</Button>
      <Button isLarge isBusy onClick={action('clicked')}>Large & Busy</Button>
      <Button isSmall onClick={action('clicked')}>Small</Button>
      <Button isPrimary onClick={action('clicked')}>Primary</Button>
      <Button isPrimary isBusy onClick={action('clicked')}>Primary & Busy</Button>
    </PanelRow>
  ));