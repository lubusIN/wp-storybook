import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ToggleControl } from '@wordpress/components';
import ToggleControlReadme from '@wordpress/components/src/toggle-control/README.md'

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
  .addDecorator(withReadme(ToggleControlReadme))
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

