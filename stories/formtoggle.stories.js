import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FormToggle } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

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
  .add('Basic', () => (
    <React.Fragment>
      <FormToggle 
          checked={ true }
      />
      <br />
      <br />
      <FormToggle 
          checked={ false }
      />
  </React.Fragment>
));

