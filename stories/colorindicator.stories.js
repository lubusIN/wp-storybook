import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ColorIndicator } from '@wordpress/components';

const ColorIndicatorStyles = {
  textAlign: 'center',
  marginTop: '10%'
};

const ColorIndicatorDecorator = (storyFn) => (
  <div style={ColorIndicatorStyles}>
    { storyFn() }
  </div>
);

storiesOf('ColorIndicator', module)
  .addDecorator(ColorIndicatorDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <ColorIndicator colorValue="#f00" />
     <br/>
     <br/>
     <ColorIndicator colorValue="#333" />
    </React.Fragment>
  ));

