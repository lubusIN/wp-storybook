/**
 * External Dependencies
 */
import React, { useState } from 'react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import MenuItemsChoiceReadme from '@wordpress/components/src/menu-items-choice/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|MenuItemsChoice',
	decorators: [ withReadme( MenuItemsChoiceReadme ) ],
};

export const Basic = () => {
	const [ mode, setMode ] = useState( 'visual' );

	const choices = [
		{
			value: 'visual',
			label: 'Visual Editor',
		},
		{
			value: 'text',
			label: 'Code Editor',
		},
	];
	return (
		<MenuGroup label="Editor">
			<MenuItemsChoice choices={ choices } value={ mode } onSelect={ ( newMode ) => setMode( newMode ) } />
		</MenuGroup>
	);
};
