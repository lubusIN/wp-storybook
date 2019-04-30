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
import { ColorIndicator } from '@wordpress/components';
import ColorIndicatorReadme from '@wordpress/components/src/color-indicator/README.md';

/**
 * Stories
 */
storiesOf('Components|ColorIndicator', module)
  .addDecorator(withReadme(ColorIndicatorReadme))
  .add('Basic', () => <ColorIndicator colorValue="#f00" /> );