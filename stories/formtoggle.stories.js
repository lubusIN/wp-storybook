import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FormToggle } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FormToggleReadme from '@wordpress/components/src/form-toggle/README.md';

const BasicToggle = withState( {
  checked: false,
 } )( ( { checked, setState } ) => (
  <FormToggle 
  checked={ checked }
  onChange={ () => setState( state => ( { checked: ! state.checked } ) ) } 
  />
) )

const CheckedToggle = withState( {
  checked: true,
 } )( ( { checked, setState } ) => (
  <FormToggle 
  checked={ checked }
  onChange={ () => setState( state => ( { checked: ! state.checked } ) ) } 
  />
) )

storiesOf('Components|FormToggle', module)
  .addDecorator(withReadme(FormToggleReadme))
  .add('Basic', () => <BasicToggle />)
  .add('Checked', () => <CheckedToggle />);

