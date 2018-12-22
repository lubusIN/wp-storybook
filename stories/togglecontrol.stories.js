import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ToggleControl } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

storiesOf('ToggleControl', module)
  .add('Basic', () => (
    <ToggleControl
      label="Fixed Background"
      checked={ true }
      onChange={ action( 'Changed' ) }
  />
  ))
  .add('With Help', () => (
    <ToggleControl
      label="Fixed Background"
      help={ true ? 'Has fixed background.' : 'No fixed background.' } 
      checked={ true }
      onChange={ action( 'Changed' ) }
    />
  ));

