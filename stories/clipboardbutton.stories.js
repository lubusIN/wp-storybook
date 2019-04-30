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
import { ClipboardButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ClipboardButtonReadme from '@wordpress/components/src/clipboard-button/README.md';

/**
 * Stories
 */
const ClipboardButtonBasic =withState( {
    hasCopied: false,
} )( ( { hasCopied, setState } ) => ( 
    <ClipboardButton
        isPrimary
        text="Text to be copied."
        onCopy={ () => setState( { hasCopied: true } ) }
        onFinishCopy={ () => setState( { hasCopied: false } ) }
    >
        { hasCopied ? 'Copied!' : 'Copy Text' }
    </ClipboardButton>
) );

storiesOf('Components|ClipboardButton', module)
 .addDecorator(withReadme(ClipboardButtonReadme))
 .add('Basic', () => <ClipboardButtonBasic />);