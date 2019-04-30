/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { DateTimePicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import DateTimePickerReadme from '@wordpress/components/src/date-time/README.md';

/**
 * Stories
 */
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