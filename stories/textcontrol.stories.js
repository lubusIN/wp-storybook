import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextControl } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const TextControlStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const TextControlDecorator = (storyFn) => (
  <div style={TextControlStyles}>
      { storyFn() }
  </div>
);

storiesOf('TextControl', module)
  .addDecorator( TextControlDecorator )
  .add('Basic', () => (
    <TextControl
      label="Additional CSS Class"
      value={ "is-style-fancy" }
      onChange={ action( 'Changed' ) }
    />
  ))
  .add('With Help', () => (
    <TextControl
      label="Additional CSS Class"
      value={ "is-style-fancy" }
      onChange={ action( 'Changed' ) }
      help="Custom classes for block"
    />
  ));

