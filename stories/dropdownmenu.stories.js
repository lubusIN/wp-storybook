/**
 * External Dependencies
 */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { DropdownMenu } from '@wordpress/components';
import DropdownMenuReadme from '@wordpress/components/src/dropdown-menu/README.md';

export default {
	title: 'Components|DropdownMenu',
	decorators: [ withReadme( DropdownMenuReadme ) ],
};

export const basic = () => (
	<DropdownMenu
		icon="move"
		label="Select a direction"
		controls={ [
			{
				title: 'Up',
				icon: 'arrow-up-alt',
				onClick: () => action( 'up' ),
			},
			{
				title: 'Right',
				icon: 'arrow-right-alt',
				onClick: () => action( 'right' ),
			},
			{
				title: 'Down',
				icon: 'arrow-down-alt',
				onClick: () => action( 'down' ),
			},
			{
				title: 'Left',
				icon: 'arrow-left-alt',
				onClick: () => action( 'left' ),
			},
		] }
	/>
);
