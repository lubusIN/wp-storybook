/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { KeyboardShortcuts } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import KeyboardShortcutsReadme from '@wordpress/components/src/keyboard-shortcuts/README.md';

/**
 * Stories
 */
const KeyboardShortcutsBasic = withState({
    isAllSelected: false,
})(({ isAllSelected, setState }) => {
    const selectAll = () => {
        setState({ isAllSelected: true })
    };

    return (
        <div>
            <KeyboardShortcuts shortcuts={{
                'mod+a': selectAll,
            }} />
            [cmd/ctrl + A] Combination pressed? {isAllSelected ? 'Yes' : 'No'}
        </div>
    )
})

storiesOf('Components|KeyboardShortcuts', module)
    .addDecorator(withReadme(KeyboardShortcutsReadme))
    .add('Basic', () => <KeyboardShortcutsBasic />);