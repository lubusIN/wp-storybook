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
import { ColorPicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ColorPickerReadme from '@wordpress/components/src/color-picker/README.md';

/**
 * Stories
 */
const ColorPickerBasic = withState( {
  color: '#f00',
} )( ( { color, setState } ) => {
  return (
      <ColorPicker
          color={ color }
          onChangeComplete={ ( value ) => setState( value.hex ) }
      />
  );
} );

const ColorPickerDisableAlpha = withState( {
  color: '#f00',
} )( ( { color, setState } ) => {
  return (
      <ColorPicker
          color={ color }
          onChangeComplete={ ( value ) => setState( value.hex ) }
          disableAlpha
      />
  );
} );

storiesOf('Components|ColorPicker', module)
  .addDecorator(withReadme(ColorPickerReadme))
  .add('Basic', () => <ColorPickerBasic />)
  .add('DisableAlpha', () => <ColorPickerDisableAlpha />);