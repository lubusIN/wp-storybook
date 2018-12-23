import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SelectControl } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const SelectControlStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const SelectControlDecorator = (storyFn) => (
  <div style={SelectControlStyles}>
    { storyFn() }
  </div>
);

storiesOf('SelectControl', module)
  .addDecorator(SelectControlDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <SelectControl
        label="Size"
        value={ "50%" }
        options={ [
            { label: 'Big', value: '100%' },
            { label: 'Medium', value: '50%' },
            { label: 'Small', value: '25%' },
        ] }
        onChange={ action( 'Changed' ) }
    />
    </React.Fragment>
  ))
  .add('With Help', () => (
    <React.Fragment>
      <SelectControl
        label="Size"
        value={ "50%" }
        options={ [
            { label: 'Big', value: '100%' },
            { label: 'Medium', value: '50%' },
            { label: 'Small', value: '25%' },
        ] }
        onChange={ action( 'Changed' ) }
        help="Select font size"
      />
    </React.Fragment>
  ));