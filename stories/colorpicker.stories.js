import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorPicker } from '@wordpress/components';
import ColorPickerReadme from '@wordpress/components/src/color-picker/README.md'

const ColorPickerStyles = {
  textAlign: 'center',
  width: '300px',
  margin: 'auto',
  marginTop: '10%'
};

const ColorPickerDecorator = (storyFn) => (
  <div style={ColorPickerStyles}>
    { storyFn() }
  </div>
);

storiesOf('ColorPicker', module)
  .addDecorator(ColorPickerDecorator)
  .addDecorator(withReadme(ColorPickerReadme))
  .add('Basic', () => (
    <ColorPicker
      color={ '#f00' }
      onChangeComplete={ action( 'Changed' ) }
    />
  ))
  .add('DisableAlpha', () => (
    <ColorPicker
      color={ '#f00' }
      disableAlpha
      onChangeComplete={ action( 'Changed' ) }
    />
  ));

