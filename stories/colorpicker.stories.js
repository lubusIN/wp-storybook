import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ColorPicker } from '@wordpress/components';

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
  .add('Basic', () => (
    <ColorPicker
      color={ '#f00' }
    />
  ))
  .add('DisableAlpha', () => (
    <ColorPicker
      color={ '#f00' }
      disableAlpha
    />
  ));

