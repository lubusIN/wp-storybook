import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextareaControl } from '@wordpress/components';

const TextareaControlStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const TextareaControlDecorator = (storyFn) => (
  <div style={TextareaControlStyles}>
      { storyFn() }
  </div>
);

storiesOf('TextareaControl', module)
  .addDecorator(TextareaControlDecorator)
  .add('Basic', () => (
    <TextareaControl
      label="Details"
      value={ "Enter content" }
      onChange={ action( 'Changed' ) }
    />
  ))
  .add('With Help', () => (
    <TextareaControl
      label="Details"
      value={ "Enter content" }
      onChange={ action( 'Changed' ) }
      help="Information to store"
    />
  ));

