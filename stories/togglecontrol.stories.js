/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ToggleControlReadme from '@wordpress/components/src/toggle-control/README.md';

/**
 * Stories
 */
const ToggleControlBasic = withState({
  hasFixedBackground: false,
})(({ hasFixedBackground, setState }) => (
  <ToggleControl
    label="Fixed Background"
    checked={hasFixedBackground}
    onChange={() => setState((state) => ({ hasFixedBackground: !state.hasFixedBackground }))}
  />
));

const ToggleControlHelp = withState({
  hasFixedBackground: false,
})(({ hasFixedBackground, setState }) => (
  <ToggleControl
    label="Fixed Background"
    help={hasFixedBackground ? 'Has fixed background.' : 'No fixed background.'}
    checked={hasFixedBackground}
    onChange={() => setState((state) => ({ hasFixedBackground: !state.hasFixedBackground }))}
  />
));

storiesOf('Components|ToggleControl', module)
  .addDecorator(withReadme(ToggleControlReadme))
  .add('Basic', () => <ToggleControlBasic />)
  .add('With Help', () => <ToggleControlHelp />);