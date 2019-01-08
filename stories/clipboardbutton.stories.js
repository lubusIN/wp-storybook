import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ClipboardButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ClipboardButtonReadme from '@wordpress/components/src/clipboard-button/README.md';

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
