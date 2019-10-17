/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { TextControl } from '@wordpress/components';
import TextControlReadme from '@wordpress/components/src/text-control/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|TextControl',
	decorators: [ withReadme( TextControlReadme ) ],
};

export const Basic = () => {
	const [ className, setClassName ] = useState();

	return (
		<TextControl
			label="Additional CSS Class"
			value={ className }
			onChange={ ( newClassName ) => setClassName( newClassName ) }
		/>
	);
};

export const WithHelp = () => {
	const [ className, setClassName ] = useState();

	return (
		<TextControl
			label="Additional CSS Class"
			help="Custom classes for block"
			value={ className }
			onChange={ ( newClassName ) => setClassName( newClassName ) }
		/>
	);
};
