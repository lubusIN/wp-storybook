import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FormTokenField } from '@wordpress/components';
import FormTokenFieldReadme from '@wordpress/components/src/form-token-field/README.md'

storiesOf('Components|FormTokenField', module)
  .addDecorator(withReadme(FormTokenFieldReadme))
  .add('Basic', () => (
    <FormTokenField 
      value={ ['Asia'] } 
      suggestions={ [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ] } 
      placeholder="Type a continent"
      onChange={ action( 'Changed' ) }
    />
  ));

