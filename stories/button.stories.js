/**
 * External Dependencies
 */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button } from '@wordpress/components';
import ButtonReadme from '@wordpress/components/src/button/README.md';

export default {
	title: 'Components|Button',
	parameters: {
		component: Button,
		decorators: [ withReadme( ButtonReadme ) ],
	},
};

export const basic = () => <Button onClick={ action( 'clicked' ) }>Click Me</Button>;

export const href = () => (
	<Button href="https://www.wordpress.org" onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const isDefault = () => (
	<Button isDefault onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const primary = () => (
	<Button isPrimary onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const large = () => (
	<Button isLarge onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const small = () => (
	<Button isSmall onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const toggled = () => (
	<Button isToggled onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const busy = () => (
	<Button isPrimary isBusy onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const link = () => (
	<Button isLink onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);

export const focus = () => (
	<Button focus onClick={ action( 'clicked' ) }>
    Click Me
	</Button>
);
