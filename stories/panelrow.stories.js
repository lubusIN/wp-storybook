/**
 * External Dependencies
 */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { PanelRow, Button } from '@wordpress/components';
import PanelRowReadme from '@wordpress/components/src/panel/README.md';

export default {
  title: 'Components|PanelRow',
  decorators: [withReadme(PanelRowReadme)],
};

export const basic = () => (
  <PanelRow>
    <Button isDefault onClick={action('clicked')}>
      Default
    </Button>
    <Button isLarge onClick={action('clicked')}>
      Large
    </Button>
    <Button isLarge isBusy onClick={action('clicked')}>
      Large & Busy
    </Button>
    <Button isSmall onClick={action('clicked')}>
      Small
    </Button>
    <Button isPrimary onClick={action('clicked')}>
      Primary
    </Button>
    <Button isPrimary isBusy onClick={action('clicked')}>
      Primary & Busy
    </Button>
  </PanelRow>
);