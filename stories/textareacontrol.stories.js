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
import { TextareaControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import TextareaControlReadme from '@wordpress/components/src/textarea-control/README.md';

/**
 * Stories
 */
const TextareaControlBasic = withState({
  text: '',
})(({ text, setState }) => (
  <TextareaControl
    label="Text"
    value={text}
    onChange={(text) => setState({ text })}
  />
));

const TextareaControlHelp = withState({
  text: '',
})(({ text, setState }) => (
  <TextareaControl
    label="Text"
    help="Enter some text"
    value={text}
    onChange={(text) => setState({ text })}
  />
));

storiesOf('Components|TextareaControl', module)
  .addDecorator(withReadme(TextareaControlReadme))
  .add('Basic', () => <TextareaControlBasic />)
  .add('With Help', () => <TextareaControlHelp />);