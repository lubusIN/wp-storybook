import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ColorPicker } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
    width: '40%',
    height: '40%',
    margin: 'auto',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('ColorPicker', module)
  .add('Basic', () => (
    <ColorPicker
      color={ '#f00' }
    />
  ))
  .add('DisableAlpha', () => (
    <ColorPicker
      color={ '#f00' }
      disableAlpha
    />
  ));

