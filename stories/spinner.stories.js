import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Spinner } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const SpinnerStyles = {
  width: '24px',
  margin: 'auto',
  marginTop: '10%'
};

const SpinnerDecorator = (storyFn) => (
  <div style={SpinnerStyles}>
    { storyFn() }
  </div>
);

storiesOf('Spinner', module)
  .addDecorator( SpinnerDecorator )
  .add('Basic', () => (
    <Spinner />
));