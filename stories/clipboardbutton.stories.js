/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ClipboardButton } from '@wordpress/components';
import ClipboardButtonReadme from '@wordpress/components/src/clipboard-button/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|ClipboardButton',
	decorators: [ withReadme( ClipboardButtonReadme ) ],
};

export const Basic = () => {
	const [ hasCopied, setHasCopied ] = useState();

	return (
		<ClipboardButton
			isPrimary
			text="Text to be copied."
			onCopy={ () => setHasCopied( true ) }
			onFinishCopy={ () => setHasCopied( false ) }
		>
			{ hasCopied ? 'Copied!' : 'Copy Text' }
		</ClipboardButton>
	);
};
