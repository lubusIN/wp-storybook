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
import { FormToggle } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import FormToggleReadme from '@wordpress/components/src/form-toggle/README.md';

/**
 * Stories
 */
const BasicToggle = withState({
  checked: false,
})(({ checked, setState }) => (
  <FormToggle
    checked={checked}
    onChange={() => setState(state => ({ checked: !state.checked }))}
  />
))

const CheckedToggle = withState({
  checked: true,
})(({ checked, setState }) => (
  <FormToggle
    checked={checked}
    onChange={() => setState(state => ({ checked: !state.checked }))}
  />
))

storiesOf('Components|FormToggle', module)
  .addDecorator(withReadme(FormToggleReadme))
  .add('Basic', () => <BasicToggle />)
  .add('Checked', () => <CheckedToggle />);