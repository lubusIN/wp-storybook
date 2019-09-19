/**
 * External Dependencies
 */
import React, { useState } from 'react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { FormTokenField } from '@wordpress/components';
import FormTokenFieldReadme from '@wordpress/components/src/form-token-field/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|FormTokenField',
	decorators: [ withReadme( FormTokenFieldReadme ) ],
};

export const Basic = () => {
	const suggestions = [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ];
	const [ tokens, setTokens ] = useState( [] );

	return (
		<FormTokenField
			value={ tokens }
			suggestions={ suggestions }
			onChange={ ( newTokens ) => setTokens( newTokens ) }
			placeholder="Type a continent"
		/>
	);
};
