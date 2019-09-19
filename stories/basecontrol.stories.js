/**
 * External Dependencies
 */
import React from 'react';

/**
 * WordPress Dependencies
 */
import { BaseControl } from '@wordpress/components';
import BaseControlReadme from '@wordpress/components/src/base-control/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|BaseControl',
};

export const basic = () => (
	<BaseControl id="textarea-1" label="Field Label" help="Help text for field">
		<textarea id="textarea-1" />
	</BaseControl>
);
