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
import { Spinner } from '@wordpress/components';
import SpinnerReadme from '@wordpress/components/src/spinner/README.md';

/**
 * Stories
 */
storiesOf('Components|Spinner', module)
  .addDecorator(withReadme(SpinnerReadme))
  .add('Basic', () => (
    <Spinner />
  ));