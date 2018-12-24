import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { DateTimePicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import DateTimePickerReadme from '@wordpress/components/src/date-time/README.md';

const DateTimePickerBasic = withState( {
  date: new Date(),
} )( ( { date, setState } ) => {
  return (
      <DateTimePicker
          currentDate={ date }
          onChange={ ( date ) => setState( { date } ) }
      />
  );
} );

const DateTimePicker12Hrs = withState( {
  date: new Date(),
} )( ( { date, setState } ) => {
  return (
      <DateTimePicker
          currentDate={ date }
          onChange={ ( date ) => setState( { date } ) }
          is12Hour={ true }
      />
  );
} );

storiesOf('Components|DateTimePicker', module)
  .addDecorator(withReadme(DateTimePickerReadme))
  .add('Basic', () => <DateTimePickerBasic/> )
  .add('12Hrs', () => <DateTimePicker12Hrs/> );

