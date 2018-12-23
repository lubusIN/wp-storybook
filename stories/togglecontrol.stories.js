import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ToggleControl } from '@wordpress/components';

const ToggleControlStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const ToggleControlDecorator = (storyFn) => (
  <div style={ToggleControlStyles}>
      { storyFn() }
  </div>
);

storiesOf('ToggleControl', module)
  .addDecorator( ToggleControlDecorator )
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

