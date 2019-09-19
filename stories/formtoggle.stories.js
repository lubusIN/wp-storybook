/**
 * External Dependencies
 */
import React,{useState} from 'react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { FormToggle } from '@wordpress/components';
import FormToggleReadme from '@wordpress/components/src/form-toggle/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|FormToggle',
  decorators: [withReadme(FormToggleReadme)],
};

export const BasicToggle = () => {
  const [checked, setChecked] = useState( false )

  return (
    <FormToggle checked={checked} onChange={() => setChecked( !checked )} />
  );
};

export const CheckedToggle = () => { 
  const [checked, setChecked] = useState( true )

  return (
    <FormToggle checked={checked} onChange={() => setChecked( !checked )} />
  )
};