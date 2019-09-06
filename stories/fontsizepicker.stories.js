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
import { FontSizePicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FontSizePickerReadme from '@wordpress/components/src/font-size-picker/README.md';

/**
 * Stories
 */
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