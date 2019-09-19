/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { DateTimePicker } from '@wordpress/components';
import DateTimePickerReadme from '@wordpress/components/src/date-time/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|DateTimePicker',
	decorators: [ withReadme( DateTimePickerReadme ) ],
};

export const Basic = () => {
	const [ date, setDate ] = useState( new Date() );

	return <DateTimePicker currentDate={ date } onChange={ ( date ) => setDate( date ) } />;
};

export const Is12Hrs = () => {
	const [ date, setDate ] = useState( new Date() );

	return (
		<DateTimePicker currentDate={ date } onChange={ ( newDate ) => setDate( newDate ) } is12Hour={ true } />
	);
};
