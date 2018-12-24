import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FontSizePicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FontSizePickerReadme from '@wordpress/components/src/font-size-picker/README.md';

const FontSizePickerBasic = withState( {
    fontSize: 16,
} )( ( { fontSize, setState } ) => {
    const fontSizes = [
        {
            name:'Small',
            slug: 'small',
            size: 12,
        },
        {
            name: 'Big',
            slug: 'big',
            size: 26,
        },
    ];
    const fallbackFontSize = 16;

    return (
        <FontSizePicker
            fontSizes={ fontSizes }
            value={ fontSize }
            fallbackFontSize={ fallbackFontSize }
            onChange={ ( newFontSize ) => {
                setState( { fontSize: newFontSize } );
            } }
        />
    );
} );

storiesOf('Components|FontSizePicker', module)
  .addDecorator(withReadme(FontSizePickerReadme))
  .add('Basic', () => <FontSizePickerBasic />);

