/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ToggleControl } from '@wordpress/components';
import ToggleControlReadme from '@wordpress/components/src/toggle-control/README.md';
import { useState } from '@storybook/addons';

/**
 * Stories
 */
export default {
	title: 'Components|ToggleControl',
	decorators: [ withReadme( ToggleControlReadme ) ],
};

export const Basic = () => {
	const [ hasFixedBackground, setHasFixedBackground ] = useState();

	return (
		<ToggleControl
			label="Fixed Background"
			checked={ hasFixedBackground }
			onChange={ () => setHasFixedBackground( ! hasFixedBackground ) }
		/>
	);
};

export const WithHelp = () => {
	const [ hasFixedBackground, setHasFixedBackground ] = useState();

	return (
		<ToggleControl
			label="Fixed Background"
			help={ hasFixedBackground ? 'Has fixed background.' : 'No fixed background.' }
			checked={ hasFixedBackground }
			onChange={ () => setHasFixedBackground( ! hasFixedBackground ) }
		/>
	);
};
