/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { SelectControl } from '@wordpress/components';
import SelectControlReadme from '@wordpress/components/src/select-control/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|SelectControl',
	decorators: [ withReadme( SelectControlReadme ) ],
};

export const Basic = () => {
	const [ size, setSize ] = useState( '50%' );

	const sizes = [
		{ label: 'Big', value: '100%' },
		{ label: 'Medium', value: '50%' },
		{ label: 'Small', value: '25%' },
	];

	return (
		<SelectControl
			label="Size"
			value={ size }
			options={ sizes }
			onChange={ ( newSize ) => {
				setSize( newSize );
			} }
		/>
	);
};

export const WithHelp = () => {
	const [ size, setSize ] = useState( '50%' );

	const sizes = [
		{ label: 'Big', value: '100%' },
		{ label: 'Medium', value: '50%' },
		{ label: 'Small', value: '25%' },
	];

	return (
		<SelectControl
			label="Size"
			help="Select font size"
			value={ size }
			options={ sizes }
			onChange={ ( newSize ) => {
				setSize( newSize );
			} }
		/>
	);
};
