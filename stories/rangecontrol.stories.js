/**
 * External Dependencies
 */
import React, { useState } from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { RangeControl } from '@wordpress/components';
import RangeControlReadme from '@wordpress/components/src/range-control/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|RangeControl',
	decorators: [ withReadme( RangeControlReadme ) ],
};

export const Basic = () => {
	const [ columns, setColumns ] = useState( 2 );
	return (
		<RangeControl
			label="Columns"
			value={ columns }
			onChange={ ( newColumns ) => setColumns( newColumns ) }
			min={ 2 }
			max={ 10 }
		/>
	);
};

export const WithHelp = () => {
	const [ columns, setColumns ] = useState( 2 );
	return (
		<RangeControl
			label="Columns"
			help="Number of columns"
			value={ columns }
			onChange={ ( newColumns ) => setColumns( newColumns ) }
			min={ 2 }
			max={ 10 }
		/>
	);
};

export const WithBeforeIcon = () => {
	const [ columns, setColumns ] = useState( 2 );
	return (
		<RangeControl
			label="Columns"
			help="Number of columns"
			beforeIcon="layout"
			value={ columns }
			onChange={ ( newColumns ) => setColumns( newColumns ) }
			min={ 2 }
			max={ 10 }
		/>
	);
};

export const WithAfterIcon = () => {
	const [ columns, setColumns ] = useState( 2 );
	return (
		<RangeControl
			label="Columns"
			help="Number of columns"
			afterIcon="layout"
			value={ columns }
			onChange={ ( newColumns ) => setColumns( newColumns ) }
			min={ 2 }
			max={ 10 }
		/>
	);
};

export const WithReset = () => {
	const [ columns, setColumns ] = useState( 2 );
	return (
		<RangeControl
			label="Columns"
			help="Number of columns"
			afterIcon="layout"
			value={ columns }
			onChange={ ( newColumns ) => setColumns( newColumns ) }
			min={ 2 }
			max={ 10 }
			allowReset={ true }
		/>
	);
};
