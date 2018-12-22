import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Icon } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  textAlign: 'center',
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

const MyIconComponent = () => <svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg>;

storiesOf('Icon', module)
  .add('With Dashicon', () => (
    <Icon icon="screenoptions" />
  ))
  .add('With Function', () => (
    <Icon icon={ () => <svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg> } />
  ))
  .add('With Component', () => (
    <Icon icon={ MyIconComponent } />
  ))
  .add('With SVG', () => (
    <Icon icon={ <svg><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg> } />
  ));

