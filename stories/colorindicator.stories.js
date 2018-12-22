import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ColorIndicator } from '@wordpress/components';
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

storiesOf('ColorIndicator', module)
  .add('Basic', () => (
    <React.Fragment>
      <ColorIndicator colorValue="#f00" />
     <br/>
     <br/>
     <ColorIndicator colorValue="#333" />
    </React.Fragment>

  ));

