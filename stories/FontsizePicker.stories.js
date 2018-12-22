import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FontSizePicker } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
    width: '200px',
    margin: 'auto',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('FontSizePicker', module)
  .add('Basic', () => (
    <FontSizePicker
      fontSizes={ [
          {
              name: 'Small',
              slug: 'small',
              size: 12,
          },
          {
              name: 'Big',
              slug: 'big',
              size: 26,
          },
      ] }
      value={ 12 }
      fallbackFontSize={ 16 }
    />
));

