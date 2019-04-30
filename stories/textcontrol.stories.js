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
import { TextControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import TextControlReadme from '@wordpress/components/src/text-control/README.md';

/**
 * Stories
 */
const TextControlBasic = withState({
  className: '',
})(({ className, setState }) => (
  <TextControl
    label="Additional CSS Class"
    value={className}
    onChange={(className) => setState({ className })}
  />
));

const TextControlHelp = withState({
  className: '',
})(({ className, setState }) => (
  <TextControl
    label="Additional CSS Class"
    help="Custom classes for block"
    value={className}
    onChange={(className) => setState({ className })}
  />
));

storiesOf('Components|TextControl', module)
  .addDecorator(withReadme(TextControlReadme))
  .add('Basic', () => <TextControlBasic />)
  .add('With Help', () => <TextControlHelp />);