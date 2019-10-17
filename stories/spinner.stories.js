/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Spinner } from '@wordpress/components';
import SpinnerReadme from '@wordpress/components/src/spinner/README.md';

export default {
	title: 'Components|Spinner',
	decorators: [ withReadme( SpinnerReadme ) ],
};

export const basic = () => <Spinner />;
