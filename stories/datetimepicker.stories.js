import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { DateTimePicker } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
    margin: 'auto',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('DateTimePicker', module)
  .add('Basic', () => (
    <DateTimePicker
    currentDate={ new Date() }
  />
))
.add('12Hrs', () => (
  <DateTimePicker
  currentDate={ new Date() }
  is12Hour={ true }
/>
));

