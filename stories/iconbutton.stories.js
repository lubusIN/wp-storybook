/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { IconButton } from '@wordpress/components';
import IconButtonReadme from '@wordpress/components/src/icon-button/README.md';

export default {
  title: 'Components|IconButton',
  decorators: [withReadme(IconButtonReadme)],
};

export const basic = () => (
  <IconButton icon="admin-appearance" label="Styles" onClick={action('Clicked')} />
);
