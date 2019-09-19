/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ColorIndicator } from '@wordpress/components';
import ColorIndicatorReadme from '@wordpress/components/src/color-indicator/README.md';

export default {
  title: 'Components|ColorIndicator',
  decorators: [withReadme(ColorIndicatorReadme)],
};

export const basic = () => <ColorIndicator colorValue="#f00" />;