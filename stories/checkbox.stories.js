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
import { CheckboxControl } from "@wordpress/components";
import { withState } from '@wordpress/compose';
import CheckboxControlReadme from '@wordpress/components/src/checkbox-control/README.md';

/**
 * Stories
 */
const CheckboxControlBasic = withState({
  isChecked: false,
})(({ isChecked, setState }) => (
  <CheckboxControl
    label="Is author"
    checked={isChecked}
    onChange={(isChecked) => { setState({ isChecked }) }}
  />
));

const CheckboxControlChecked = withState({
  isChecked: true,
})(({ isChecked, setState }) => (
  <CheckboxControl
    label="Is author"
    checked={isChecked}
    onChange={(isChecked) => { setState({ isChecked }) }}
  />
));

const CheckboxControlHeading = withState({
  isChecked: true,
})(({ isChecked, setState }) => (
  <CheckboxControl
    heading="User"
    label="Is author"
    checked={isChecked}
    onChange={(isChecked) => { setState({ isChecked }) }}
  />
));

const CheckboxControlHelp = withState({
  isChecked: true,
})(({ isChecked, setState }) => (
  <CheckboxControl
    heading="User"
    label="Is author"
    help="Is the user a author or not?"
    checked={isChecked}
    onChange={(isChecked) => { setState({ isChecked }) }}
  />
));

storiesOf('Components|CheckboxControl', module)
  .addDecorator(withReadme(CheckboxControlReadme))
  .add('Basic', () => <CheckboxControlBasic />)
  .add('Checked', () => <CheckboxControlChecked />)
  .add('With Heading', () => <CheckboxControlHeading />)
  .add('With Help', () => <CheckboxControlHelp />);