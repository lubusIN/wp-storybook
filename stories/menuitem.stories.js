/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { MenuItem } from '@wordpress/components';
import MenuItemReadme from '@wordpress/components/src/menu-item/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|MenuItem',
	decorators: [ withReadme( MenuItemReadme ) ],
};

export const MenuItemActive = () => {
	const [ isActive, setIsActive ] = useState( true );

	return (
		<MenuItem
			icon={ isActive ? 'yes' : 'no' }
			isSelected={ isActive }
			onClick={ () => setIsActive( ! isActive ) }
		>
      Click To Toggle
		</MenuItem>
	);
};

export const basic = () => <MenuItem onClick={ action( 'Clicked' ) }> Menu Item </MenuItem>;

export const withIcon = () => (
	<MenuItem icon="image-rotate-right" onClick={ action( 'Clicked' ) }>
		{ ' ' }
    Menu Item{ ' ' }
	</MenuItem>
);
