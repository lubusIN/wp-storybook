/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button } from "@wordpress/components";
import ButtonReadme from '@wordpress/components/src/button/README.md';

/**
 * Stories
 */
storiesOf('Components|Button', module)
  .addDecorator(withReadme(ButtonReadme))
  .add('Basic', () => <Button onClick={action('clicked')}>Click Me</Button>)
  .add('Href', () => <Button href="https://www.wordpress.org" onClick={action('clicked')}>Click Me</Button>)
  .add('Default', () => <Button isDefault onClick={action('clicked')}>Click Me</Button>)
  .add('Primary', () => <Button isPrimary onClick={action('clicked')}>Click Me</Button>)
  .add('Large', () => <Button isLarge onClick={action('clicked')}>Click Me</Button>)
  .add('Small', () => <Button isSmall onClick={action('clicked')}>Click Me</Button>)
  .add('Toggled', () => <Button isToggled onClick={action('clicked')}>Click Me</Button>)
  .add('Busy', () => <Button isPrimary isBusy onClick={action('clicked')}>Click Me</Button>)
  .add('Link', () => <Button isLink onClick={action('clicked')}>Click Me</Button>)
  .add('Focus', () => <Button focus onClick={action('clicked')}>Click Me</Button>);