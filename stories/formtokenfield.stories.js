/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FormTokenFieldReadme from '@wordpress/components/src/form-token-field/README.md';

/**
 * Stories
 */
const FormTokenFieldBasic = withState( {
  tokens: [],
  suggestions: [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ],
} )( ( { tokens, suggestions, setState } ) => ( 
  <FormTokenField 
      value={ tokens } 
      suggestions={ suggestions } 
      onChange={ tokens => setState( { tokens } ) }
      placeholder="Type a continent"
  />
) );

storiesOf('Components|FormTokenField', module)
  .addDecorator(withReadme(FormTokenFieldReadme))
  .add('Basic', () => <FormTokenFieldBasic />);