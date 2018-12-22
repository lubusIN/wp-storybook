import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TextareaControl } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

storiesOf('TextareaControl', module)
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

