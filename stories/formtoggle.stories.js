import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FormToggle } from '@wordpress/components';
import FormToggleReadme from '@wordpress/components/src/form-toggle/README.md'

storiesOf('Components|FormToggle', module)
  .addDecorator(withReadme(FormToggleReadme))
  .add('Basic', () => ( 
    <FormToggle 
        checked={ false }
        onChange={ action( 'Changed' ) }
    />
  ))
  .add('Checked', () => ( 
    <FormToggle 
      checked={ true }
      onChange={ action( 'Changed' ) }
    />
  ));

