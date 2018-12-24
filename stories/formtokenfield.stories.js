import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FormTokenFieldReadme from '@wordpress/components/src/form-token-field/README.md';

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