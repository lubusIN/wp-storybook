/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Placeholder } from '@wordpress/components';
import PlaceholderReadme from '@wordpress/components/src/placeholder/README.md';

export default {
  title: 'Components|PlaceHolder',
  decorators: [withReadme(PlaceholderReadme)],
};

export const basic = () => <Placeholder icon="wordpress-alt" label="Placeholder" />;
