/**
 * External Dependencies
 */
import React, { useReact, useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { KeyboardShortcuts } from '@wordpress/components';
import KeyboardShortcutsReadme from '@wordpress/components/src/keyboard-shortcuts/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|KeyboardShortcuts',
	decorators: [ withReadme( KeyboardShortcutsReadme ) ],
};

export const Basic = () => {
	const [ isAllSelected, setIsAllSelected ] = useState( false );

	const selectAll = () => {
		setIsAllSelected( true );
	};

	return (
		<div>
			<KeyboardShortcuts
				shortcuts={ {
					'mod+a': selectAll,
				} }
			/>
      [cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }
		</div>
	);
};
