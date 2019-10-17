/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { PanelBody } from '@wordpress/components';
import PanelBodyReadme from '@wordpress/components/src/panel/README.md';

export default {
	title: 'Components|PanelBody',
	decorators: [ withReadme( PanelBodyReadme ) ],
};

export const basic = () => (
	<React.Fragment>
		<PanelBody title="My Block s Settings" initialOpen={ true }>
      My Panel Inputs and Labels
		</PanelBody>
	</React.Fragment>
);

export const withHeaderIcon = () => (
	<React.Fragment>
		<PanelBody title="My Block Settings" icon="welcome-widgets-menus">
      My Panel Inputs and Labels
		</PanelBody>
	</React.Fragment>
);

export const collasped = () => (
	<React.Fragment>
		<PanelBody title="My Block Settings" initialOpen={ false }>
      My Panel Inputs and Labels
		</PanelBody>
	</React.Fragment>
);
