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
import { Icon } from '@wordpress/components';
import IconReadme from '@wordpress/components/src/icon/README.md';

/**
 * Stories
 */
const MyIconComponent = () => <svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg>;

storiesOf('Components|Icon', module)
  .addDecorator(withReadme(IconReadme))
  .add('With Dashicon', () => (
    <Icon icon="screenoptions" />
  ))
  .add('With Function', () => (
    <Icon icon={() => <svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg>} />
  ))
  .add('With Component', () => (
    <Icon icon={MyIconComponent} />
  ))
  .add('With SVG', () => (
    <Icon icon={<svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg>} />
  ));