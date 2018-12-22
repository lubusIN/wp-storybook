import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextControl } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

storiesOf('TextControl', module)
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

