import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FormTokenField } from '@wordpress/components';
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

storiesOf('FormTokenField', module)
  .add('Basic', () => (
    <FormTokenField 
      value={ ['Asia'] } 
      suggestions={ [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ] } 
      placeholder="Type a continent"
    />
));

