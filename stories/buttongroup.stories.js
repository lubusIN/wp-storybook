/**
 * External Dependencies
 */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import ButtonGroupReadme from '@wordpress/components/src/button-group/README.md';

export default {
	title: 'Components|ButtonGroup',
	decorators: [ withReadme( ButtonGroupReadme ) ],
};

export const basic = () => (
	<ButtonGroup>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      S
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      M
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      L
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      XL
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      XXL
		</Button>
	</ButtonGroup>
);

export const selected = () => (
	<ButtonGroup>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      S
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      M
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      L
		</Button>
		<Button isPrimary onClick={ action( 'Clicked' ) }>
      XL
		</Button>
		<Button isDefault onClick={ action( 'Clicked' ) }>
      XXL
		</Button>
	</ButtonGroup>
);
