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
import { Button, ButtonGroup } from "@wordpress/components";
import ButtonGroupReadme from '@wordpress/components/src/button-group/README.md';

/**
 * Stories
 */
storiesOf('Components|ButtonGroup', module)
  .addDecorator(withReadme(ButtonGroupReadme))
  .add('Basic', () => (
    <ButtonGroup>
      <Button isDefault onClick={action('Clicked')}>S</Button>
      <Button isDefault onClick={action('Clicked')}>M</Button>
      <Button isDefault onClick={action('Clicked')}>L</Button>
      <Button isDefault onClick={action('Clicked')}>XL</Button>
      <Button isDefault onClick={action('Clicked')}>XXL</Button>
    </ButtonGroup>
  ))
  .add('Selected', () => (
    <ButtonGroup>
      <Button isDefault onClick={action('Clicked')}>S</Button>
      <Button isDefault onClick={action('Clicked')}>M</Button>
      <Button isDefault onClick={action('Clicked')}>L</Button>
      <Button isPrimary onClick={action('Clicked')}>XL</Button>
      <Button isDefault onClick={action('Clicked')}>XXL</Button>
    </ButtonGroup>
  ));