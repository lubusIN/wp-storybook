/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Tooltip, Button } from '@wordpress/components';
import TooltipReadme from '@wordpress/components/src/tooltip/README.md';

export default {
	title: 'Components|Tooltip',
	decorators: [ withReadme( TooltipReadme ) ],
};

export const basic = () => (
	<Tooltip text="More information">
		<Button isDefault>
          Hover for more information
		</Button>
	</Tooltip>
);

export const topLeft = () => (
	<Tooltip text="More information" position="top left">
		<Button isDefault>
          Top Left
		</Button>
	</Tooltip>
);

export const topCenter = () => (
	<Tooltip text="More information" position="top center">
		<Button isDefault>
          Top Center
		</Button>
	</Tooltip>
);

export const topRight = () => (
	<Tooltip text="More information" position="top right">
		<Button isDefault>
          Top Right
		</Button>
	</Tooltip>
);

export const bottomLeft = () => (
	<Tooltip text="More information" position="bottom left">
		<Button isDefault>
          Bottom Left
		</Button>
	</Tooltip>
);

export const bottomCenter = () => (
	<Tooltip text="More information" position="bottom center">
		<Button isDefault>
          Bottom Center
		</Button>
	</Tooltip>
);

export const bottomRight = () => (
	<Tooltip text="More information" position="bottom right">
		<Button isDefault>
          Bottom Right
		</Button>
	</Tooltip>
);
