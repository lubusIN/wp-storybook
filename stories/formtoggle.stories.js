import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FormToggle } from '@wordpress/components';
import FormToggleReadme from '@wordpress/components/src/form-toggle/README.md'

const FormToggleStyles = {
  width: '100px',
  margin: 'auto',
  marginTop: '10%',
  textAlign: 'center'
};

const FormToggleDecorator = (storyFn) => (
  <div style={FormToggleStyles}>
    { storyFn() }
  </div>
);

storiesOf('FormToggle', module)
  .addDecorator(FormToggleDecorator)
  .addDecorator(withReadme(FormToggleReadme))
  .add('Basic', () => (
    <React.Fragment>
      <FormToggle 
          checked={ true }
          onChange={ action( 'Changed' ) }
      />
      <br />
      <br />
      <FormToggle 
          checked={ false }
          onChange={ action( 'Changed' ) }
      />
  </React.Fragment>
));

