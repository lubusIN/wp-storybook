import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorPicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ColorPickerReadme from '@wordpress/components/src/color-picker/README.md';

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

