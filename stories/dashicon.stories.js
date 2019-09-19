/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Dashicon } from '@wordpress/components';
import DashiconReadme from '@wordpress/components/src/dashicon/README.md';

export default {
	title: 'Components|Dashicon',
	decorators: [ withReadme( DashiconReadme ) ],
};

export const basic = () => <Dashicon icon="wordpress" />;
