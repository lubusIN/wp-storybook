/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { IconButton } from '@wordpress/components';
import IconButtonReadme from '@wordpress/components/src/icon-button/README.md';

/**
 * Stories
 */
storiesOf('Components|IconButton', module)
  .addDecorator(withReadme(IconButtonReadme))
  .add('Basic', () => (
    <IconButton
        icon="admin-appearance"
        label="Styles"
        onClick={ action( 'Clicked' ) }
    />
  ));