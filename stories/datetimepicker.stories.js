import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { DateTimePicker } from '@wordpress/components';
import DateTimePickerReadme from '@wordpress/components/src/date-time/README.md'

const DateTimePickerStyles = {
  width: '240px',
  margin: 'auto',
  marginTop: '5%'
};

const DateTimePickerDecorator = (storyFn) => (
  <div style={DateTimePickerStyles}>
    { storyFn() }
  </div>
);

storiesOf('DateTimePicker', module)
  .addDecorator(DateTimePickerDecorator)
  .addDecorator(withReadme(DateTimePickerReadme))
  .add('Basic', () => (
    <DateTimePicker
      currentDate={ new Date() }
      onChange={ action( 'Changed' ) }
    />
  ))
  .add('12Hrs', () => (
    <DateTimePicker
      currentDate={ new Date() }
      is12Hour={ true }
      onChange={ action( 'Changed' ) }
    />
  ));

