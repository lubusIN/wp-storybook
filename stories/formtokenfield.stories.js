import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FormTokenField } from '@wordpress/components';

const FormTokenFieldStyles = {
  width: '400px',
  margin: 'auto',
  marginTop: '10%',
};

const FormTokenFieldDecorator = (storyFn) => (
  <div style={FormTokenFieldStyles}>
    { storyFn() }
  </div>
);

storiesOf('FormTokenField', module)
  .addDecorator(FormTokenFieldDecorator)
  .add('Basic', () => (
    <FormTokenField 
      value={ ['Asia'] } 
      suggestions={ [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ] } 
      placeholder="Type a continent"
    />
  ));

