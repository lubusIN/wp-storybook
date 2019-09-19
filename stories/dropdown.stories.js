/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator, addParameters } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Dropdown, Button } from '@wordpress/components';
import DropdownReadme from '@wordpress/components/src/dropdown/README.md';

export default {
	title: 'Components|Dropdown',
	decorators: [ withReadme( DropdownReadme ) ],
};

export const basic = () => (
	<Dropdown
		className="my-container-class-name"
		contentClassName="my-popover-content-classname"
		position="bottom right"
		renderToggle={ ( { isOpen, onToggle } ) => (
			<Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                    Toggle Popover!
			</Button>
		) }
		renderContent={ () => (
			<div>
                    This is the content of the popover.
			</div>
		) }
	/>
);

export const expandOnMobile = () => (
	<Dropdown
		className="my-container-class-name"
		contentClassName="my-popover-content-classname"
		expandOnMobile={ true }
		position="bottom right"
		renderToggle={ ( { isOpen, onToggle } ) => (
			<Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                    Full Screen on mobile!
			</Button>
		) }
		renderContent={ () => (
			<div>
                    This is the content of the popover.
			</div>
		) }
	/>
);

export const headerTitle = () => (
	<Dropdown
		className="my-container-class-name"
		contentClassName="my-popover-content-classname"
		expandOnMobile={ true }
		headerTitle="Header Title"
		position="bottom right"
		renderToggle={ ( { isOpen, onToggle } ) => (
			<Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                    Full Screen on mobile!
			</Button>
		) }
		renderContent={ () => (
			<div>
                    This is the content of the popover.
			</div>
		) }
	/>
);
