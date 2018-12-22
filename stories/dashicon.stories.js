import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Dashicon } from '@wordpress/components';
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

storiesOf('Dashicon', module)
  .add('Basic', () => (
    <React.Fragment>
      <Dashicon icon="admin-home" />
      <br/>
      <br/>
      <Dashicon icon="products" />
      <br/>
      <br/>
      <Dashicon icon="wordpress" />
    </React.Fragment>

  ));

