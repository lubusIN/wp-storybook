/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPres Dependencies
 */
import { ExternalLink } from '@wordpress/components';
import ExternalLinkReadme from '@wordpress/components/src/external-link/README.md';

export default {
	title: 'Components|ExternalLink',
	decorators: [ withReadme( ExternalLinkReadme ) ],
};

export const basic = () => <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>;
