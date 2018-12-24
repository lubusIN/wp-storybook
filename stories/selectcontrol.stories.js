import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { SelectControl } from '@wordpress/components';
import SelectControlReadme from '@wordpress/components/src/select-control/README.md'

storiesOf('Components|SelectControl', module)
  .addDecorator(withReadme(SelectControlReadme))
  .add('Basic', () => (
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
  ))
  .add('With Help', () => (
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
  ));