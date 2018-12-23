import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorPalette } from '@wordpress/components';
import ColorPaletteReadme from '@wordpress/components/src/color-palette/README.md'

const ColorPaletteStyles = {
  width: '220px',
  margin: 'auto',
  marginTop: '10%',
};

const ColorPaletteDecorator = (storyFn) => (
  <div style={ColorPaletteStyles}>
    { storyFn() }
  </div>
);

storiesOf('ColorPalette', module)
  .addDecorator(ColorPaletteDecorator)
  .addDecorator(withReadme(ColorPaletteReadme))
  .add('Basic', () => (
      <ColorPalette
        colors={ [ 
          { name: 'red', color: '#f00' }, 
          { name: 'white', color: '#fff' }, 
          { name: 'blue', color: '#00f' }, 
        ] } 
        value={ '#fff' }
        onChange={ action( 'Changed' ) }
      />
  ));

