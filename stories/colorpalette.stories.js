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
import { ColorPalette } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ColorPaletteReadme from '@wordpress/components/src/color-palette/README.md';

/**
 * Stories
 */
const ColorPaletteBasic = withState( {
  color: '#f00',
} )( ( { color, setState } ) => { 
  const colors = [ 
      { name: 'red', color: '#f00' }, 
      { name: 'white', color: '#fff' }, 
      { name: 'blue', color: '#00f' }, 
  ];

  return ( 
      <ColorPalette 
          colors={ colors } 
          value={ color }
          onChange={ ( color ) => setState( { color } ) } 
      />
  ) 
} );

storiesOf('Components|ColorPalette', module)
  .addDecorator(withReadme(ColorPaletteReadme))
  .add('Basic', () => <ColorPaletteBasic />);