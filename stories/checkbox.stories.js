/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import CheckboxControlReadme from '@wordpress/components/src/checkbox-control/README.md';

/**
 * Stories
 */
export default {
	title: 'Components|CheckboxControl',
	decorators: [ withReadme( CheckboxControlReadme ) ],
};

export const Basic = () => {
	const [ isChecked, setIsChecked ] = useState();

	return (
		<CheckboxControl
			label="Is author"
			checked={ isChecked }
			onChange={ ( checked ) => {
				setIsChecked( checked );
			} }
		/> );
};

export const Checked = () => {
	const [ isChecked, setIsChecked ] = useState();

	return (
		<CheckboxControl
			label="Is author"
			checked={ isChecked }
			onChange={ ( checked ) => {
				setIsChecked( checked );
			} }
		/>
	);
};

export const WithHeading = () => {
	const [ isChecked, setIsChecked ] = useState();

	return (
		<CheckboxControl
			heading="User"
			label="Is author"
			checked={ isChecked }
			onChange={ ( checked ) => {
				setIsChecked( checked );
			} }
		/>
	);
};

export const WithHelp = () => {
	const [ isChecked, setIsChecked ] = useState();

	return (
		<CheckboxControl
			heading="User"
			label="Is author"
			help="Is the user a author or not?"
			checked={ isChecked }
			onChange={ ( checked ) => {
				setIsChecked( checked );
			} }
		/>
	);
};
