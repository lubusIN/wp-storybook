import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ColorPalette } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('ColorPalette', module)
  .add('Basic', () => (
      <ColorPalette
        colors={ [ 
          { name: 'red', color: '#f00' }, 
          { name: 'white', color: '#fff' }, 
          { name: 'blue', color: '#00f' }, 
        ] } 
        value={ '#f00' }
      />
  ));

