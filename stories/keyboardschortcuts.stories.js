import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { KeyboardShortcuts } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import KeyboardShortcutsReadme from '@wordpress/components/src/keyboard-shortcuts/README.md';

const KeyboardShortcutsBasic = withState( {
    isAllSelected: false,
} )( ( { isAllSelected, setState } ) => { 
    const selectAll = () => {
        setState( { isAllSelected: true } )
    };

    return (
        <div>
            <KeyboardShortcuts shortcuts={ {
                'mod+a': selectAll,
            } } />
            [cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }
        </div>
    ) 
} )

storiesOf('Components|KeyboardShortcuts', module)
    .addDecorator(withReadme(KeyboardShortcutsReadme))
    .add('Basic', () => <KeyboardShortcutsBasic />);
