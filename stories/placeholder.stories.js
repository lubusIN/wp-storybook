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
import { Placeholder } from '@wordpress/components';
import PlaceholderReadme from '@wordpress/components/src/placeholder/README.md';

/**
 * Stories
 */
storiesOf('Components|PlaceHolder', module)
  .addDecorator(withReadme(PlaceholderReadme))
  .add('Basic', () => (
    <Placeholder
      icon="wordpress-alt"
      label="Placeholder"
    />
  ));