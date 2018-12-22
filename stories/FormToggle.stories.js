import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FormToggle } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('FormToggle', module)
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

