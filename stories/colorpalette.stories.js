import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorPalette } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ColorPaletteReadme from '@wordpress/components/src/color-palette/README.md';

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

