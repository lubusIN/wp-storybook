import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Dashicon } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const DashiconStyles = {
  textAlign: 'center',
  marginTop: '10%'
};

const DashiconDecorator = (storyFn) => (
  <div style={DashiconStyles}>
    { storyFn() }
  </div>
);

storiesOf('Dashicon', module)
  .addDecorator(DashiconDecorator)
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

